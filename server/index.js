const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors= require('cors');
const fs = require('fs');
const ChartData = require('./model/chartDataModel'); // path to your schema file
require('dotenv').config();

//CONNECTION TO MONDODB ATLAS
const URI = process.env.MONGO_URI;
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    console.log("Database Connected")
)


// CODE TO STORE DATA IN IN DATABASE,NOW THE DATA PUSHED INTO THE DATABASE SO I COMMENT IT

// fs.readFile('./model/data.json', 'utf8', async (err, jsonString) => {
//     if (err) {
//         console.log("Error reading file from disk:", err);
//         return;
//     }
//     try {
//         const chartDataArray = JSON.parse(jsonString);
//         await ChartData.insertMany(chartDataArray)
//             .then(async (docs) => {
//                 console.log('Docs inserted:', docs);
//                 // Fetch data from the database to confirm insertion
//                 const fetchedDocs = await ChartData.find({});
//                 console.log('Data in the database:', fetchedDocs);
//               })

//             .catch(error => console.log('Error:', error));
//     } catch (err) {
//         console.log('Error parsing JSON string:', err);
//     }
// });


//EXPRESS SERVER START ON LOCAL MACHINE

const app = express();

//MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})



//ROUTES 1 (GET CHART DATA)

app.get('/chartdata', async (req, res) => {
    try {
        const data = await ChartData.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


app.get('/',(req,res)=>{
    res.send("i am main")
})