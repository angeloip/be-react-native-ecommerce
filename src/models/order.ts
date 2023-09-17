import { Schema, model } from 'mongoose'
import { Order } from '../interfaces/order'

const OrderSchema = new Schema<Order>(
  {},
  {
    timestamps: true,
    versionKey: false
  }
)

OrderSchema.methods.toJSON = function () {
  const productObject = this.toObject()
  delete productObject.updatedAt
  return productObject
}

export const OrderModel = model<Order>('Order', OrderSchema)
