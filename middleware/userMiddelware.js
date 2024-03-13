const joi = require('joi');
const User = require('../model/userModel');

const validateRegister = async (req, res, next) => {
    const schema = joi.object({
        username: joi.string().required().min(3).max(30).messages({
            "string.base": "Username should be a type of 'text'",
            "string.empty": "Username cannot be an empty field",
            "string.min": "Username should have a minimum length of {#limit}",
            "string.max": "Username should have a maximum length of {#limit}",
            "any.required": "Username is a required field"
        
        }),
        email: joi.string().email().required().messages({
            "string.base": "Email should be a type of 'text'",
            "string.empty": "Email cannot be an empty field",
            "string.email": "Email format is invalid",
            "any.required": "Email is a required field"
        }),	
        birthday: joi.date().required().min('1-1-1900').max('now').messages({
            "date.base": "Birthday should be a type of 'date'",
            "date.empty": "Birthday cannot be an empty field",
            "date.min": "Birthday should not be less than {#limit}",
            "date.max": "Birthday should not be greater than {#limit}",
            "any.required": "Birthday is a required field"
        })
    })

    const {error} = await schema.validate(req.body);
    if(error){
        return res.status(400).json({
            status: "error",
            message: error.message
        })
    }
    next();
}

module.exports = {validateRegister}