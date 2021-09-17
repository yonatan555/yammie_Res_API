const e = require('express');
const express = require('express')
const router  = express.Router()
const {orders} = require('../models/order')
const {validateOrder} = require('../inputHandle/inputHandler')
const {getDate} = require('../inputHandle/inputHandler')

//get all Orders of today
router.get('/api/orders', (req,res) => { 
    //query mongodb
    const DateQuery = getDate();
    orders.find({ date : { "$in":[ DateQuery]  }} , {_id : 0 , __v : 0 } ,(err,data) => {
        if(!err){
            if(data.length > 0)
                res.status(202).send("Got the all orders of the last Day: <br>"+data)
            else
                res.send("There are no oreders")
        }else{
            res.status(404).send(err)
        }
    })
})

//Save a new order
router.post('/api/order/add',(req,res) => {
    //  validate that user enter appropite parameters
    const{error}  = validateOrder(req.body); 
    if(error) return res.status(400).send(error.details[0].message);
    //create new order
    const ord  = new orders({
        name_order : req.body.name_order,
        product : req.body.product,
        cost : req.body.cost,
        cash : req.body.cash,
        date : req.body.date
    });
    ord.save( ( err, data ) => {
        if(!err){
                console.log("Order has saved")
                console.log(ord)
                res.status(200).json({code:200 , message :'order has saved' , orders: data})
            }else{
                res.status(304).json({code:304 , message :'Something happend,dont worry nothing changed' , orders: data})
            }
    });
});
module.exports = router;