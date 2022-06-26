import { prop, getModelForClass, pre, DocumentType, modelOptions } from '@typegoose/typegoose';


//Array con id de follows 
//array completo de publicaciones
//

@modelOptions({ options: { allowMixed: 0 } })

export class Follow {

    @prop({})
    followUser: string

    @prop({})
    followers: string[]

    @prop({})
    seguidos: string[]
    

}

export const followModel = getModelForClass(Follow)
