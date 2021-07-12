export declare class EndpointResolver {
    private __endpoints;
    constructor();
    updateEndpointList(cloudApiEndpoint: string): Promise<void>;
    resolve(endpointId: string): string;
}
