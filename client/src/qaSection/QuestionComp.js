import { useState} from "react";
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
    function closeAddAnswer(){
        setBooleanAddAnswer(false);
    }
    function closeSeeAnswer(){
        setBooleanSeeAnswer(false);
    }

    return (
        <div>
            <div>
                <p>Question : {object.Question}</p>
            </div>
            <div>
            <h7>Question by~ {object.Questioner}</h7>
            </div>
            <button onClick={addAnswerFunction} className="addansbtn">Add Answer</button>
            <button onClick={seeAnswerFunction} className="seeansbtn">See Answers</button>
            <div>
                {booleanAddAnswer && <AddAnswer data={object}/>}
                {booleanAddAnswer && <button btn className="btn btn-outline-danger" onClick={closeAddAnswer}>Close</button>}
                {booleanSeeAnswer && <SeeAnswer data={object}/>}
                {booleanSeeAnswer && <button className="btn btn-outline-danger" onClick={closeSeeAnswer}>Close</button>}
            </div>
        </div>
    );
}
export default QuestionComp;