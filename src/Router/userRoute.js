import express from 'express';
import { models } from '../config/config.js';
import { userOrder } from '../controller/userController.js';

const userRoute = express.Router();


// CRUD
// CREATEs
userRoute.post('/order',userOrder);



export {userRoute};