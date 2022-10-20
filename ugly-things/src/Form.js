import axios from "axios"
import React, {useContext, useState} from "react"
import {Context} from "./Context"

function Form(props){
    const {_id} = props
    let {uglyThings, setUglyThings, post, handleChange, editing, setEditing, edit, list, uglyArray, setUglyArray, idArray, newInput, setNewInput, postUglyThing} = useContext(Context) 

    const handleEdit = (id) => {
        let update = {
            title: newInput.title,
            description: newInput.description
        }
        axios.put(`https://api.vschool.io/mckayburnett/thing/${idArray}`, update) 
            .then(res => console.log(res.data))
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

    return (
        <div className="formWrapper"> 
            <form className="form">
                <input
                    className="title"
                    placeholder="Title"
                    name="title"
                    value={uglyThings.title}
                    onChange={handleChange}
                />
                {editing ?
                <></>
                :
                <input
                    className="imgUrl"
                    placeholder="Img URL"
                    name="imgUrl"
                    value={uglyThings.imgUrl}
                    onChange={handleChange}
                />
                }
                <input
                    className="description"
                    placeholder="Description"
                    name="description"
                    value={uglyThings.description}
                    onChange={handleChange}
                />
                {editing ? 
                    <button className="submit" onClick={editThing}>Edit</button>
                    :
                    <button className="submit" onClick={postUglyThing}>Submit</button>
                }
            </form>
        </div>
    )
}

export default Form