"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkuService = exports.SkuServiceDef = exports.ServiceService = exports.ServiceServiceDef = exports.CustomerService = exports.CustomerServiceDef = exports.BudgetService = exports.BudgetServiceDef = exports.BillingAccountService = exports.BillingAccountServiceDef = void 0;
const billing_account_service_1 = require("../../../generated/yandex/cloud/billing/v1/billing_account_service");
const budget_service_1 = require("../../../generated/yandex/cloud/billing/v1/budget_service");
const customer_service_1 = require("../../../generated/yandex/cloud/billing/v1/customer_service");
const service_service_1 = require("../../../generated/yandex/cloud/billing/v1/service_service");
const sku_service_1 = require("../../../generated/yandex/cloud/billing/v1/sku_service");
const index_1 = require("../../../src/index");
exports.BillingAccountServiceDef = {
    ...billing_account_service_1.BillingAccountServiceService,
    __endpointId: 'billing',
};
function BillingAccountService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.BillingAccountServiceDef);
}
exports.BillingAccountService = BillingAccountService;
exports.BudgetServiceDef = {
    ...budget_service_1.BudgetServiceService,
    __endpointId: 'billing',
};
function BudgetService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.BudgetServiceDef);
}
exports.BudgetService = BudgetService;
exports.CustomerServiceDef = {
    ...customer_service_1.CustomerServiceService,
    __endpointId: 'billing',
};
function CustomerService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.CustomerServiceDef);
}
exports.CustomerService = CustomerService;
exports.ServiceServiceDef = {
    ...service_service_1.ServiceServiceService,
    __endpointId: 'billing',
};
function ServiceService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.ServiceServiceDef);
}
exports.ServiceService = ServiceService;
exports.SkuServiceDef = {
    ...sku_service_1.SkuServiceService,
    __endpointId: 'billing',
};
function SkuService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.SkuServiceDef);
}
exports.SkuService = SkuService;
