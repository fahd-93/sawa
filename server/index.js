const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 4000;

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send('Hi from server');
});

// connect to mLab
const DB = require('./config/keys');


mongoose
	.connect(DB.mongoURI, { useNewUrlParser: true })
	.then( () => console.log("Successful connection to database"))
	.catch(error => {
		console.log(`The following error occurred: ${error.message}`);
	});

//connect to mongodb
// mongoose
// 	.connect(`mongodb://localhost:27017/sawa`, { useNewUrlParser: true })
// 	.then(data => console.log('Successful connection to database'))
// 	.catch((error) => {
// 		console.log(`The following error occurred: ${error.message}`);
//     });


//routes
app.use('/api', require('./routes/users'));


app.listen( port, () => {
	console.log(`Listening at port ${port}`);
});