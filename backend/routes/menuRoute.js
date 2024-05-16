import express from 'express';
import {Menu} from '../models/menumodel.js';
const router =express.Router();


router.post('/menu',async(req,res)=>{
    try{
        if(!req.body.name || !req.body.category || !req.body.items ||!req.body.image || !req.body.price){
            return response.status(400).send({
                message:'Send all required fields',
            });
        }
        const newitem ={
            name:req.body.name,
            category:req.body.category,
            items:req.body.items,
            image:req.body.image,
            price:req.body.price
        };

        const menu= await Menu.create(newitem);
        return  res.status(200).send(menu);
    }catch(error){
      console.log(error.message);
      res.status(500).send({message: error.message});
    }
})

router.get('/menu',async(req,res)=>{
    try{
       const menu = await Menu.find({});
       return res.status(200).json({
           count: menu.length,
           data:menu
       });
    }catch(error){
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

export default router;