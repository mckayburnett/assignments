import axios from "axios"
import React, {useContext, useState} from "react"
import {Context} from "./Context"

function Form(props){
    const {_id} = props
    let {uglyThings, setUglyThings, post, handleChange, editing, setEditing, edit, list, uglyArray, setUglyArray, idArray, newInput, setNewInput, postUglyThing, getUglyThings} = useContext(Context) 

    const handleEdit = (id) => {
        let update = {
            title: newInput.title,
            description: newInput.description
        }
        axios.put(`https://api.vschool.io/mckayburnett/thing/${idArray}`, update) 
            .then(res => console.log(res.data))
            .then(res => getUglyThings())
            .catch(err => console.error(err))
            setUglyArray(prevList => prevList.map(item => (item._id === id ? 
                {...item, title: newInput.title, description: newInput.description} : item)))
    }
        
    function editThing(e){
        e.preventDefault();
        handleEdit(_id, newInput)
        setNewInput({
            title: '',
            description: '',
        })
        setEditing(false)
    }
    console.log(uglyThings, "inputs")
    function postThing(e) {
        console.log("is postThing hit")
        e.preventDefault()
        postUglyThing(uglyThings)
    }
    function uglyHandleChange(e){
        const {name, value} = e.target
        setUglyThings(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="formWrapper"> 
            <form className="form">
                {editing ?
                <>
                    <input
                        className="title"
                        placeholder="Title"
                        name="title"
                        value={uglyThings.title}
                        onChange={handleChange} />
                    <input
                        className="description"
                        placeholder="Description"
                        name="description"
                        value={uglyThings.description}
                        onChange={handleChange} 
                    />
                </>
                :
                <>
                    <input
                        className="title"
                        placeholder="Title"
                        name="title"
                        value={uglyThings.title}
                        onChange={uglyHandleChange} 
                    />
                    <input
                        className="imgUrl"
                        placeholder="Img URL"
                        name="imgUrl"
                        value={uglyThings.imgUrl}
                        onChange={uglyHandleChange} 
                    />
                    <input
                        className="description"
                        placeholder="Description"
                        name="description"
                        value={uglyThings.description}
                        onChange={uglyHandleChange} 
                    />
                </>
                }
                {editing ? 
                    <button className="submit" onClick={editThing}>Edit</button>
                    :
                    //<button className="submit" onClick={postUglyThing}>Submit</button>
                    <button className="submit" onClick={postThing}>Submit</button>
                }
            </form>
        </div>
    )
}

export default Form