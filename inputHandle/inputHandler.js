const Joi = require('joi');

//input validation function
module.exports.validateOrder = (order) => {
    //regular experssion for date template
    var regDate = '^(0[1-9]|[12][0-9]|3[01])[.]'
    //validate object
    const schema = Joi.object({
    name_order :  Joi.string().alphanum().min(1).required(),
    product : Joi.string().alphanum().min(1).required(),
    cost : Joi.number().integer().min(1).required(),
    cash : Joi.boolean().required(),
    date : Joi.string().pattern(new RegExp(regDate)).required()
    })

    return schema.validate(order)
}

function pad2(n) {
    return (n < 10 ? '0' : '') + n;
}

module.exports.getDate = () => {
    //get the current date
    var date = new Date();
    var year= date.getFullYear();
    var month = pad2(date.getMonth()+1);//months (0-11)
    var day = pad2(date.getDate());//day (1-31)
    if (month[0] == 0) month = month[1]
    var formattedDate =  day+"."+month+"."+year;
 
    return formattedDate ; 
}