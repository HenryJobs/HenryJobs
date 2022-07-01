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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessModel = exports.Business = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const bcrypt_1 = require("bcrypt");
let Business = class Business {
    validatePassword(candidatePassword) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const business = yield (0, bcrypt_1.compare)(this.password, candidatePassword);
                return business;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
};
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Business.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Business.prototype, "description", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Business.prototype, "email", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Business.prototype, "password", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Business.prototype, "jobSummary", void 0);
__decorate([
    (0, typegoose_1.prop)({ lowercase: true }),
    __metadata("design:type", String)
], Business.prototype, "image", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Business.prototype, "country", void 0);
Business = __decorate([
    (0, typegoose_1.pre)("save", function (next) {
        return __awaiter(this, void 0, void 0, function* () {
            const business = this;
            if (!business.isModified("password"))
                return next();
            const salt = yield (0, bcrypt_1.genSalt)(10);
            const hashed = yield (0, bcrypt_1.hash)(business.password, salt);
            business.password = hashed;
            next();
        });
    })
], Business);
exports.Business = Business;
exports.BusinessModel = (0, typegoose_1.getModelForClass)(Business);
