import { prop, getModelForClass, Ref } from "@typegoose/typegoose";

import { User } from "../models/User";

export class Review {
  @prop({ required: true })
  titleReview: string;
  @prop()
  reviewBody: string;
  @prop({ required: true, min: 1, max: 5 })
  score: number;
  @prop()
  date: Date;

  @prop({ ref: () => User })
  reviewer: Ref<User>;

  @prop({ ref: () => User })
  reviewReceiver: Ref<User>;
}

export const reviewsModel = getModelForClass(Review);
