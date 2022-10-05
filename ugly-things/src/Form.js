import React, {useContext} from "react"
import {Context} from "./Context"

function Form(props){

    let {uglyThings, setUglyThings, post, handleChange, editing, setEditing, edit, list, uglyArray, setUglyArray, idArray} = useContext(Context) 
    
    console.log(`idArray(context): `, idArray)
    // console.log(`form data: `, list[0].key)
    console.log(`uglyThings: `,uglyThings.title)

    const handleEdit = (e) => {
        console.log(`id array: `, idArray)
        fetch(`https://api.vschool.io/mckayburnett/thing/${idArray}`, {
            method: 'PUT',
            body: JSON.stringify({
                title : uglyThings.title,
                imgUrl : uglyThings.imgUrl,
                description : uglyThings.description
            }),
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .catch(err => console.log(err));
        window.location.reload()
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
                    <button className="submit" onClick={()=> {
                        handleEdit();
                        setEditing(false);
                    }}>Edit</button>
                    :
                    <button className="submit" onClick={post}>Submit</button>
                }
            </form>
        </div>
    )
}

export default Form