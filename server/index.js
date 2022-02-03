const express=require('express');
const http=require('http');
const app=express();
const cors=require('cors');
const { Server }=require('socket.io');
const Question=require('./QAModel.js');
const mongoose= require('mongoose');
const { findById } = require('./QAModel.js');
app.use(cors());
require('dotenv').config();

const server=http.createServer(app);

const mongoUrl=process.env.MongoDB_Database_URL;
mongoose.connect(mongoUrl);

const io=new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:['GET','POST']
    }
})

io.on('connection',(socket)=>{
    socket.on("askingQuestion",(object)=>{
        const Model=new Question({
            Questioner:object.Questioner,
            Question:object.Question
        })
        Model.save();
    });
    socket.on("getQuestions",()=>{
        Question.find().then((data)=>{
            socket.emit("takeQuestions",data);
        })
    });
    socket.on("setAnswer",(data)=>{
        Question.findOneAndUpdate({_id:data.Id},{
            $push:{
                Answers:data
            }
        });
    });
});

server.listen(3001,()=>{
    console.log("Server currently running");
})