const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.get('/', (req, res) => {
	res.send('hi from server');
});


//connect to mongodb
mongoose
	.connect(`mongodb://localhost:27017/sawa`, { useNewUrlParser: true })
	.then(console.log('Successful connection to database'))
	.catch((error) => {
		console.log(`The following error occurred: ${error.message}`);
    });

    app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({ extended: true }));
		
		//routes
    app.use('/api', require('./routes/users')); 



app.listen(process.env.PORT || 4000, () => {
	console.log('Listening at port 4000');
});