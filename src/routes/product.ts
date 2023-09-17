import { Router } from 'express'
import { productController } from '../controllers/product'

const router = Router()

router.post('/', productController.createProduct)
router.get('/', productController.getProducts)
router.get('/:id', productController.getProduct)
router.get('/search/:key', productController.searchProducts)

export { router }
