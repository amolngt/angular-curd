const express=require('express');
const app=express();
const path=require('path')

app.use(express.static(__dirname+'/dist/ang7'))
const port=process.env.PORT || 8080;
app.listen(port,()=>{
  console.log(`app listening on port ${port}`)
});
app.get("/*",function (req,res) {
    res.sendFile("./index.html")
})

