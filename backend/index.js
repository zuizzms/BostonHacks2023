const cors = require('cors')
const express=require('express'), 
http=require('http'); 
const hostname='localhost'; 
const mongoose = require("mongoose");
const Gym = require('./Models/gymModel')

const port=8080; 
const app=express(); 

// const sample_server=http.createServer(app); 

app.use(cors({
        origin: '*'
}))

app.use(express.json())
app.use((req, res, next) => {
        next()
})

// ROUTES

//Search page
app.get('/api/gyms/', async(req, res) => {
        try {
                const allGyms = await Gym.find({});
                console.log(req.params.id)
                res.status(200).json(allGyms)
        } catch (error) {
                console.log(error.message);
                res.status(500).json({message: error.message})
        }
})
//Individual gym page
app.get('/api/gym/:id', async(req, res) => {
        try {
                const id = req.params.id;
                console.log()
                const gym = await Gym.findById(id)
                res.status(200).json(gym)
        } catch (error) {
                res.status(500).json({message: error.message})
        }
})//Update rating
app.put('/updateRating', async(req, res) => {
        try {
                const id = req.query.id;
                const updateData = req.body;

                const data = await Gym.findById(id)

                data.lgbtRating = (data.lgbtRating * data.numRatings + updateData.lgbtRating) / (data.numRatings + 1)
                data.genderRating = (data.genderRating * data.numRatings + updateData.genderRating) / (data.numRatings + 1)                
                data.ageRating = (data.ageRating * data.numRatings + updateData.ageRating) / (data.numRatings + 1)                
                data.numRatings += 1

                console.log(data, id)

                const success = await Gym.findByIdAndUpdate(id, data)
                if(!success) {
                        return res.status(404).json({message: "cannot find gym"})
                }
                res.status(200).json(gym)
        } catch (error) {
                res.status(500).json({message: error.message})
        }
})

mongoose.connect("mongodb+srv://jeff:bostonhacks2023@cluster0.dnmuxsi.mongodb.net/?retryWrites=true&w=majority")
        .then(() => {
                app.listen(port, () => {
                        console.log("connected to DB and listening on port" + port)
                })
                app.get('/searchGyms', async(req, res) => {
        try {
                const gyms = await Gym.find({})
                console.log(gyms)
                res.status(200).json(gyms)
        } catch (error) {
                console.log(error.message);

        }
})
                // app.use((req, res)=> { 
                //         console.log(req.headers);  
                //         res.statusCode=200;  
                //         res.setHeader('Content-Type', 'text/html');  
                //         res.end('<html><body><h1>This is a test server</h1></body></html>'); 
                // }); 
        }).catch((error) => {
                console.log(error)
        })
  
// sample_server.listen(port, hostname, ()=> { 
//         console.log(`Server running at http: //${hostname}:${port}/`);});