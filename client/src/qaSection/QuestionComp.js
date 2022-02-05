<<<<<<< HEAD
import { useState } from "react";
=======
import { useState} from "react";
>>>>>>> c90bd8a9db0fd4834beb48c037e0c4e7cfb52fad
import AddAnswer from "./AddAnswer";
import SeeAnswer from "./SeeAnswer";

function QuestionComp(props){
    let object=props.data;

    let [booleanAddAnswer,setBooleanAddAnswer]=useState(false);
    let [booleanSeeAnswer,setBooleanSeeAnswer]=useState(false);
    function addAnswerFunction(){
        setBooleanAddAnswer(true);
        setBooleanSeeAnswer(false);
    }
    function seeAnswerFunction(){
        setBooleanAddAnswer(false);
        setBooleanSeeAnswer(true);
    }

    return (
        <div>
            <h3>Questioner : {object.Questioner}</h3>
            <div>
                <p>Question : {object.Question}</p>
            </div>
            <button onClick={addAnswerFunction}>Add Answer</button>
            <button onClick={seeAnswerFunction}>See Answers</button>
            <div>
                {booleanAddAnswer && <AddAnswer data={object}/>}
                {booleanSeeAnswer && <SeeAnswer data={object}/>}
            </div>
        </div>
    );
}
export default QuestionComp;