import { ITokenService } from './ITokenService';
import fetch from 'node-fetch';

export class MetadataTokenService implements ITokenService {
    private readonly url: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private readonly opts: { headers: { 'Metadata-Flavor': string } };
    private token?: string;

    constructor() {
        this.url =
            'http://169.254.169.254/computeMetadata/v1/instance/service-accounts/default/token';
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.opts = { headers: { 'Metadata-Flavor': 'Google' } };
    }

    async getToken(): Promise<string> {
        if (!this.token) {
            await this.initialize();
            return this.token!;
        } else {
            return this.token;
        }
    }

    private async fetchToken(): Promise<string> {
        const res = await fetch(this.url, this.opts);
        if (!res.ok) {
            throw new Error(
                `failed to fetch token from metadata service: ${res.status} ${res.statusText}`
            );
        }
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const data = (await res.json()) as { access_token: string };
        return data.access_token;
    }

    private async initialize() {
        if (this.token) {
            return;
        }
        let lastError = null;
        for (let i = 0; i < 5; i++) {
            try {
                this.token = await this.fetchToken();
                break;
            } catch (e) {
                lastError = e;
            }
        }
        if (!this.token) {
            throw new Error(
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                `failed to fetch token from metadata service: ${lastError}`
            );
        }
        setInterval(() => {
            this.fetchToken()
                .then((token) => {
                    this.token = token;
                })
                .catch(() => {
                    //
                });
        }, 30000);
    }
}
