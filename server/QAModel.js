const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const Question=new Schema({
    Questioner:{
        type:String,
        required:true
    },
    Question:{
        type:String,
        required:true
    },
    Answers:[]
})

let Quest=mongoose.model('DataCpp',Question);

module.exports=Quest;