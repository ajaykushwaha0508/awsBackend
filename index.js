import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 3000;

const createConnection = async()=>{
  try{
       await mongoose.connect("mongodb+srv://ajaykushwaha626162:jv4OCKVS5umwMQZf@awscluster.enda4.mongodb.net/?retryWrites=true&w=majority&appName=AWSCluster");
       console.log("DB Connected")
    }catch(err){   
        console.log("ERROR in DB Connected" , err)
  }
}

createConnection();

const userSchema = await mongoose.Schema(
    {
     name : String
    }
)

const userModal = await mongoose.model("UserData" , userSchema);

const newUser = new userModal({
    name : "Ajay"
})
  
try{
    const savedData =  await newUser.save();
    console.log(savedData);
}catch(err){
   console.log("error in insert data" , err)
}

app.listen(port , ()=>{
    console.log("server is running on port" , port);
})


