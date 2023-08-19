import { models } from "../config/config.js";

const userOrder = async (req,res)=>{
    const {user_id, food_id, amount, code, arr_sub_id} =  req.body;
    try{
        const checkOrder = await models.order.findAll({
            where:{user_id,food_id}
        })
        if(checkOrder.length > 0){
            res.status(400).send("Đơn hàng đã tồn tại!");
        }else{
            const newOrder = {user_id,food_id,amount,code,arr_sub_id};
            const order = await models.order.create(newOrder);
            res.status(200).send("Tạo đơn hàng thành công!");
        }
        
    }
    catch(err){
        res.status(500).send("Lỗi rồi");
    }

}

export {userOrder}