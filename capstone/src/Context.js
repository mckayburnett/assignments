import React, {useState} from "react"
import axios from "axios"
import song from "./song.mp3"


const Context = React.createContext()



function ContextProvider(props){
    const initInput = {
        input1:"",
        input2:""
    }
    const [inputs, setInputs] = useState(initInput)
    const [save, setSave] = useState([])
    const [questionArray, setQuestionArray] = useState([])
    const [uncoverAnswer, setUncoverAnswer] = useState(false)
    const [hideOptions, setHideOptions] = useState(false)
    const [lock, setLock] = useState(false)
    const [gameQuestions, setGameQuestions] = useState([])

    let audio = new Audio(song)

    const start = () => {
        audio.play()
    }

    const question = questionArray.map((item) => {
        return (
            <div>
                <h1 className="practiceCategory">{`Category: ${item.category.title}`}</h1>
                <h1 className="practiceQuestion">Question: <br></br><br></br>{item.question}</h1>
                <h1 className="practiceButton" onClick={getQuestion}>Get New Question</h1>
                {uncoverAnswer ? 
                <h1 className="practiceAnswer">What/who is: {item.answer}</h1>
                :
                <h1 className="practiceUncoverAnswer" onClick={() => setUncoverAnswer(true)}>Click to Uncover Answer</h1>
                }
            </div>
        )
    })

    function getQuestion(){
        axios.get("https://jservice.io/api/random")
        .then(res => setQuestionArray(res.data))
        .catch(error => console.log(error))
        console.log(`questionarray: `, questionArray)
        setUncoverAnswer(false)
    }
    function getGameQuestions(){
        axios.get("https://jservice.io/api/category/", { params: {id: 27723 } })
        .then(res => setGameQuestions(res.data))
        .catch(error => console.log(error))
        console.log('gameQuestions: ', gameQuestions)
    }
    function saveName(e){
        e.preventDefault()
        //const {name, value} = e.target
        //setInputs({
        //    [name]: value
        //})
        setSave(prev =>({
            ...prev,
            inputs
        }))
        start();
        e.currentTarget.disabled = true;
    }
 
    function handleChange(e){
        const {name, value} = e.target
        setInputs(newInput => ({...newInput, [name]:value }));
    }
    function lockAnswer(){
        setLock(true)
    }
    return(
        <Context.Provider value={{
            inputs,
            setInputs,
            saveName,
            save,
            handleChange,
            getQuestion,
            questionArray,
            setQuestionArray,
            question,
            uncoverAnswer,
            setUncoverAnswer,
            hideOptions,
            setHideOptions,
            start,
            lock,
            setLock,
            lockAnswer,
            getGameQuestions,
            gameQuestions,
            setGameQuestions
        }}
        >
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}