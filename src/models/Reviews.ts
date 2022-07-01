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

// Se postean reviews, se orden del mas reciente al mas antiguo y viceversa, de mejor  a peor score

//Rutas: /reviews para obtener todas las reviews
//       /reviews?date=up /reviews?date=down para order por fecha
//       /reviews?score=up para order por score
import { prop, getModelForClass, Ref } from "@typegoose/typegoose";

import { User } from "../models/User";

export class Review {
  @prop({ required: true })
  titleReview: string;
  @prop()
  reviewBody: string;
  @prop({ required: true })
  score: number;
  @prop()
  date: Date;

  @prop({ ref: () => User })
  reviewer: Ref<User>;

  @prop({ ref: () => User })
  reviewReceiver: Ref<User>;
}

export const reviewsModel = getModelForClass(Review);
