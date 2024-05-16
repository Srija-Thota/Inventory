import express from 'express';
import {Item} from '../models/Itemmodel.js';
const router =express.Router();

router.post('/',async(req,res)=>{
    try{
        if(!req.body.name || !req.body.quantity || !req.body.category || !req.body.value || !req.body.price){
            return response.status(400).send({
                message:'Send all required fields',
            });
        }
        const newitem ={
            name:req.body.name,
            quantity:req.body.quantity,
            category:req.body.category,
            value:req.body.value,
            price:req.body.price
        };

        const item= await Item.create(newitem);
        return  res.status(200).send(item);
    }catch(error){
      console.log(error.message);
      res.status(500).send({message: error.message});
    }
})

// get all items from database
router.get('/',async(req,res)=>{
    try{
       const items = await Item.find({});
       return res.status(200).json({
           count: items.length,
           data:items
       });
    }catch(error){
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

// get one item from database by id
router.get('/:id',async(req,res)=>{
    try{

       const {id}= req.params;
       const item = await Item.findById(id);
       return res.status(200).json(item);
    }catch(error){
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})
// route to update an item 
router.put('/:id',async(req,res)=>{
    try{
        if(!req.body.name || !req.body.quantity || !req.body.category || !req.body.value || !req.body.price){
            return res.status(400).send({
                message:'Send all required fields',
            });
        }
        const {id} = req.params;
        const result = await Item.findByIdAndUpdate(id,req.body);
        if(!result){
            return res.status(404).json({message:'Item not found'});
        }
        return res.status(200).send({message: 'Item updated successfully'});
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
});

//route to delete a book
router.delete('/:id',async(req,res)=>{
    try{
       const {id} = req.params;
       const result = await Item.findByIdAndDelete(id);

       if(!result){
         return res.status(404).json({message:'Item not found'});
       }
       return res.status(200).send({message: 'Item deleted successfully'});
    }catch(error){
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

export default router;