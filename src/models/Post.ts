import { prop, getModelForClass, Ref, modelOptions } from "@typegoose/typegoose";
import { User } from "./User";

// enum Step {
//   Pending,
//   Accepted,
//   Rejected
// }

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

    @prop({})
    applicants: object[]

    @prop({ref: () => User, })
    likes: string[] //boolean or ref?

    // @prop({ref: () => User, default: false })
    // liked: boolean //boolean or ref?

    // @prop({ type: () => [Object], enum: Step, addNullToEnum: false, default: 0 })
    // step: Step


}

export const postModel = getModelForClass(Post)