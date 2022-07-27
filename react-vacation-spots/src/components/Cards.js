import React from "react"

export default function Cards(props) {
    return (
        <div className="container">
            <div className="cardContainer">
                {props.spot.price > 1000 && <h5>$$$</h5>}
                {props.spot.price < 1000 && props.spot.price > 500 && <h5>$$</h5>}
                {props.spot.price < 500 && <h5>$</h5>}
                <h3 className="place">{props.spot.place}</h3>
                <h4 className="price">{`Price/week: $${props.spot.price}`}</h4>
                <h4 className="timeToGo">{`Best time to go: ${props.spot.timeToGo}`}</h4>
                <img src={props.spot.img} className="cardImg" />
            </div>
        </div>    
    )
}