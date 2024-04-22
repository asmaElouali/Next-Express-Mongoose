const mongoose = require('mongoose');
const User = require('./model/User');
const Post = require('./model/Post');

async function main(){

    await mongoose.connect('mongodb://localhost:27017/exemple-mongoose');
    console.log('connexion Ok');

    //const user1 = new User({
      //  email: "asma@gmail.com",
        //firstname: "asma",
        //lastname: "elouali",
        //age: 24,
    //});
     //user1.save();
     // console.log(user1);

    //const user2 = await User.create({
      //   email : "meryam@gmail.com",
        // firstname : "meryam",
         //age : 18,
    //});
    //console.log(user2);
    //const user1= await User.find().select('firstname age -_id').sort(-firstname);
    //console.log(user1);

    //const user = await User.findById("65f56ca3ef3ffcfc4ca5567b");
    //await user.deleteOne({});
   // const id = "65f56a120e8b21cb5d2abe13";
    //const res = await User.findByIdAndUpdate(id, {lastname : "elouali"} , {new : true});
   // const res =await User.updateMany(
        //{email :"asma@gmail.com" , age :{$gte : 23}},
       // {firstname: "Hasna" },
        
   // );
    // const id= "65f613db843db02cc21d6186";
     //await User.deleteMany({});

    const asma =await User.findOne({firstname : "asma"}) ; 
    const meryam =await User.findOne({firstname : "meryam"}); 
    //console.log(asma);
    //console.log(meryam);
    
   // const Post1 = await Post.create({
       // title : "learning CSS",
       // content : "...",
       // status: "DRAFT",
       // author : asma._id,
    //}) ;
     // console.log(Post1);

     //const Post2 = await Post.findOne("65f6e4a35e912b75f4857b28");
     //await Post.deleteOne({_id : "65f6e4a35e912b75f4857b28"  })
    
    //console.log(res);
    //const Post2 = await Post.find({_id : "65f6e6b315270a767e7a5fa2"}).populate('author');
    // console.log(Post2);

    // const postUpdate = await Post.updateMany({},{content : "Vide"});
    const postUdate1 = await Post.findByIdAndUpdate(
        "65f6e6b315270a767e7a5fa2",
        {content : "empty"});
    console.log(postUdate1);

    //await mongoose.disconnect();
}  

main();