import { prop, getModelForClass, Ref, modelOptions } from "@typegoose/typegoose";
import { User } from "./User";

@modelOptions({ options: { allowMixed: 0 } })

export class Post {

    @prop({ ref: () => User })
    posterUser: Ref<User>; 

    // @prop({ ref: () => Business })
    // posterBusiness: Ref<Business>;

    @prop({required: true})
    text: string

    @prop({})
    imgVideo: string
    
    @prop({})
    date: string

    @prop({})
    image: string

    @prop({})
    workModality: string

    @prop({})
    technologies: string[]

    @prop({})
    backFront: string

    @prop({})
    country: string

    @prop({ref: () => User})
    likes: Ref<User>
    
    @prop({ref: () => User})
    liked: Ref<User>

}

export const postModel = getModelForClass(Post)