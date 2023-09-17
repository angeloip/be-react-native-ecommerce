import { Schema, model } from 'mongoose'
import { Cart } from '../interfaces/cart'

const CartSchema = new Schema<Cart>(
  {},
  {
    timestamps: true,
    versionKey: false
  }
)

CartSchema.methods.toJSON = function () {
  const productObject = this.toObject()
  delete productObject.updatedAt
  return productObject
}

export const CartModel = model<Cart>('Cart', CartSchema)
