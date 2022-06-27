import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { User } from "./User";

export class Coments {

    @prop({ ref: () => User})
    comentUser: Ref<User>

    @prop({type: String, required: true, trim: true})
    text: string

}

export const postComent = getModelForClass(Coments)