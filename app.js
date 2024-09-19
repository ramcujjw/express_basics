const express=require("express");
const app=new express();
const morgan=require('morgan');
app.use(morgan('dev'));
app.set('view engine','ejs');//inorder to use the ejs file
// console.log(__dirname); //will show dirname while compiling 
app.set('views',__dirname+'/views');//views folder path 

const basicRoutes=require('./routes/basicroutes'); // requiring the path of the files to route folder
//app.use is application level middleware
app.use('/basic',basicRoutes);//'/basic' enn ann varunna url enkil goto that file basicRoutes
//using morgan as a developer








app.listen(4000,()=>{
    console.log("server running on port 4000");
})