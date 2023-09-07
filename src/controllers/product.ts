import { NextFunction, Request, Response } from 'express'
import { ProductModel } from '../models/product'

export const productController = {
  getProducts: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await ProductModel.find({})
      return res.status(200).json(products)
    } catch (error) {
      next(error)
    }
  },
  getProduct: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params
      const product = await ProductModel.findById(id)
      if (!product)
        return res.status(400).json({ msg: 'Producto no encontrado' })

      return res.status(200).json(product)
    } catch (error) {
      next(error)
    }
  },
  createProduct: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = req.body
      const newProduct = new ProductModel(product)
      await newProduct.save()

      return res.status(200).json({ msg: 'Producto creado' })
    } catch (error) {
      next(error)
    }
  },
  searchProducts: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await ProductModel.aggregate([
        {
          $search: {
            index: 'ecommerce',
            text: {
              query: req.params.key,
              path: {
                wildcard: '*'
              }
            }
          }
        }
      ])

      return res.status(200).json(result)
    } catch (error) {
      next(error)
    }
  }
}
