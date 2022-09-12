const mongoose= require('mongoose')


const connectDB = async () => {
    try { 
        const connString = process.env.MONGO_URI
        console.log(connString)
        return await mongoose.connect(connString);
    }    catch(error){
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB
