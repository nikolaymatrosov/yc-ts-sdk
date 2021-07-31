import fetch from 'node-fetch';
import { ITokenService } from './ITokenService';

export class MetadataTokenService implements ITokenService {
    private readonly _url: string;
    private readonly _opts: { headers: { 'Metadata-Flavor': string } };
    private _token?: string;

    constructor() {
        this._url =
            'http://169.254.169.254/computeMetadata/v1/instance/service-accounts/default/token';
        this._opts = { headers: { 'Metadata-Flavor': 'Google' } };
    }

    async getToken(): Promise<string> {
        if (!this._token) {
            await this._initialize();
            return this._token!;
        } else {
            return this._token;
        }
    }

    private async _fetchToken() {
        const res = await fetch(this._url, this._opts);
        if (!res.ok) {
            throw new Error(
                `failed to fetch token from metadata service: ${res.status} ${res.statusText}`,
            );
        }
        const data = await res.json();
        return data.access_token;
    }

    private async _initialize() {
        if (this._token) {
            return;
        }
        let lastError = null;
        for (let i = 0; i < 5; i++) {
            try {
                this._token = await this._fetchToken();
                break;
            } catch (e) {
                lastError = e;
            }
        }
        if (!this._token) {
            throw new Error(
                `failed to fetch token from metadata service: ${lastError}`,
            );
        }
        setInterval(() => {
            this._fetchToken()
                .then((token) => {
                    this._token = token;
                })
        }, 30000);
    }
}
