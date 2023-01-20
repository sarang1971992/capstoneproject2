import express from 'express';
import connectDB from './db/DBconnection.js';
import cors from 'cors';
import router from './router/groceryRoutes.js';
const app = express();

const PORT = process.env.PORT || 5000;
const databaseURL = process.env.databaseURL || "mongodb://localhost:27017";
 


app.use(express.json());
app.use(cors()); 
connectDB(databaseURL);

app.use(router);



app.listen(PORT,() => {
    console.log("Server Running");
})


