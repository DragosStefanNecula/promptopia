import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    console.log(process.env.MONGODB_URI)
    if (isConnected) {
        console.log("Mongodb is already connected.")
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true;
    } catch (error) {
        console.log(error);
    }
}