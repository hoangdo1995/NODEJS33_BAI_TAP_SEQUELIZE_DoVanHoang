import express from 'express'

const foodRoute = express.Router();

foodRoute.get('/get-food',(req,res)=>{
    res.send('Get foood');
})

export {foodRoute}