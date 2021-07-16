import { AddressServiceService } from 'cloud/vpc/v1/address_service';
import { NetworkServiceService } from 'cloud/vpc/v1/network_service';
import { RouteTableServiceService } from 'cloud/vpc/v1/route_table_service';
import { SecurityGroupServiceService } from 'cloud/vpc/v1/security_group_service';
import { SubnetServiceService } from 'cloud/vpc/v1/subnet_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src/index';

export const AddressServiceDef: SdkServiceDefinition<
    typeof AddressServiceService
> = {
    ...AddressServiceService,
    __endpointId: 'vpc',
};

export function AddressService(
    session?: Session
): Client<typeof AddressServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(AddressServiceDef);
}

export const NetworkServiceDef: SdkServiceDefinition<
    typeof NetworkServiceService
> = {
    ...NetworkServiceService,
    __endpointId: 'vpc',
};

export function NetworkService(
    session?: Session
): Client<typeof NetworkServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(NetworkServiceDef);
}

export const RouteTableServiceDef: SdkServiceDefinition<
    typeof RouteTableServiceService
> = {
    ...RouteTableServiceService,
    __endpointId: 'vpc',
};

export function RouteTableService(
    session?: Session
): Client<typeof RouteTableServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(RouteTableServiceDef);
}

export const SecurityGroupServiceDef: SdkServiceDefinition<
    typeof SecurityGroupServiceService
> = {
    ...SecurityGroupServiceService,
    __endpointId: 'vpc',
};

export function SecurityGroupService(
    session?: Session
): Client<typeof SecurityGroupServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(SecurityGroupServiceDef);
}

export const SubnetServiceDef: SdkServiceDefinition<
    typeof SubnetServiceService
> = {
    ...SubnetServiceService,
    __endpointId: 'vpc',
};

export function SubnetService(
    session?: Session
): Client<typeof SubnetServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(SubnetServiceDef);
}
