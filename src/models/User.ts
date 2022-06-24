import {
  prop,
  getModelForClass,
  pre,
  DocumentType,
} from "@typegoose/typegoose";
import { compare, genSalt, hash } from "bcrypt";

@pre<User>("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  const salt = await genSalt(10);
  const hashed = await hash(user.password, salt);

  user.password = hashed;

  next();
})
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

  @prop()
  profileImage: { public_id: string, secure_url: string };

  @prop()
  banner: { public_id: string, secure_url: string };

    async validatePassword(this: DocumentType<User>, candidatePassword: string) {
        
        try {
            const user = await compare(this.password, candidatePassword)
            return user
    } catch (error) {
      console.error(error, "Could not validate password");
      return false;
    }
  }
}

export const userModel = getModelForClass(User);