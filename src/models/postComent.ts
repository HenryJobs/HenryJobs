import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { User } from "./User";
import { Post } from "./Post";

export class Coments {

    @prop({ ref: () => User})
    comentUser: Ref<User>

    @prop({type: String, required: true, trim: true})
    text: string

    @prop({ref: () => Post})
    postUser: Ref<Post>
    
    @prop({ref: () => User, default: false})
    likes: Ref<User> //boolean
    
    @prop({ref: () => User, default: false})
    liked: Ref<User> //boolean


}

export const postComent = getModelForClass(Coments)