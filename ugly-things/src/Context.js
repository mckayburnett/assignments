import React, {useEffect, useState} from "react"
const Context = React.createContext()
//does everything twice (POST, console.logs), submit posts every time for every description letter, need to delete twice for it to work, checked won't change submit button, edit won't work.
function ContextProvider(props){
    const [uglyThings, setUglyThings] = useState([
        {
            title:"",
            imgUrl:"",
            description:"",
        }
    ])

    const [editing, setEditing] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target
        setUglyThings({
            ...uglyThings,
            [name] : value
        })
        
    }
    const [uglyArray, setUglyArray] = useState([]) //api data

    useEffect(() => {
        fetch(`https://api.vschool.io/mckayburnett/thing`)
            .then(res => res.json())
            .then(data => {
              
                setUglyArray(data)
                console.log(`data: `, data)
            })
            console.log('fetch array')
    },[uglyThings])

    const list = uglyArray.map((item) => {
        const deleteOne = () => {
            fetch(`https://api.vschool.io/mckayburnett/thing/${item._id}`, {
                method: 'DELETE',
            })
            .then(res => res.text())
            .then(res => console.log(res))
            window.location.reload()
        }
        const edit = (e) => {
            const id = item._id
            setEditing(true);
            setUglyThings({
                id
            })
            console.log(`id: `, id)
        }

        return (
            <div className="listWrapper" key={item._id}>
                <h1 className="listTitle">{item.title}</h1>
                <img className="listImage" src={item.imgUrl} alt={"SOMETHING UGLY"}/>
                <h2 className="listDescription">Description: {item.description}</h2>
                <button className="delete" onClick={deleteOne} >Delete</button>
                <button className="edit" onClick={edit}>Edit</button>
                
            </div>
            
        )
    })
    
     

    const post = useEffect(() => {
        setEditing(false);
        fetch('https://api.vschool.io/mckayburnett/thing', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: uglyThings.title,
                imgUrl: uglyThings.imgUrl,
                description: uglyThings.description
            })
        })
        console.log('post')
    },[uglyThings.title, uglyThings.imgUrl, uglyThings.description])

    return (
        <Context.Provider value={{
            uglyThings : uglyThings,
            post : post,
            handleChange : handleChange,
            list : list,
            editing : editing,
            //edit : edit
        }}
        >
            {props.children}
        </Context.Provider>
    )

}

export {Context, ContextProvider}