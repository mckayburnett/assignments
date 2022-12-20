import React, {useEffect, useState} from "react"
import axios from "axios"

const Context = React.createContext()
// Edit only works once page is refreshed, but window.location.reload() doesn't work. delete doesn't work. multiple post/get. edit doesn't work unless page refreshed. post doesn't work.
function ContextProvider(props){
    const [uglyThings, setUglyThings] = useState([
        {
            title:"",
            imgUrl:"",
            description:"",
        }
    ])

    const [editing, setEditing] = useState(false);
    
    const [idArray, setIdArray] = useState([]);

    const [newInput, setNewInput] = useState({
        title: "",
        description: ""
    })

    function handleChange(e){
        const {name, value} = e.target
        setNewInput(prevThing => ({...prevThing, [name]:value }))
    }
    const [uglyArray, setUglyArray] = useState([]) //api data

    useEffect(() => {
        getUglyThings()
    }, [uglyArray.length])

    function getUglyThings() {
        axios.get(`https://api.vschool.io/mckayburnett/thing`)
        .then(res => setUglyArray(res.data))
        .catch(error => console.log(error))
    }



    const list = uglyArray.map((item) => {
    //     const deleteOne = (id) => {
    //         axios.delete(`https://api.vschool.io/mckayburnett/thing/${item._id}`)
    //         .then(res => console.log(res))
    //         .then(res => getUglyThings)
    //         .catch(err => console.log(err))
    //         setUglyArray(uglyArray.filter(item => (item._id !== id)))

    function deleteOne(id) {
        axios.delete(`https://api.vschool.io/mckayburnett/thing/${id}`)
        .then(res => console.log(res))
        .then(res => getUglyThings) 
        .catch(err => console.log(err))
        setUglyArray(uglyArray.filter(item => (item._id !== id)))
    }
        const edit = (e) => {
            e.preventDefault()
            const id = item._id
            setEditing(true);
            console.log(`id: `, id)
            setIdArray(id)
            console.log(`context id array: `,idArray)
        }

        return (
            <div className="listWrapper" key={item._id}>
                <h1 className="listTitle">{item.title}</h1>
                <img className="listImage" src={item.imgUrl} alt={"SOMETHING UGLY"}/>
                <h2 className="listDescription">Description: {item.description}</h2>
                <button className="delete" onClick={()=>deleteOne(item._id)}>Delete</button>
                <button className="edit" onClick={edit}>Edit</button>  
            </div>
            
        )
    })

    // const post = useEffect(() => {
    //     fetch('https://api.vschool.io/mckayburnett/thing', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             title: uglyThings.title,
    //             imgUrl: uglyThings.imgUrl,
    //             description: uglyThings.description
    //         })
    //     })
    //     console.log('post')
    // },[uglyThings.title, uglyThings.imgUrl, uglyThings.description])

    function postUglyThing(inputs){
        console.log("is post request function hit")
        //axios.post('https://api.vschool.io/mckayburnett/thing', {
         //title: uglyThings.title,
         //imgUrl: uglyThings.imgUrl,
         //description: uglyThings.description
        //})
        axios.post('https://api.vschool.io/mckayburnett/thing', inputs)
        .then(res => 
            res.data
            // setUglyArray(prev=>[...prev, res.data])
        )
        .then(res => getUglyThings())
        .catch(err => console.log(err))
    }

    return (
        <Context.Provider value={{
            uglyThings : uglyThings,
            setUglyThings : setUglyThings,
            setUglyArray : setUglyArray,
            uglyArray : uglyArray,
            getUglyThings,
            handleChange : handleChange,
            list : list,
            editing : editing,
            setEditing : setEditing,
            idArray : idArray,
            setIdArray : setIdArray,
            postUglyThing,
            newInput,
            setNewInput
        }}
        >
            {props.children}
        </Context.Provider>
    )

}

export {Context, ContextProvider}