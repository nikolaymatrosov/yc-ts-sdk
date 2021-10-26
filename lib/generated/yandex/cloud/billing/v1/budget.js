/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.billing.v1';
export var BudgetStatus;
(function (BudgetStatus) {
    BudgetStatus[BudgetStatus["BUDGET_STATUS_UNSPECIFIED"] = 0] = "BUDGET_STATUS_UNSPECIFIED";
    /** CREATING - The budget is being created. */
    BudgetStatus[BudgetStatus["CREATING"] = 1] = "CREATING";
    /** ACTIVE - The budget is active. */
    BudgetStatus[BudgetStatus["ACTIVE"] = 2] = "ACTIVE";
    /** FINISHED - The budget is finished. */
    BudgetStatus[BudgetStatus["FINISHED"] = 3] = "FINISHED";
    BudgetStatus[BudgetStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BudgetStatus || (BudgetStatus = {}));
export function budgetStatusFromJSON(object) {
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
export function budgetStatusToJSON(object) {
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
export var ResetPeriodType;
(function (ResetPeriodType) {
    ResetPeriodType[ResetPeriodType["RESET_PERIOD_TYPE_UNSPECIFIED"] = 0] = "RESET_PERIOD_TYPE_UNSPECIFIED";
    /** MONTHLY - Reset budget every month. */
    ResetPeriodType[ResetPeriodType["MONTHLY"] = 1] = "MONTHLY";
    /** QUARTER - Reset budget every quarter. */
    ResetPeriodType[ResetPeriodType["QUARTER"] = 2] = "QUARTER";
    /** ANNUALLY - Reset budget every year. */
    ResetPeriodType[ResetPeriodType["ANNUALLY"] = 3] = "ANNUALLY";
    ResetPeriodType[ResetPeriodType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResetPeriodType || (ResetPeriodType = {}));
export function resetPeriodTypeFromJSON(object) {
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
export function resetPeriodTypeToJSON(object) {
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
export var ThresholdType;
(function (ThresholdType) {
    ThresholdType[ThresholdType["THRESHOLD_TYPE_UNSPECIFIED"] = 0] = "THRESHOLD_TYPE_UNSPECIFIED";
    /** PERCENT - Percent. */
    ThresholdType[ThresholdType["PERCENT"] = 1] = "PERCENT";
    /** AMOUNT - The same as budget amount. */
    ThresholdType[ThresholdType["AMOUNT"] = 2] = "AMOUNT";
    ThresholdType[ThresholdType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ThresholdType || (ThresholdType = {}));
export function thresholdTypeFromJSON(object) {
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
export function thresholdTypeToJSON(object) {
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
const baseBudget = {
    id: '',
    name: '',
    billingAccountId: '',
    status: 0,
};
export const Budget = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.billingAccountId !== '') {
            writer.uint32(34).string(message.billingAccountId);
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.costBudget !== undefined) {
            CostBudgetSpec.encode(message.costBudget, writer.uint32(50).fork()).ldelim();
        }
        if (message.expenseBudget !== undefined) {
            ExpenseBudgetSpec.encode(message.expenseBudget, writer.uint32(58).fork()).ldelim();
        }
        if (message.balanceBudget !== undefined) {
            BalanceBudgetSpec.encode(message.balanceBudget, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBudget };
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
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.billingAccountId = reader.string();
                    break;
                case 5:
                    message.status = reader.int32();
                    break;
                case 6:
                    message.costBudget = CostBudgetSpec.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.expenseBudget = ExpenseBudgetSpec.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.balanceBudget = BalanceBudgetSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseBudget };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        else {
            message.createdAt = undefined;
        }
        if (object.billingAccountId !== undefined &&
            object.billingAccountId !== null) {
            message.billingAccountId = String(object.billingAccountId);
        }
        else {
            message.billingAccountId = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = budgetStatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.costBudget !== undefined && object.costBudget !== null) {
            message.costBudget = CostBudgetSpec.fromJSON(object.costBudget);
        }
        else {
            message.costBudget = undefined;
        }
        if (object.expenseBudget !== undefined &&
            object.expenseBudget !== null) {
            message.expenseBudget = ExpenseBudgetSpec.fromJSON(object.expenseBudget);
        }
        else {
            message.expenseBudget = undefined;
        }
        if (object.balanceBudget !== undefined &&
            object.balanceBudget !== null) {
            message.balanceBudget = BalanceBudgetSpec.fromJSON(object.balanceBudget);
        }
        else {
            message.balanceBudget = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        const message = { ...baseBudget };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = undefined;
        }
        if (object.billingAccountId !== undefined &&
            object.billingAccountId !== null) {
            message.billingAccountId = object.billingAccountId;
        }
        else {
            message.billingAccountId = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.costBudget !== undefined && object.costBudget !== null) {
            message.costBudget = CostBudgetSpec.fromPartial(object.costBudget);
        }
        else {
            message.costBudget = undefined;
        }
        if (object.expenseBudget !== undefined &&
            object.expenseBudget !== null) {
            message.expenseBudget = ExpenseBudgetSpec.fromPartial(object.expenseBudget);
        }
        else {
            message.expenseBudget = undefined;
        }
        if (object.balanceBudget !== undefined &&
            object.balanceBudget !== null) {
            message.balanceBudget = BalanceBudgetSpec.fromPartial(object.balanceBudget);
        }
        else {
            message.balanceBudget = undefined;
        }
        return message;
    },
};
const baseCostBudgetSpec = {
    amount: '',
    notificationUserAccountIds: '',
    endDate: '',
};
export const CostBudgetSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.amount !== '') {
            writer.uint32(10).string(message.amount);
        }
        for (const v of message.notificationUserAccountIds) {
            writer.uint32(18).string(v);
        }
        for (const v of message.thresholdRules) {
            ThresholdRule.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.filter !== undefined) {
            ConsumptionFilter.encode(message.filter, writer.uint32(34).fork()).ldelim();
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCostBudgetSpec };
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
                    message.thresholdRules.push(ThresholdRule.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.filter = ConsumptionFilter.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.resetPeriod = reader.int32();
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
    fromJSON(object) {
        const message = { ...baseCostBudgetSpec };
        message.notificationUserAccountIds = [];
        message.thresholdRules = [];
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = '';
        }
        if (object.notificationUserAccountIds !== undefined &&
            object.notificationUserAccountIds !== null) {
            for (const e of object.notificationUserAccountIds) {
                message.notificationUserAccountIds.push(String(e));
            }
        }
        if (object.thresholdRules !== undefined &&
            object.thresholdRules !== null) {
            for (const e of object.thresholdRules) {
                message.thresholdRules.push(ThresholdRule.fromJSON(e));
            }
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = ConsumptionFilter.fromJSON(object.filter);
        }
        else {
            message.filter = undefined;
        }
        if (object.resetPeriod !== undefined && object.resetPeriod !== null) {
            message.resetPeriod = resetPeriodTypeFromJSON(object.resetPeriod);
        }
        else {
            message.resetPeriod = undefined;
        }
        if (object.startDate !== undefined && object.startDate !== null) {
            message.startDate = String(object.startDate);
        }
        else {
            message.startDate = undefined;
        }
        if (object.endDate !== undefined && object.endDate !== null) {
            message.endDate = String(object.endDate);
        }
        else {
            message.endDate = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        if (message.notificationUserAccountIds) {
            obj.notificationUserAccountIds =
                message.notificationUserAccountIds.map((e) => e);
        }
        else {
            obj.notificationUserAccountIds = [];
        }
        if (message.thresholdRules) {
            obj.thresholdRules = message.thresholdRules.map((e) => e ? ThresholdRule.toJSON(e) : undefined);
        }
        else {
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
    fromPartial(object) {
        const message = { ...baseCostBudgetSpec };
        message.notificationUserAccountIds = [];
        message.thresholdRules = [];
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = '';
        }
        if (object.notificationUserAccountIds !== undefined &&
            object.notificationUserAccountIds !== null) {
            for (const e of object.notificationUserAccountIds) {
                message.notificationUserAccountIds.push(e);
            }
        }
        if (object.thresholdRules !== undefined &&
            object.thresholdRules !== null) {
            for (const e of object.thresholdRules) {
                message.thresholdRules.push(ThresholdRule.fromPartial(e));
            }
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = ConsumptionFilter.fromPartial(object.filter);
        }
        else {
            message.filter = undefined;
        }
        if (object.resetPeriod !== undefined && object.resetPeriod !== null) {
            message.resetPeriod = object.resetPeriod;
        }
        else {
            message.resetPeriod = undefined;
        }
        if (object.startDate !== undefined && object.startDate !== null) {
            message.startDate = object.startDate;
        }
        else {
            message.startDate = undefined;
        }
        if (object.endDate !== undefined && object.endDate !== null) {
            message.endDate = object.endDate;
        }
        else {
            message.endDate = '';
        }
        return message;
    },
};
const baseExpenseBudgetSpec = {
    amount: '',
    notificationUserAccountIds: '',
    endDate: '',
};
export const ExpenseBudgetSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.amount !== '') {
            writer.uint32(10).string(message.amount);
        }
        for (const v of message.notificationUserAccountIds) {
            writer.uint32(18).string(v);
        }
        for (const v of message.thresholdRules) {
            ThresholdRule.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.filter !== undefined) {
            ConsumptionFilter.encode(message.filter, writer.uint32(34).fork()).ldelim();
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExpenseBudgetSpec };
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
                    message.thresholdRules.push(ThresholdRule.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.filter = ConsumptionFilter.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.resetPeriod = reader.int32();
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
    fromJSON(object) {
        const message = { ...baseExpenseBudgetSpec };
        message.notificationUserAccountIds = [];
        message.thresholdRules = [];
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = '';
        }
        if (object.notificationUserAccountIds !== undefined &&
            object.notificationUserAccountIds !== null) {
            for (const e of object.notificationUserAccountIds) {
                message.notificationUserAccountIds.push(String(e));
            }
        }
        if (object.thresholdRules !== undefined &&
            object.thresholdRules !== null) {
            for (const e of object.thresholdRules) {
                message.thresholdRules.push(ThresholdRule.fromJSON(e));
            }
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = ConsumptionFilter.fromJSON(object.filter);
        }
        else {
            message.filter = undefined;
        }
        if (object.resetPeriod !== undefined && object.resetPeriod !== null) {
            message.resetPeriod = resetPeriodTypeFromJSON(object.resetPeriod);
        }
        else {
            message.resetPeriod = undefined;
        }
        if (object.startDate !== undefined && object.startDate !== null) {
            message.startDate = String(object.startDate);
        }
        else {
            message.startDate = undefined;
        }
        if (object.endDate !== undefined && object.endDate !== null) {
            message.endDate = String(object.endDate);
        }
        else {
            message.endDate = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        if (message.notificationUserAccountIds) {
            obj.notificationUserAccountIds =
                message.notificationUserAccountIds.map((e) => e);
        }
        else {
            obj.notificationUserAccountIds = [];
        }
        if (message.thresholdRules) {
            obj.thresholdRules = message.thresholdRules.map((e) => e ? ThresholdRule.toJSON(e) : undefined);
        }
        else {
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
    fromPartial(object) {
        const message = { ...baseExpenseBudgetSpec };
        message.notificationUserAccountIds = [];
        message.thresholdRules = [];
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = '';
        }
        if (object.notificationUserAccountIds !== undefined &&
            object.notificationUserAccountIds !== null) {
            for (const e of object.notificationUserAccountIds) {
                message.notificationUserAccountIds.push(e);
            }
        }
        if (object.thresholdRules !== undefined &&
            object.thresholdRules !== null) {
            for (const e of object.thresholdRules) {
                message.thresholdRules.push(ThresholdRule.fromPartial(e));
            }
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = ConsumptionFilter.fromPartial(object.filter);
        }
        else {
            message.filter = undefined;
        }
        if (object.resetPeriod !== undefined && object.resetPeriod !== null) {
            message.resetPeriod = object.resetPeriod;
        }
        else {
            message.resetPeriod = undefined;
        }
        if (object.startDate !== undefined && object.startDate !== null) {
            message.startDate = object.startDate;
        }
        else {
            message.startDate = undefined;
        }
        if (object.endDate !== undefined && object.endDate !== null) {
            message.endDate = object.endDate;
        }
        else {
            message.endDate = '';
        }
        return message;
    },
};
const baseBalanceBudgetSpec = {
    amount: '',
    notificationUserAccountIds: '',
    startDate: '',
    endDate: '',
};
export const BalanceBudgetSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.amount !== '') {
            writer.uint32(10).string(message.amount);
        }
        for (const v of message.notificationUserAccountIds) {
            writer.uint32(18).string(v);
        }
        for (const v of message.thresholdRules) {
            ThresholdRule.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.startDate !== '') {
            writer.uint32(34).string(message.startDate);
        }
        if (message.endDate !== '') {
            writer.uint32(42).string(message.endDate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBalanceBudgetSpec };
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
                    message.thresholdRules.push(ThresholdRule.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        const message = { ...baseBalanceBudgetSpec };
        message.notificationUserAccountIds = [];
        message.thresholdRules = [];
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = '';
        }
        if (object.notificationUserAccountIds !== undefined &&
            object.notificationUserAccountIds !== null) {
            for (const e of object.notificationUserAccountIds) {
                message.notificationUserAccountIds.push(String(e));
            }
        }
        if (object.thresholdRules !== undefined &&
            object.thresholdRules !== null) {
            for (const e of object.thresholdRules) {
                message.thresholdRules.push(ThresholdRule.fromJSON(e));
            }
        }
        if (object.startDate !== undefined && object.startDate !== null) {
            message.startDate = String(object.startDate);
        }
        else {
            message.startDate = '';
        }
        if (object.endDate !== undefined && object.endDate !== null) {
            message.endDate = String(object.endDate);
        }
        else {
            message.endDate = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        if (message.notificationUserAccountIds) {
            obj.notificationUserAccountIds =
                message.notificationUserAccountIds.map((e) => e);
        }
        else {
            obj.notificationUserAccountIds = [];
        }
        if (message.thresholdRules) {
            obj.thresholdRules = message.thresholdRules.map((e) => e ? ThresholdRule.toJSON(e) : undefined);
        }
        else {
            obj.thresholdRules = [];
        }
        message.startDate !== undefined && (obj.startDate = message.startDate);
        message.endDate !== undefined && (obj.endDate = message.endDate);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseBalanceBudgetSpec };
        message.notificationUserAccountIds = [];
        message.thresholdRules = [];
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = '';
        }
        if (object.notificationUserAccountIds !== undefined &&
            object.notificationUserAccountIds !== null) {
            for (const e of object.notificationUserAccountIds) {
                message.notificationUserAccountIds.push(e);
            }
        }
        if (object.thresholdRules !== undefined &&
            object.thresholdRules !== null) {
            for (const e of object.thresholdRules) {
                message.thresholdRules.push(ThresholdRule.fromPartial(e));
            }
        }
        if (object.startDate !== undefined && object.startDate !== null) {
            message.startDate = object.startDate;
        }
        else {
            message.startDate = '';
        }
        if (object.endDate !== undefined && object.endDate !== null) {
            message.endDate = object.endDate;
        }
        else {
            message.endDate = '';
        }
        return message;
    },
};
const baseConsumptionFilter = { serviceIds: '' };
export const ConsumptionFilter = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.serviceIds) {
            writer.uint32(10).string(v);
        }
        for (const v of message.cloudFoldersFilters) {
            CloudFoldersConsumptionFilter.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConsumptionFilter };
        message.serviceIds = [];
        message.cloudFoldersFilters = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceIds.push(reader.string());
                    break;
                case 2:
                    message.cloudFoldersFilters.push(CloudFoldersConsumptionFilter.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseConsumptionFilter };
        message.serviceIds = [];
        message.cloudFoldersFilters = [];
        if (object.serviceIds !== undefined && object.serviceIds !== null) {
            for (const e of object.serviceIds) {
                message.serviceIds.push(String(e));
            }
        }
        if (object.cloudFoldersFilters !== undefined &&
            object.cloudFoldersFilters !== null) {
            for (const e of object.cloudFoldersFilters) {
                message.cloudFoldersFilters.push(CloudFoldersConsumptionFilter.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.serviceIds) {
            obj.serviceIds = message.serviceIds.map((e) => e);
        }
        else {
            obj.serviceIds = [];
        }
        if (message.cloudFoldersFilters) {
            obj.cloudFoldersFilters = message.cloudFoldersFilters.map((e) => e ? CloudFoldersConsumptionFilter.toJSON(e) : undefined);
        }
        else {
            obj.cloudFoldersFilters = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseConsumptionFilter };
        message.serviceIds = [];
        message.cloudFoldersFilters = [];
        if (object.serviceIds !== undefined && object.serviceIds !== null) {
            for (const e of object.serviceIds) {
                message.serviceIds.push(e);
            }
        }
        if (object.cloudFoldersFilters !== undefined &&
            object.cloudFoldersFilters !== null) {
            for (const e of object.cloudFoldersFilters) {
                message.cloudFoldersFilters.push(CloudFoldersConsumptionFilter.fromPartial(e));
            }
        }
        return message;
    },
};
const baseCloudFoldersConsumptionFilter = {
    cloudId: '',
    folderIds: '',
};
export const CloudFoldersConsumptionFilter = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cloudId !== '') {
            writer.uint32(10).string(message.cloudId);
        }
        for (const v of message.folderIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCloudFoldersConsumptionFilter,
        };
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
    fromJSON(object) {
        const message = {
            ...baseCloudFoldersConsumptionFilter,
        };
        message.folderIds = [];
        if (object.cloudId !== undefined && object.cloudId !== null) {
            message.cloudId = String(object.cloudId);
        }
        else {
            message.cloudId = '';
        }
        if (object.folderIds !== undefined && object.folderIds !== null) {
            for (const e of object.folderIds) {
                message.folderIds.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        if (message.folderIds) {
            obj.folderIds = message.folderIds.map((e) => e);
        }
        else {
            obj.folderIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCloudFoldersConsumptionFilter,
        };
        message.folderIds = [];
        if (object.cloudId !== undefined && object.cloudId !== null) {
            message.cloudId = object.cloudId;
        }
        else {
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
const baseThresholdRule = {
    type: 0,
    amount: '',
    notificationUserAccountIds: '',
};
export const ThresholdRule = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.amount !== '') {
            writer.uint32(18).string(message.amount);
        }
        for (const v of message.notificationUserAccountIds) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseThresholdRule };
        message.notificationUserAccountIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
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
    fromJSON(object) {
        const message = { ...baseThresholdRule };
        message.notificationUserAccountIds = [];
        if (object.type !== undefined && object.type !== null) {
            message.type = thresholdTypeFromJSON(object.type);
        }
        else {
            message.type = 0;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = '';
        }
        if (object.notificationUserAccountIds !== undefined &&
            object.notificationUserAccountIds !== null) {
            for (const e of object.notificationUserAccountIds) {
                message.notificationUserAccountIds.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined &&
            (obj.type = thresholdTypeToJSON(message.type));
        message.amount !== undefined && (obj.amount = message.amount);
        if (message.notificationUserAccountIds) {
            obj.notificationUserAccountIds =
                message.notificationUserAccountIds.map((e) => e);
        }
        else {
            obj.notificationUserAccountIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseThresholdRule };
        message.notificationUserAccountIds = [];
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = 0;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = '';
        }
        if (object.notificationUserAccountIds !== undefined &&
            object.notificationUserAccountIds !== null) {
            for (const e of object.notificationUserAccountIds) {
                message.notificationUserAccountIds.push(e);
            }
        }
        return message;
    },
};
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === 'string') {
        return new Date(o);
    }
    else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
