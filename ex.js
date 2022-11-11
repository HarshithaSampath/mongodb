const express=require('express');
const app=express();
const mongoose=require('mongoose');
//connecting
mongoose.connect("mongodb://localhost:27017/CSE_C",(err)=>{
if(err)
console.log("DB NOT Connected-Error");
else
console.log("DB Connected");
});
//schema creation
const ns=new mongoose.Schema({
name:String,
age:Number,
phno:Number
});
const nm=new mongoose.model("record",ns);
//inserting single data
//const data=new nm({name:'Harshitha',age:20,phno:1234567890});
//data.save();
//inserting multiple data at a time without creating  object
nm.insertMany([
	{name:'Dharani',age:54,phno:1234567890},
	{name:'Swathi',age:5,phno:9087654321},
	{name:'Indu',age:20,phno:4567890321},
	{name:'Bhavana',age:19,phno:7890654321}
]).then(function(){
	console.log("Dta Inserted")
}).catch(function(error){
	console.log(error)
});
//finding/searching the data
//use finOne() to get the first occurance
//use find() to get all the data
nm.findOne({},function(err,data){ 
if(err){
console.log(err);
}
else{
console.log("First Function Call:",data);
}
});
//finding a specific record
nm.findOne({age:5},function(err,data){
if(err){
console.log(err);
}
else{
console.log("First function call:",data);
}
});
//delete
nm.deleteOne({name:'Harshitha'}).then(function(){
console.log("Data deleted");//success
}).catch(function(error){
console.log(error)
});
//updateOne
const old={name:'Dharani'};
const new1={phno:987634512};
let doc =nm.updateOne(old,new1,(err)=>{
if(err){
console.log(err);
}
else{
console.log("updated");
}
});
//updateMany
//const old={name: /^S/};
//const new1={age:59};
//let doc =nm.updateMany(old,new1,(err)=>{
//if(err){
//console.log(err);
//}
//else{
//console.log("updated");
//}
//});