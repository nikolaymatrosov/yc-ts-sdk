export declare class EndpointResolver {
    private endpoints;
    constructor();
    updateEndpointList(cloudApiEndpoint: string): Promise<void>;
    resolve(endpointId: string): string;
}
