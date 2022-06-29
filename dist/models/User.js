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
exports.userModel = exports.User = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const bcrypt_1 = require("bcrypt");
var UserTypes;
(function (UserTypes) {
    UserTypes[UserTypes["PG"] = 0] = "PG";
    UserTypes[UserTypes["Graduate"] = 1] = "Graduate";
    UserTypes[UserTypes["Staff"] = 2] = "Staff";
    UserTypes[UserTypes["Recruiter"] = 3] = "Recruiter";
    UserTypes[UserTypes["Business"] = 4] = "Business"; // 5
})(UserTypes || (UserTypes = {}));
let User = class User {
    validatePassword(candidatePassword) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield (0, bcrypt_1.compare)(this.password, candidatePassword);
                console.log("esto es user --> ", user);
                return user;
            }
            catch (error) {
                console.error(error, "Could not validate password");
                return false;
            }
            ;
        });
    }
    ;
};
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, trim: true, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", Object)
], User.prototype, "profileImage", void 0);
__decorate([
    (0, typegoose_1.prop)({ enum: UserTypes, addNullToEnum: false, default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "userTypes", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", Array)
], User.prototype, "technologies", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", Object)
], User.prototype, "country", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", Object)
], User.prototype, "city", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], User.prototype, "backFront", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], User.prototype, "languages", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", Array)
], User.prototype, "otherStudies", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", Number)
], User.prototype, "curriculumCounter", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", Number)
], User.prototype, "counterIncome", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], User.prototype, "workModality", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", Object)
], User.prototype, "banner", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", Array)
], User.prototype, "followers", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", Array)
], User.prototype, "follows", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], User.prototype, "jobSummary", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], User.prototype, "description", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", Boolean)
], User.prototype, "premium", void 0);
User = __decorate([
    (0, typegoose_1.pre)("save", function (next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = this;
            if (!user.isModified("password"))
                return next();
            const salt = yield (0, bcrypt_1.genSalt)(10);
            const hashed = yield (0, bcrypt_1.hash)(user.password, salt);
            user.password = hashed;
            next();
        });
    }),
    (0, typegoose_1.modelOptions)({ options: { allowMixed: 0 } })
], User);
exports.User = User;
;
exports.userModel = (0, typegoose_1.getModelForClass)(User);
