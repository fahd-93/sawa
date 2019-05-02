const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
const Campaign = require('./models/Campaign');
const User = require('./models/Users');

const port = process.env.PORT || 4000;


// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.get('/', (req, res) => {
	res.send('hi from server');
});


mongoose.Promise = global.Promise;
//connect to mLab
const DB = require('./config/keys');

//connect to mongodb
//connect to mongodb
// mongoose
// 	.connect(`mongodb://localhost:27017/sawa`, { useNewUrlParser: true })
// 	.then(data => console.log('Successful connection to database'))
// 	.catch((error) => {
// 		console.log(`The following error occurred: ${error.message}`);
// 	});

 mongoose
	.connect(DB.mongoURI, { useNewUrlParser: true })
	.then(() => console.log("Successful connection to database"))
	.catch(error => {
		console.log(`The following error occurred: ${error.message}`);
	}); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Public folder -- Create a folder named Public
app.use("/uploads", express.static("./public/uploads/"));

//join campaign
app.post('/api/users/join/campaign',   (req, res) => {
	const campaignId = req.body.campaignId; //CAMPAIN ID
	const userId = req.body.userId;
	console.log(req.body);

	var id = mongoose.Types.ObjectId(userId);
	
		Campaign.findById(campaignId, (err, doc)=>{
			console.log("DOC", doc);

			let index = doc.volunteers.indexOf(id);
			if(index !== -1) return res.send('you already joind');

			let volunteers = [];
			volunteers = [...doc.volunteers, id];
			doc.volunteers = volunteers;
			console.log(doc);
			doc.save();
			User.find({
				'_id': { $in: doc.volunteers}
			}, function(err, volunteers){
				 console.log(volunteers);
				 res.send({error:0, message:'joined successfully', volunteers:volunteers});
			});


			})
		} 
);

//Routes
app.use('/api', require('./routes/users'));

app.listen(port, () => {
	console.log(`Listening at port ${port}`);
});