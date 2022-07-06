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
    
    @prop({})
    likes: string[] //boolean or ref?

    //si es por ref debería existir un likes (cant de likes que)
    
    // @prop({ref: () => User, default: false})
    // liked: boolean //boolean or ref?


}

export const postComent = getModelForClass(Coments)