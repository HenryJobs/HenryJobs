import { prop, getModelForClass, Ref, modelOptions } from "@typegoose/typegoose";
import { User } from "./User";

    // @modelOptions({ options: { allowMixed: } })
export class Post {

    @prop({ ref: "User", required: true})
    poster: Ref<User>;

    @prop({required: true})
    text: string

}

export const postModel = getModelForClass(Post)