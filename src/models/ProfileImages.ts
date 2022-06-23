import { prop, getModelForClass } from '@typegoose/typegoose';

class ProfileImage {

    @prop({ required: true })
    name: string;

    // @prop({ required: true })
    // url: string;
};

export const profileImageClass = getModelForClass(ProfileImage);