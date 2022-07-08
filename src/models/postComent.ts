import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { User } from "./User";
import { Post } from "./Post";

export class Coments {
  @prop({ ref: () => User })
  comentUser: Ref<User>;

  @prop({ type: String, required: true, trim: true })
  text: string;

  @prop({ref: () => Post})
  postUser: Ref<Post>

  @prop({ default: true })
  active: boolean;

  @prop()
  dateSoftDelte: Date;
}

export const postComent = getModelForClass(Coments);
