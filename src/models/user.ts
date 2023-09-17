import { Schema, model } from 'mongoose'
import { User } from '../interfaces/user'

const UserSchema = new Schema<User>(
  {
    username: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    location: {
      type: String,
      default: 'Lima'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

UserSchema.methods.toJSON = function () {
  const productObject = this.toObject()
  delete productObject.updatedAt
  return productObject
}

export const UserModel = model<User>('User', UserSchema)
