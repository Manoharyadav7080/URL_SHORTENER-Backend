
const mongoose = require('mongoose');

async function connectionToMongoDB(url){
    return mongoose.connect(url);
} 

module.exports= {
    connectionToMongoDB,
}