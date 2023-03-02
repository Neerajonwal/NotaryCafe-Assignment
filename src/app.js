const express = require("express");
const app = express();
const hbs = require("hbs");
const Register = require("./models/registers");
const bcrypt = require("bcryptjs");
const path = require("path");
const cookieParser = require('cookie-parser');

const port = process.env.port || 5000;

require("./db/conn");

const static_path = path.join(__dirname, "../public");
const partials_path = path.join(__dirname, "../templates/partials");
const template_path = path.join(__dirname, "../templates/views");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/register", (req, res) => {
    res.render("register")
});

app.post("/register", async (req, res) => {
    try {

        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if (password === cpassword) {
            const passwordHash = await bcrypt.hash(password, 10);

            const registerEmployee = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                worknumber: req.body.worknumber,
                email: req.body.email,
                password: passwordHash,
                confirmpassword: req.body.confirmpassword,
                adress: req.body.adress,
                city: req.body.city,
                country: req.body.country,
                zipcode: req.body.zipcode,

            });
            console.log("the succs part" + registerEmployee)
            const registered = await registerEmployee.save();
            console.log(registered)
            res.status(201).json(registered);
        } else {
            res.send("password are not matching")
        }
    } catch (err) {
        res.status(400).send(err)
    }
});


app.listen(port, () => {
    console.log(`live srever ${port}`)
})