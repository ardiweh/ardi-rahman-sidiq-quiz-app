
import React from 'react';
import { useState } from 'react';
import './QuizStyle.css'


const QuizComponent=()=>
{
    let Questionbank=[
        {
            Question:"Dimanakah ibu kota perancis?",
            Answers:[
                {Answer:"Paris", isCorret: true},
                {Answer:"Jakarta", isCorret: false},
                {Answer:"Barcelona", isCorret: false},
                {Answer:"Moskow", isCorret: false},
            ]
        },
        {
            Question:"Siapa pemimpin nazi?",
            Answers:[
                {Answer:"Asep", isCorret: false},
                {Answer:"Hitler", isCorret: true},
                {Answer:"Albert", isCorret: false},
                {Answer:"Vladimir", isCorret: false},
            ]
        },
        {
            Question:"Siapa presiden indonesia ke 7?",
            Answers:[
                {Answer:"Steven", isCorret: false},
                {Answer:"Hitler", isCorret: false},
                {Answer:"Tesla", isCorret: false},
                {Answer:"Jokowi", isCorret: true},
            ]
        },
        {
            Question:"Di negara mana Ronaldo dilahirkan?",
            Answers:[
                {Answer:"Belgia", isCorret: false},
                {Answer:"Portugal", isCorret: true},
                {Answer:"Singapore", isCorret: false},
                {Answer:"Austria", isCorret: false},
            ]
        },
        {
            Question:"Berapa kali Belanda menjuarai fifa world cup?",
            Answers:[
                {Answer:"5", isCorret: false},
                {Answer:"2", isCorret: false},
                {Answer:"Tidak pernah", isCorret: true},
                {Answer:"3", isCorret: false},
            ]
        }
    ]

    //useState Hook
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

const handleAnswerResponse=(isCorret)=>
{
    if (isCorret)
    {
        setScore(score+1);
    }

    const nextQuestion = currentQuestion+1;
    if (nextQuestion<Questionbank.length)
    {
        setCurrentQuestion(nextQuestion);
    }
    else
    {
        setShowScore(true);
    }
}

    const resetQuiz=()=>{
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    }

    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    Result:
                    <br></br>
                    You have a score {score} out of {Questionbank.length}
                    <>
                        <button className='button' type="submit" onClick={resetQuiz}>Play Again</button>
                    </>
                </div>
            )
                : (
                <>
                 <div className='question-section'>
                    <div className='question-count'>
                        <span>{currentQuestion+1}</span>/{Questionbank.length}
                    </div>
                    <div className='question-text'>
                        {Questionbank[currentQuestion].Question}
                    </div>
                 </div>

                 <div className='answer-section'>
                    {Questionbank[currentQuestion].Answers.map((answer)=>
                    (
                        <button className='buttonOption' onClick={()=>handleAnswerResponse(answer.isCorret)}>{answer.Answer}</button>
                    ))}
                 </div>
                </>
            )
            }

        </div>
    )
}

export default QuizComponent;