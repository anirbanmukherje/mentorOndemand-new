const mongoose=require('mongoose')
const Schema=mongoose.Schema
const courseSchema=new Schema({
    _id:String,
    name:String,
    mentorId:String,
    description:String,
    date:String
})
module.exports=mongoose.model('course',courseSchema,'course')