import React, {useContext} from "react"
import {Context} from "./Context"

function Form(props){

    let {uglyThings, setUglyThings, post, handleChange, editing, setEditing, edit, list, uglyArray, setUglyArray, idArray} = useContext(Context) 
    
    

    const handleEdit = (e) => {
        e.preventDefault();
        setEditing(false)
        console.log(`id array: `,idArray)
        let lastArrayId = idArray.pop()
        fetch(`https://api.vschool.io/mckayburnett/thing/${lastArrayId}`, {
            method: 'PUT',
            body: JSON.stringify({
                title : `test`,
                imgUrl : `test`,
                description : `test`
            }),
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
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
                <input
                    className="imgUrl"
                    placeholder="Img URL"
                    name="imgUrl"
                    value={uglyThings.imgUrl}
                    onChange={handleChange}
                />
                <input
                    className="description"
                    placeholder="Description"
                    name="description"
                    value={uglyThings.description}
                    onChange={handleChange}
                />
                {editing ? 
                    <button className="submit" onClick={handleEdit}>Edit</button>
                    :
                    <button className="submit" onClick={post}>Submit</button>
                }
            </form>
        </div>
    )
}

export default Form