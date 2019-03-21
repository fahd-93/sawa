const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 4000;

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send('hi from server');
});

// connect to mLab
const DB = require('./config/keys');
console.log(DB.mongoURI);

mongoose
	.connect(DB.mongoURI, { useNewUrlParser: true })
	.then( () => console.log("Successful connection to database"))
	.catch(error => {
		console.log(`The following error occurred: ${error.message}`);
	});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use('/api', require('./routes/users'));
app.use('/api', require('./routes/medical'));
app.use('/api', require('./routes/education'));
app.use('/api', require('./routes/construction'));


app.listen( port, () => {
	console.log(`Listening at port ${port}`);
});