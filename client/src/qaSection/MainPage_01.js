import { useEffect, useState,useContext } from "react";
import QuestionComp from "./QuestionComp";
import "./qaSectionCss.css";
import UserContext from '../usercontext';


function MainPage_01(){

    const [questionList,setQuestionList]=useState([]);
    const {socket} = useContext(UserContext);
    useEffect(()=>{
        socket.emit("getQuestions");
        socket.on("QuestionAdded");
        socket.on("takeQuestions",(data)=>{
            console.log(data);
            setQuestionList(data);
        })
    },[questionList,socket]);

    return (
        <div>
            <h3>Question and answer section</h3>
            <section id="sync1">
                <h4>Questions Asked - </h4>
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