"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postComent = exports.Coments = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const User_1 = require("./User");
const Post_1 = require("./Post");
class Coments {
}
__decorate([
    (0, typegoose_1.prop)({ ref: () => User_1.User }),
    __metadata("design:type", Object)
], Coments.prototype, "comentUser", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true, trim: true }),
    __metadata("design:type", String)
], Coments.prototype, "text", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => Post_1.Post }),
    __metadata("design:type", Object)
], Coments.prototype, "postUser", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", Array)
], Coments.prototype, "likes", void 0);
exports.Coments = Coments;
exports.postComent = (0, typegoose_1.getModelForClass)(Coments);
