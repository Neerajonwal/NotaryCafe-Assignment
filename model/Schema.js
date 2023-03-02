const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            require: true
        },
        lastname: {
            type: String,
            require: true
        },
        worknumber: {
            type: Number,
            require: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            require: true
        },
        confirmpassword: {
            type: String,
            require: true
        },
        adress: {
            type: String,
            require: true
        },
        city: {
            type: String,
            require: true
        },
        country: {
            type: String,
            require: true
        },
        zipCode: {
            type: Number,
            require: true
        }
    }
)
const Register = new mongoose.model("Register", employeeSchema);

module.exports = Register;