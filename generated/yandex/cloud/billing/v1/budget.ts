/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.billing.v1';

export enum BudgetStatus {
    BUDGET_STATUS_UNSPECIFIED = 0,
    /** CREATING - The budget is being created. */
    CREATING = 1,
    /** ACTIVE - The budget is active. */
    ACTIVE = 2,
    /** FINISHED - The budget is finished. */
    FINISHED = 3,
    UNRECOGNIZED = -1,
}

export function budgetStatusFromJSON(object: any): BudgetStatus {
    switch (object) {
        case 0:
        case 'BUDGET_STATUS_UNSPECIFIED':
            return BudgetStatus.BUDGET_STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return BudgetStatus.CREATING;
        case 2:
        case 'ACTIVE':
            return BudgetStatus.ACTIVE;
        case 3:
        case 'FINISHED':
            return BudgetStatus.FINISHED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return BudgetStatus.UNRECOGNIZED;
    }
}

export function budgetStatusToJSON(object: BudgetStatus): string {
    switch (object) {
        case BudgetStatus.BUDGET_STATUS_UNSPECIFIED:
            return 'BUDGET_STATUS_UNSPECIFIED';
        case BudgetStatus.CREATING:
            return 'CREATING';
        case BudgetStatus.ACTIVE:
            return 'ACTIVE';
        case BudgetStatus.FINISHED:
            return 'FINISHED';
        default:
            return 'UNKNOWN';
    }
}

export enum ResetPeriodType {
    RESET_PERIOD_TYPE_UNSPECIFIED = 0,
    /** MONTHLY - Reset budget every month. */
    MONTHLY = 1,
    /** QUARTER - Reset budget every quarter. */
    QUARTER = 2,
    /** ANNUALLY - Reset budget every year. */
    ANNUALLY = 3,
    UNRECOGNIZED = -1,
}

export function resetPeriodTypeFromJSON(object: any): ResetPeriodType {
    switch (object) {
        case 0:
        case 'RESET_PERIOD_TYPE_UNSPECIFIED':
            return ResetPeriodType.RESET_PERIOD_TYPE_UNSPECIFIED;
        case 1:
        case 'MONTHLY':
            return ResetPeriodType.MONTHLY;
        case 2:
        case 'QUARTER':
            return ResetPeriodType.QUARTER;
        case 3:
        case 'ANNUALLY':
            return ResetPeriodType.ANNUALLY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ResetPeriodType.UNRECOGNIZED;
    }
}

export function resetPeriodTypeToJSON(object: ResetPeriodType): string {
    switch (object) {
        case ResetPeriodType.RESET_PERIOD_TYPE_UNSPECIFIED:
            return 'RESET_PERIOD_TYPE_UNSPECIFIED';
        case ResetPeriodType.MONTHLY:
            return 'MONTHLY';
        case ResetPeriodType.QUARTER:
            return 'QUARTER';
        case ResetPeriodType.ANNUALLY:
            return 'ANNUALLY';
        default:
            return 'UNKNOWN';
    }
}

/** Define the unit of the [ThesholdRule.amount]. */
export enum ThresholdType {
    THRESHOLD_TYPE_UNSPECIFIED = 0,
    /** PERCENT - Percent. */
    PERCENT = 1,
    /** AMOUNT - The same as budget amount. */
    AMOUNT = 2,
    UNRECOGNIZED = -1,
}

export function thresholdTypeFromJSON(object: any): ThresholdType {
    switch (object) {
        case 0:
        case 'THRESHOLD_TYPE_UNSPECIFIED':
            return ThresholdType.THRESHOLD_TYPE_UNSPECIFIED;
        case 1:
        case 'PERCENT':
            return ThresholdType.PERCENT;
        case 2:
        case 'AMOUNT':
            return ThresholdType.AMOUNT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ThresholdType.UNRECOGNIZED;
    }
}

export function thresholdTypeToJSON(object: ThresholdType): string {
    switch (object) {
        case ThresholdType.THRESHOLD_TYPE_UNSPECIFIED:
            return 'THRESHOLD_TYPE_UNSPECIFIED';
        case ThresholdType.PERCENT:
            return 'PERCENT';
        case ThresholdType.AMOUNT:
            return 'AMOUNT';
        default:
            return 'UNKNOWN';
    }
}

/** A Budget resource. For more information, see [/docs/billing/concepts/budget]. */
export interface Budget {
    $type: 'yandex.cloud.billing.v1.Budget';
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
    $type: 'yandex.cloud.billing.v1.CostBudgetSpec';
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
    $type: 'yandex.cloud.billing.v1.ExpenseBudgetSpec';
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
    $type: 'yandex.cloud.billing.v1.BalanceBudgetSpec';
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
    $type: 'yandex.cloud.billing.v1.ConsumptionFilter';
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
    $type: 'yandex.cloud.billing.v1.CloudFoldersConsumptionFilter';
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
    $type: 'yandex.cloud.billing.v1.ThresholdRule';
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

const baseBudget: object = {
    $type: 'yandex.cloud.billing.v1.Budget',
    id: '',
    name: '',
    billingAccountId: '',
    status: 0,
};

export const Budget = {
    $type: 'yandex.cloud.billing.v1.Budget' as const,

    encode(
        message: Budget,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.createdAt),
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.billingAccountId !== '') {
            writer.uint32(34).string(message.billingAccountId);
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.costBudget !== undefined) {
            CostBudgetSpec.encode(
                message.costBudget,
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.expenseBudget !== undefined) {
            ExpenseBudgetSpec.encode(
                message.expenseBudget,
                writer.uint32(58).fork()
            ).ldelim();
        }
        if (message.balanceBudget !== undefined) {
            BalanceBudgetSpec.encode(
                message.balanceBudget,
                writer.uint32(66).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Budget {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBudget } as Budget;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.billingAccountId = reader.string();
                    break;
                case 5:
                    message.status = reader.int32() as any;
                    break;
                case 6:
                    message.costBudget = CostBudgetSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 7:
                    message.expenseBudget = ExpenseBudgetSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 8:
                    message.balanceBudget = BalanceBudgetSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Budget {
        const message = { ...baseBudget } as Budget;
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        } else {
            message.createdAt = undefined;
        }
        if (
            object.billingAccountId !== undefined &&
            object.billingAccountId !== null
        ) {
            message.billingAccountId = String(object.billingAccountId);
        } else {
            message.billingAccountId = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = budgetStatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (object.costBudget !== undefined && object.costBudget !== null) {
            message.costBudget = CostBudgetSpec.fromJSON(object.costBudget);
        } else {
            message.costBudget = undefined;
        }
        if (
            object.expenseBudget !== undefined &&
            object.expenseBudget !== null
        ) {
            message.expenseBudget = ExpenseBudgetSpec.fromJSON(
                object.expenseBudget
            );
        } else {
            message.expenseBudget = undefined;
        }
        if (
            object.balanceBudget !== undefined &&
            object.balanceBudget !== null
        ) {
            message.balanceBudget = BalanceBudgetSpec.fromJSON(
                object.balanceBudget
            );
        } else {
            message.balanceBudget = undefined;
        }
        return message;
    },

    toJSON(message: Budget): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.billingAccountId !== undefined &&
            (obj.billingAccountId = message.billingAccountId);
        message.status !== undefined &&
            (obj.status = budgetStatusToJSON(message.status));
        message.costBudget !== undefined &&
            (obj.costBudget = message.costBudget
                ? CostBudgetSpec.toJSON(message.costBudget)
                : undefined);
        message.expenseBudget !== undefined &&
            (obj.expenseBudget = message.expenseBudget
                ? ExpenseBudgetSpec.toJSON(message.expenseBudget)
                : undefined);
        message.balanceBudget !== undefined &&
            (obj.balanceBudget = message.balanceBudget
                ? BalanceBudgetSpec.toJSON(message.balanceBudget)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Budget>): Budget {
        const message = { ...baseBudget } as Budget;
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        } else {
            message.createdAt = undefined;
        }
        if (
            object.billingAccountId !== undefined &&
            object.billingAccountId !== null
        ) {
            message.billingAccountId = object.billingAccountId;
        } else {
            message.billingAccountId = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        if (object.costBudget !== undefined && object.costBudget !== null) {
            message.costBudget = CostBudgetSpec.fromPartial(object.costBudget);
        } else {
            message.costBudget = undefined;
        }
        if (
            object.expenseBudget !== undefined &&
            object.expenseBudget !== null
        ) {
            message.expenseBudget = ExpenseBudgetSpec.fromPartial(
                object.expenseBudget
            );
        } else {
            message.expenseBudget = undefined;
        }
        if (
            object.balanceBudget !== undefined &&
            object.balanceBudget !== null
        ) {
            message.balanceBudget = BalanceBudgetSpec.fromPartial(
                object.balanceBudget
            );
        } else {
            message.balanceBudget = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(Budget.$type, Budget);

const baseCostBudgetSpec: object = {
    $type: 'yandex.cloud.billing.v1.CostBudgetSpec',
    amount: '',
    notificationUserAccountIds: '',
    endDate: '',
};

export const CostBudgetSpec = {
    $type: 'yandex.cloud.billing.v1.CostBudgetSpec' as const,

    encode(
        message: CostBudgetSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.amount !== '') {
            writer.uint32(10).string(message.amount);
        }
        for (const v of message.notificationUserAccountIds) {
            writer.uint32(18).string(v!);
        }
        for (const v of message.thresholdRules) {
            ThresholdRule.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        if (message.filter !== undefined) {
            ConsumptionFilter.encode(
                message.filter,
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.resetPeriod !== undefined) {
            writer.uint32(40).int32(message.resetPeriod);
        }
        if (message.startDate !== undefined) {
            writer.uint32(50).string(message.startDate);
        }
        if (message.endDate !== '') {
            writer.uint32(58).string(message.endDate);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CostBudgetSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCostBudgetSpec } as CostBudgetSpec;
        message.notificationUserAccountIds = [];
        message.thresholdRules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.string();
                    break;
                case 2:
                    message.notificationUserAccountIds.push(reader.string());
                    break;
                case 3:
                    message.thresholdRules.push(
                        ThresholdRule.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.filter = ConsumptionFilter.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 5:
                    message.resetPeriod = reader.int32() as any;
                    break;
                case 6:
                    message.startDate = reader.string();
                    break;
                case 7:
                    message.endDate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CostBudgetSpec {
        const message = { ...baseCostBudgetSpec } as CostBudgetSpec;
        message.notificationUserAccountIds = [];
        message.thresholdRules = [];
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        } else {
            message.amount = '';
        }
        if (
            object.notificationUserAccountIds !== undefined &&
            object.notificationUserAccountIds !== null
        ) {
            for (const e of object.notificationUserAccountIds) {
                message.notificationUserAccountIds.push(String(e));
            }
        }
        if (
            object.thresholdRules !== undefined &&
            object.thresholdRules !== null
        ) {
            for (const e of object.thresholdRules) {
                message.thresholdRules.push(ThresholdRule.fromJSON(e));
            }
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = ConsumptionFilter.fromJSON(object.filter);
        } else {
            message.filter = undefined;
        }
        if (object.resetPeriod !== undefined && object.resetPeriod !== null) {
            message.resetPeriod = resetPeriodTypeFromJSON(object.resetPeriod);
        } else {
            message.resetPeriod = undefined;
        }
        if (object.startDate !== undefined && object.startDate !== null) {
            message.startDate = String(object.startDate);
        } else {
            message.startDate = undefined;
        }
        if (object.endDate !== undefined && object.endDate !== null) {
            message.endDate = String(object.endDate);
        } else {
            message.endDate = '';
        }
        return message;
    },

    toJSON(message: CostBudgetSpec): unknown {
        const obj: any = {};
        message.amount !== undefined && (obj.amount = message.amount);
        if (message.notificationUserAccountIds) {
            obj.notificationUserAccountIds =
                message.notificationUserAccountIds.map((e) => e);
        } else {
            obj.notificationUserAccountIds = [];
        }
        if (message.thresholdRules) {
            obj.thresholdRules = message.thresholdRules.map((e) =>
                e ? ThresholdRule.toJSON(e) : undefined
            );
        } else {
            obj.thresholdRules = [];
        }
        message.filter !== undefined &&
            (obj.filter = message.filter
                ? ConsumptionFilter.toJSON(message.filter)
                : undefined);
        message.resetPeriod !== undefined &&
            (obj.resetPeriod =
                message.resetPeriod !== undefined
                    ? resetPeriodTypeToJSON(message.resetPeriod)
                    : undefined);
        message.startDate !== undefined && (obj.startDate = message.startDate);
        message.endDate !== undefined && (obj.endDate = message.endDate);
        return obj;
    },

    fromPartial(object: DeepPartial<CostBudgetSpec>): CostBudgetSpec {
        const message = { ...baseCostBudgetSpec } as CostBudgetSpec;
        message.notificationUserAccountIds = [];
        message.thresholdRules = [];
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        } else {
            message.amount = '';
        }
        if (
            object.notificationUserAccountIds !== undefined &&
            object.notificationUserAccountIds !== null
        ) {
            for (const e of object.notificationUserAccountIds) {
                message.notificationUserAccountIds.push(e);
            }
        }
        if (
            object.thresholdRules !== undefined &&
            object.thresholdRules !== null
        ) {
            for (const e of object.thresholdRules) {
                message.thresholdRules.push(ThresholdRule.fromPartial(e));
            }
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = ConsumptionFilter.fromPartial(object.filter);
        } else {
            message.filter = undefined;
        }
        if (object.resetPeriod !== undefined && object.resetPeriod !== null) {
            message.resetPeriod = object.resetPeriod;
        } else {
            message.resetPeriod = undefined;
        }
        if (object.startDate !== undefined && object.startDate !== null) {
            message.startDate = object.startDate;
        } else {
            message.startDate = undefined;
        }
        if (object.endDate !== undefined && object.endDate !== null) {
            message.endDate = object.endDate;
        } else {
            message.endDate = '';
        }
        return message;
    },
};

messageTypeRegistry.set(CostBudgetSpec.$type, CostBudgetSpec);

const baseExpenseBudgetSpec: object = {
    $type: 'yandex.cloud.billing.v1.ExpenseBudgetSpec',
    amount: '',
    notificationUserAccountIds: '',
    endDate: '',
};

export const ExpenseBudgetSpec = {
    $type: 'yandex.cloud.billing.v1.ExpenseBudgetSpec' as const,

    encode(
        message: ExpenseBudgetSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.amount !== '') {
            writer.uint32(10).string(message.amount);
        }
        for (const v of message.notificationUserAccountIds) {
            writer.uint32(18).string(v!);
        }
        for (const v of message.thresholdRules) {
            ThresholdRule.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        if (message.filter !== undefined) {
            ConsumptionFilter.encode(
                message.filter,
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.resetPeriod !== undefined) {
            writer.uint32(40).int32(message.resetPeriod);
        }
        if (message.startDate !== undefined) {
            writer.uint32(50).string(message.startDate);
        }
        if (message.endDate !== '') {
            writer.uint32(58).string(message.endDate);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ExpenseBudgetSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExpenseBudgetSpec } as ExpenseBudgetSpec;
        message.notificationUserAccountIds = [];
        message.thresholdRules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.string();
                    break;
                case 2:
                    message.notificationUserAccountIds.push(reader.string());
                    break;
                case 3:
                    message.thresholdRules.push(
                        ThresholdRule.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.filter = ConsumptionFilter.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 5:
                    message.resetPeriod = reader.int32() as any;
                    break;
                case 6:
                    message.startDate = reader.string();
                    break;
                case 7:
                    message.endDate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ExpenseBudgetSpec {
        const message = { ...baseExpenseBudgetSpec } as ExpenseBudgetSpec;
        message.notificationUserAccountIds = [];
        message.thresholdRules = [];
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        } else {
            message.amount = '';
        }
        if (
            object.notificationUserAccountIds !== undefined &&
            object.notificationUserAccountIds !== null
        ) {
            for (const e of object.notificationUserAccountIds) {
                message.notificationUserAccountIds.push(String(e));
            }
        }
        if (
            object.thresholdRules !== undefined &&
            object.thresholdRules !== null
        ) {
            for (const e of object.thresholdRules) {
                message.thresholdRules.push(ThresholdRule.fromJSON(e));
            }
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = ConsumptionFilter.fromJSON(object.filter);
        } else {
            message.filter = undefined;
        }
        if (object.resetPeriod !== undefined && object.resetPeriod !== null) {
            message.resetPeriod = resetPeriodTypeFromJSON(object.resetPeriod);
        } else {
            message.resetPeriod = undefined;
        }
        if (object.startDate !== undefined && object.startDate !== null) {
            message.startDate = String(object.startDate);
        } else {
            message.startDate = undefined;
        }
        if (object.endDate !== undefined && object.endDate !== null) {
            message.endDate = String(object.endDate);
        } else {
            message.endDate = '';
        }
        return message;
    },

    toJSON(message: ExpenseBudgetSpec): unknown {
        const obj: any = {};
        message.amount !== undefined && (obj.amount = message.amount);
        if (message.notificationUserAccountIds) {
            obj.notificationUserAccountIds =
                message.notificationUserAccountIds.map((e) => e);
        } else {
            obj.notificationUserAccountIds = [];
        }
        if (message.thresholdRules) {
            obj.thresholdRules = message.thresholdRules.map((e) =>
                e ? ThresholdRule.toJSON(e) : undefined
            );
        } else {
            obj.thresholdRules = [];
        }
        message.filter !== undefined &&
            (obj.filter = message.filter
                ? ConsumptionFilter.toJSON(message.filter)
                : undefined);
        message.resetPeriod !== undefined &&
            (obj.resetPeriod =
                message.resetPeriod !== undefined
                    ? resetPeriodTypeToJSON(message.resetPeriod)
                    : undefined);
        message.startDate !== undefined && (obj.startDate = message.startDate);
        message.endDate !== undefined && (obj.endDate = message.endDate);
        return obj;
    },

    fromPartial(object: DeepPartial<ExpenseBudgetSpec>): ExpenseBudgetSpec {
        const message = { ...baseExpenseBudgetSpec } as ExpenseBudgetSpec;
        message.notificationUserAccountIds = [];
        message.thresholdRules = [];
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        } else {
            message.amount = '';
        }
        if (
            object.notificationUserAccountIds !== undefined &&
            object.notificationUserAccountIds !== null
        ) {
            for (const e of object.notificationUserAccountIds) {
                message.notificationUserAccountIds.push(e);
            }
        }
        if (
            object.thresholdRules !== undefined &&
            object.thresholdRules !== null
        ) {
            for (const e of object.thresholdRules) {
                message.thresholdRules.push(ThresholdRule.fromPartial(e));
            }
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = ConsumptionFilter.fromPartial(object.filter);
        } else {
            message.filter = undefined;
        }
        if (object.resetPeriod !== undefined && object.resetPeriod !== null) {
            message.resetPeriod = object.resetPeriod;
        } else {
            message.resetPeriod = undefined;
        }
        if (object.startDate !== undefined && object.startDate !== null) {
            message.startDate = object.startDate;
        } else {
            message.startDate = undefined;
        }
        if (object.endDate !== undefined && object.endDate !== null) {
            message.endDate = object.endDate;
        } else {
            message.endDate = '';
        }
        return message;
    },
};

messageTypeRegistry.set(ExpenseBudgetSpec.$type, ExpenseBudgetSpec);

const baseBalanceBudgetSpec: object = {
    $type: 'yandex.cloud.billing.v1.BalanceBudgetSpec',
    amount: '',
    notificationUserAccountIds: '',
    startDate: '',
    endDate: '',
};

export const BalanceBudgetSpec = {
    $type: 'yandex.cloud.billing.v1.BalanceBudgetSpec' as const,

    encode(
        message: BalanceBudgetSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.amount !== '') {
            writer.uint32(10).string(message.amount);
        }
        for (const v of message.notificationUserAccountIds) {
            writer.uint32(18).string(v!);
        }
        for (const v of message.thresholdRules) {
            ThresholdRule.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        if (message.startDate !== '') {
            writer.uint32(34).string(message.startDate);
        }
        if (message.endDate !== '') {
            writer.uint32(42).string(message.endDate);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BalanceBudgetSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBalanceBudgetSpec } as BalanceBudgetSpec;
        message.notificationUserAccountIds = [];
        message.thresholdRules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.string();
                    break;
                case 2:
                    message.notificationUserAccountIds.push(reader.string());
                    break;
                case 3:
                    message.thresholdRules.push(
                        ThresholdRule.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.startDate = reader.string();
                    break;
                case 5:
                    message.endDate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BalanceBudgetSpec {
        const message = { ...baseBalanceBudgetSpec } as BalanceBudgetSpec;
        message.notificationUserAccountIds = [];
        message.thresholdRules = [];
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        } else {
            message.amount = '';
        }
        if (
            object.notificationUserAccountIds !== undefined &&
            object.notificationUserAccountIds !== null
        ) {
            for (const e of object.notificationUserAccountIds) {
                message.notificationUserAccountIds.push(String(e));
            }
        }
        if (
            object.thresholdRules !== undefined &&
            object.thresholdRules !== null
        ) {
            for (const e of object.thresholdRules) {
                message.thresholdRules.push(ThresholdRule.fromJSON(e));
            }
        }
        if (object.startDate !== undefined && object.startDate !== null) {
            message.startDate = String(object.startDate);
        } else {
            message.startDate = '';
        }
        if (object.endDate !== undefined && object.endDate !== null) {
            message.endDate = String(object.endDate);
        } else {
            message.endDate = '';
        }
        return message;
    },

    toJSON(message: BalanceBudgetSpec): unknown {
        const obj: any = {};
        message.amount !== undefined && (obj.amount = message.amount);
        if (message.notificationUserAccountIds) {
            obj.notificationUserAccountIds =
                message.notificationUserAccountIds.map((e) => e);
        } else {
            obj.notificationUserAccountIds = [];
        }
        if (message.thresholdRules) {
            obj.thresholdRules = message.thresholdRules.map((e) =>
                e ? ThresholdRule.toJSON(e) : undefined
            );
        } else {
            obj.thresholdRules = [];
        }
        message.startDate !== undefined && (obj.startDate = message.startDate);
        message.endDate !== undefined && (obj.endDate = message.endDate);
        return obj;
    },

    fromPartial(object: DeepPartial<BalanceBudgetSpec>): BalanceBudgetSpec {
        const message = { ...baseBalanceBudgetSpec } as BalanceBudgetSpec;
        message.notificationUserAccountIds = [];
        message.thresholdRules = [];
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        } else {
            message.amount = '';
        }
        if (
            object.notificationUserAccountIds !== undefined &&
            object.notificationUserAccountIds !== null
        ) {
            for (const e of object.notificationUserAccountIds) {
                message.notificationUserAccountIds.push(e);
            }
        }
        if (
            object.thresholdRules !== undefined &&
            object.thresholdRules !== null
        ) {
            for (const e of object.thresholdRules) {
                message.thresholdRules.push(ThresholdRule.fromPartial(e));
            }
        }
        if (object.startDate !== undefined && object.startDate !== null) {
            message.startDate = object.startDate;
        } else {
            message.startDate = '';
        }
        if (object.endDate !== undefined && object.endDate !== null) {
            message.endDate = object.endDate;
        } else {
            message.endDate = '';
        }
        return message;
    },
};

messageTypeRegistry.set(BalanceBudgetSpec.$type, BalanceBudgetSpec);

const baseConsumptionFilter: object = {
    $type: 'yandex.cloud.billing.v1.ConsumptionFilter',
    serviceIds: '',
};

export const ConsumptionFilter = {
    $type: 'yandex.cloud.billing.v1.ConsumptionFilter' as const,

    encode(
        message: ConsumptionFilter,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.serviceIds) {
            writer.uint32(10).string(v!);
        }
        for (const v of message.cloudFoldersFilters) {
            CloudFoldersConsumptionFilter.encode(
                v!,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ConsumptionFilter {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConsumptionFilter } as ConsumptionFilter;
        message.serviceIds = [];
        message.cloudFoldersFilters = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceIds.push(reader.string());
                    break;
                case 2:
                    message.cloudFoldersFilters.push(
                        CloudFoldersConsumptionFilter.decode(
                            reader,
                            reader.uint32()
                        )
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ConsumptionFilter {
        const message = { ...baseConsumptionFilter } as ConsumptionFilter;
        message.serviceIds = [];
        message.cloudFoldersFilters = [];
        if (object.serviceIds !== undefined && object.serviceIds !== null) {
            for (const e of object.serviceIds) {
                message.serviceIds.push(String(e));
            }
        }
        if (
            object.cloudFoldersFilters !== undefined &&
            object.cloudFoldersFilters !== null
        ) {
            for (const e of object.cloudFoldersFilters) {
                message.cloudFoldersFilters.push(
                    CloudFoldersConsumptionFilter.fromJSON(e)
                );
            }
        }
        return message;
    },

    toJSON(message: ConsumptionFilter): unknown {
        const obj: any = {};
        if (message.serviceIds) {
            obj.serviceIds = message.serviceIds.map((e) => e);
        } else {
            obj.serviceIds = [];
        }
        if (message.cloudFoldersFilters) {
            obj.cloudFoldersFilters = message.cloudFoldersFilters.map((e) =>
                e ? CloudFoldersConsumptionFilter.toJSON(e) : undefined
            );
        } else {
            obj.cloudFoldersFilters = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<ConsumptionFilter>): ConsumptionFilter {
        const message = { ...baseConsumptionFilter } as ConsumptionFilter;
        message.serviceIds = [];
        message.cloudFoldersFilters = [];
        if (object.serviceIds !== undefined && object.serviceIds !== null) {
            for (const e of object.serviceIds) {
                message.serviceIds.push(e);
            }
        }
        if (
            object.cloudFoldersFilters !== undefined &&
            object.cloudFoldersFilters !== null
        ) {
            for (const e of object.cloudFoldersFilters) {
                message.cloudFoldersFilters.push(
                    CloudFoldersConsumptionFilter.fromPartial(e)
                );
            }
        }
        return message;
    },
};

messageTypeRegistry.set(ConsumptionFilter.$type, ConsumptionFilter);

const baseCloudFoldersConsumptionFilter: object = {
    $type: 'yandex.cloud.billing.v1.CloudFoldersConsumptionFilter',
    cloudId: '',
    folderIds: '',
};

export const CloudFoldersConsumptionFilter = {
    $type: 'yandex.cloud.billing.v1.CloudFoldersConsumptionFilter' as const,

    encode(
        message: CloudFoldersConsumptionFilter,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.cloudId !== '') {
            writer.uint32(10).string(message.cloudId);
        }
        for (const v of message.folderIds) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CloudFoldersConsumptionFilter {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCloudFoldersConsumptionFilter,
        } as CloudFoldersConsumptionFilter;
        message.folderIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloudId = reader.string();
                    break;
                case 2:
                    message.folderIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CloudFoldersConsumptionFilter {
        const message = {
            ...baseCloudFoldersConsumptionFilter,
        } as CloudFoldersConsumptionFilter;
        message.folderIds = [];
        if (object.cloudId !== undefined && object.cloudId !== null) {
            message.cloudId = String(object.cloudId);
        } else {
            message.cloudId = '';
        }
        if (object.folderIds !== undefined && object.folderIds !== null) {
            for (const e of object.folderIds) {
                message.folderIds.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: CloudFoldersConsumptionFilter): unknown {
        const obj: any = {};
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        if (message.folderIds) {
            obj.folderIds = message.folderIds.map((e) => e);
        } else {
            obj.folderIds = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<CloudFoldersConsumptionFilter>
    ): CloudFoldersConsumptionFilter {
        const message = {
            ...baseCloudFoldersConsumptionFilter,
        } as CloudFoldersConsumptionFilter;
        message.folderIds = [];
        if (object.cloudId !== undefined && object.cloudId !== null) {
            message.cloudId = object.cloudId;
        } else {
            message.cloudId = '';
        }
        if (object.folderIds !== undefined && object.folderIds !== null) {
            for (const e of object.folderIds) {
                message.folderIds.push(e);
            }
        }
        return message;
    },
};

messageTypeRegistry.set(
    CloudFoldersConsumptionFilter.$type,
    CloudFoldersConsumptionFilter
);

const baseThresholdRule: object = {
    $type: 'yandex.cloud.billing.v1.ThresholdRule',
    type: 0,
    amount: '',
    notificationUserAccountIds: '',
};

export const ThresholdRule = {
    $type: 'yandex.cloud.billing.v1.ThresholdRule' as const,

    encode(
        message: ThresholdRule,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.amount !== '') {
            writer.uint32(18).string(message.amount);
        }
        for (const v of message.notificationUserAccountIds) {
            writer.uint32(26).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ThresholdRule {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseThresholdRule } as ThresholdRule;
        message.notificationUserAccountIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                case 3:
                    message.notificationUserAccountIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ThresholdRule {
        const message = { ...baseThresholdRule } as ThresholdRule;
        message.notificationUserAccountIds = [];
        if (object.type !== undefined && object.type !== null) {
            message.type = thresholdTypeFromJSON(object.type);
        } else {
            message.type = 0;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        } else {
            message.amount = '';
        }
        if (
            object.notificationUserAccountIds !== undefined &&
            object.notificationUserAccountIds !== null
        ) {
            for (const e of object.notificationUserAccountIds) {
                message.notificationUserAccountIds.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: ThresholdRule): unknown {
        const obj: any = {};
        message.type !== undefined &&
            (obj.type = thresholdTypeToJSON(message.type));
        message.amount !== undefined && (obj.amount = message.amount);
        if (message.notificationUserAccountIds) {
            obj.notificationUserAccountIds =
                message.notificationUserAccountIds.map((e) => e);
        } else {
            obj.notificationUserAccountIds = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<ThresholdRule>): ThresholdRule {
        const message = { ...baseThresholdRule } as ThresholdRule;
        message.notificationUserAccountIds = [];
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        } else {
            message.type = 0;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        } else {
            message.amount = '';
        }
        if (
            object.notificationUserAccountIds !== undefined &&
            object.notificationUserAccountIds !== null
        ) {
            for (const e of object.notificationUserAccountIds) {
                message.notificationUserAccountIds.push(e);
            }
        }
        return message;
    },
};

messageTypeRegistry.set(ThresholdRule.$type, ThresholdRule);

type Builtin =
    | Date
    | Function
    | Uint8Array
    | string
    | number
    | boolean
    | undefined;
export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
