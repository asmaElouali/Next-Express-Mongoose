const mongoose = require('mongoose');
const {Schema} = mongoose;

const schemapost = new Schema({
   title :{type : String , required : true},
   content : String, 
   status:{
       type : String,
       enum:["DRAFT","PUBLISHED"],
   } ,
   author:{
    type : mongoose.Types.ObjectId ,
    ref: "User"
   }, 

}, {timestamps : true});

const Post = mongoose.model('Post',schemapost);
module.exports = Post;