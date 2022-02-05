import { useState ,useContext} from "react";
import UserContext from '../usercontext';


function AddAnswer(props){

    const [answerer,setAnswerer]=useState("");
    const [answer,setAnswer]=useState("");
    const {socket} = useContext(UserContext);
    function addAnswer(event){
        event.preventDefault();
        if(answerer!=="" && answer!==""){
            let object={
                Id:props.data._id,
                Answerer:answerer,
                Answer:answer
            };
            socket.emit("setAnswer",object);
        }
    }

    return(
        <div>
            <div className="AddAnswerForm">
                <form>
                    <label>Name of Answerer</label>
                    <br/>
                    <br/>
                    <input
                    type="text"
                    required
                    placeholder="Name of Answerer"
                    value={answerer}
                    onChange={(e)=>{
                        setAnswerer(e.target.value);
                    }}
                    />
                    <br/><br/>
                    <label>Add Valid Answer</label>
                    <br/>
                    <br/>
                    <textarea
                    required
                    placeholder="Answer"
                    value={answer}
                    onChange={(e)=>{
                        setAnswer(e.target.value);
                    }}
                    ></textarea>
                    <br/><br/>
                    <button onClick={addAnswer}>Submit Answer</button>
                </form>
            </div>
        </div>
    );
}

export default AddAnswer;