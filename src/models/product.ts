import { Schema, model } from 'mongoose'
import { Product } from '../interfaces/product'

const ProductSchema = new Schema<Product>(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    supplier: {
      type: String,
      required: true,
      trim: true
    },
    price: {
      type: Number,
      required: true
    },
    imageUrl: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    productLocation: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

ProductSchema.methods.toJSON = function () {
  const productObject = this.toObject()
  delete productObject.updatedAt
  return productObject
}

export const ProductModel = model<Product>('Product', ProductSchema)
