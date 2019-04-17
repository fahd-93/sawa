const mongoose = require('mongoose');
const typeSchema = require('../models/Types');
const Types = mongoose.model('Types', typeSchema);
const config = require('../config/config');


const seeder = require('mongoose-seed');

let url = config.mongoURI;

console.log(url);

seeder.connect(url, () => {

   seeder.loadModels(['../models/Types.js']);

    seeder.clearModels(['Types'], () => {
        seeder.populateModels( data, () => {
            seeder.disconnect();
        });
    });
});

let data = [
    {
        'model': 'Types',
        "documents": [
            {"construction_types": [
                "General Helper",
                "Construction Carpenter",
                "Construction Electrician",
                "Mason",
                "Plumber",
                "Welder",
                "Glazier",
                "Plasterer",
                "Roofer",
                "Site Superintendent",
                "Construction Managers",
                "Metal Fabricators",
                "Site Engineers",
                "Designers",
                "Elevator Mechanic",
                "Civil Engineer",
                "Field Engineer",
                "Planner",
                "Construction Engineer",
                "Equipment Operators"
            ]}
        ]
    }
];

console.log(data);