const mongoose = require('mongoose'); 
const mongoURI = 'mongodb://gofood:mern123@ac-bgj9wvl-shard-00-00.pcrchko.mongodb.net:27017,ac-bgj9wvl-shard-00-01.pcrchko.mongodb.net:27017,ac-bgj9wvl-shard-00-02.pcrchko.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-1zorcc-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB =async() =>{
    try{
        await mongoose.connect(mongoURI,{useNewUrlParser:true});
        console.log('Connected to MongoDB');
        const fetched_data = await mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();
        global.food_items = data;
        const foodCategory = await mongoose.connection.db.collection("foodCategory");
        const catData = await foodCategory.find({}).toArray();
        global.foodCategory = catData;
    }catch(error){
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = mongoDB;