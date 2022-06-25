import { prop, getModelForClass, pre, DocumentType, modelOptions } from '@typegoose/typegoose';
import { compare, genSalt, hash } from 'bcrypt';


@pre<Business>("save", async function (next) {

    const business = this
    if(!business.isModified("password")) return next()
    
    const salt = await genSalt(10)
    const hashed = await hash(business.password, salt)

    business.password = hashed

    next();
})


export class Business {

    @prop({required: true})
    name: string

    @prop({required: true})
    description: string

    @prop({required: true})
    email!: string

    @prop()
    password!: string

    @prop({required: true})
    jobSummary: string

    @prop({lowercase: true})
    image: string

    @prop({required: true})
    country: string



    async validatePassword(this: DocumentType<Business>, candidatePassword: string){

        try {
            const business = await compare(this.password, candidatePassword)
            return business
        }
        catch (err){
            console.log(err)
    } 
    }

}

export const BusinessModel = getModelForClass(Business)