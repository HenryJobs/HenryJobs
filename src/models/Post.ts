import { prop, getModelForClass, Ref, modelOptions } from "@typegoose/typegoose";
import { User } from "./User";
import { Business } from "./Bussiness";

    // @modelOptions({ options: { allowMixed: } })

export class Post {

    @prop({ ref: () => User })
    posterUser: Ref<User>; 

    @prop({ ref: () => Business })
    posterBusiness: Ref<Business>;

    @prop({required: true})
    text: string

}

export const postModel = getModelForClass(Post)