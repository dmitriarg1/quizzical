import React from "react"
import OneQuiz from "./OneQuiz"
import Quiz from "./Quiz"

export default function Main() {
    const [quizstarted,setQuizStarted]=React.useState(false)
    function startquiz() {
        setQuizStarted(true)
    }
    if(!quizstarted) {
        return (<section class="main">
            <div class="rectangletop"><svg width="194" height="197" viewBox="0 0 194 197" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.4095 81.3947C71.1213 50.8508 33.3179 21.7816 37.1727 -19.6933C41.4394 -65.599 75.854 -105.359 118.419 -123.133C158.797 -139.994 206.035 -130.256 241.822 -105.149C271.947 -84.0141 272.823 -43.8756 282.141 -8.27104C292.17 30.0508 318.521 70.8106 296.501 103.779C273.538 138.159 224.991 143.432 183.931 138.768C148.318 134.723 123.751 107.677 99.4095 81.3947Z" fill="#FFFAD1"/>
</svg>
</div>
            <h1>Quizzical</h1>
            <h4>Some description if needed</h4>
            <button onClick={startquiz} id="start">Start quiz</button>
            <div class="rectanglebottom"><svg width="148" height="118" viewBox="0 0 148 118" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M-5.55191 4.90596C35.9614 1.77498 82.2425 -9.72149 112.306 19.1094C145.581 51.0203 155.282 102.703 142.701 147.081C130.767 189.18 93.7448 220.092 51.8208 232.476C16.5281 242.902 -15.4332 218.605 -49.1007 203.738C-85.3375 187.737 -133.641 182.993 -145.741 145.239C-158.358 105.868 -132.269 64.5881 -103.064 35.3528C-77.7328 9.99541 -41.2727 7.60006 -5.55191 4.90596Z" fill="#DEEBF8"/>
</svg></div>
                    </section>) }
                    else
                    {
                        return (<Quiz />)
                    }
}