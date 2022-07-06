import { prop, getModelForClass, Ref, modelOptions } from "@typegoose/typegoose";
import { applicantsInterface } from "../controllers/interfaces/userInterface.controller";
import { User } from "./User";


@modelOptions({ options: { allowMixed: 0 } })

export class Post {

    @prop({ ref: () => User })
    posterUser: Ref<User>; 

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

    @prop({})
    applicants: applicantsInterface[]
};

export const postModel = getModelForClass(Post)