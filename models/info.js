const mongoose=require("mongoose");
const InfoSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    username:String,
    city:String,
    state:String,
    pincode:Number,
    birthdate:String,
    favsuperhero:String,
    favfood:String,
    favcolor:String,
    fewords:String
});
const Info=mongoose.model("Info",InfoSchema);
module.exports=Info;