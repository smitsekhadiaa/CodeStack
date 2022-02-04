function AnswerComp(props){
    return (
        <div>
            <h4>Answer by - {props.data.Answerer}</h4>
            <div>
                Answer - {props.data.Answer}
            </div>
        </div>
    );
}

export default AnswerComp;