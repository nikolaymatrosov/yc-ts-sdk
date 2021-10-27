"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserQuota = exports.UserSettings = exports.UserSpec = exports.Permission = exports.User = exports.userSettings_CountDistinctImplementationToJSON = exports.userSettings_CountDistinctImplementationFromJSON = exports.UserSettings_CountDistinctImplementation = exports.userSettings_QuotaModeToJSON = exports.userSettings_QuotaModeFromJSON = exports.UserSettings_QuotaMode = exports.userSettings_DistributedProductModeToJSON = exports.userSettings_DistributedProductModeFromJSON = exports.UserSettings_DistributedProductMode = exports.userSettings_GroupByOverflowModeToJSON = exports.userSettings_GroupByOverflowModeFromJSON = exports.UserSettings_GroupByOverflowMode = exports.userSettings_OverflowModeToJSON = exports.userSettings_OverflowModeFromJSON = exports.UserSettings_OverflowMode = exports.protobufPackage = void 0;
/* eslint-disable */
const wrappers_1 = require("../../../../../google/protobuf/wrappers");
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.mdb.clickhouse.v1';
var UserSettings_OverflowMode;
(function (UserSettings_OverflowMode) {
    UserSettings_OverflowMode[UserSettings_OverflowMode["OVERFLOW_MODE_UNSPECIFIED"] = 0] = "OVERFLOW_MODE_UNSPECIFIED";
    UserSettings_OverflowMode[UserSettings_OverflowMode["OVERFLOW_MODE_THROW"] = 1] = "OVERFLOW_MODE_THROW";
    UserSettings_OverflowMode[UserSettings_OverflowMode["OVERFLOW_MODE_BREAK"] = 2] = "OVERFLOW_MODE_BREAK";
    UserSettings_OverflowMode[UserSettings_OverflowMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserSettings_OverflowMode = exports.UserSettings_OverflowMode || (exports.UserSettings_OverflowMode = {}));
function userSettings_OverflowModeFromJSON(object) {
    switch (object) {
        case 0:
        case 'OVERFLOW_MODE_UNSPECIFIED':
            return UserSettings_OverflowMode.OVERFLOW_MODE_UNSPECIFIED;
        case 1:
        case 'OVERFLOW_MODE_THROW':
            return UserSettings_OverflowMode.OVERFLOW_MODE_THROW;
        case 2:
        case 'OVERFLOW_MODE_BREAK':
            return UserSettings_OverflowMode.OVERFLOW_MODE_BREAK;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_OverflowMode.UNRECOGNIZED;
    }
}
exports.userSettings_OverflowModeFromJSON = userSettings_OverflowModeFromJSON;
function userSettings_OverflowModeToJSON(object) {
    switch (object) {
        case UserSettings_OverflowMode.OVERFLOW_MODE_UNSPECIFIED:
            return 'OVERFLOW_MODE_UNSPECIFIED';
        case UserSettings_OverflowMode.OVERFLOW_MODE_THROW:
            return 'OVERFLOW_MODE_THROW';
        case UserSettings_OverflowMode.OVERFLOW_MODE_BREAK:
            return 'OVERFLOW_MODE_BREAK';
        default:
            return 'UNKNOWN';
    }
}
exports.userSettings_OverflowModeToJSON = userSettings_OverflowModeToJSON;
var UserSettings_GroupByOverflowMode;
(function (UserSettings_GroupByOverflowMode) {
    UserSettings_GroupByOverflowMode[UserSettings_GroupByOverflowMode["GROUP_BY_OVERFLOW_MODE_UNSPECIFIED"] = 0] = "GROUP_BY_OVERFLOW_MODE_UNSPECIFIED";
    UserSettings_GroupByOverflowMode[UserSettings_GroupByOverflowMode["GROUP_BY_OVERFLOW_MODE_THROW"] = 1] = "GROUP_BY_OVERFLOW_MODE_THROW";
    UserSettings_GroupByOverflowMode[UserSettings_GroupByOverflowMode["GROUP_BY_OVERFLOW_MODE_BREAK"] = 2] = "GROUP_BY_OVERFLOW_MODE_BREAK";
    UserSettings_GroupByOverflowMode[UserSettings_GroupByOverflowMode["GROUP_BY_OVERFLOW_MODE_ANY"] = 3] = "GROUP_BY_OVERFLOW_MODE_ANY";
    UserSettings_GroupByOverflowMode[UserSettings_GroupByOverflowMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserSettings_GroupByOverflowMode = exports.UserSettings_GroupByOverflowMode || (exports.UserSettings_GroupByOverflowMode = {}));
function userSettings_GroupByOverflowModeFromJSON(object) {
    switch (object) {
        case 0:
        case 'GROUP_BY_OVERFLOW_MODE_UNSPECIFIED':
            return UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_UNSPECIFIED;
        case 1:
        case 'GROUP_BY_OVERFLOW_MODE_THROW':
            return UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_THROW;
        case 2:
        case 'GROUP_BY_OVERFLOW_MODE_BREAK':
            return UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_BREAK;
        case 3:
        case 'GROUP_BY_OVERFLOW_MODE_ANY':
            return UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_ANY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_GroupByOverflowMode.UNRECOGNIZED;
    }
}
exports.userSettings_GroupByOverflowModeFromJSON = userSettings_GroupByOverflowModeFromJSON;
function userSettings_GroupByOverflowModeToJSON(object) {
    switch (object) {
        case UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_UNSPECIFIED:
            return 'GROUP_BY_OVERFLOW_MODE_UNSPECIFIED';
        case UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_THROW:
            return 'GROUP_BY_OVERFLOW_MODE_THROW';
        case UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_BREAK:
            return 'GROUP_BY_OVERFLOW_MODE_BREAK';
        case UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_ANY:
            return 'GROUP_BY_OVERFLOW_MODE_ANY';
        default:
            return 'UNKNOWN';
    }
}
exports.userSettings_GroupByOverflowModeToJSON = userSettings_GroupByOverflowModeToJSON;
var UserSettings_DistributedProductMode;
(function (UserSettings_DistributedProductMode) {
    UserSettings_DistributedProductMode[UserSettings_DistributedProductMode["DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED"] = 0] = "DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED";
    /** DISTRIBUTED_PRODUCT_MODE_DENY - Default value. Prohibits using these types of subqueries (returns the "Double-distributed in/JOIN subqueries is denied" exception). */
    UserSettings_DistributedProductMode[UserSettings_DistributedProductMode["DISTRIBUTED_PRODUCT_MODE_DENY"] = 1] = "DISTRIBUTED_PRODUCT_MODE_DENY";
    /** DISTRIBUTED_PRODUCT_MODE_LOCAL - Replaces the database and table in the subquery with local ones for the destination server (shard), leaving the normal IN/JOIN. */
    UserSettings_DistributedProductMode[UserSettings_DistributedProductMode["DISTRIBUTED_PRODUCT_MODE_LOCAL"] = 2] = "DISTRIBUTED_PRODUCT_MODE_LOCAL";
    /** DISTRIBUTED_PRODUCT_MODE_GLOBAL - Replaces the IN/JOIN query with GLOBAL IN/GLOBAL JOIN. */
    UserSettings_DistributedProductMode[UserSettings_DistributedProductMode["DISTRIBUTED_PRODUCT_MODE_GLOBAL"] = 3] = "DISTRIBUTED_PRODUCT_MODE_GLOBAL";
    /** DISTRIBUTED_PRODUCT_MODE_ALLOW - Allows the use of these types of subqueries. */
    UserSettings_DistributedProductMode[UserSettings_DistributedProductMode["DISTRIBUTED_PRODUCT_MODE_ALLOW"] = 4] = "DISTRIBUTED_PRODUCT_MODE_ALLOW";
    UserSettings_DistributedProductMode[UserSettings_DistributedProductMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserSettings_DistributedProductMode = exports.UserSettings_DistributedProductMode || (exports.UserSettings_DistributedProductMode = {}));
function userSettings_DistributedProductModeFromJSON(object) {
    switch (object) {
        case 0:
        case 'DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED':
            return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED;
        case 1:
        case 'DISTRIBUTED_PRODUCT_MODE_DENY':
            return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_DENY;
        case 2:
        case 'DISTRIBUTED_PRODUCT_MODE_LOCAL':
            return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_LOCAL;
        case 3:
        case 'DISTRIBUTED_PRODUCT_MODE_GLOBAL':
            return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_GLOBAL;
        case 4:
        case 'DISTRIBUTED_PRODUCT_MODE_ALLOW':
            return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_ALLOW;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_DistributedProductMode.UNRECOGNIZED;
    }
}
exports.userSettings_DistributedProductModeFromJSON = userSettings_DistributedProductModeFromJSON;
function userSettings_DistributedProductModeToJSON(object) {
    switch (object) {
        case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED:
            return 'DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED';
        case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_DENY:
            return 'DISTRIBUTED_PRODUCT_MODE_DENY';
        case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_LOCAL:
            return 'DISTRIBUTED_PRODUCT_MODE_LOCAL';
        case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_GLOBAL:
            return 'DISTRIBUTED_PRODUCT_MODE_GLOBAL';
        case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_ALLOW:
            return 'DISTRIBUTED_PRODUCT_MODE_ALLOW';
        default:
            return 'UNKNOWN';
    }
}
exports.userSettings_DistributedProductModeToJSON = userSettings_DistributedProductModeToJSON;
var UserSettings_QuotaMode;
(function (UserSettings_QuotaMode) {
    UserSettings_QuotaMode[UserSettings_QuotaMode["QUOTA_MODE_UNSPECIFIED"] = 0] = "QUOTA_MODE_UNSPECIFIED";
    UserSettings_QuotaMode[UserSettings_QuotaMode["QUOTA_MODE_DEFAULT"] = 1] = "QUOTA_MODE_DEFAULT";
    UserSettings_QuotaMode[UserSettings_QuotaMode["QUOTA_MODE_KEYED"] = 2] = "QUOTA_MODE_KEYED";
    UserSettings_QuotaMode[UserSettings_QuotaMode["QUOTA_MODE_KEYED_BY_IP"] = 3] = "QUOTA_MODE_KEYED_BY_IP";
    UserSettings_QuotaMode[UserSettings_QuotaMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserSettings_QuotaMode = exports.UserSettings_QuotaMode || (exports.UserSettings_QuotaMode = {}));
function userSettings_QuotaModeFromJSON(object) {
    switch (object) {
        case 0:
        case 'QUOTA_MODE_UNSPECIFIED':
            return UserSettings_QuotaMode.QUOTA_MODE_UNSPECIFIED;
        case 1:
        case 'QUOTA_MODE_DEFAULT':
            return UserSettings_QuotaMode.QUOTA_MODE_DEFAULT;
        case 2:
        case 'QUOTA_MODE_KEYED':
            return UserSettings_QuotaMode.QUOTA_MODE_KEYED;
        case 3:
        case 'QUOTA_MODE_KEYED_BY_IP':
            return UserSettings_QuotaMode.QUOTA_MODE_KEYED_BY_IP;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_QuotaMode.UNRECOGNIZED;
    }
}
exports.userSettings_QuotaModeFromJSON = userSettings_QuotaModeFromJSON;
function userSettings_QuotaModeToJSON(object) {
    switch (object) {
        case UserSettings_QuotaMode.QUOTA_MODE_UNSPECIFIED:
            return 'QUOTA_MODE_UNSPECIFIED';
        case UserSettings_QuotaMode.QUOTA_MODE_DEFAULT:
            return 'QUOTA_MODE_DEFAULT';
        case UserSettings_QuotaMode.QUOTA_MODE_KEYED:
            return 'QUOTA_MODE_KEYED';
        case UserSettings_QuotaMode.QUOTA_MODE_KEYED_BY_IP:
            return 'QUOTA_MODE_KEYED_BY_IP';
        default:
            return 'UNKNOWN';
    }
}
exports.userSettings_QuotaModeToJSON = userSettings_QuotaModeToJSON;
var UserSettings_CountDistinctImplementation;
(function (UserSettings_CountDistinctImplementation) {
    UserSettings_CountDistinctImplementation[UserSettings_CountDistinctImplementation["COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED"] = 0] = "COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED";
    UserSettings_CountDistinctImplementation[UserSettings_CountDistinctImplementation["COUNT_DISTINCT_IMPLEMENTATION_UNIQ"] = 1] = "COUNT_DISTINCT_IMPLEMENTATION_UNIQ";
    UserSettings_CountDistinctImplementation[UserSettings_CountDistinctImplementation["COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED"] = 2] = "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED";
    UserSettings_CountDistinctImplementation[UserSettings_CountDistinctImplementation["COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64"] = 3] = "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64";
    UserSettings_CountDistinctImplementation[UserSettings_CountDistinctImplementation["COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12"] = 4] = "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12";
    UserSettings_CountDistinctImplementation[UserSettings_CountDistinctImplementation["COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT"] = 5] = "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT";
    UserSettings_CountDistinctImplementation[UserSettings_CountDistinctImplementation["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserSettings_CountDistinctImplementation = exports.UserSettings_CountDistinctImplementation || (exports.UserSettings_CountDistinctImplementation = {}));
function userSettings_CountDistinctImplementationFromJSON(object) {
    switch (object) {
        case 0:
        case 'COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED':
            return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED;
        case 1:
        case 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ':
            return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ;
        case 2:
        case 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED':
            return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED;
        case 3:
        case 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64':
            return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64;
        case 4:
        case 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12':
            return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12;
        case 5:
        case 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT':
            return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_CountDistinctImplementation.UNRECOGNIZED;
    }
}
exports.userSettings_CountDistinctImplementationFromJSON = userSettings_CountDistinctImplementationFromJSON;
function userSettings_CountDistinctImplementationToJSON(object) {
    switch (object) {
        case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED:
            return 'COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED';
        case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ:
            return 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ';
        case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED:
            return 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED';
        case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64:
            return 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64';
        case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12:
            return 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12';
        case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT:
            return 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT';
        default:
            return 'UNKNOWN';
    }
}
exports.userSettings_CountDistinctImplementationToJSON = userSettings_CountDistinctImplementationToJSON;
const baseUser = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.User',
    name: '',
    clusterId: '',
};
exports.User = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.User',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        for (const v of message.permissions) {
            exports.Permission.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.settings !== undefined) {
            exports.UserSettings.encode(message.settings, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.quotas) {
            exports.UserQuota.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUser };
        message.permissions = [];
        message.quotas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.permissions.push(exports.Permission.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.settings = exports.UserSettings.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.quotas.push(exports.UserQuota.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUser };
        message.permissions = [];
        message.quotas = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            for (const e of object.permissions) {
                message.permissions.push(exports.Permission.fromJSON(e));
            }
        }
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = exports.UserSettings.fromJSON(object.settings);
        }
        else {
            message.settings = undefined;
        }
        if (object.quotas !== undefined && object.quotas !== null) {
            for (const e of object.quotas) {
                message.quotas.push(exports.UserQuota.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.permissions) {
            obj.permissions = message.permissions.map((e) => e ? exports.Permission.toJSON(e) : undefined);
        }
        else {
            obj.permissions = [];
        }
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? exports.UserSettings.toJSON(message.settings)
                : undefined);
        if (message.quotas) {
            obj.quotas = message.quotas.map((e) => e ? exports.UserQuota.toJSON(e) : undefined);
        }
        else {
            obj.quotas = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUser };
        message.permissions = [];
        message.quotas = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            for (const e of object.permissions) {
                message.permissions.push(exports.Permission.fromPartial(e));
            }
        }
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = exports.UserSettings.fromPartial(object.settings);
        }
        else {
            message.settings = undefined;
        }
        if (object.quotas !== undefined && object.quotas !== null) {
            for (const e of object.quotas) {
                message.quotas.push(exports.UserQuota.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.User.$type, exports.User);
const basePermission = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.Permission',
    databaseName: '',
};
exports.Permission = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.Permission',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.databaseName !== '') {
            writer.uint32(10).string(message.databaseName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePermission };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePermission };
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = String(object.databaseName);
        }
        else {
            message.databaseName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePermission };
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = object.databaseName;
        }
        else {
            message.databaseName = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Permission.$type, exports.Permission);
const baseUserSpec = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.UserSpec',
    name: '',
    password: '',
};
exports.UserSpec = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.UserSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.password !== '') {
            writer.uint32(18).string(message.password);
        }
        for (const v of message.permissions) {
            exports.Permission.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.settings !== undefined) {
            exports.UserSettings.encode(message.settings, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.quotas) {
            exports.UserQuota.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserSpec };
        message.permissions = [];
        message.quotas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                case 3:
                    message.permissions.push(exports.Permission.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.settings = exports.UserSettings.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.quotas.push(exports.UserQuota.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUserSpec };
        message.permissions = [];
        message.quotas = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = String(object.password);
        }
        else {
            message.password = '';
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            for (const e of object.permissions) {
                message.permissions.push(exports.Permission.fromJSON(e));
            }
        }
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = exports.UserSettings.fromJSON(object.settings);
        }
        else {
            message.settings = undefined;
        }
        if (object.quotas !== undefined && object.quotas !== null) {
            for (const e of object.quotas) {
                message.quotas.push(exports.UserQuota.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.password !== undefined && (obj.password = message.password);
        if (message.permissions) {
            obj.permissions = message.permissions.map((e) => e ? exports.Permission.toJSON(e) : undefined);
        }
        else {
            obj.permissions = [];
        }
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? exports.UserSettings.toJSON(message.settings)
                : undefined);
        if (message.quotas) {
            obj.quotas = message.quotas.map((e) => e ? exports.UserQuota.toJSON(e) : undefined);
        }
        else {
            obj.quotas = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUserSpec };
        message.permissions = [];
        message.quotas = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = object.password;
        }
        else {
            message.password = '';
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            for (const e of object.permissions) {
                message.permissions.push(exports.Permission.fromPartial(e));
            }
        }
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = exports.UserSettings.fromPartial(object.settings);
        }
        else {
            message.settings = undefined;
        }
        if (object.quotas !== undefined && object.quotas !== null) {
            for (const e of object.quotas) {
                message.quotas.push(exports.UserQuota.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UserSpec.$type, exports.UserSpec);
const baseUserSettings = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.UserSettings',
    distributedProductMode: 0,
    readOverflowMode: 0,
    groupByOverflowMode: 0,
    sortOverflowMode: 0,
    resultOverflowMode: 0,
    distinctOverflowMode: 0,
    transferOverflowMode: 0,
    timeoutOverflowMode: 0,
    setOverflowMode: 0,
    joinOverflowMode: 0,
    countDistinctImplementation: 0,
    quotaMode: 0,
};
exports.UserSettings = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.UserSettings',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.readonly !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.readonly,
            }, writer.uint32(10).fork()).ldelim();
        }
        if (message.allowDdl !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: 'google.protobuf.BoolValue',
                value: message.allowDdl,
            }, writer.uint32(18).fork()).ldelim();
        }
        if (message.insertQuorum !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.insertQuorum,
            }, writer.uint32(26).fork()).ldelim();
        }
        if (message.connectTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.connectTimeout,
            }, writer.uint32(314).fork()).ldelim();
        }
        if (message.receiveTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.receiveTimeout,
            }, writer.uint32(322).fork()).ldelim();
        }
        if (message.sendTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.sendTimeout,
            }, writer.uint32(330).fork()).ldelim();
        }
        if (message.insertQuorumTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.insertQuorumTimeout,
            }, writer.uint32(34).fork()).ldelim();
        }
        if (message.selectSequentialConsistency !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: 'google.protobuf.BoolValue',
                value: message.selectSequentialConsistency,
            }, writer.uint32(42).fork()).ldelim();
        }
        if (message.maxReplicaDelayForDistributedQueries !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxReplicaDelayForDistributedQueries,
            }, writer.uint32(50).fork()).ldelim();
        }
        if (message.fallbackToStaleReplicasForDistributedQueries !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: 'google.protobuf.BoolValue',
                value: message.fallbackToStaleReplicasForDistributedQueries,
            }, writer.uint32(58).fork()).ldelim();
        }
        if (message.replicationAlterPartitionsSync !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.replicationAlterPartitionsSync,
            }, writer.uint32(338).fork()).ldelim();
        }
        if (message.distributedProductMode !== 0) {
            writer.uint32(344).int32(message.distributedProductMode);
        }
        if (message.distributedAggregationMemoryEfficient !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: 'google.protobuf.BoolValue',
                value: message.distributedAggregationMemoryEfficient,
            }, writer.uint32(578).fork()).ldelim();
        }
        if (message.distributedDdlTaskTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.distributedDdlTaskTimeout,
            }, writer.uint32(586).fork()).ldelim();
        }
        if (message.skipUnavailableShards !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: 'google.protobuf.BoolValue',
                value: message.skipUnavailableShards,
            }, writer.uint32(650).fork()).ldelim();
        }
        if (message.compile !== undefined) {
            wrappers_1.BoolValue.encode({ $type: 'google.protobuf.BoolValue', value: message.compile }, writer.uint32(354).fork()).ldelim();
        }
        if (message.minCountToCompile !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.minCountToCompile,
            }, writer.uint32(362).fork()).ldelim();
        }
        if (message.compileExpressions !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: 'google.protobuf.BoolValue',
                value: message.compileExpressions,
            }, writer.uint32(370).fork()).ldelim();
        }
        if (message.minCountToCompileExpression !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.minCountToCompileExpression,
            }, writer.uint32(378).fork()).ldelim();
        }
        if (message.maxBlockSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxBlockSize,
            }, writer.uint32(74).fork()).ldelim();
        }
        if (message.minInsertBlockSizeRows !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.minInsertBlockSizeRows,
            }, writer.uint32(386).fork()).ldelim();
        }
        if (message.minInsertBlockSizeBytes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.minInsertBlockSizeBytes,
            }, writer.uint32(394).fork()).ldelim();
        }
        if (message.maxInsertBlockSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxInsertBlockSize,
            }, writer.uint32(82).fork()).ldelim();
        }
        if (message.minBytesToUseDirectIo !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.minBytesToUseDirectIo,
            }, writer.uint32(402).fork()).ldelim();
        }
        if (message.useUncompressedCache !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: 'google.protobuf.BoolValue',
                value: message.useUncompressedCache,
            }, writer.uint32(410).fork()).ldelim();
        }
        if (message.mergeTreeMaxRowsToUseCache !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.mergeTreeMaxRowsToUseCache,
            }, writer.uint32(418).fork()).ldelim();
        }
        if (message.mergeTreeMaxBytesToUseCache !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.mergeTreeMaxBytesToUseCache,
            }, writer.uint32(426).fork()).ldelim();
        }
        if (message.mergeTreeMinRowsForConcurrentRead !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.mergeTreeMinRowsForConcurrentRead,
            }, writer.uint32(434).fork()).ldelim();
        }
        if (message.mergeTreeMinBytesForConcurrentRead !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.mergeTreeMinBytesForConcurrentRead,
            }, writer.uint32(442).fork()).ldelim();
        }
        if (message.maxBytesBeforeExternalGroupBy !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxBytesBeforeExternalGroupBy,
            }, writer.uint32(594).fork()).ldelim();
        }
        if (message.maxBytesBeforeExternalSort !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxBytesBeforeExternalSort,
            }, writer.uint32(602).fork()).ldelim();
        }
        if (message.groupByTwoLevelThreshold !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.groupByTwoLevelThreshold,
            }, writer.uint32(610).fork()).ldelim();
        }
        if (message.groupByTwoLevelThresholdBytes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.groupByTwoLevelThresholdBytes,
            }, writer.uint32(618).fork()).ldelim();
        }
        if (message.priority !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.priority,
            }, writer.uint32(450).fork()).ldelim();
        }
        if (message.maxThreads !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxThreads,
            }, writer.uint32(66).fork()).ldelim();
        }
        if (message.maxMemoryUsage !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxMemoryUsage,
            }, writer.uint32(90).fork()).ldelim();
        }
        if (message.maxMemoryUsageForUser !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxMemoryUsageForUser,
            }, writer.uint32(98).fork()).ldelim();
        }
        if (message.maxNetworkBandwidth !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxNetworkBandwidth,
            }, writer.uint32(458).fork()).ldelim();
        }
        if (message.maxNetworkBandwidthForUser !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxNetworkBandwidthForUser,
            }, writer.uint32(466).fork()).ldelim();
        }
        if (message.forceIndexByDate !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: 'google.protobuf.BoolValue',
                value: message.forceIndexByDate,
            }, writer.uint32(474).fork()).ldelim();
        }
        if (message.forcePrimaryKey !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: 'google.protobuf.BoolValue',
                value: message.forcePrimaryKey,
            }, writer.uint32(482).fork()).ldelim();
        }
        if (message.maxRowsToRead !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxRowsToRead,
            }, writer.uint32(106).fork()).ldelim();
        }
        if (message.maxBytesToRead !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxBytesToRead,
            }, writer.uint32(114).fork()).ldelim();
        }
        if (message.readOverflowMode !== 0) {
            writer.uint32(120).int32(message.readOverflowMode);
        }
        if (message.maxRowsToGroupBy !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxRowsToGroupBy,
            }, writer.uint32(130).fork()).ldelim();
        }
        if (message.groupByOverflowMode !== 0) {
            writer.uint32(136).int32(message.groupByOverflowMode);
        }
        if (message.maxRowsToSort !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxRowsToSort,
            }, writer.uint32(146).fork()).ldelim();
        }
        if (message.maxBytesToSort !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxBytesToSort,
            }, writer.uint32(154).fork()).ldelim();
        }
        if (message.sortOverflowMode !== 0) {
            writer.uint32(160).int32(message.sortOverflowMode);
        }
        if (message.maxResultRows !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxResultRows,
            }, writer.uint32(170).fork()).ldelim();
        }
        if (message.maxResultBytes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxResultBytes,
            }, writer.uint32(178).fork()).ldelim();
        }
        if (message.resultOverflowMode !== 0) {
            writer.uint32(184).int32(message.resultOverflowMode);
        }
        if (message.maxRowsInDistinct !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxRowsInDistinct,
            }, writer.uint32(194).fork()).ldelim();
        }
        if (message.maxBytesInDistinct !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxBytesInDistinct,
            }, writer.uint32(202).fork()).ldelim();
        }
        if (message.distinctOverflowMode !== 0) {
            writer.uint32(208).int32(message.distinctOverflowMode);
        }
        if (message.maxRowsToTransfer !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxRowsToTransfer,
            }, writer.uint32(218).fork()).ldelim();
        }
        if (message.maxBytesToTransfer !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxBytesToTransfer,
            }, writer.uint32(226).fork()).ldelim();
        }
        if (message.transferOverflowMode !== 0) {
            writer.uint32(232).int32(message.transferOverflowMode);
        }
        if (message.maxExecutionTime !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxExecutionTime,
            }, writer.uint32(242).fork()).ldelim();
        }
        if (message.timeoutOverflowMode !== 0) {
            writer.uint32(248).int32(message.timeoutOverflowMode);
        }
        if (message.maxRowsInSet !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxRowsInSet,
            }, writer.uint32(698).fork()).ldelim();
        }
        if (message.maxBytesInSet !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxBytesInSet,
            }, writer.uint32(706).fork()).ldelim();
        }
        if (message.setOverflowMode !== 0) {
            writer.uint32(712).int32(message.setOverflowMode);
        }
        if (message.maxRowsInJoin !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxRowsInJoin,
            }, writer.uint32(722).fork()).ldelim();
        }
        if (message.maxBytesInJoin !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxBytesInJoin,
            }, writer.uint32(730).fork()).ldelim();
        }
        if (message.joinOverflowMode !== 0) {
            writer.uint32(736).int32(message.joinOverflowMode);
        }
        if (message.maxColumnsToRead !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxColumnsToRead,
            }, writer.uint32(258).fork()).ldelim();
        }
        if (message.maxTemporaryColumns !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxTemporaryColumns,
            }, writer.uint32(266).fork()).ldelim();
        }
        if (message.maxTemporaryNonConstColumns !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxTemporaryNonConstColumns,
            }, writer.uint32(274).fork()).ldelim();
        }
        if (message.maxQuerySize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxQuerySize,
            }, writer.uint32(282).fork()).ldelim();
        }
        if (message.maxAstDepth !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxAstDepth,
            }, writer.uint32(290).fork()).ldelim();
        }
        if (message.maxAstElements !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxAstElements,
            }, writer.uint32(298).fork()).ldelim();
        }
        if (message.maxExpandedAstElements !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxExpandedAstElements,
            }, writer.uint32(306).fork()).ldelim();
        }
        if (message.minExecutionSpeed !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.minExecutionSpeed,
            }, writer.uint32(674).fork()).ldelim();
        }
        if (message.minExecutionSpeedBytes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.minExecutionSpeedBytes,
            }, writer.uint32(682).fork()).ldelim();
        }
        if (message.countDistinctImplementation !== 0) {
            writer.uint32(688).int32(message.countDistinctImplementation);
        }
        if (message.inputFormatValuesInterpretExpressions !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: 'google.protobuf.BoolValue',
                value: message.inputFormatValuesInterpretExpressions,
            }, writer.uint32(490).fork()).ldelim();
        }
        if (message.inputFormatDefaultsForOmittedFields !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: 'google.protobuf.BoolValue',
                value: message.inputFormatDefaultsForOmittedFields,
            }, writer.uint32(498).fork()).ldelim();
        }
        if (message.outputFormatJsonQuote64bitIntegers !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: 'google.protobuf.BoolValue',
                value: message.outputFormatJsonQuote64bitIntegers,
            }, writer.uint32(506).fork()).ldelim();
        }
        if (message.outputFormatJsonQuoteDenormals !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: 'google.protobuf.BoolValue',
                value: message.outputFormatJsonQuoteDenormals,
            }, writer.uint32(514).fork()).ldelim();
        }
        if (message.lowCardinalityAllowInNativeFormat !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: 'google.protobuf.BoolValue',
                value: message.lowCardinalityAllowInNativeFormat,
            }, writer.uint32(626).fork()).ldelim();
        }
        if (message.emptyResultForAggregationByEmptySet !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: 'google.protobuf.BoolValue',
                value: message.emptyResultForAggregationByEmptySet,
            }, writer.uint32(634).fork()).ldelim();
        }
        if (message.joinedSubqueryRequiresAlias !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: 'google.protobuf.BoolValue',
                value: message.joinedSubqueryRequiresAlias,
            }, writer.uint32(746).fork()).ldelim();
        }
        if (message.joinUseNulls !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: 'google.protobuf.BoolValue',
                value: message.joinUseNulls,
            }, writer.uint32(754).fork()).ldelim();
        }
        if (message.transformNullIn !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: 'google.protobuf.BoolValue',
                value: message.transformNullIn,
            }, writer.uint32(762).fork()).ldelim();
        }
        if (message.httpConnectionTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.httpConnectionTimeout,
            }, writer.uint32(522).fork()).ldelim();
        }
        if (message.httpReceiveTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.httpReceiveTimeout,
            }, writer.uint32(530).fork()).ldelim();
        }
        if (message.httpSendTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.httpSendTimeout,
            }, writer.uint32(538).fork()).ldelim();
        }
        if (message.enableHttpCompression !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: 'google.protobuf.BoolValue',
                value: message.enableHttpCompression,
            }, writer.uint32(546).fork()).ldelim();
        }
        if (message.sendProgressInHttpHeaders !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: 'google.protobuf.BoolValue',
                value: message.sendProgressInHttpHeaders,
            }, writer.uint32(554).fork()).ldelim();
        }
        if (message.httpHeadersProgressInterval !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.httpHeadersProgressInterval,
            }, writer.uint32(562).fork()).ldelim();
        }
        if (message.addHttpCorsHeader !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: 'google.protobuf.BoolValue',
                value: message.addHttpCorsHeader,
            }, writer.uint32(570).fork()).ldelim();
        }
        if (message.quotaMode !== 0) {
            writer.uint32(640).int32(message.quotaMode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserSettings };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.readonly = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.allowDdl = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.insertQuorum = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 39:
                    message.connectTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 40:
                    message.receiveTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 41:
                    message.sendTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.insertQuorumTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.selectSequentialConsistency = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.maxReplicaDelayForDistributedQueries =
                        wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.fallbackToStaleReplicasForDistributedQueries =
                        wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 42:
                    message.replicationAlterPartitionsSync = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 43:
                    message.distributedProductMode = reader.int32();
                    break;
                case 72:
                    message.distributedAggregationMemoryEfficient =
                        wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 73:
                    message.distributedDdlTaskTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 81:
                    message.skipUnavailableShards = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 44:
                    message.compile = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 45:
                    message.minCountToCompile = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 46:
                    message.compileExpressions = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 47:
                    message.minCountToCompileExpression = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.maxBlockSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 48:
                    message.minInsertBlockSizeRows = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 49:
                    message.minInsertBlockSizeBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.maxInsertBlockSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 50:
                    message.minBytesToUseDirectIo = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 51:
                    message.useUncompressedCache = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 52:
                    message.mergeTreeMaxRowsToUseCache = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 53:
                    message.mergeTreeMaxBytesToUseCache = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 54:
                    message.mergeTreeMinRowsForConcurrentRead =
                        wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 55:
                    message.mergeTreeMinBytesForConcurrentRead =
                        wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 74:
                    message.maxBytesBeforeExternalGroupBy = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 75:
                    message.maxBytesBeforeExternalSort = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 76:
                    message.groupByTwoLevelThreshold = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 77:
                    message.groupByTwoLevelThresholdBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 56:
                    message.priority = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.maxThreads = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.maxMemoryUsage = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.maxMemoryUsageForUser = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 57:
                    message.maxNetworkBandwidth = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 58:
                    message.maxNetworkBandwidthForUser = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 59:
                    message.forceIndexByDate = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 60:
                    message.forcePrimaryKey = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.maxRowsToRead = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 14:
                    message.maxBytesToRead = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 15:
                    message.readOverflowMode = reader.int32();
                    break;
                case 16:
                    message.maxRowsToGroupBy = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 17:
                    message.groupByOverflowMode = reader.int32();
                    break;
                case 18:
                    message.maxRowsToSort = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 19:
                    message.maxBytesToSort = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 20:
                    message.sortOverflowMode = reader.int32();
                    break;
                case 21:
                    message.maxResultRows = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 22:
                    message.maxResultBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 23:
                    message.resultOverflowMode = reader.int32();
                    break;
                case 24:
                    message.maxRowsInDistinct = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 25:
                    message.maxBytesInDistinct = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 26:
                    message.distinctOverflowMode = reader.int32();
                    break;
                case 27:
                    message.maxRowsToTransfer = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 28:
                    message.maxBytesToTransfer = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 29:
                    message.transferOverflowMode = reader.int32();
                    break;
                case 30:
                    message.maxExecutionTime = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 31:
                    message.timeoutOverflowMode = reader.int32();
                    break;
                case 87:
                    message.maxRowsInSet = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 88:
                    message.maxBytesInSet = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 89:
                    message.setOverflowMode = reader.int32();
                    break;
                case 90:
                    message.maxRowsInJoin = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 91:
                    message.maxBytesInJoin = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 92:
                    message.joinOverflowMode = reader.int32();
                    break;
                case 32:
                    message.maxColumnsToRead = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 33:
                    message.maxTemporaryColumns = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 34:
                    message.maxTemporaryNonConstColumns = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 35:
                    message.maxQuerySize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 36:
                    message.maxAstDepth = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 37:
                    message.maxAstElements = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 38:
                    message.maxExpandedAstElements = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 84:
                    message.minExecutionSpeed = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 85:
                    message.minExecutionSpeedBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 86:
                    message.countDistinctImplementation = reader.int32();
                    break;
                case 61:
                    message.inputFormatValuesInterpretExpressions =
                        wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 62:
                    message.inputFormatDefaultsForOmittedFields =
                        wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 63:
                    message.outputFormatJsonQuote64bitIntegers =
                        wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 64:
                    message.outputFormatJsonQuoteDenormals = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 78:
                    message.lowCardinalityAllowInNativeFormat =
                        wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 79:
                    message.emptyResultForAggregationByEmptySet =
                        wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 93:
                    message.joinedSubqueryRequiresAlias = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 94:
                    message.joinUseNulls = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 95:
                    message.transformNullIn = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 65:
                    message.httpConnectionTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 66:
                    message.httpReceiveTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 67:
                    message.httpSendTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 68:
                    message.enableHttpCompression = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 69:
                    message.sendProgressInHttpHeaders = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 70:
                    message.httpHeadersProgressInterval = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 71:
                    message.addHttpCorsHeader = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 80:
                    message.quotaMode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUserSettings };
        if (object.readonly !== undefined && object.readonly !== null) {
            message.readonly = Number(object.readonly);
        }
        else {
            message.readonly = undefined;
        }
        if (object.allowDdl !== undefined && object.allowDdl !== null) {
            message.allowDdl = Boolean(object.allowDdl);
        }
        else {
            message.allowDdl = undefined;
        }
        if (object.insertQuorum !== undefined && object.insertQuorum !== null) {
            message.insertQuorum = Number(object.insertQuorum);
        }
        else {
            message.insertQuorum = undefined;
        }
        if (object.connectTimeout !== undefined &&
            object.connectTimeout !== null) {
            message.connectTimeout = Number(object.connectTimeout);
        }
        else {
            message.connectTimeout = undefined;
        }
        if (object.receiveTimeout !== undefined &&
            object.receiveTimeout !== null) {
            message.receiveTimeout = Number(object.receiveTimeout);
        }
        else {
            message.receiveTimeout = undefined;
        }
        if (object.sendTimeout !== undefined && object.sendTimeout !== null) {
            message.sendTimeout = Number(object.sendTimeout);
        }
        else {
            message.sendTimeout = undefined;
        }
        if (object.insertQuorumTimeout !== undefined &&
            object.insertQuorumTimeout !== null) {
            message.insertQuorumTimeout = Number(object.insertQuorumTimeout);
        }
        else {
            message.insertQuorumTimeout = undefined;
        }
        if (object.selectSequentialConsistency !== undefined &&
            object.selectSequentialConsistency !== null) {
            message.selectSequentialConsistency = Boolean(object.selectSequentialConsistency);
        }
        else {
            message.selectSequentialConsistency = undefined;
        }
        if (object.maxReplicaDelayForDistributedQueries !== undefined &&
            object.maxReplicaDelayForDistributedQueries !== null) {
            message.maxReplicaDelayForDistributedQueries = Number(object.maxReplicaDelayForDistributedQueries);
        }
        else {
            message.maxReplicaDelayForDistributedQueries = undefined;
        }
        if (object.fallbackToStaleReplicasForDistributedQueries !== undefined &&
            object.fallbackToStaleReplicasForDistributedQueries !== null) {
            message.fallbackToStaleReplicasForDistributedQueries = Boolean(object.fallbackToStaleReplicasForDistributedQueries);
        }
        else {
            message.fallbackToStaleReplicasForDistributedQueries = undefined;
        }
        if (object.replicationAlterPartitionsSync !== undefined &&
            object.replicationAlterPartitionsSync !== null) {
            message.replicationAlterPartitionsSync = Number(object.replicationAlterPartitionsSync);
        }
        else {
            message.replicationAlterPartitionsSync = undefined;
        }
        if (object.distributedProductMode !== undefined &&
            object.distributedProductMode !== null) {
            message.distributedProductMode =
                userSettings_DistributedProductModeFromJSON(object.distributedProductMode);
        }
        else {
            message.distributedProductMode = 0;
        }
        if (object.distributedAggregationMemoryEfficient !== undefined &&
            object.distributedAggregationMemoryEfficient !== null) {
            message.distributedAggregationMemoryEfficient = Boolean(object.distributedAggregationMemoryEfficient);
        }
        else {
            message.distributedAggregationMemoryEfficient = undefined;
        }
        if (object.distributedDdlTaskTimeout !== undefined &&
            object.distributedDdlTaskTimeout !== null) {
            message.distributedDdlTaskTimeout = Number(object.distributedDdlTaskTimeout);
        }
        else {
            message.distributedDdlTaskTimeout = undefined;
        }
        if (object.skipUnavailableShards !== undefined &&
            object.skipUnavailableShards !== null) {
            message.skipUnavailableShards = Boolean(object.skipUnavailableShards);
        }
        else {
            message.skipUnavailableShards = undefined;
        }
        if (object.compile !== undefined && object.compile !== null) {
            message.compile = Boolean(object.compile);
        }
        else {
            message.compile = undefined;
        }
        if (object.minCountToCompile !== undefined &&
            object.minCountToCompile !== null) {
            message.minCountToCompile = Number(object.minCountToCompile);
        }
        else {
            message.minCountToCompile = undefined;
        }
        if (object.compileExpressions !== undefined &&
            object.compileExpressions !== null) {
            message.compileExpressions = Boolean(object.compileExpressions);
        }
        else {
            message.compileExpressions = undefined;
        }
        if (object.minCountToCompileExpression !== undefined &&
            object.minCountToCompileExpression !== null) {
            message.minCountToCompileExpression = Number(object.minCountToCompileExpression);
        }
        else {
            message.minCountToCompileExpression = undefined;
        }
        if (object.maxBlockSize !== undefined && object.maxBlockSize !== null) {
            message.maxBlockSize = Number(object.maxBlockSize);
        }
        else {
            message.maxBlockSize = undefined;
        }
        if (object.minInsertBlockSizeRows !== undefined &&
            object.minInsertBlockSizeRows !== null) {
            message.minInsertBlockSizeRows = Number(object.minInsertBlockSizeRows);
        }
        else {
            message.minInsertBlockSizeRows = undefined;
        }
        if (object.minInsertBlockSizeBytes !== undefined &&
            object.minInsertBlockSizeBytes !== null) {
            message.minInsertBlockSizeBytes = Number(object.minInsertBlockSizeBytes);
        }
        else {
            message.minInsertBlockSizeBytes = undefined;
        }
        if (object.maxInsertBlockSize !== undefined &&
            object.maxInsertBlockSize !== null) {
            message.maxInsertBlockSize = Number(object.maxInsertBlockSize);
        }
        else {
            message.maxInsertBlockSize = undefined;
        }
        if (object.minBytesToUseDirectIo !== undefined &&
            object.minBytesToUseDirectIo !== null) {
            message.minBytesToUseDirectIo = Number(object.minBytesToUseDirectIo);
        }
        else {
            message.minBytesToUseDirectIo = undefined;
        }
        if (object.useUncompressedCache !== undefined &&
            object.useUncompressedCache !== null) {
            message.useUncompressedCache = Boolean(object.useUncompressedCache);
        }
        else {
            message.useUncompressedCache = undefined;
        }
        if (object.mergeTreeMaxRowsToUseCache !== undefined &&
            object.mergeTreeMaxRowsToUseCache !== null) {
            message.mergeTreeMaxRowsToUseCache = Number(object.mergeTreeMaxRowsToUseCache);
        }
        else {
            message.mergeTreeMaxRowsToUseCache = undefined;
        }
        if (object.mergeTreeMaxBytesToUseCache !== undefined &&
            object.mergeTreeMaxBytesToUseCache !== null) {
            message.mergeTreeMaxBytesToUseCache = Number(object.mergeTreeMaxBytesToUseCache);
        }
        else {
            message.mergeTreeMaxBytesToUseCache = undefined;
        }
        if (object.mergeTreeMinRowsForConcurrentRead !== undefined &&
            object.mergeTreeMinRowsForConcurrentRead !== null) {
            message.mergeTreeMinRowsForConcurrentRead = Number(object.mergeTreeMinRowsForConcurrentRead);
        }
        else {
            message.mergeTreeMinRowsForConcurrentRead = undefined;
        }
        if (object.mergeTreeMinBytesForConcurrentRead !== undefined &&
            object.mergeTreeMinBytesForConcurrentRead !== null) {
            message.mergeTreeMinBytesForConcurrentRead = Number(object.mergeTreeMinBytesForConcurrentRead);
        }
        else {
            message.mergeTreeMinBytesForConcurrentRead = undefined;
        }
        if (object.maxBytesBeforeExternalGroupBy !== undefined &&
            object.maxBytesBeforeExternalGroupBy !== null) {
            message.maxBytesBeforeExternalGroupBy = Number(object.maxBytesBeforeExternalGroupBy);
        }
        else {
            message.maxBytesBeforeExternalGroupBy = undefined;
        }
        if (object.maxBytesBeforeExternalSort !== undefined &&
            object.maxBytesBeforeExternalSort !== null) {
            message.maxBytesBeforeExternalSort = Number(object.maxBytesBeforeExternalSort);
        }
        else {
            message.maxBytesBeforeExternalSort = undefined;
        }
        if (object.groupByTwoLevelThreshold !== undefined &&
            object.groupByTwoLevelThreshold !== null) {
            message.groupByTwoLevelThreshold = Number(object.groupByTwoLevelThreshold);
        }
        else {
            message.groupByTwoLevelThreshold = undefined;
        }
        if (object.groupByTwoLevelThresholdBytes !== undefined &&
            object.groupByTwoLevelThresholdBytes !== null) {
            message.groupByTwoLevelThresholdBytes = Number(object.groupByTwoLevelThresholdBytes);
        }
        else {
            message.groupByTwoLevelThresholdBytes = undefined;
        }
        if (object.priority !== undefined && object.priority !== null) {
            message.priority = Number(object.priority);
        }
        else {
            message.priority = undefined;
        }
        if (object.maxThreads !== undefined && object.maxThreads !== null) {
            message.maxThreads = Number(object.maxThreads);
        }
        else {
            message.maxThreads = undefined;
        }
        if (object.maxMemoryUsage !== undefined &&
            object.maxMemoryUsage !== null) {
            message.maxMemoryUsage = Number(object.maxMemoryUsage);
        }
        else {
            message.maxMemoryUsage = undefined;
        }
        if (object.maxMemoryUsageForUser !== undefined &&
            object.maxMemoryUsageForUser !== null) {
            message.maxMemoryUsageForUser = Number(object.maxMemoryUsageForUser);
        }
        else {
            message.maxMemoryUsageForUser = undefined;
        }
        if (object.maxNetworkBandwidth !== undefined &&
            object.maxNetworkBandwidth !== null) {
            message.maxNetworkBandwidth = Number(object.maxNetworkBandwidth);
        }
        else {
            message.maxNetworkBandwidth = undefined;
        }
        if (object.maxNetworkBandwidthForUser !== undefined &&
            object.maxNetworkBandwidthForUser !== null) {
            message.maxNetworkBandwidthForUser = Number(object.maxNetworkBandwidthForUser);
        }
        else {
            message.maxNetworkBandwidthForUser = undefined;
        }
        if (object.forceIndexByDate !== undefined &&
            object.forceIndexByDate !== null) {
            message.forceIndexByDate = Boolean(object.forceIndexByDate);
        }
        else {
            message.forceIndexByDate = undefined;
        }
        if (object.forcePrimaryKey !== undefined &&
            object.forcePrimaryKey !== null) {
            message.forcePrimaryKey = Boolean(object.forcePrimaryKey);
        }
        else {
            message.forcePrimaryKey = undefined;
        }
        if (object.maxRowsToRead !== undefined &&
            object.maxRowsToRead !== null) {
            message.maxRowsToRead = Number(object.maxRowsToRead);
        }
        else {
            message.maxRowsToRead = undefined;
        }
        if (object.maxBytesToRead !== undefined &&
            object.maxBytesToRead !== null) {
            message.maxBytesToRead = Number(object.maxBytesToRead);
        }
        else {
            message.maxBytesToRead = undefined;
        }
        if (object.readOverflowMode !== undefined &&
            object.readOverflowMode !== null) {
            message.readOverflowMode = userSettings_OverflowModeFromJSON(object.readOverflowMode);
        }
        else {
            message.readOverflowMode = 0;
        }
        if (object.maxRowsToGroupBy !== undefined &&
            object.maxRowsToGroupBy !== null) {
            message.maxRowsToGroupBy = Number(object.maxRowsToGroupBy);
        }
        else {
            message.maxRowsToGroupBy = undefined;
        }
        if (object.groupByOverflowMode !== undefined &&
            object.groupByOverflowMode !== null) {
            message.groupByOverflowMode =
                userSettings_GroupByOverflowModeFromJSON(object.groupByOverflowMode);
        }
        else {
            message.groupByOverflowMode = 0;
        }
        if (object.maxRowsToSort !== undefined &&
            object.maxRowsToSort !== null) {
            message.maxRowsToSort = Number(object.maxRowsToSort);
        }
        else {
            message.maxRowsToSort = undefined;
        }
        if (object.maxBytesToSort !== undefined &&
            object.maxBytesToSort !== null) {
            message.maxBytesToSort = Number(object.maxBytesToSort);
        }
        else {
            message.maxBytesToSort = undefined;
        }
        if (object.sortOverflowMode !== undefined &&
            object.sortOverflowMode !== null) {
            message.sortOverflowMode = userSettings_OverflowModeFromJSON(object.sortOverflowMode);
        }
        else {
            message.sortOverflowMode = 0;
        }
        if (object.maxResultRows !== undefined &&
            object.maxResultRows !== null) {
            message.maxResultRows = Number(object.maxResultRows);
        }
        else {
            message.maxResultRows = undefined;
        }
        if (object.maxResultBytes !== undefined &&
            object.maxResultBytes !== null) {
            message.maxResultBytes = Number(object.maxResultBytes);
        }
        else {
            message.maxResultBytes = undefined;
        }
        if (object.resultOverflowMode !== undefined &&
            object.resultOverflowMode !== null) {
            message.resultOverflowMode = userSettings_OverflowModeFromJSON(object.resultOverflowMode);
        }
        else {
            message.resultOverflowMode = 0;
        }
        if (object.maxRowsInDistinct !== undefined &&
            object.maxRowsInDistinct !== null) {
            message.maxRowsInDistinct = Number(object.maxRowsInDistinct);
        }
        else {
            message.maxRowsInDistinct = undefined;
        }
        if (object.maxBytesInDistinct !== undefined &&
            object.maxBytesInDistinct !== null) {
            message.maxBytesInDistinct = Number(object.maxBytesInDistinct);
        }
        else {
            message.maxBytesInDistinct = undefined;
        }
        if (object.distinctOverflowMode !== undefined &&
            object.distinctOverflowMode !== null) {
            message.distinctOverflowMode = userSettings_OverflowModeFromJSON(object.distinctOverflowMode);
        }
        else {
            message.distinctOverflowMode = 0;
        }
        if (object.maxRowsToTransfer !== undefined &&
            object.maxRowsToTransfer !== null) {
            message.maxRowsToTransfer = Number(object.maxRowsToTransfer);
        }
        else {
            message.maxRowsToTransfer = undefined;
        }
        if (object.maxBytesToTransfer !== undefined &&
            object.maxBytesToTransfer !== null) {
            message.maxBytesToTransfer = Number(object.maxBytesToTransfer);
        }
        else {
            message.maxBytesToTransfer = undefined;
        }
        if (object.transferOverflowMode !== undefined &&
            object.transferOverflowMode !== null) {
            message.transferOverflowMode = userSettings_OverflowModeFromJSON(object.transferOverflowMode);
        }
        else {
            message.transferOverflowMode = 0;
        }
        if (object.maxExecutionTime !== undefined &&
            object.maxExecutionTime !== null) {
            message.maxExecutionTime = Number(object.maxExecutionTime);
        }
        else {
            message.maxExecutionTime = undefined;
        }
        if (object.timeoutOverflowMode !== undefined &&
            object.timeoutOverflowMode !== null) {
            message.timeoutOverflowMode = userSettings_OverflowModeFromJSON(object.timeoutOverflowMode);
        }
        else {
            message.timeoutOverflowMode = 0;
        }
        if (object.maxRowsInSet !== undefined && object.maxRowsInSet !== null) {
            message.maxRowsInSet = Number(object.maxRowsInSet);
        }
        else {
            message.maxRowsInSet = undefined;
        }
        if (object.maxBytesInSet !== undefined &&
            object.maxBytesInSet !== null) {
            message.maxBytesInSet = Number(object.maxBytesInSet);
        }
        else {
            message.maxBytesInSet = undefined;
        }
        if (object.setOverflowMode !== undefined &&
            object.setOverflowMode !== null) {
            message.setOverflowMode = userSettings_OverflowModeFromJSON(object.setOverflowMode);
        }
        else {
            message.setOverflowMode = 0;
        }
        if (object.maxRowsInJoin !== undefined &&
            object.maxRowsInJoin !== null) {
            message.maxRowsInJoin = Number(object.maxRowsInJoin);
        }
        else {
            message.maxRowsInJoin = undefined;
        }
        if (object.maxBytesInJoin !== undefined &&
            object.maxBytesInJoin !== null) {
            message.maxBytesInJoin = Number(object.maxBytesInJoin);
        }
        else {
            message.maxBytesInJoin = undefined;
        }
        if (object.joinOverflowMode !== undefined &&
            object.joinOverflowMode !== null) {
            message.joinOverflowMode = userSettings_OverflowModeFromJSON(object.joinOverflowMode);
        }
        else {
            message.joinOverflowMode = 0;
        }
        if (object.maxColumnsToRead !== undefined &&
            object.maxColumnsToRead !== null) {
            message.maxColumnsToRead = Number(object.maxColumnsToRead);
        }
        else {
            message.maxColumnsToRead = undefined;
        }
        if (object.maxTemporaryColumns !== undefined &&
            object.maxTemporaryColumns !== null) {
            message.maxTemporaryColumns = Number(object.maxTemporaryColumns);
        }
        else {
            message.maxTemporaryColumns = undefined;
        }
        if (object.maxTemporaryNonConstColumns !== undefined &&
            object.maxTemporaryNonConstColumns !== null) {
            message.maxTemporaryNonConstColumns = Number(object.maxTemporaryNonConstColumns);
        }
        else {
            message.maxTemporaryNonConstColumns = undefined;
        }
        if (object.maxQuerySize !== undefined && object.maxQuerySize !== null) {
            message.maxQuerySize = Number(object.maxQuerySize);
        }
        else {
            message.maxQuerySize = undefined;
        }
        if (object.maxAstDepth !== undefined && object.maxAstDepth !== null) {
            message.maxAstDepth = Number(object.maxAstDepth);
        }
        else {
            message.maxAstDepth = undefined;
        }
        if (object.maxAstElements !== undefined &&
            object.maxAstElements !== null) {
            message.maxAstElements = Number(object.maxAstElements);
        }
        else {
            message.maxAstElements = undefined;
        }
        if (object.maxExpandedAstElements !== undefined &&
            object.maxExpandedAstElements !== null) {
            message.maxExpandedAstElements = Number(object.maxExpandedAstElements);
        }
        else {
            message.maxExpandedAstElements = undefined;
        }
        if (object.minExecutionSpeed !== undefined &&
            object.minExecutionSpeed !== null) {
            message.minExecutionSpeed = Number(object.minExecutionSpeed);
        }
        else {
            message.minExecutionSpeed = undefined;
        }
        if (object.minExecutionSpeedBytes !== undefined &&
            object.minExecutionSpeedBytes !== null) {
            message.minExecutionSpeedBytes = Number(object.minExecutionSpeedBytes);
        }
        else {
            message.minExecutionSpeedBytes = undefined;
        }
        if (object.countDistinctImplementation !== undefined &&
            object.countDistinctImplementation !== null) {
            message.countDistinctImplementation =
                userSettings_CountDistinctImplementationFromJSON(object.countDistinctImplementation);
        }
        else {
            message.countDistinctImplementation = 0;
        }
        if (object.inputFormatValuesInterpretExpressions !== undefined &&
            object.inputFormatValuesInterpretExpressions !== null) {
            message.inputFormatValuesInterpretExpressions = Boolean(object.inputFormatValuesInterpretExpressions);
        }
        else {
            message.inputFormatValuesInterpretExpressions = undefined;
        }
        if (object.inputFormatDefaultsForOmittedFields !== undefined &&
            object.inputFormatDefaultsForOmittedFields !== null) {
            message.inputFormatDefaultsForOmittedFields = Boolean(object.inputFormatDefaultsForOmittedFields);
        }
        else {
            message.inputFormatDefaultsForOmittedFields = undefined;
        }
        if (object.outputFormatJsonQuote64bitIntegers !== undefined &&
            object.outputFormatJsonQuote64bitIntegers !== null) {
            message.outputFormatJsonQuote64bitIntegers = Boolean(object.outputFormatJsonQuote64bitIntegers);
        }
        else {
            message.outputFormatJsonQuote64bitIntegers = undefined;
        }
        if (object.outputFormatJsonQuoteDenormals !== undefined &&
            object.outputFormatJsonQuoteDenormals !== null) {
            message.outputFormatJsonQuoteDenormals = Boolean(object.outputFormatJsonQuoteDenormals);
        }
        else {
            message.outputFormatJsonQuoteDenormals = undefined;
        }
        if (object.lowCardinalityAllowInNativeFormat !== undefined &&
            object.lowCardinalityAllowInNativeFormat !== null) {
            message.lowCardinalityAllowInNativeFormat = Boolean(object.lowCardinalityAllowInNativeFormat);
        }
        else {
            message.lowCardinalityAllowInNativeFormat = undefined;
        }
        if (object.emptyResultForAggregationByEmptySet !== undefined &&
            object.emptyResultForAggregationByEmptySet !== null) {
            message.emptyResultForAggregationByEmptySet = Boolean(object.emptyResultForAggregationByEmptySet);
        }
        else {
            message.emptyResultForAggregationByEmptySet = undefined;
        }
        if (object.joinedSubqueryRequiresAlias !== undefined &&
            object.joinedSubqueryRequiresAlias !== null) {
            message.joinedSubqueryRequiresAlias = Boolean(object.joinedSubqueryRequiresAlias);
        }
        else {
            message.joinedSubqueryRequiresAlias = undefined;
        }
        if (object.joinUseNulls !== undefined && object.joinUseNulls !== null) {
            message.joinUseNulls = Boolean(object.joinUseNulls);
        }
        else {
            message.joinUseNulls = undefined;
        }
        if (object.transformNullIn !== undefined &&
            object.transformNullIn !== null) {
            message.transformNullIn = Boolean(object.transformNullIn);
        }
        else {
            message.transformNullIn = undefined;
        }
        if (object.httpConnectionTimeout !== undefined &&
            object.httpConnectionTimeout !== null) {
            message.httpConnectionTimeout = Number(object.httpConnectionTimeout);
        }
        else {
            message.httpConnectionTimeout = undefined;
        }
        if (object.httpReceiveTimeout !== undefined &&
            object.httpReceiveTimeout !== null) {
            message.httpReceiveTimeout = Number(object.httpReceiveTimeout);
        }
        else {
            message.httpReceiveTimeout = undefined;
        }
        if (object.httpSendTimeout !== undefined &&
            object.httpSendTimeout !== null) {
            message.httpSendTimeout = Number(object.httpSendTimeout);
        }
        else {
            message.httpSendTimeout = undefined;
        }
        if (object.enableHttpCompression !== undefined &&
            object.enableHttpCompression !== null) {
            message.enableHttpCompression = Boolean(object.enableHttpCompression);
        }
        else {
            message.enableHttpCompression = undefined;
        }
        if (object.sendProgressInHttpHeaders !== undefined &&
            object.sendProgressInHttpHeaders !== null) {
            message.sendProgressInHttpHeaders = Boolean(object.sendProgressInHttpHeaders);
        }
        else {
            message.sendProgressInHttpHeaders = undefined;
        }
        if (object.httpHeadersProgressInterval !== undefined &&
            object.httpHeadersProgressInterval !== null) {
            message.httpHeadersProgressInterval = Number(object.httpHeadersProgressInterval);
        }
        else {
            message.httpHeadersProgressInterval = undefined;
        }
        if (object.addHttpCorsHeader !== undefined &&
            object.addHttpCorsHeader !== null) {
            message.addHttpCorsHeader = Boolean(object.addHttpCorsHeader);
        }
        else {
            message.addHttpCorsHeader = undefined;
        }
        if (object.quotaMode !== undefined && object.quotaMode !== null) {
            message.quotaMode = userSettings_QuotaModeFromJSON(object.quotaMode);
        }
        else {
            message.quotaMode = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.readonly !== undefined && (obj.readonly = message.readonly);
        message.allowDdl !== undefined && (obj.allowDdl = message.allowDdl);
        message.insertQuorum !== undefined &&
            (obj.insertQuorum = message.insertQuorum);
        message.connectTimeout !== undefined &&
            (obj.connectTimeout = message.connectTimeout);
        message.receiveTimeout !== undefined &&
            (obj.receiveTimeout = message.receiveTimeout);
        message.sendTimeout !== undefined &&
            (obj.sendTimeout = message.sendTimeout);
        message.insertQuorumTimeout !== undefined &&
            (obj.insertQuorumTimeout = message.insertQuorumTimeout);
        message.selectSequentialConsistency !== undefined &&
            (obj.selectSequentialConsistency =
                message.selectSequentialConsistency);
        message.maxReplicaDelayForDistributedQueries !== undefined &&
            (obj.maxReplicaDelayForDistributedQueries =
                message.maxReplicaDelayForDistributedQueries);
        message.fallbackToStaleReplicasForDistributedQueries !== undefined &&
            (obj.fallbackToStaleReplicasForDistributedQueries =
                message.fallbackToStaleReplicasForDistributedQueries);
        message.replicationAlterPartitionsSync !== undefined &&
            (obj.replicationAlterPartitionsSync =
                message.replicationAlterPartitionsSync);
        message.distributedProductMode !== undefined &&
            (obj.distributedProductMode =
                userSettings_DistributedProductModeToJSON(message.distributedProductMode));
        message.distributedAggregationMemoryEfficient !== undefined &&
            (obj.distributedAggregationMemoryEfficient =
                message.distributedAggregationMemoryEfficient);
        message.distributedDdlTaskTimeout !== undefined &&
            (obj.distributedDdlTaskTimeout = message.distributedDdlTaskTimeout);
        message.skipUnavailableShards !== undefined &&
            (obj.skipUnavailableShards = message.skipUnavailableShards);
        message.compile !== undefined && (obj.compile = message.compile);
        message.minCountToCompile !== undefined &&
            (obj.minCountToCompile = message.minCountToCompile);
        message.compileExpressions !== undefined &&
            (obj.compileExpressions = message.compileExpressions);
        message.minCountToCompileExpression !== undefined &&
            (obj.minCountToCompileExpression =
                message.minCountToCompileExpression);
        message.maxBlockSize !== undefined &&
            (obj.maxBlockSize = message.maxBlockSize);
        message.minInsertBlockSizeRows !== undefined &&
            (obj.minInsertBlockSizeRows = message.minInsertBlockSizeRows);
        message.minInsertBlockSizeBytes !== undefined &&
            (obj.minInsertBlockSizeBytes = message.minInsertBlockSizeBytes);
        message.maxInsertBlockSize !== undefined &&
            (obj.maxInsertBlockSize = message.maxInsertBlockSize);
        message.minBytesToUseDirectIo !== undefined &&
            (obj.minBytesToUseDirectIo = message.minBytesToUseDirectIo);
        message.useUncompressedCache !== undefined &&
            (obj.useUncompressedCache = message.useUncompressedCache);
        message.mergeTreeMaxRowsToUseCache !== undefined &&
            (obj.mergeTreeMaxRowsToUseCache =
                message.mergeTreeMaxRowsToUseCache);
        message.mergeTreeMaxBytesToUseCache !== undefined &&
            (obj.mergeTreeMaxBytesToUseCache =
                message.mergeTreeMaxBytesToUseCache);
        message.mergeTreeMinRowsForConcurrentRead !== undefined &&
            (obj.mergeTreeMinRowsForConcurrentRead =
                message.mergeTreeMinRowsForConcurrentRead);
        message.mergeTreeMinBytesForConcurrentRead !== undefined &&
            (obj.mergeTreeMinBytesForConcurrentRead =
                message.mergeTreeMinBytesForConcurrentRead);
        message.maxBytesBeforeExternalGroupBy !== undefined &&
            (obj.maxBytesBeforeExternalGroupBy =
                message.maxBytesBeforeExternalGroupBy);
        message.maxBytesBeforeExternalSort !== undefined &&
            (obj.maxBytesBeforeExternalSort =
                message.maxBytesBeforeExternalSort);
        message.groupByTwoLevelThreshold !== undefined &&
            (obj.groupByTwoLevelThreshold = message.groupByTwoLevelThreshold);
        message.groupByTwoLevelThresholdBytes !== undefined &&
            (obj.groupByTwoLevelThresholdBytes =
                message.groupByTwoLevelThresholdBytes);
        message.priority !== undefined && (obj.priority = message.priority);
        message.maxThreads !== undefined &&
            (obj.maxThreads = message.maxThreads);
        message.maxMemoryUsage !== undefined &&
            (obj.maxMemoryUsage = message.maxMemoryUsage);
        message.maxMemoryUsageForUser !== undefined &&
            (obj.maxMemoryUsageForUser = message.maxMemoryUsageForUser);
        message.maxNetworkBandwidth !== undefined &&
            (obj.maxNetworkBandwidth = message.maxNetworkBandwidth);
        message.maxNetworkBandwidthForUser !== undefined &&
            (obj.maxNetworkBandwidthForUser =
                message.maxNetworkBandwidthForUser);
        message.forceIndexByDate !== undefined &&
            (obj.forceIndexByDate = message.forceIndexByDate);
        message.forcePrimaryKey !== undefined &&
            (obj.forcePrimaryKey = message.forcePrimaryKey);
        message.maxRowsToRead !== undefined &&
            (obj.maxRowsToRead = message.maxRowsToRead);
        message.maxBytesToRead !== undefined &&
            (obj.maxBytesToRead = message.maxBytesToRead);
        message.readOverflowMode !== undefined &&
            (obj.readOverflowMode = userSettings_OverflowModeToJSON(message.readOverflowMode));
        message.maxRowsToGroupBy !== undefined &&
            (obj.maxRowsToGroupBy = message.maxRowsToGroupBy);
        message.groupByOverflowMode !== undefined &&
            (obj.groupByOverflowMode = userSettings_GroupByOverflowModeToJSON(message.groupByOverflowMode));
        message.maxRowsToSort !== undefined &&
            (obj.maxRowsToSort = message.maxRowsToSort);
        message.maxBytesToSort !== undefined &&
            (obj.maxBytesToSort = message.maxBytesToSort);
        message.sortOverflowMode !== undefined &&
            (obj.sortOverflowMode = userSettings_OverflowModeToJSON(message.sortOverflowMode));
        message.maxResultRows !== undefined &&
            (obj.maxResultRows = message.maxResultRows);
        message.maxResultBytes !== undefined &&
            (obj.maxResultBytes = message.maxResultBytes);
        message.resultOverflowMode !== undefined &&
            (obj.resultOverflowMode = userSettings_OverflowModeToJSON(message.resultOverflowMode));
        message.maxRowsInDistinct !== undefined &&
            (obj.maxRowsInDistinct = message.maxRowsInDistinct);
        message.maxBytesInDistinct !== undefined &&
            (obj.maxBytesInDistinct = message.maxBytesInDistinct);
        message.distinctOverflowMode !== undefined &&
            (obj.distinctOverflowMode = userSettings_OverflowModeToJSON(message.distinctOverflowMode));
        message.maxRowsToTransfer !== undefined &&
            (obj.maxRowsToTransfer = message.maxRowsToTransfer);
        message.maxBytesToTransfer !== undefined &&
            (obj.maxBytesToTransfer = message.maxBytesToTransfer);
        message.transferOverflowMode !== undefined &&
            (obj.transferOverflowMode = userSettings_OverflowModeToJSON(message.transferOverflowMode));
        message.maxExecutionTime !== undefined &&
            (obj.maxExecutionTime = message.maxExecutionTime);
        message.timeoutOverflowMode !== undefined &&
            (obj.timeoutOverflowMode = userSettings_OverflowModeToJSON(message.timeoutOverflowMode));
        message.maxRowsInSet !== undefined &&
            (obj.maxRowsInSet = message.maxRowsInSet);
        message.maxBytesInSet !== undefined &&
            (obj.maxBytesInSet = message.maxBytesInSet);
        message.setOverflowMode !== undefined &&
            (obj.setOverflowMode = userSettings_OverflowModeToJSON(message.setOverflowMode));
        message.maxRowsInJoin !== undefined &&
            (obj.maxRowsInJoin = message.maxRowsInJoin);
        message.maxBytesInJoin !== undefined &&
            (obj.maxBytesInJoin = message.maxBytesInJoin);
        message.joinOverflowMode !== undefined &&
            (obj.joinOverflowMode = userSettings_OverflowModeToJSON(message.joinOverflowMode));
        message.maxColumnsToRead !== undefined &&
            (obj.maxColumnsToRead = message.maxColumnsToRead);
        message.maxTemporaryColumns !== undefined &&
            (obj.maxTemporaryColumns = message.maxTemporaryColumns);
        message.maxTemporaryNonConstColumns !== undefined &&
            (obj.maxTemporaryNonConstColumns =
                message.maxTemporaryNonConstColumns);
        message.maxQuerySize !== undefined &&
            (obj.maxQuerySize = message.maxQuerySize);
        message.maxAstDepth !== undefined &&
            (obj.maxAstDepth = message.maxAstDepth);
        message.maxAstElements !== undefined &&
            (obj.maxAstElements = message.maxAstElements);
        message.maxExpandedAstElements !== undefined &&
            (obj.maxExpandedAstElements = message.maxExpandedAstElements);
        message.minExecutionSpeed !== undefined &&
            (obj.minExecutionSpeed = message.minExecutionSpeed);
        message.minExecutionSpeedBytes !== undefined &&
            (obj.minExecutionSpeedBytes = message.minExecutionSpeedBytes);
        message.countDistinctImplementation !== undefined &&
            (obj.countDistinctImplementation =
                userSettings_CountDistinctImplementationToJSON(message.countDistinctImplementation));
        message.inputFormatValuesInterpretExpressions !== undefined &&
            (obj.inputFormatValuesInterpretExpressions =
                message.inputFormatValuesInterpretExpressions);
        message.inputFormatDefaultsForOmittedFields !== undefined &&
            (obj.inputFormatDefaultsForOmittedFields =
                message.inputFormatDefaultsForOmittedFields);
        message.outputFormatJsonQuote64bitIntegers !== undefined &&
            (obj.outputFormatJsonQuote64bitIntegers =
                message.outputFormatJsonQuote64bitIntegers);
        message.outputFormatJsonQuoteDenormals !== undefined &&
            (obj.outputFormatJsonQuoteDenormals =
                message.outputFormatJsonQuoteDenormals);
        message.lowCardinalityAllowInNativeFormat !== undefined &&
            (obj.lowCardinalityAllowInNativeFormat =
                message.lowCardinalityAllowInNativeFormat);
        message.emptyResultForAggregationByEmptySet !== undefined &&
            (obj.emptyResultForAggregationByEmptySet =
                message.emptyResultForAggregationByEmptySet);
        message.joinedSubqueryRequiresAlias !== undefined &&
            (obj.joinedSubqueryRequiresAlias =
                message.joinedSubqueryRequiresAlias);
        message.joinUseNulls !== undefined &&
            (obj.joinUseNulls = message.joinUseNulls);
        message.transformNullIn !== undefined &&
            (obj.transformNullIn = message.transformNullIn);
        message.httpConnectionTimeout !== undefined &&
            (obj.httpConnectionTimeout = message.httpConnectionTimeout);
        message.httpReceiveTimeout !== undefined &&
            (obj.httpReceiveTimeout = message.httpReceiveTimeout);
        message.httpSendTimeout !== undefined &&
            (obj.httpSendTimeout = message.httpSendTimeout);
        message.enableHttpCompression !== undefined &&
            (obj.enableHttpCompression = message.enableHttpCompression);
        message.sendProgressInHttpHeaders !== undefined &&
            (obj.sendProgressInHttpHeaders = message.sendProgressInHttpHeaders);
        message.httpHeadersProgressInterval !== undefined &&
            (obj.httpHeadersProgressInterval =
                message.httpHeadersProgressInterval);
        message.addHttpCorsHeader !== undefined &&
            (obj.addHttpCorsHeader = message.addHttpCorsHeader);
        message.quotaMode !== undefined &&
            (obj.quotaMode = userSettings_QuotaModeToJSON(message.quotaMode));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUserSettings };
        if (object.readonly !== undefined && object.readonly !== null) {
            message.readonly = object.readonly;
        }
        else {
            message.readonly = undefined;
        }
        if (object.allowDdl !== undefined && object.allowDdl !== null) {
            message.allowDdl = object.allowDdl;
        }
        else {
            message.allowDdl = undefined;
        }
        if (object.insertQuorum !== undefined && object.insertQuorum !== null) {
            message.insertQuorum = object.insertQuorum;
        }
        else {
            message.insertQuorum = undefined;
        }
        if (object.connectTimeout !== undefined &&
            object.connectTimeout !== null) {
            message.connectTimeout = object.connectTimeout;
        }
        else {
            message.connectTimeout = undefined;
        }
        if (object.receiveTimeout !== undefined &&
            object.receiveTimeout !== null) {
            message.receiveTimeout = object.receiveTimeout;
        }
        else {
            message.receiveTimeout = undefined;
        }
        if (object.sendTimeout !== undefined && object.sendTimeout !== null) {
            message.sendTimeout = object.sendTimeout;
        }
        else {
            message.sendTimeout = undefined;
        }
        if (object.insertQuorumTimeout !== undefined &&
            object.insertQuorumTimeout !== null) {
            message.insertQuorumTimeout = object.insertQuorumTimeout;
        }
        else {
            message.insertQuorumTimeout = undefined;
        }
        if (object.selectSequentialConsistency !== undefined &&
            object.selectSequentialConsistency !== null) {
            message.selectSequentialConsistency =
                object.selectSequentialConsistency;
        }
        else {
            message.selectSequentialConsistency = undefined;
        }
        if (object.maxReplicaDelayForDistributedQueries !== undefined &&
            object.maxReplicaDelayForDistributedQueries !== null) {
            message.maxReplicaDelayForDistributedQueries =
                object.maxReplicaDelayForDistributedQueries;
        }
        else {
            message.maxReplicaDelayForDistributedQueries = undefined;
        }
        if (object.fallbackToStaleReplicasForDistributedQueries !== undefined &&
            object.fallbackToStaleReplicasForDistributedQueries !== null) {
            message.fallbackToStaleReplicasForDistributedQueries =
                object.fallbackToStaleReplicasForDistributedQueries;
        }
        else {
            message.fallbackToStaleReplicasForDistributedQueries = undefined;
        }
        if (object.replicationAlterPartitionsSync !== undefined &&
            object.replicationAlterPartitionsSync !== null) {
            message.replicationAlterPartitionsSync =
                object.replicationAlterPartitionsSync;
        }
        else {
            message.replicationAlterPartitionsSync = undefined;
        }
        if (object.distributedProductMode !== undefined &&
            object.distributedProductMode !== null) {
            message.distributedProductMode = object.distributedProductMode;
        }
        else {
            message.distributedProductMode = 0;
        }
        if (object.distributedAggregationMemoryEfficient !== undefined &&
            object.distributedAggregationMemoryEfficient !== null) {
            message.distributedAggregationMemoryEfficient =
                object.distributedAggregationMemoryEfficient;
        }
        else {
            message.distributedAggregationMemoryEfficient = undefined;
        }
        if (object.distributedDdlTaskTimeout !== undefined &&
            object.distributedDdlTaskTimeout !== null) {
            message.distributedDdlTaskTimeout =
                object.distributedDdlTaskTimeout;
        }
        else {
            message.distributedDdlTaskTimeout = undefined;
        }
        if (object.skipUnavailableShards !== undefined &&
            object.skipUnavailableShards !== null) {
            message.skipUnavailableShards = object.skipUnavailableShards;
        }
        else {
            message.skipUnavailableShards = undefined;
        }
        if (object.compile !== undefined && object.compile !== null) {
            message.compile = object.compile;
        }
        else {
            message.compile = undefined;
        }
        if (object.minCountToCompile !== undefined &&
            object.minCountToCompile !== null) {
            message.minCountToCompile = object.minCountToCompile;
        }
        else {
            message.minCountToCompile = undefined;
        }
        if (object.compileExpressions !== undefined &&
            object.compileExpressions !== null) {
            message.compileExpressions = object.compileExpressions;
        }
        else {
            message.compileExpressions = undefined;
        }
        if (object.minCountToCompileExpression !== undefined &&
            object.minCountToCompileExpression !== null) {
            message.minCountToCompileExpression =
                object.minCountToCompileExpression;
        }
        else {
            message.minCountToCompileExpression = undefined;
        }
        if (object.maxBlockSize !== undefined && object.maxBlockSize !== null) {
            message.maxBlockSize = object.maxBlockSize;
        }
        else {
            message.maxBlockSize = undefined;
        }
        if (object.minInsertBlockSizeRows !== undefined &&
            object.minInsertBlockSizeRows !== null) {
            message.minInsertBlockSizeRows = object.minInsertBlockSizeRows;
        }
        else {
            message.minInsertBlockSizeRows = undefined;
        }
        if (object.minInsertBlockSizeBytes !== undefined &&
            object.minInsertBlockSizeBytes !== null) {
            message.minInsertBlockSizeBytes = object.minInsertBlockSizeBytes;
        }
        else {
            message.minInsertBlockSizeBytes = undefined;
        }
        if (object.maxInsertBlockSize !== undefined &&
            object.maxInsertBlockSize !== null) {
            message.maxInsertBlockSize = object.maxInsertBlockSize;
        }
        else {
            message.maxInsertBlockSize = undefined;
        }
        if (object.minBytesToUseDirectIo !== undefined &&
            object.minBytesToUseDirectIo !== null) {
            message.minBytesToUseDirectIo = object.minBytesToUseDirectIo;
        }
        else {
            message.minBytesToUseDirectIo = undefined;
        }
        if (object.useUncompressedCache !== undefined &&
            object.useUncompressedCache !== null) {
            message.useUncompressedCache = object.useUncompressedCache;
        }
        else {
            message.useUncompressedCache = undefined;
        }
        if (object.mergeTreeMaxRowsToUseCache !== undefined &&
            object.mergeTreeMaxRowsToUseCache !== null) {
            message.mergeTreeMaxRowsToUseCache =
                object.mergeTreeMaxRowsToUseCache;
        }
        else {
            message.mergeTreeMaxRowsToUseCache = undefined;
        }
        if (object.mergeTreeMaxBytesToUseCache !== undefined &&
            object.mergeTreeMaxBytesToUseCache !== null) {
            message.mergeTreeMaxBytesToUseCache =
                object.mergeTreeMaxBytesToUseCache;
        }
        else {
            message.mergeTreeMaxBytesToUseCache = undefined;
        }
        if (object.mergeTreeMinRowsForConcurrentRead !== undefined &&
            object.mergeTreeMinRowsForConcurrentRead !== null) {
            message.mergeTreeMinRowsForConcurrentRead =
                object.mergeTreeMinRowsForConcurrentRead;
        }
        else {
            message.mergeTreeMinRowsForConcurrentRead = undefined;
        }
        if (object.mergeTreeMinBytesForConcurrentRead !== undefined &&
            object.mergeTreeMinBytesForConcurrentRead !== null) {
            message.mergeTreeMinBytesForConcurrentRead =
                object.mergeTreeMinBytesForConcurrentRead;
        }
        else {
            message.mergeTreeMinBytesForConcurrentRead = undefined;
        }
        if (object.maxBytesBeforeExternalGroupBy !== undefined &&
            object.maxBytesBeforeExternalGroupBy !== null) {
            message.maxBytesBeforeExternalGroupBy =
                object.maxBytesBeforeExternalGroupBy;
        }
        else {
            message.maxBytesBeforeExternalGroupBy = undefined;
        }
        if (object.maxBytesBeforeExternalSort !== undefined &&
            object.maxBytesBeforeExternalSort !== null) {
            message.maxBytesBeforeExternalSort =
                object.maxBytesBeforeExternalSort;
        }
        else {
            message.maxBytesBeforeExternalSort = undefined;
        }
        if (object.groupByTwoLevelThreshold !== undefined &&
            object.groupByTwoLevelThreshold !== null) {
            message.groupByTwoLevelThreshold = object.groupByTwoLevelThreshold;
        }
        else {
            message.groupByTwoLevelThreshold = undefined;
        }
        if (object.groupByTwoLevelThresholdBytes !== undefined &&
            object.groupByTwoLevelThresholdBytes !== null) {
            message.groupByTwoLevelThresholdBytes =
                object.groupByTwoLevelThresholdBytes;
        }
        else {
            message.groupByTwoLevelThresholdBytes = undefined;
        }
        if (object.priority !== undefined && object.priority !== null) {
            message.priority = object.priority;
        }
        else {
            message.priority = undefined;
        }
        if (object.maxThreads !== undefined && object.maxThreads !== null) {
            message.maxThreads = object.maxThreads;
        }
        else {
            message.maxThreads = undefined;
        }
        if (object.maxMemoryUsage !== undefined &&
            object.maxMemoryUsage !== null) {
            message.maxMemoryUsage = object.maxMemoryUsage;
        }
        else {
            message.maxMemoryUsage = undefined;
        }
        if (object.maxMemoryUsageForUser !== undefined &&
            object.maxMemoryUsageForUser !== null) {
            message.maxMemoryUsageForUser = object.maxMemoryUsageForUser;
        }
        else {
            message.maxMemoryUsageForUser = undefined;
        }
        if (object.maxNetworkBandwidth !== undefined &&
            object.maxNetworkBandwidth !== null) {
            message.maxNetworkBandwidth = object.maxNetworkBandwidth;
        }
        else {
            message.maxNetworkBandwidth = undefined;
        }
        if (object.maxNetworkBandwidthForUser !== undefined &&
            object.maxNetworkBandwidthForUser !== null) {
            message.maxNetworkBandwidthForUser =
                object.maxNetworkBandwidthForUser;
        }
        else {
            message.maxNetworkBandwidthForUser = undefined;
        }
        if (object.forceIndexByDate !== undefined &&
            object.forceIndexByDate !== null) {
            message.forceIndexByDate = object.forceIndexByDate;
        }
        else {
            message.forceIndexByDate = undefined;
        }
        if (object.forcePrimaryKey !== undefined &&
            object.forcePrimaryKey !== null) {
            message.forcePrimaryKey = object.forcePrimaryKey;
        }
        else {
            message.forcePrimaryKey = undefined;
        }
        if (object.maxRowsToRead !== undefined &&
            object.maxRowsToRead !== null) {
            message.maxRowsToRead = object.maxRowsToRead;
        }
        else {
            message.maxRowsToRead = undefined;
        }
        if (object.maxBytesToRead !== undefined &&
            object.maxBytesToRead !== null) {
            message.maxBytesToRead = object.maxBytesToRead;
        }
        else {
            message.maxBytesToRead = undefined;
        }
        if (object.readOverflowMode !== undefined &&
            object.readOverflowMode !== null) {
            message.readOverflowMode = object.readOverflowMode;
        }
        else {
            message.readOverflowMode = 0;
        }
        if (object.maxRowsToGroupBy !== undefined &&
            object.maxRowsToGroupBy !== null) {
            message.maxRowsToGroupBy = object.maxRowsToGroupBy;
        }
        else {
            message.maxRowsToGroupBy = undefined;
        }
        if (object.groupByOverflowMode !== undefined &&
            object.groupByOverflowMode !== null) {
            message.groupByOverflowMode = object.groupByOverflowMode;
        }
        else {
            message.groupByOverflowMode = 0;
        }
        if (object.maxRowsToSort !== undefined &&
            object.maxRowsToSort !== null) {
            message.maxRowsToSort = object.maxRowsToSort;
        }
        else {
            message.maxRowsToSort = undefined;
        }
        if (object.maxBytesToSort !== undefined &&
            object.maxBytesToSort !== null) {
            message.maxBytesToSort = object.maxBytesToSort;
        }
        else {
            message.maxBytesToSort = undefined;
        }
        if (object.sortOverflowMode !== undefined &&
            object.sortOverflowMode !== null) {
            message.sortOverflowMode = object.sortOverflowMode;
        }
        else {
            message.sortOverflowMode = 0;
        }
        if (object.maxResultRows !== undefined &&
            object.maxResultRows !== null) {
            message.maxResultRows = object.maxResultRows;
        }
        else {
            message.maxResultRows = undefined;
        }
        if (object.maxResultBytes !== undefined &&
            object.maxResultBytes !== null) {
            message.maxResultBytes = object.maxResultBytes;
        }
        else {
            message.maxResultBytes = undefined;
        }
        if (object.resultOverflowMode !== undefined &&
            object.resultOverflowMode !== null) {
            message.resultOverflowMode = object.resultOverflowMode;
        }
        else {
            message.resultOverflowMode = 0;
        }
        if (object.maxRowsInDistinct !== undefined &&
            object.maxRowsInDistinct !== null) {
            message.maxRowsInDistinct = object.maxRowsInDistinct;
        }
        else {
            message.maxRowsInDistinct = undefined;
        }
        if (object.maxBytesInDistinct !== undefined &&
            object.maxBytesInDistinct !== null) {
            message.maxBytesInDistinct = object.maxBytesInDistinct;
        }
        else {
            message.maxBytesInDistinct = undefined;
        }
        if (object.distinctOverflowMode !== undefined &&
            object.distinctOverflowMode !== null) {
            message.distinctOverflowMode = object.distinctOverflowMode;
        }
        else {
            message.distinctOverflowMode = 0;
        }
        if (object.maxRowsToTransfer !== undefined &&
            object.maxRowsToTransfer !== null) {
            message.maxRowsToTransfer = object.maxRowsToTransfer;
        }
        else {
            message.maxRowsToTransfer = undefined;
        }
        if (object.maxBytesToTransfer !== undefined &&
            object.maxBytesToTransfer !== null) {
            message.maxBytesToTransfer = object.maxBytesToTransfer;
        }
        else {
            message.maxBytesToTransfer = undefined;
        }
        if (object.transferOverflowMode !== undefined &&
            object.transferOverflowMode !== null) {
            message.transferOverflowMode = object.transferOverflowMode;
        }
        else {
            message.transferOverflowMode = 0;
        }
        if (object.maxExecutionTime !== undefined &&
            object.maxExecutionTime !== null) {
            message.maxExecutionTime = object.maxExecutionTime;
        }
        else {
            message.maxExecutionTime = undefined;
        }
        if (object.timeoutOverflowMode !== undefined &&
            object.timeoutOverflowMode !== null) {
            message.timeoutOverflowMode = object.timeoutOverflowMode;
        }
        else {
            message.timeoutOverflowMode = 0;
        }
        if (object.maxRowsInSet !== undefined && object.maxRowsInSet !== null) {
            message.maxRowsInSet = object.maxRowsInSet;
        }
        else {
            message.maxRowsInSet = undefined;
        }
        if (object.maxBytesInSet !== undefined &&
            object.maxBytesInSet !== null) {
            message.maxBytesInSet = object.maxBytesInSet;
        }
        else {
            message.maxBytesInSet = undefined;
        }
        if (object.setOverflowMode !== undefined &&
            object.setOverflowMode !== null) {
            message.setOverflowMode = object.setOverflowMode;
        }
        else {
            message.setOverflowMode = 0;
        }
        if (object.maxRowsInJoin !== undefined &&
            object.maxRowsInJoin !== null) {
            message.maxRowsInJoin = object.maxRowsInJoin;
        }
        else {
            message.maxRowsInJoin = undefined;
        }
        if (object.maxBytesInJoin !== undefined &&
            object.maxBytesInJoin !== null) {
            message.maxBytesInJoin = object.maxBytesInJoin;
        }
        else {
            message.maxBytesInJoin = undefined;
        }
        if (object.joinOverflowMode !== undefined &&
            object.joinOverflowMode !== null) {
            message.joinOverflowMode = object.joinOverflowMode;
        }
        else {
            message.joinOverflowMode = 0;
        }
        if (object.maxColumnsToRead !== undefined &&
            object.maxColumnsToRead !== null) {
            message.maxColumnsToRead = object.maxColumnsToRead;
        }
        else {
            message.maxColumnsToRead = undefined;
        }
        if (object.maxTemporaryColumns !== undefined &&
            object.maxTemporaryColumns !== null) {
            message.maxTemporaryColumns = object.maxTemporaryColumns;
        }
        else {
            message.maxTemporaryColumns = undefined;
        }
        if (object.maxTemporaryNonConstColumns !== undefined &&
            object.maxTemporaryNonConstColumns !== null) {
            message.maxTemporaryNonConstColumns =
                object.maxTemporaryNonConstColumns;
        }
        else {
            message.maxTemporaryNonConstColumns = undefined;
        }
        if (object.maxQuerySize !== undefined && object.maxQuerySize !== null) {
            message.maxQuerySize = object.maxQuerySize;
        }
        else {
            message.maxQuerySize = undefined;
        }
        if (object.maxAstDepth !== undefined && object.maxAstDepth !== null) {
            message.maxAstDepth = object.maxAstDepth;
        }
        else {
            message.maxAstDepth = undefined;
        }
        if (object.maxAstElements !== undefined &&
            object.maxAstElements !== null) {
            message.maxAstElements = object.maxAstElements;
        }
        else {
            message.maxAstElements = undefined;
        }
        if (object.maxExpandedAstElements !== undefined &&
            object.maxExpandedAstElements !== null) {
            message.maxExpandedAstElements = object.maxExpandedAstElements;
        }
        else {
            message.maxExpandedAstElements = undefined;
        }
        if (object.minExecutionSpeed !== undefined &&
            object.minExecutionSpeed !== null) {
            message.minExecutionSpeed = object.minExecutionSpeed;
        }
        else {
            message.minExecutionSpeed = undefined;
        }
        if (object.minExecutionSpeedBytes !== undefined &&
            object.minExecutionSpeedBytes !== null) {
            message.minExecutionSpeedBytes = object.minExecutionSpeedBytes;
        }
        else {
            message.minExecutionSpeedBytes = undefined;
        }
        if (object.countDistinctImplementation !== undefined &&
            object.countDistinctImplementation !== null) {
            message.countDistinctImplementation =
                object.countDistinctImplementation;
        }
        else {
            message.countDistinctImplementation = 0;
        }
        if (object.inputFormatValuesInterpretExpressions !== undefined &&
            object.inputFormatValuesInterpretExpressions !== null) {
            message.inputFormatValuesInterpretExpressions =
                object.inputFormatValuesInterpretExpressions;
        }
        else {
            message.inputFormatValuesInterpretExpressions = undefined;
        }
        if (object.inputFormatDefaultsForOmittedFields !== undefined &&
            object.inputFormatDefaultsForOmittedFields !== null) {
            message.inputFormatDefaultsForOmittedFields =
                object.inputFormatDefaultsForOmittedFields;
        }
        else {
            message.inputFormatDefaultsForOmittedFields = undefined;
        }
        if (object.outputFormatJsonQuote64bitIntegers !== undefined &&
            object.outputFormatJsonQuote64bitIntegers !== null) {
            message.outputFormatJsonQuote64bitIntegers =
                object.outputFormatJsonQuote64bitIntegers;
        }
        else {
            message.outputFormatJsonQuote64bitIntegers = undefined;
        }
        if (object.outputFormatJsonQuoteDenormals !== undefined &&
            object.outputFormatJsonQuoteDenormals !== null) {
            message.outputFormatJsonQuoteDenormals =
                object.outputFormatJsonQuoteDenormals;
        }
        else {
            message.outputFormatJsonQuoteDenormals = undefined;
        }
        if (object.lowCardinalityAllowInNativeFormat !== undefined &&
            object.lowCardinalityAllowInNativeFormat !== null) {
            message.lowCardinalityAllowInNativeFormat =
                object.lowCardinalityAllowInNativeFormat;
        }
        else {
            message.lowCardinalityAllowInNativeFormat = undefined;
        }
        if (object.emptyResultForAggregationByEmptySet !== undefined &&
            object.emptyResultForAggregationByEmptySet !== null) {
            message.emptyResultForAggregationByEmptySet =
                object.emptyResultForAggregationByEmptySet;
        }
        else {
            message.emptyResultForAggregationByEmptySet = undefined;
        }
        if (object.joinedSubqueryRequiresAlias !== undefined &&
            object.joinedSubqueryRequiresAlias !== null) {
            message.joinedSubqueryRequiresAlias =
                object.joinedSubqueryRequiresAlias;
        }
        else {
            message.joinedSubqueryRequiresAlias = undefined;
        }
        if (object.joinUseNulls !== undefined && object.joinUseNulls !== null) {
            message.joinUseNulls = object.joinUseNulls;
        }
        else {
            message.joinUseNulls = undefined;
        }
        if (object.transformNullIn !== undefined &&
            object.transformNullIn !== null) {
            message.transformNullIn = object.transformNullIn;
        }
        else {
            message.transformNullIn = undefined;
        }
        if (object.httpConnectionTimeout !== undefined &&
            object.httpConnectionTimeout !== null) {
            message.httpConnectionTimeout = object.httpConnectionTimeout;
        }
        else {
            message.httpConnectionTimeout = undefined;
        }
        if (object.httpReceiveTimeout !== undefined &&
            object.httpReceiveTimeout !== null) {
            message.httpReceiveTimeout = object.httpReceiveTimeout;
        }
        else {
            message.httpReceiveTimeout = undefined;
        }
        if (object.httpSendTimeout !== undefined &&
            object.httpSendTimeout !== null) {
            message.httpSendTimeout = object.httpSendTimeout;
        }
        else {
            message.httpSendTimeout = undefined;
        }
        if (object.enableHttpCompression !== undefined &&
            object.enableHttpCompression !== null) {
            message.enableHttpCompression = object.enableHttpCompression;
        }
        else {
            message.enableHttpCompression = undefined;
        }
        if (object.sendProgressInHttpHeaders !== undefined &&
            object.sendProgressInHttpHeaders !== null) {
            message.sendProgressInHttpHeaders =
                object.sendProgressInHttpHeaders;
        }
        else {
            message.sendProgressInHttpHeaders = undefined;
        }
        if (object.httpHeadersProgressInterval !== undefined &&
            object.httpHeadersProgressInterval !== null) {
            message.httpHeadersProgressInterval =
                object.httpHeadersProgressInterval;
        }
        else {
            message.httpHeadersProgressInterval = undefined;
        }
        if (object.addHttpCorsHeader !== undefined &&
            object.addHttpCorsHeader !== null) {
            message.addHttpCorsHeader = object.addHttpCorsHeader;
        }
        else {
            message.addHttpCorsHeader = undefined;
        }
        if (object.quotaMode !== undefined && object.quotaMode !== null) {
            message.quotaMode = object.quotaMode;
        }
        else {
            message.quotaMode = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UserSettings.$type, exports.UserSettings);
const baseUserQuota = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.UserQuota',
};
exports.UserQuota = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.UserQuota',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.intervalDuration !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.intervalDuration,
            }, writer.uint32(10).fork()).ldelim();
        }
        if (message.queries !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.queries,
            }, writer.uint32(18).fork()).ldelim();
        }
        if (message.errors !== undefined) {
            wrappers_1.Int64Value.encode({ $type: 'google.protobuf.Int64Value', value: message.errors }, writer.uint32(26).fork()).ldelim();
        }
        if (message.resultRows !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.resultRows,
            }, writer.uint32(34).fork()).ldelim();
        }
        if (message.readRows !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.readRows,
            }, writer.uint32(42).fork()).ldelim();
        }
        if (message.executionTime !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.executionTime,
            }, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserQuota };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.intervalDuration = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.queries = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.errors = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.resultRows = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.readRows = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.executionTime = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUserQuota };
        if (object.intervalDuration !== undefined &&
            object.intervalDuration !== null) {
            message.intervalDuration = Number(object.intervalDuration);
        }
        else {
            message.intervalDuration = undefined;
        }
        if (object.queries !== undefined && object.queries !== null) {
            message.queries = Number(object.queries);
        }
        else {
            message.queries = undefined;
        }
        if (object.errors !== undefined && object.errors !== null) {
            message.errors = Number(object.errors);
        }
        else {
            message.errors = undefined;
        }
        if (object.resultRows !== undefined && object.resultRows !== null) {
            message.resultRows = Number(object.resultRows);
        }
        else {
            message.resultRows = undefined;
        }
        if (object.readRows !== undefined && object.readRows !== null) {
            message.readRows = Number(object.readRows);
        }
        else {
            message.readRows = undefined;
        }
        if (object.executionTime !== undefined &&
            object.executionTime !== null) {
            message.executionTime = Number(object.executionTime);
        }
        else {
            message.executionTime = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.intervalDuration !== undefined &&
            (obj.intervalDuration = message.intervalDuration);
        message.queries !== undefined && (obj.queries = message.queries);
        message.errors !== undefined && (obj.errors = message.errors);
        message.resultRows !== undefined &&
            (obj.resultRows = message.resultRows);
        message.readRows !== undefined && (obj.readRows = message.readRows);
        message.executionTime !== undefined &&
            (obj.executionTime = message.executionTime);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUserQuota };
        if (object.intervalDuration !== undefined &&
            object.intervalDuration !== null) {
            message.intervalDuration = object.intervalDuration;
        }
        else {
            message.intervalDuration = undefined;
        }
        if (object.queries !== undefined && object.queries !== null) {
            message.queries = object.queries;
        }
        else {
            message.queries = undefined;
        }
        if (object.errors !== undefined && object.errors !== null) {
            message.errors = object.errors;
        }
        else {
            message.errors = undefined;
        }
        if (object.resultRows !== undefined && object.resultRows !== null) {
            message.resultRows = object.resultRows;
        }
        else {
            message.resultRows = undefined;
        }
        if (object.readRows !== undefined && object.readRows !== null) {
            message.readRows = object.readRows;
        }
        else {
            message.readRows = undefined;
        }
        if (object.executionTime !== undefined &&
            object.executionTime !== null) {
            message.executionTime = object.executionTime;
        }
        else {
            message.executionTime = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UserQuota.$type, exports.UserQuota);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
