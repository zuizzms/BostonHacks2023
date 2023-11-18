const express=require('express'), 
http=require('http'); 
const hostname='localhost'; 
const mongoose = require("mongoose");

const port=8080; 
const app=express(); 

// const sample_server=http.createServer(app); 

// app.use(cors({
//         origin: '*'
// }))

app.use(express.json())
app.use((req, res, next) => {
        next()
})

// app.use("/ratings",)

mongoose.connect("mongodb+srv://zuizzms:bostonhacks2023@cluster0.dnmuxsi.mongodb.net/?retryWrites=true&w=majority")
        .then(() => {
                app.listen(port, () => {
                        console.log("connected to DB and listening on port" + port)
                })
                // app.use((req, res)=> { 
                //         console.log(req.headers);  
                //         res.statusCode=200;  
                //         res.setHeader('Content-Type', 'text/html');  
                //         res.end('<html><body><h1>This is a test server</h1></body></html>'); 
                // }); 
        })
  
// sample_server.listen(port, hostname, ()=> { 
//         console.log(`Server running at http: //${hostname}:${port}/`);});