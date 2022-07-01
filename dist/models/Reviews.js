"use strict";
//Tiene array de objetos de comentarios en el que dice que peinsan de el, puede verse quien hizo el comentario y la fecha del comentario.
// {
//   userName: "Mercado Libre",
//titleReview: "Responsable"
//   review: "Trabajó muy padre",
//   score: 4.9,
//   date: 27/03/2022
// }
//Referencia al usuario que hace la review y a quien se la hace
//Solo Usuarios que hayan trabajo juntos pueden hacer review
//El usuario tendrá un promedio de score
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
// Se postean reviews, se orden del mas reciente al mas antiguo y viceversa, de mejor  a peor score
//Rutas: /reviews para obtener todas las reviews
//       /reviews?date=up /reviews?date=down para order por fecha
//       /reviews?score=up para order por score
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
    (0, typegoose_1.prop)({ required: true }),
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
exports.Review = Review;
exports.reviewsModel = (0, typegoose_1.getModelForClass)(Review);
