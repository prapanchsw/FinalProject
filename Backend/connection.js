var mongoose = require('mongoose')
mongoose.connect("mongodb+srv://Nithin:nithin@cluster0.wxm1h3p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected");
})
.catch((error)=>{
    console.log(error)
})