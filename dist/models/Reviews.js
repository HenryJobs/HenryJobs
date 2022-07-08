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
exports.reviewsModel = exports.Review = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const User_1 = require("../models/User");
class Review {
}
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Review.prototype, "titleReview", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Review.prototype, "reviewBody", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, min: 1, max: 5 }),
    __metadata("design:type", Number)
], Review.prototype, "score", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Date)
], Review.prototype, "date", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => User_1.User }),
    __metadata("design:type", Object)
], Review.prototype, "reviewer", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => User_1.User }),
    __metadata("design:type", Object)
], Review.prototype, "reviewReceiver", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: true }),
    __metadata("design:type", Boolean)
], Review.prototype, "active", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Date)
], Review.prototype, "dateSoftDelte", void 0);
exports.Review = Review;
exports.reviewsModel = (0, typegoose_1.getModelForClass)(Review);
