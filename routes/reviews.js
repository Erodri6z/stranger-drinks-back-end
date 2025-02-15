import { Router } from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', reviewsCtrl.index)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, reviewsCtrl.create)
router.delete('/:id', checkAuth, reviewsCtrl.delete)
router.put('/:id', checkAuth, reviewsCtrl.update)

export { router }