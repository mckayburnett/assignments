import React from "react"
import {useNavigate} from "react-router-dom"

export default function Services() {
    const navigate = useNavigate()

    return (
        <div className="servicesWrapper" style={{backgroundImage: 'url("https://cdn.dribbble.com/users/1498142/screenshots/3946296/mario.png")'}}>
            <div className="prices" style={{backgroundColor: 'rgb(255, 128, 0, .1)'}}>
                <h1>Clogged Toilet</h1>
                <h3>20 Coins</h3>
                <img src="https://i.pinimg.com/736x/11/4a/e6/114ae6227c91f00cef20b718bd2b15f7--mario-party-mario-brothers.jpg" alt="Star" className="star"></img>
            </div>
            <div className="prices" style={{backgroundColor: 'rgb(0, 255, 0, .1)'}}>
                <h1>Clogged Drains</h1>
                <h3>15 Coins</h3>
                <img src="https://i.pinimg.com/736x/11/4a/e6/114ae6227c91f00cef20b718bd2b15f7--mario-party-mario-brothers.jpg" alt="Star" className="star"></img>
            </div>
            <div className="prices" style={{backgroundColor: 'rgb(0, 0, 255, .1)'}}>
                <h1>Faucet Repair</h1>
                <h3>15 Coins</h3>
                <img src="https://i.pinimg.com/736x/11/4a/e6/114ae6227c91f00cef20b718bd2b15f7--mario-party-mario-brothers.jpg" alt="Star" className="star"></img>
            </div>
            <div className="prices" style={{backgroundColor: 'rgb(0, 0, 255, .1)'}}>
                <h1>Shower/Bath Repair</h1>
                <h3>25 Coins</h3>
                <img src="https://i.pinimg.com/736x/11/4a/e6/114ae6227c91f00cef20b718bd2b15f7--mario-party-mario-brothers.jpg" alt="Star" className="star"></img>
            </div>
            <div className="prices" style={{backgroundColor: 'rgb(255, 0, 0, .1)'}}>
                <h1>Water Heater Repair</h1>
                <h3>75 Coins</h3>
                <img src="https://i.pinimg.com/736x/11/4a/e6/114ae6227c91f00cef20b718bd2b15f7--mario-party-mario-brothers.jpg" alt="Star" className="star"></img>
                <img src="https://i.pinimg.com/736x/11/4a/e6/114ae6227c91f00cef20b718bd2b15f7--mario-party-mario-brothers.jpg" alt="Star" className="star"></img>
            </div>
            <div className="prices" style={{backgroundColor: 'rgb(0, 255, 0, .1)'}}>
                <h1>Green Pipe Installation</h1>
                <h3>1,000 Coins</h3>
                <img src="https://i.pinimg.com/736x/11/4a/e6/114ae6227c91f00cef20b718bd2b15f7--mario-party-mario-brothers.jpg" alt="Star" className="star"></img>
                <img src="https://i.pinimg.com/736x/11/4a/e6/114ae6227c91f00cef20b718bd2b15f7--mario-party-mario-brothers.jpg" alt="Star" className="star"></img>
                <img src="https://i.pinimg.com/736x/11/4a/e6/114ae6227c91f00cef20b718bd2b15f7--mario-party-mario-brothers.jpg" alt="Star" className="star"></img>
            </div>
            <div className="prices" style={{backgroundColor: 'rgb(0, 255, 0, .1)'}}>
                <h1>Full House Plumbing Installation</h1>
                <h3>2,500 Coins</h3>
                <img src="https://i.pinimg.com/736x/11/4a/e6/114ae6227c91f00cef20b718bd2b15f7--mario-party-mario-brothers.jpg" alt="Star" className="star"></img>
                <img src="https://i.pinimg.com/736x/11/4a/e6/114ae6227c91f00cef20b718bd2b15f7--mario-party-mario-brothers.jpg" alt="Star" className="star"></img>
                <img src="https://i.pinimg.com/736x/11/4a/e6/114ae6227c91f00cef20b718bd2b15f7--mario-party-mario-brothers.jpg" alt="Star" className="star"></img>
                <img src="https://i.pinimg.com/736x/11/4a/e6/114ae6227c91f00cef20b718bd2b15f7--mario-party-mario-brothers.jpg" alt="Star" className="star"></img>
            </div>
            <div className="prices" style={{backgroundColor: 'rgb(0, 0, 255, .1)'}}>
                <h1>Bowser Removal</h1>
                <h3>5,000 Coins</h3>
                <img src="https://i.pinimg.com/736x/11/4a/e6/114ae6227c91f00cef20b718bd2b15f7--mario-party-mario-brothers.jpg" alt="Star" className="star"></img>
                <img src="https://i.pinimg.com/736x/11/4a/e6/114ae6227c91f00cef20b718bd2b15f7--mario-party-mario-brothers.jpg" alt="Star" className="star"></img>
                <img src="https://i.pinimg.com/736x/11/4a/e6/114ae6227c91f00cef20b718bd2b15f7--mario-party-mario-brothers.jpg" alt="Star" className="star"></img><img src="https://i.pinimg.com/736x/11/4a/e6/114ae6227c91f00cef20b718bd2b15f7--mario-party-mario-brothers.jpg" alt="Star" className="star"></img>
                <img src="https://i.pinimg.com/736x/11/4a/e6/114ae6227c91f00cef20b718bd2b15f7--mario-party-mario-brothers.jpg" alt="Star" className="star"></img>
            </div>
        </div>
    )
}