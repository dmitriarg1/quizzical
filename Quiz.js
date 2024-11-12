import React from "react"
import {nanoid} from "nanoid"
import OneQuiz from "./OneQuiz"

export default function Quiz() {
    const [allQuizes,setallQuizes]=React.useState([])
    const [doneText,setdoneText]=React.useState()
    const [isDone,setisDone]=React.useState(false)
    const [doReset,setdoReset]=React.useState(false)
    //const[isQCorrect,setQCorrect]=React.useState(false)

    console.log(nanoid())
    React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
    .then(r=>r.json())
    .then(d=> d.results )
    .then(c=> { 
    const newQuiz=c.map((q)=> {
                            const allAnswers=[...q.incorrect_answers,q.correct_answer]
                            allAnswers.sort()
                            const idAnswers=allAnswers.map((a)=>
                                {
                                    const oneAnswer=({
                                    isSelected:false,
                                    isCorrect:(a===q.correct_answer)?true:false,
                                    id:nanoid(),
                                    value:a
                                    })
                                  return oneAnswer
                                 }
                            )
                           // console.log("idAnswers " + idAnswers)
                            return ({question: q.question, qid: nanoid(), isQCorrect: false,answers: idAnswers, correct_answer: q.correct_answer})
                            }
                        )
            setallQuizes(()=>newQuiz)
           console.log(allQuizes)

        
        })
        },[doReset])
    function isQCorrect(qid) {
        var newQuiz=allQuizes
        console.log("Updatind correctness")
        newQuiz[allQuizes.findIndex((e)=> e.qid===qid)].isQCorrect=true
                    setallQuizes(()=>newQuiz)

        
    }
    function isQInCorrect(qid) {
        var newQuiz=allQuizes
        console.log("Updatind Incorrectness")
        newQuiz[allQuizes.findIndex((e)=> e.qid===qid)].isQCorrect=false
                    setallQuizes(()=>newQuiz)

        console.log(allQuizes)
    }
    const quizElements = allQuizes.map(e=> (
                <OneQuiz question={e.question} isQCorrect={() => isQCorrect(e.qid)} 
                isQInCorrect={() => isQInCorrect(e.qid)} answers={e.answers} isDone={isDone} correct_answer={e.correct_answer}   />
    ))
    
        React.useEffect(() => {
        console.log(allQuizes);
    }, [allQuizes]);
    
    function handleAnswers() {
        console.log("Questions: " + allQuizes.length)
        const count =  allQuizes.reduce((counter, q) => {
       //     console.log("Q: ")
       //     console.log(q)
            if (q.isQCorrect === true) counter += 1
            return counter;
            }, 0); // 6
        console.log(allQuizes)
        console.log("Right answers: " + count)
        setisDone(true)
        setdoneText(<span>You scored {count}/{allQuizes.length} correct answers</span>)
    }
    function resetquiz() {
        setisDone(false)
        setdoReset(!doReset)
        setdoneText('')
    }
    return (
                 <section class="main">
        <div class="rectangletop">
            <svg width="162" height="187" viewBox="0 0 162 187" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M99.4095 71.3947C71.1213 40.8508 33.3179 11.7816 37.1727 -29.6933C41.4394 -75.599 75.854 -115.359 118.419 -133.133C158.797 -149.994 206.035 -140.256 241.822 -115.149C271.947 -94.0141 272.823 -53.8756 282.141 -18.271C292.17 20.0508 318.521 60.8106 296.501 93.7792C273.538 128.159 224.991 133.432 183.931 128.768C148.318 124.723 123.751 97.6768 99.4095 71.3947Z" fill="#FFFAD1"/>
            </svg>
        </div>
        GOES!!
        {quizElements}
        <div class="bottomline">
                        {isDone && doneText}
                        {isDone ? <button class="checkanswers" onClick={resetquiz}>Play again</button>:
                        <button class="checkanswers" onClick={handleAnswers}>Check Answers</button>
                        }
        </div>

        <div class="rectanglebottom" >
            <svg width="65" height="62" viewBox="0 0 65 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M-38.919 2.96445C-10.8241 1.07254 20.4975 -5.87426 40.8434 11.5469C63.3629 30.8293 69.9281 62.0589 61.4141 88.8747C53.3376 114.313 28.2818 132.992 -0.0909882 140.475C-23.9759 146.775 -45.6063 132.093 -68.3914 123.11C-92.9153 113.441 -125.606 110.575 -133.794 87.7612C-142.333 63.9714 -124.677 39.0277 -104.912 21.3621C-87.7687 6.03978 -63.0936 4.59238 -38.919 2.96445Z" fill="#DEEBF8"/>
            </svg>
        </div>
                 </section>

        )
}