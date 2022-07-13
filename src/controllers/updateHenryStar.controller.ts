import { Request, Response } from "express";
import { User, userModel } from "../models/User";

export const updateStar = async (req: Request, res: Response) => {

    const { id } = req.params

    const { userId, numero } = req.body

    try {

        let user = await userModel.findById(id)
        let pushed = user?.stars.map(e => e.userId)

        console.log(user, "esto es user")
        console.log(pushed, "esto es pushed")

		if (!(pushed?.includes(userId))) {
			await user?.updateOne({
				$push: { stars: { userId: userId, numero: numero } },
			});
            let numeroMapped: any | undefined = user?.stars.map(el => el.numero)
            let promedio = numeroMapped?.reduce((acc: number, val: number) => acc + val)/numeroMapped?.length
            await user?.updateOne({ $set: { allStars: promedio }})
            console.log(pushed, "pushed despues de push")
		} else {
            const henryStar = user?.stars
            let starUpdated: any = henryStar?.map((star: any) => {
                if(!(star.userId === userId)) return star;
                return { ...star, numero }
            })
            console.log(henryStar, "esto es henryStar")
            await user?.updateOne({ $set: { stars: starUpdated }});
            let numeroMapped: any | undefined = user?.stars.map(el => el.numero)
            let promedio = numeroMapped?.reduce((acc: number, val: number) => acc + val)/numeroMapped?.length
            await user?.updateOne({ $set: { allStars: promedio }})
        }
            return res.status(200).json(user)
    } catch(err){
        console.error(err)
    }

}