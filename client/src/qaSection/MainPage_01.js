<<<<<<< HEAD
import { useEffect, useState } from "react";
import io from "socket.io-client";
import QuestionComp from "./QuestionComp";
import "./qaSectionCss.css";

const socket=io.connect("http://localhost:3001");
=======
import { useEffect, useState,useContext } from "react";
import QuestionComp from "./QuestionComp";
import "./qaSectionCss.css";
import UserContext from '../usercontext';

>>>>>>> c90bd8a9db0fd4834beb48c037e0c4e7cfb52fad

function MainPage_01(){

    const [questionList,setQuestionList]=useState([]);
<<<<<<< HEAD

=======
    const {socket} = useContext(UserContext);
>>>>>>> c90bd8a9db0fd4834beb48c037e0c4e7cfb52fad
    useEffect(()=>{
        socket.emit("getQuestions");
        socket.on("takeQuestions",(data)=>{
            console.log(data);
            setQuestionList(data);
        })
    },[]);

    return (
        <div>
            <h3>Question and answer section</h3>
            <section id="sync1">
                <h4>Asked Questions - </h4>
                <hr/>
                <section className="ScrollableDiv">
                    <div>
                    {questionList.map((element)=>{
                        return (
                            <div className="individualQuestion">
                                <QuestionComp data={element}/>
                            </div>
                        );
                    })}
                    </div>
                </section>
            </section>
        </div>
    );
}

export default MainPage_01;