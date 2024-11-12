import React from "react"

export default function OneAnswer(props) {
        const [isDone,setisDone]=React.useState(props.isDone)
        const [isSelected,setisSelected]=React.useState(props.isSelected)
        const [isCorrect,setisCorrect]=React.useState(props.isCorrect)
        var myClassnames="quizbutton" 
        if(props.isDone) {
          if(props.isSelected && !props.isCorrect) {
                                        myClassnames="quizbutton qselected qred"  
                                        }
          if(props.isCorrect) {
                                        myClassnames="quizbutton qselected qgreen"  
                                        }
                    }
           else   {                        
                    if (props.isSelected) {
                                myClassnames="quizbutton qselected"
                                }
                                else
                                {
                               myClassnames="quizbutton" 
                                }
             }   
              //  console.log("one answer")
           /* return
            (
              <button  >{he.decode(props.answerValue)}</button>
            )*/
  // className={myClassnames}
  return (<button onClick={props.handleClick} className={myClassnames} isSelected={isSelected}>{he.decode(props.answerValue)}</button>)
 }