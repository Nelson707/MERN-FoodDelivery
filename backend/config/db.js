import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://Admin:10977@nelson707.oszdhpg.mongodb.net/food-delivery').then(()=>console.log("DB connection successful"))
}

