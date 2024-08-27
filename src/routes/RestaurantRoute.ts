import express from "express";
import { param } from "express-validator";
import {
  validateSearchRestaurantByCityRequest,
  validateSearchRestaurantByIdRequest,
} from "../middleware/validation";
import RestaurantController from "../controllers/RestaurantController";

const router = express.Router();

router.get(
  "/:restaurantId",
  validateSearchRestaurantByIdRequest,
  RestaurantController.getRestaurant,
);

router.get(
  "/search/:city",
  validateSearchRestaurantByCityRequest,
  RestaurantController.searchRestaurant,
);

export default router;
