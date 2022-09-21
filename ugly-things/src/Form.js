import React, {useContext} from "react"
import {Context} from "./Context"

function Form(props){

    let {uglyThings, post, handleChange, editing, edit, list} = useContext(Context) 

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
                    <button className="submit" onClick={edit}>Edit</button>
                    :
                    <button className="submit" onClick={post}>Submit</button>
                }
            </form>
        </div>
    )
}

export default Form