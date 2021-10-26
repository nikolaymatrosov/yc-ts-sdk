import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.billing.v1";
export declare enum BudgetStatus {
    BUDGET_STATUS_UNSPECIFIED = 0,
    /** CREATING - The budget is being created. */
    CREATING = 1,
    /** ACTIVE - The budget is active. */
    ACTIVE = 2,
    /** FINISHED - The budget is finished. */
    FINISHED = 3,
    UNRECOGNIZED = -1
}
export declare function budgetStatusFromJSON(object: any): BudgetStatus;
export declare function budgetStatusToJSON(object: BudgetStatus): string;
export declare enum ResetPeriodType {
    RESET_PERIOD_TYPE_UNSPECIFIED = 0,
    /** MONTHLY - Reset budget every month. */
    MONTHLY = 1,
    /** QUARTER - Reset budget every quarter. */
    QUARTER = 2,
    /** ANNUALLY - Reset budget every year. */
    ANNUALLY = 3,
    UNRECOGNIZED = -1
}
export declare function resetPeriodTypeFromJSON(object: any): ResetPeriodType;
export declare function resetPeriodTypeToJSON(object: ResetPeriodType): string;
/** Define the unit of the [ThesholdRule.amount]. */
export declare enum ThresholdType {
    THRESHOLD_TYPE_UNSPECIFIED = 0,
    /** PERCENT - Percent. */
    PERCENT = 1,
    /** AMOUNT - The same as budget amount. */
    AMOUNT = 2,
    UNRECOGNIZED = -1
}
export declare function thresholdTypeFromJSON(object: any): ThresholdType;
export declare function thresholdTypeToJSON(object: ThresholdType): string;
/** A Budget resource. For more information, see [/docs/billing/concepts/budget]. */
export interface Budget {
    /** ID of the budget. */
    id: string;
    /** Name of the budget. */
    name: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /** ID of the billing account that the budget belongs to. */
    billingAccountId: string;
    /** Status of the budget. */
    status: BudgetStatus;
    /** Cost budget specification. */
    costBudget: CostBudgetSpec | undefined;
    /** Expense budget specification. */
    expenseBudget: ExpenseBudgetSpec | undefined;
    /** Balance budget specification. */
    balanceBudget: BalanceBudgetSpec | undefined;
}
/** Cost budget specification describes budget that can be used to control cost of cloud resources usage. */
export interface CostBudgetSpec {
    /** Max cost threshold of the budget. Amount currency is the same as corresponding [yandex.cloud.billing.v1.BillingAccount.currency]. */
    amount: string;
    /**
     * IDs of the [yandex.cloud.iam.v1.UserAccount].
     * Specified users will be be notified if the budget exceeds.
     */
    notificationUserAccountIds: string[];
    /**
     * List of the [ThresholdRule].
     * Rules define intermediate cost thresholds of the budget.
     */
    thresholdRules: ThresholdRule[];
    /** Filter that can be used for specific resources selection. Only consumption cost of selected resources are used for the budget calculation. */
    filter: ConsumptionFilter | undefined;
    /**
     * Periodic start type that resets budget after specified period is finished.
     * First time budget is calculated in the current period, i.e. current month, quarter or year.
     */
    resetPeriod: ResetPeriodType | undefined;
    /**
     * Custom start date of the budget.
     * Must be the first day of a month and must be formatted like YYYY-MM-DD.
     */
    startDate: string | undefined;
    /**
     * End date of the budget.
     * Must be the last day of a month and must be formatted like YYYY-MM-DD.
     */
    endDate: string;
}
/** Expense budget specification describes budget that can be used to control expense of cloud resources usage. */
export interface ExpenseBudgetSpec {
    /** Max expense threshold of the budget. Amount currency is the same as corresponding [yandex.cloud.billing.v1.BillingAccount.currency]. */
    amount: string;
    /**
     * IDs of the [yandex.cloud.iam.v1.UserAccount].
     * Specified users will be be notified if the budget exceeds.
     */
    notificationUserAccountIds: string[];
    /**
     * List of the [ThresholdRule].
     * Rules define intermediate expense thresholds of the budget.
     */
    thresholdRules: ThresholdRule[];
    /** Filter that can be used for specific resources selection. Only consumption expense of selected resources are used for the budget calculation. */
    filter: ConsumptionFilter | undefined;
    /**
     * Periodic start type that resets budget after specified period is finished.
     * First time budget is calculated in the current period, i.e. current month, quarter or year.
     */
    resetPeriod: ResetPeriodType | undefined;
    /**
     * Custom start date of the budget.
     * Must be the first day of a month and must be formatted like YYYY-MM-DD.
     */
    startDate: string | undefined;
    /**
     * End date of the budget.
     * Must be the last day of a month and must be formatted like YYYY-MM-DD.
     */
    endDate: string;
}
/** Balance budget specification describes budget that can be used to control [yandex.cloud.billing.v1.BillingAccount.balance]. */
export interface BalanceBudgetSpec {
    /** Max balance threshold of the budget. Amount currency is the same as corresponding [yandex.cloud.billing.v1.BillingAccount.currency]. */
    amount: string;
    /**
     * IDs of the [yandex.cloud.iam.v1.UserAccount].
     * Specified users will be be notified if the budget exceeds.
     */
    notificationUserAccountIds: string[];
    /**
     * List of the [ThresholdRule].
     * Rules define intermediate balance thresholds of the budget.
     */
    thresholdRules: ThresholdRule[];
    /**
     * Start_date of the budget.
     * Must be the first day of a month and must be formatted like YYYY-MM-DD.
     */
    startDate: string;
    /**
     * End date of the budget.
     * Must be the last day of a month and must be formatted like YYYY-MM-DD.
     */
    endDate: string;
}
/** Filter that can be used for specific resources selection. */
export interface ConsumptionFilter {
    /**
     * IDs of the [yandex.cloud.billing.v1.Service].
     * Only consumption of resources corresponding to the given services is used for the budget calculation.
     * Empty sequence means no services filters.
     */
    serviceIds: string[];
    /**
     * Cloud and folders consumption filter.
     * Only consumption within specified clouds and folders is used for the budget calculation.
     * Empty sequence means no cloud and folders filters.
     */
    cloudFoldersFilters: CloudFoldersConsumptionFilter[];
}
/** Filter that can be used for specific cloud and its folders selection. */
export interface CloudFoldersConsumptionFilter {
    /**
     * ID of the [yandex.cloud.resourcemanager.v1.Cloud].
     * Only consumption within specified cloud is used for the budget calculation.
     */
    cloudId: string;
    /**
     * IDs of the [yandex.cloud.resourcemanager.v1.Folder].
     * Only consumption within specified folders of the given cloud is used for the budget calculation.
     * Empty sequence means no folders filters and the whole cloud consumption will be used.
     */
    folderIds: string[];
}
/** Rules that define intermediate cost thresholds of the budget. */
export interface ThresholdRule {
    /** Type of the rule. */
    type: ThresholdType;
    /**
     * Amount of the rule.
     *  * Must be less than 100 if type is PERCENT.
     *  * Must be less than budget's amount if type is AMOUNT.
     */
    amount: string;
    /**
     * IDs of the [yandex.cloud.iam.v1.UserAccount].
     * Specified users will be be notified if the threshold exceeds.
     */
    notificationUserAccountIds: string[];
}
export declare const Budget: {
    encode(message: Budget, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Budget;
    fromJSON(object: any): Budget;
    toJSON(message: Budget): unknown;
    fromPartial(object: DeepPartial<Budget>): Budget;
};
export declare const CostBudgetSpec: {
    encode(message: CostBudgetSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CostBudgetSpec;
    fromJSON(object: any): CostBudgetSpec;
    toJSON(message: CostBudgetSpec): unknown;
    fromPartial(object: DeepPartial<CostBudgetSpec>): CostBudgetSpec;
};
export declare const ExpenseBudgetSpec: {
    encode(message: ExpenseBudgetSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExpenseBudgetSpec;
    fromJSON(object: any): ExpenseBudgetSpec;
    toJSON(message: ExpenseBudgetSpec): unknown;
    fromPartial(object: DeepPartial<ExpenseBudgetSpec>): ExpenseBudgetSpec;
};
export declare const BalanceBudgetSpec: {
    encode(message: BalanceBudgetSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BalanceBudgetSpec;
    fromJSON(object: any): BalanceBudgetSpec;
    toJSON(message: BalanceBudgetSpec): unknown;
    fromPartial(object: DeepPartial<BalanceBudgetSpec>): BalanceBudgetSpec;
};
export declare const ConsumptionFilter: {
    encode(message: ConsumptionFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConsumptionFilter;
    fromJSON(object: any): ConsumptionFilter;
    toJSON(message: ConsumptionFilter): unknown;
    fromPartial(object: DeepPartial<ConsumptionFilter>): ConsumptionFilter;
};
export declare const CloudFoldersConsumptionFilter: {
    encode(message: CloudFoldersConsumptionFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CloudFoldersConsumptionFilter;
    fromJSON(object: any): CloudFoldersConsumptionFilter;
    toJSON(message: CloudFoldersConsumptionFilter): unknown;
    fromPartial(object: DeepPartial<CloudFoldersConsumptionFilter>): CloudFoldersConsumptionFilter;
};
export declare const ThresholdRule: {
    encode(message: ThresholdRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ThresholdRule;
    fromJSON(object: any): ThresholdRule;
    toJSON(message: ThresholdRule): unknown;
    fromPartial(object: DeepPartial<ThresholdRule>): ThresholdRule;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
