import express from "express"
import { param } from "express-validator"
import { validateRestaurantRequest } from "../middleware/validation"
import RestaurantController from "../controllers/RestaurantController"

const router = express.Router()


router.get('/search/:city', validateRestaurantRequest, RestaurantController.searchRestaurants)

export default router