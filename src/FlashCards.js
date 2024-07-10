import {useState} from 'react'
const questions = [
    {
      id: 3457,
      question: "What language is React based on?",
      answer: "JavaScript"
    },
    {
      id: 7336,
      question: "What are the building blocks of React apps?",
      answer: "Components"
    },
    {
      id: 8832,
      question: "What's the name of the syntax we use to describe a UI in React?",
      answer: "JSX"
    },
    {
      id: 1297,
      question: "How to pass data from parent to child components?",
      answer: "Props"
    },
    {
      id: 9103,
      question: "How to give components memory?",
      answer: "useState hook"
    },
    {
      id: 2002,
      question:
        "What do we call an input element that is completely synchronised with state?",
      answer: "Controlled element"
    }
  ];

export default function FlashCards() {
    const [selectedId, setSelectedId] = useState(null)
    function handleSelectedId(id){
        setSelectedId(id !== selectedId? id: null)
    }
    return <>
        <div className ="flashcards">
        {questions.map((q)=><div onClick={()=>handleSelectedId(q.id)} className={q.id === selectedId?"selected":""} key={q.id}>{q.id === selectedId? q.answer : q.question}</div>)}
        </div>
    </>
  }
  