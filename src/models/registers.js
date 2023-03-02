const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const employeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    
    worknumber: {
        type: Number,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    confirmpassword: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    zipcode:{
        type:String,
        require:true
    }
});




const Register = new mongoose.model("Register", employeeSchema);

module.exports = Register;