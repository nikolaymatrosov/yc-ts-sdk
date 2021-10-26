import { BillingAccountServiceService } from '../../../generated/yandex/cloud/billing/v1/billing_account_service';
import { BudgetServiceService } from '../../../generated/yandex/cloud/billing/v1/budget_service';
import { CustomerServiceService } from '../../../generated/yandex/cloud/billing/v1/customer_service';
import { ServiceServiceService } from '../../../generated/yandex/cloud/billing/v1/service_service';
import { SkuServiceService } from '../../../generated/yandex/cloud/billing/v1/sku_service';
import { Session } from '../../../src/index';
export const BillingAccountServiceDef = {
    ...BillingAccountServiceService,
    __endpointId: 'billing',
};
export function BillingAccountService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(BillingAccountServiceDef);
}
export const BudgetServiceDef = {
    ...BudgetServiceService,
    __endpointId: 'billing',
};
export function BudgetService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(BudgetServiceDef);
}
export const CustomerServiceDef = {
    ...CustomerServiceService,
    __endpointId: 'billing',
};
export function CustomerService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(CustomerServiceDef);
}
export const ServiceServiceDef = {
    ...ServiceServiceService,
    __endpointId: 'billing',
};
export function ServiceService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ServiceServiceDef);
}
export const SkuServiceDef = {
    ...SkuServiceService,
    __endpointId: 'billing',
};
export function SkuService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(SkuServiceDef);
}
