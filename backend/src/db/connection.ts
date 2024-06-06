import mongoose from "mongoose";
import {connect,disconnect} from "mongoose"
export const connectToDatabase = async() => {
    try{
       await connect(process.env.MONGODB_URL)
    }
    catch(err){
        throw new Error("cannot connect to db")
    }
}

export async function disconnectFromDatabase(){
    try{
        await mongoose.disconnect()
    }
    catch(err){
        console.log('error',err);
        throw new Error("cannot disconnect from db")
    }
}