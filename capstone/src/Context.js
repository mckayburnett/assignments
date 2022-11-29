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
    const [selected, setSelected] = useState(false)
    const [selected2, setSelected2] = useState(false)
    const [category1, setCategory1] = useState([])
    const [category2, setCategory2] = useState([])
    const [category3, setCategory3] = useState([])
    const [category4, setCategory4] = useState([])
    const [category5, setCategory5] = useState([])

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
    
    const cat1 = (Math.floor(Math.random() * 27723) + 1);
    const cat2 = (Math.floor(Math.random() * 27723) + 1);
    const cat3 = (Math.floor(Math.random() * 27723) + 1);
    const cat4 = (Math.floor(Math.random() * 27723) + 1);
    const cat5 = (Math.floor(Math.random() * 27723) + 1);

    function valSelected(){
        setSelected(true)
    }
    function valSelected2(){
        setSelected2(true)
    }
    
    function getCat1(){
        axios.get("https://jservice.io/api/category/", { params: {id: `${cat1}` } })
        .then(res => setCategory1(res.data))
        .catch(error => console.log(error))
        console.log('category1: ', category1)
    }
    function getCat2(){
        axios.get("https://jservice.io/api/category/", { params: {id: `${cat2}` } })
        .then(res => setCategory2(res.data))
        .catch(error => console.log(error))
        console.log('category2: ', category2)
    }
    function getCat3(){
        axios.get("https://jservice.io/api/category/", { params: {id: `${cat3}` } })
        .then(res => setCategory3(res.data))
        .catch(error => console.log(error))
        console.log('category3: ', category3)
    }
    function getCat4(){
        axios.get("https://jservice.io/api/category/", { params: {id: `${cat4}` } })
        .then(res => setCategory4(res.data))
        .catch(error => console.log(error))
        console.log('category4: ', category4)
    }
    function getCat5(){
        axios.get("https://jservice.io/api/category/", { params: {id: `${cat5}` } })
        .then(res => setCategory5(res.data))
        .catch(error => console.log(error))
        console.log('category5: ', category5)
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
            category1,
            setCategory1,
            category2,
            category3,
            category4,
            category5, 
            getCat1,
            getCat2,
            getCat3,
            getCat4,
            getCat5,
            valSelected,
            selected,
            setSelected,
            selected2,
            valSelected2
        }}
        >
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}