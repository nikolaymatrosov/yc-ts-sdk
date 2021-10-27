"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageObject = void 0;
const buffer_1 = require("buffer");
const fs_1 = __importDefault(require("fs"));
class StorageObject {
    constructor(bucketName, objectName, bufferPromise) {
        this.bucketName = bucketName;
        this.objectName = objectName;
        this.bufferPromise = bufferPromise;
    }
    // noinspection JSUnusedGlobalSymbols
    static fromFile(bucketName, objectName, fileName) {
        return new this(bucketName, objectName, new Promise((resolve, reject) => {
            fs_1.default.readFile(fileName, (err, data) => {
                if (err) {
                    return reject(err);
                }
                return resolve(data);
            });
        }));
    }
    // noinspection JSUnusedGlobalSymbols
    static fromString(bucketName, objectName, content) {
        return this.fromBuffer(bucketName, objectName, buffer_1.Buffer.from(content, 'utf-8'));
    }
    static fromBuffer(bucketName, objectName, buffer) {
        return new this(bucketName, objectName, new Promise((resolve) => {
            resolve(buffer);
        }));
    }
    async getData(encoding) {
        encoding = encoding || 'utf-8';
        const buffer = await this.bufferPromise;
        return buffer.toString(encoding);
    }
}
exports.StorageObject = StorageObject;
