"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionService = exports.VisionServiceDef = void 0;
const vision_service_1 = require("../../../../generated/yandex/cloud/ai/vision/v1/vision_service");
const index_1 = require("../../../../src/index");
exports.VisionServiceDef = {
    ...vision_service_1.VisionServiceService,
    __endpointId: 'ai-vision',
};
function VisionService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.VisionServiceDef);
}
exports.VisionService = VisionService;
