import { where } from "sequelize";
import { models } from "../config/config.js";
import e from "express";

const likeRestaurant = async(req,res)=>{
    const {user_id, res_id} = req.params;
    const date_like = new Date();
    try{
        // kiểm tra người dùng đã like nhà hàng này chưa
        const checkLike = await models.like_res.findAll({
            where:{user_id,res_id}
        })
        if(checkLike.length > 0){
            // trả về người dùng đã like nhà hàng này
            res.status(200).send("người dùng đã like nhà hàng này!");
        }
        else{
            // tiến hành like nhà hàng
            const like = {user_id,res_id,date_like}
            await models.like_res.create(like);
            res.status(200).send("Like nhà hàng thành công!");
        }
    }
    catch(err){
        res.status(400).send("Lỗi rồi");
    }
}

const unlikeRestaurant = async(req,res)=>{
    const {user_id,res_id}= req.params;
    try {
        // kiểm tra người dùng đã like nhà hàng này chưa
        const checkLike = await models.like_res.findAll({
            where:{user_id,res_id}
        })
        if(checkLike.length == 0){
            //thông báo người dùng chưa like
            res.status(404).send('Người dùng chưa like nhà hàng này!');
        }
        else{
            // xóa like khỏi csdl
            await models.like_res.destroy({
                where:{user_id,res_id}
            })
            res.status(200).send('Unlike thành công!');
        }
    } catch (error) {
        res.send(400).send("lỗi rồi");
    }
}

const getLikeByRes =async(req,res)=>{
    const {res_id} = req.params;
    try {
        const checkRes = await models.restaurant.findAll({
            where:{res_id}
        })
        if(checkRes.length > 0){
            const resLikes = await models.like_res.findAll({
                where:{res_id}
            });
            if(resLikes.length > 0){
                res.status(200).send(resLikes);
            }
            else{
                res.status(404).send("Nhà hàng chưa được like");
            }
        }
        else{
            res.status(404).send("Nhà hàng không tồn tại!")
        }
        
    } catch (error) {
        res.status(500).send("Lỗi rồi");
    }
}

const getLikeByUser =async(req,res)=>{
    const {user_id} = req.params;
    try {
        const checkUser = await models.user.findAll({
            where:{user_id}
        })
        if(checkUser.length > 0){
            const resLikes = await models.like_res.findAll({
                where:{user_id}
            });
            if(resLikes.length > 0){
                res.status(200).send(resLikes);
            }
            else{
                res.status(404).send("Nguời dùng chưa thực hiện like nhà hàng!");
            }
        }
        else{
            res.status(404).send("Người dùng không tồn tại!");
        }
        
    } catch (error) {
        res.status(500).send("Lỗi rồi");
    }
}

const getRateByUser =async(req,res)=>{
    const {user_id} = req.params;
    try {
        const checkUser = await models.user.findAll({
            where:{user_id}
        })
        if(checkUser.length > 0){
            const resLikes = await models.rate_res.findAll({
                where:{user_id}
            });
            if(resLikes.length > 0){
                res.status(200).send(resLikes);
            }
            else{
                res.status(404).send("Nguời dùng chưa thực hiện đánh giá nhà hàng!");
            }
        }
        else{
            res.status(404).send("Người dùng không tồn tại!");
        }
        
    } catch (error) {
        res.status(500).send("Lỗi rồi");
    }
}

const getRateByRes =async(req,res)=>{
    const {res_id} = req.params;
    try {
        const checkRes = await models.restaurant.findAll({
            where:{res_id}
        })
        if(checkRes.length > 0){
            const resLikes = await models.rate_res.findAll({
                where:{res_id}
            });
            if(resLikes.length > 0){
                res.status(200).send(resLikes);
            }
            else{
                res.status(404).send("Nhà hàng chưa được người dùng đánh giá!");
            }
        }
        else{
            res.status(404).send("Nhà hàng không tồn tại!");
        }
        
    } catch (error) {
        res.status(500).send("Lỗi rồi");
    }
}

const rateRestaurant =async (req,res)=>{
    const {res_id,user_id,amount}= req.params;
    const date_rate = new Date();

    try {
        const rateRes = await models.rate_res.findAll({
            where:{res_id,user_id}
        });
        if(rateRes.length> 0){
            await models.rate_res.update({
               user_id,res_id,amount,date_rate 
            },
            {
                where:{user_id,res_id}
            })
            res.status(200).send("Đánh giá lại nhà hàng thành công!");
        }
        else{
            await models.rate_res.create({
                user_id,res_id,amount,date_rate 
             });
             res.status(200).send("Đánh nhà hàng thành công!");
        }

    } catch (error) {
        res.status(400).send("Lỗi khi cập nhật: "+ error);
    }
}


export {likeRestaurant,unlikeRestaurant,getLikeByRes,getLikeByUser,getRateByRes,getRateByUser,rateRestaurant};