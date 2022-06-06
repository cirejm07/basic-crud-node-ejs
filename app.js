const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');

// express app
const app = express();

// "mongodb+srv://exampleTest:<password>@cluster0.hzacp.mongodb.net/ANOTHER?retryWrites=true&w=majority"
// mongodb connection
const dbURI = "mongodb+srv://cirejm07:godlike47@cluster0.0jrhw.mongodb.net/Books-Collection?retryWrites=true&w=majority";
var port = 3000;
mongoose.connect(dbURI)
    .then(result => // Listen for request
    app.listen(port, (err) => {
        if (!err){
            console.log(`$Listening to port ${port}`);
        } 
    }))
    .catch(err => console.log(err));

// view engine
// configure some application setting
app.set('view engine', 'ejs');
// views folder is the default value the of the express and ejs to look for
// different configuration setting for another folder
// first param which is the default "views", second param name of your folder
app.set('views', 'books');

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));




app.use((req,res, next) =>{
    // console.log("request has been made");
    // console.log("host", req.hostname);
    console.log("path", req.path);
    // console.log("method", req.method);
    next();
})

// Book Routes
app.use('/', bookRoutes);


// If there is no path as the user requested
// USE going to fire this function for every incoming request regardless of the url specifically if there is no match
// must be on bottom since it fires in every request
app.use((req, res) =>{
    res.status(404).render('404',{title: "Page not found"});
})


