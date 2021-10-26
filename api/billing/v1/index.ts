import { BillingAccountServiceService } from 'cloud/billing/v1/billing_account_service';
import { BudgetServiceService } from 'cloud/billing/v1/budget_service';
import { CustomerServiceService } from 'cloud/billing/v1/customer_service';
import { ServiceServiceService } from 'cloud/billing/v1/service_service';
import { SkuServiceService } from 'cloud/billing/v1/sku_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src/index';

export const BillingAccountServiceDef: SdkServiceDefinition<
    typeof BillingAccountServiceService
> = {
    ...BillingAccountServiceService,
    __endpointId: 'billing',
};

export function BillingAccountService(
    session?: Session
): Client<typeof BillingAccountServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(BillingAccountServiceDef);
}

export const BudgetServiceDef: SdkServiceDefinition<
    typeof BudgetServiceService
> = {
    ...BudgetServiceService,
    __endpointId: 'billing',
};

export function BudgetService(
    session?: Session
): Client<typeof BudgetServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(BudgetServiceDef);
}

export const CustomerServiceDef: SdkServiceDefinition<
    typeof CustomerServiceService
> = {
    ...CustomerServiceService,
    __endpointId: 'billing',
};

export function CustomerService(
    session?: Session
): Client<typeof CustomerServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(CustomerServiceDef);
}

export const ServiceServiceDef: SdkServiceDefinition<
    typeof ServiceServiceService
> = {
    ...ServiceServiceService,
    __endpointId: 'billing',
};

export function ServiceService(
    session?: Session
): Client<typeof ServiceServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ServiceServiceDef);
}

export const SkuServiceDef: SdkServiceDefinition<typeof SkuServiceService> = {
    ...SkuServiceService,
    __endpointId: 'billing',
};

export function SkuService(
    session?: Session
): Client<typeof SkuServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(SkuServiceDef);
}
