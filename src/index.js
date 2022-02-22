const express = require("express");
const connect = require("./config/db");
const app = express();
app.use(express.json());


const PORT = 4101;
app.listen(PORT, async(req,res)=>{
    try {
        await connect();
        console.log(`Listening on port ${PORT}`);
    } catch (error) {
        console.log({message:error.message});
    }
})