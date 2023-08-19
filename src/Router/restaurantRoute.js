import { models } from "../config/config.js";
import express from 'express';
import { getLikeByRes, getLikeByUser, getRateByRes, getRateByUser, likeRestaurant, rateRestaurant, unlikeRestaurant } from "../controller/restaurantController.js";

const restaurantRoute = express.Router();

// CRUD
// READ
// like
restaurantRoute.get('/getLikeByRes/:res_id',getLikeByRes);
restaurantRoute.get('/getLikeByUser/:user_id',getLikeByUser);
// rate
restaurantRoute.get('/getRateByRes/:res_id',getRateByRes);
restaurantRoute.get('/getRateByUser/:user_id',getRateByUser);
// CREATE
restaurantRoute.post('/like/:user_id/:res_id', likeRestaurant);
restaurantRoute.post('/rate/:user_id/:res_id/:amount', rateRestaurant);
// UPDATE
restaurantRoute.delete('/unlike/:user_id/:res_id',unlikeRestaurant);

export {restaurantRoute}
