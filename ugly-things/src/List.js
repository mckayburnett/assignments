import React, {useContext} from "react"
import {Context} from "./Context"

function List(props){

    const {list} = useContext(Context)
    
    return(
        <div className="wrappersWrapper">
        {list}
        </div>
    )
}

export default List