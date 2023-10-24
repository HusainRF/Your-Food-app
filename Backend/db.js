const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://HusainFR:12345678H@cluster0.qsupzx1.mongodb.net/YourFood?retryWrites=true&w=majority";

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");
        const fetch_data = await mongoose.connection.db.collection("food_items");
        fetch_data.find({}).toArray((err , data)=>{
                if(err) console.log(err);
                else console.log(data);

        })

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = mongoDB;
