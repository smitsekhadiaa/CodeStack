import { useEffect, useState } from "react";
import io from "socket.io-client";
import QuestionComp from "./QuestionComp";
import "./qaSectionCss.css";

const socket=io.connect("http://localhost:3001");

function MainPage_01(){

    const [questionList,setQuestionList]=useState([]);

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