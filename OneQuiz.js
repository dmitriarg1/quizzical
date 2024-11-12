import React from "react"
import OneAnswer from "./OneAnswer"


export default function OneQuiz(props) {
    const[isSelected,setisSelected]=React.useState(props.isSelected)

    function handleClick(id) {
  //      console.log("Clicked in onequiz: " + id)
        props.answers.forEach((e) => (e.id===id)?e.isSelected=true:e.isSelected=false)
        
        setisSelected(!isSelected)
//        console.log(props.answers.filter((a) => a.isSelected===true)[0])
props.answers.filter((a) => a.isSelected===true)[0].isCorrect?
        props.isQCorrect(id):props.isQInCorrect(id)
   //     console.log("IS CORRECT? " + props.isQCorrect)
    }
    const answerElements=props.answers.map((a)=> 
            ( <OneAnswer handleClick={() => handleClick(a.id)} isDone={props.isDone} answerId={a.id} isSelected={a.isSelected} isCorrect={a.isCorrect} answerValue={a.value}/>)
    )
    return (<div class="quizdiv"><span class="question">
    {he.decode(props.question)}
    </span>
    <span class="answers">
    {answerElements}
    </span>
    <span class="horbar">
    </span>
    </div>)
}