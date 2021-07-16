import { AddressServiceService } from '../../../generated/yandex/cloud/vpc/v1/address_service';
import { NetworkServiceService } from '../../../generated/yandex/cloud/vpc/v1/network_service';
import { RouteTableServiceService } from '../../../generated/yandex/cloud/vpc/v1/route_table_service';
import { SecurityGroupServiceService } from '../../../generated/yandex/cloud/vpc/v1/security_group_service';
import { SubnetServiceService } from '../../../generated/yandex/cloud/vpc/v1/subnet_service';
import { Session } from '../../../src/index';
export const AddressServiceDef = {
    ...AddressServiceService,
    __endpointId: 'vpc',
};
export function AddressService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(AddressServiceDef);
}
export const NetworkServiceDef = {
    ...NetworkServiceService,
    __endpointId: 'vpc',
};
export function NetworkService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(NetworkServiceDef);
}
export const RouteTableServiceDef = {
    ...RouteTableServiceService,
    __endpointId: 'vpc',
};
export function RouteTableService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(RouteTableServiceDef);
}
export const SecurityGroupServiceDef = {
    ...SecurityGroupServiceService,
    __endpointId: 'vpc',
};
export function SecurityGroupService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(SecurityGroupServiceDef);
}
export const SubnetServiceDef = {
    ...SubnetServiceService,
    __endpointId: 'vpc',
};
export function SubnetService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(SubnetServiceDef);
}
