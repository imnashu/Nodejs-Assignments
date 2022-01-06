const express = require('express');
const path = require('path');
const faker = require("faker");
const ejs = require('ejs');
const bodyParser = require("body-parser");
var methodOverride = require("method-override");
const userdb = require('./model/model')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/assignment_4');

const app = express();
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true, }));

const port = 3000
const hostname = 'localhost'

// setting up template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

var users = []
// for (let i = 0; i < 3; i++) {
//     users.push({
//         name: faker.name.findName(),
//         email: faker.internet.email(),
//         ispromoted : faker.boolean()
//     })
// }
// defining end points
app.get("/", async (req, res) => {
    var data = await userdb.find();
    res.render("index", { data });
});

// app.get('/', (req, res) => {
//     res.status(200).render('index', { users })
// })

app.put("/users/:id/", async (req, res) => {
    await userdb.updateOne({ _id: req.params.id }, [
        { $set: { isPromoted: { $not: "$isPromoted" } } },
    ]);
    res.redirect("/");
});

app.get('/form', (req, res) => {
    res.render('form')
})

app.post('/users/add',async (req, res) => {
    // console.log(req.body)
    newuser = {
        name: req.body.name,
        email: req.body.email,
        isPromoted: null
    };
    // console.log(users)
    await userdb.create(newuser);
    res.redirect('/')
})

app.delete("/users/:id/", async (req, res) => {
    await userdb.deleteOne({ _id: req.params.id });
    res.redirect("/");
});

// app.get('')
// server working
app.listen(port, ()=>{
    console.log('listening')
});