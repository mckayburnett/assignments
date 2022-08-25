import React, {useContext} from "react"
import {Context} from "./Context"

function Form(props){

    const {uglyThings, post, handleChange, deleteAll} = useContext(Context) 

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
                <button className="button" onClick={post}>Submit</button>
                <button className="buttonDeleteAll" onClick={deleteAll}>Delete All</button>
            </form>
        </div>
    )
}

export default Form