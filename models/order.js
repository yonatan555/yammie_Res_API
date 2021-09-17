const mongoose = require('mongoose');
const orders = mongoose.model('order',{
        name_order :{
            type :String , 
            required  :true
        },
        product :{
            type :String , 
            required  :true
        },
        cost :{
            type : Number, 
            required  :true
        },
        cash :{
            type : Boolean, 
            required  :true
        },
        date :{
            type :String , 
            required  :true
        }
})
module.exports = {orders}