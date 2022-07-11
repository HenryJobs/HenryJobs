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
exports.postModel = exports.Post = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const User_1 = require("./User");
let Post = class Post {
};
__decorate([
    (0, typegoose_1.prop)({ ref: () => User_1.User }),
    __metadata("design:type", Object)
], Post.prototype, "posterUser", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Post.prototype, "text", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], Post.prototype, "imgVideo", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: new Date() }),
    __metadata("design:type", Date)
], Post.prototype, "date", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], Post.prototype, "image", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], Post.prototype, "workModality", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", Array)
], Post.prototype, "technologies", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], Post.prototype, "backFront", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], Post.prototype, "country", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", Array)
], Post.prototype, "applicants", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: true }),
    __metadata("design:type", Boolean)
], Post.prototype, "active", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Date)
], Post.prototype, "dateSoftDelte", void 0);
Post = __decorate([
    (0, typegoose_1.modelOptions)({ options: { allowMixed: 0 } })
], Post);
exports.Post = Post;
exports.postModel = (0, typegoose_1.getModelForClass)(Post);
