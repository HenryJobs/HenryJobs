import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { User } from "./User";
import { Post } from "./Post";

export class Coments {
  @prop({ ref: () => User })
  comentUser: Ref<User>;

  @prop({ type: String, required: true, trim: true })
  text: string;

<<<<<<< HEAD
  @prop({ ref: () => Post })
  postUser: Ref<Post>;
=======
    @prop({type: String, required: true, trim: true})
    text: string

    @prop({ref: () => Post})
    postUser: Ref<Post>
    
    @prop({ref: () => User})
    likes: Ref<User>
    
    @prop({ref: () => User})
    liked: Ref<User>

>>>>>>> 529a93c45a2bf6c2e539a62bfda2732c57967bf4

  @prop({ default: true })
  active: boolean;
  @prop()
  dateSoftDelte: Date;
}

export const postComent = getModelForClass(Coments);
