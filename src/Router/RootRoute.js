import express from 'express';
import { userRoute } from './userRoute.js';
import { foodRoute } from './foodRoute.js';
import { restaurantRoute } from './restaurantRoute.js';

const rootRoute = express.Router();
rootRoute.use('/user',userRoute);
rootRoute.use('/food' ,foodRoute);
rootRoute.use('/restaurant',restaurantRoute);

export {rootRoute};