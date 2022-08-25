import React, {useEffect, useState} from "react"
const Context = React.createContext()

function ContextProvider(props){
    const [uglyThings, setUglyThings] = useState([
        {
            title:"",
            imgUrl:"",
            description:"",
        }
    ])
    
    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target
        setUglyThings(prevThing => ({
            ...prevThing,
            [name] : value
        }))
    }
    const [uglyArray, setUglyArray] = useState([]) //api data

    // const list = useEffect(() => {
    //         fetch(`https://api.vschool.io/mckayburnett/thing`)
    //             .then(res => res.json())
    //             .then(data => setUglyArray(data))
    //     },[])
    
    
    useEffect(() => {
        fetch(`https://api.vschool.io/mckayburnett/thing`)
            .then(res => res.json())
            .then(data => {
                setUglyArray(data)
            })
            
    },[])
    for (let i=0; i<uglyArray.length; i++){
        console.log('i: ',uglyArray[i])
    }
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
    //     console.log('uglythings: ', uglyThings)
    //     console.log('data: ', uglyThings.data)
    // })

    // const deleteButton = useEffect(() => {
    //     fetch(`https://api.vschool.io/mckayburnett/thing/630589ee18d1a05bceae6cb5`, {
    //             method: 'DELETE',
    //           })
    //           .then(res => res.text()) // or res.json()
    //           .then(res => console.log(res))
    // },[])
    
    return (
        <Context.Provider value={{
            uglyThings : uglyThings,
            //post : post,
            handleChange : handleChange,
            // list : list
            //deleteButton : deleteButton
        }}
        >
            {props.children}
        </Context.Provider>
    )

}

export {Context, ContextProvider}