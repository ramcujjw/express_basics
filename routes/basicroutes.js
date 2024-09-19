//crud operations

// create a seperated file for the router
const express=require('express');
const router=new express.Router();
// express.Router :: we can access the http requests from here 
// instead of a dB we are going to create a arry for our crud operations.
router.use(express.json());//express.json is a server middleware ,only when we use this the server can recogmise the json file format
//external object identify cheyan  we use built in middleware
router.use(express.urlencoded({extended:true}));
var arr_obj=[{name:"miya",age:20,location:'tvm'},{name:"maya",age:22,location:'kollam'}];
router.get('/',(req,res)=>{
    res.render("students",{
        title:'Student',
        arr_obj
    });//we gonna pass the data
})
// db value add cheyyum :: post
router.post('/add',(req,res)=>{
    const data=req.body;//req.body use cheyth data access cheyum
    console.log(data);
    arr_obj.push(data);
    res.send('post successful');
})
//put operation
//we have to attach the body in order to edit data
router.put ('/edit',(req,res)=>{
    const data=req.body;
    arr_obj.splice(1,1,data);// arrayude first position to replaced data 
    res.send(arr_obj);

})
//delete 
router.delete('/remove',(req,res)=>{
    arr_obj.pop();
    res.send(arr_obj);
})

//put and delete have to be accessed by id
module.exports=router 