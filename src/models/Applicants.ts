import { prop, getModelForClass, Ref, modelOptions, Severity } from "@typegoose/typegoose";
import { applicantsInterface } from "../controllers/interfaces/userInterface.controller";
import { Post, postModel } from "./Post";
import { User } from "./User";

@modelOptions({ options: {allowMixed: 0 }})
export class Applicants {
    @prop({ref: () => Post })
    appUser: Ref<Post>

    @prop({})
    applicants: applicantsInterface[]

}

export const applicantsModel = getModelForClass(Applicants)