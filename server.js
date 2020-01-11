const express=require('express');
const app=express();
const path=require('path')

app.use(express.static('./dist/Angular-7-Demo-App-master'))
const port=process.env.PORT || 8080;

app.get("/*",function (req,res) {
    res.sendFile(path.join(__dirname+"/dist/Angular-7-Demo-App-master/index.html"))
})
app.listen(port,()=>{
  console.log(`app listening on port ${port}`)
});
