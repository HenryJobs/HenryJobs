import { prop, getModelForClass, pre, DocumentType, modelOptions } from '@typegoose/typegoose';
import { compare, genSalt, hash } from 'bcrypt';


enum UserTypes{
    PG,
    Graduate,
    business,
    Recluiter,
    Staff
}

@pre<User>("save", async function(next) {
    const user = this
    if (!user.isModified("password")) return next()

    const salt = await genSalt(10)
    const hashed = await hash(user.password, salt)
    
    user.password = hashed

    next();
})

//userTypes {
    // PG
    //Graduate
    //business
    //recluiter
    //staff
//}

    @modelOptions({ options: { allowMixed: 0 } })
    export class User {
    
    @prop({ required: true })
    firstName: string;

    @prop({ required: true })
    lastName: string;

    @prop({ required: true })
    userName: string;

    @prop({ required: true, trim: true, unique: true })
    email!: string;

    @prop({ required: true })
    password!: string;

    @prop({ enum: UserTypes, addNullToEnum: false, default: 0 })
    userTypes: UserTypes;

    @prop({})
    technologies: string[]

    @prop({lowercase: true})
    picture: string

    @prop({})
    country: string

    @prop({})
    backFront: string

    @prop({})
    language: string[]

    @prop({})
    otherstudies?: string[]
    
    @prop({})
    contadorCurriculum: number

    @prop({})
    counterIngreso: number

    //business

    // @prop({})
    // name: string

    // @prop({lowercase: true})
    // img: string

    // @prop({})
    // jobZummary: string
    
    async validatePassword(this: DocumentType<User>, candidatePassword: string) {
        
        try {
            const user = await compare(this.password, candidatePassword)
            return user

        } catch (error) {
            console.error(error, "Could not validate password")
            return false
        }
    };
};

export const userModel = getModelForClass(User)