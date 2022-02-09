import AnswerComp from "./AnswerComp";

function SeeAnswer(props){

    let arrayOfAnswers=props.data.Answers;

    return (
        <div style={{paddingTop:"20px"}}>
            {arrayOfAnswers.map((element)=>{
                return (
                    <div className="individualAnswer">
                        <AnswerComp data={element}/>
                    </div>
                );
            })}
        </div>
    );
}

export default SeeAnswer;