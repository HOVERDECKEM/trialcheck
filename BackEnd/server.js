// Server Connection
const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Hello World!');
});

app.listen(3000, function checkConn(error){
    if(error) console.log('Error ocurred in Server Connection!');
    else console.log('Server Connected Successfully on port number 3000...');
});

// Parsing of Data
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // Update with your domain name
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());
app.use(express.urlencoded({
    extended: false
 }));

// MongoDB Connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/GoTravel');
const db = mongoose.connection;
db.on('error',console.error.bind(console, 'DBConnection Error!'));
db.once('open', function(){
    console.log('Database Connected Successfully!');
});

// Routing Configuration
const routes = require('./routes/routes');
app.use(routes);

// Using cors lib to avoid dbConn warnings
const cors = require('cors');
app.use(cors());