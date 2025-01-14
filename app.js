const express = require('express');
const app = express();
const path=require("path");
const mongoose=require("mongoose");
const Info=require("./models/info.js")
const port = 80

async function hey(){
    await mongoose.connect("mongodb+srv://chandrayanpaul27:chandrayan%402006@cluster0.7ik3i.mongodb.net/forms");
}
hey();

app.use(express.urlencoded());

app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   res.sendFile("views/index.html",{root:__dirname});
// });

app.get('/', (req, res) => {

    res.status(200).render('index');
  });

app.post('/',(req,res)=>{
    console.log(req.body);
    const info=new Info({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        username:req.body.username,
        city:req.body.city,
        state:req.body.state,
        pincode:req.body.pincode,
        birthdate:req.body.birthdate,
        favsuperhero:req.body.favsuperhero,
        favfood:req.body.favfood,
        favcolor:req.body.favcolor,
        fewords:req.body.fewords
    });
    info.save();
    res.status(200).render('index');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});