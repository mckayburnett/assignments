import React, {useContext} from "react"
import {Context} from "./Context"

function List(props){

    const {uglyThings, list} = useContext(Context)

    return(
        <div>
        {list}
            <div>
                <h1>{uglyThings.title}</h1>
                <img className="image" src={uglyThings.imgUrl} alt={`${uglyThings.description}`}></img>
                <h5>{uglyThings.description}</h5>
            </div>
        </div>
    )
}

export default List