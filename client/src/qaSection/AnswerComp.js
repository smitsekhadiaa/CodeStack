function AnswerComp(props){
    return (
        <div>
            <div>
                <h5>Answer - {props.data.Answer}</h5>
            </div>
            <p>Answer by - {props.data.Answerer}</p>
            
        </div>
    );
}

export default AnswerComp;