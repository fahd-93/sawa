const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4000;

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.get('/', (req, res) => {
	res.send('hi from server');
});

// connect to mLab
const DB = require('./config/keys');
console.log(DB.mongoURI);

mongoose
	.connect(DB.mongoURI, { useNewUrlParser: true })
	.then(() => console.log("Successful connection to database"))
	.catch(error => {
		console.log(`The following error occurred: ${error.message}`);
	});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Public folder -- Create a folder named Public

app.use(express.static('./public'));

//routes
app.use('/api', require('./routes/users'));
app.use('/api', require('./routes/medical'));
app.use('/api', require('./routes/education'));
app.use('/api', require('./routes/construction'));
app.use('/api', require('./routes/campaigns'));

app.listen(port, () => {
	console.log(`Listening at port ${port}`);
});