const express = require('express');
const path = require('path');
const faker = require("faker");
const ejs = require('ejs');
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true, }));

const port = 3000
const hostname = 'localhost'

// setting up template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

var users = []
for (let i = 0; i < 3; i++) {
    users.push({
        name: faker.name.findName(),
        email: faker.internet.email(),
    })
}
// defining end points
app.get('/', (req, res) => {
    res.status(200).render('index', { users })
})

app.get('/form', (req, res) => {
    res.render('form')
})

app.post('/user/add', (req, res) => {
    // console.log(req.body)
    users.push({
        name: req.body.name,
        email: req.body.email
    })
    // console.log(users)
    res.redirect('/')
})

// server working
app.listen(port,hostname);