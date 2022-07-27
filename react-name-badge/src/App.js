import React, {useState} from "react"
import ReactDOM from "react-dom"

export default function App() {
    
    const [formData, setFormData] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favFood: "",
            comments: ""
        }
    )
    
    const [badgeArray, setBadgeArray] = useState([])
    
    const badges = badgeArray.map(badge => {
        const {firstName, lastName, email, placeOfBirth, phone, favFood, comments} = badge
        return (
            <div className="badge">
                <h3 className="badgeTitle">Badge:</h3>
                <p className="badgeName">Name: {firstName} {lastName}</p>
                <p className="badgePhone">Phone: {phone}</p>
                <p className="badgePlaceOfBirth">Place of Birth: {placeOfBirth}</p>
                <p className="badgeFavFood">Favorite Food: {favFood}</p>
                <p className="badgeEmail">Email: {email}</p>
                <p className="badgeComments">{comments}</p>
            </div>
        )
    })
    
    function handleSubmit(e){
        e.preventDefault()
        setBadgeArray(prevBadgeArray => [...prevBadgeArray, formData])
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favFood: "",
            comments: ""
        })
        
        
    }
    function handleChange(e){
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name] : e.target.value
            }
        })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleChange}
                    className="firstName"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value= {formData.firstName}
                    minLength="3"
                    required
                />
                <input 
                    onChange={handleChange}
                    className="lastName"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    minLength="3"
                    required
                />
                <input
                    onChange={handleChange} 
                    className="email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    minLength="3"
                    required
                />
                <input
                    onChange={handleChange} 
                    className="placeOfBirth"
                    type="text"
                    placeholder="Place of Birth"
                    name="placeOfBirth"
                    value={formData.placeOfBirth}
                    minLength="3"
                    required
                />
                <input
                    onChange={handleChange} 
                    className="phone"
                    type="text"
                    pattern="^[0-9]*$"
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    minLength="3"
                    required
                />
                <input
                    onChange={handleChange}
                    className="favFood" 
                    type="text"
                    placeholder="Favorite Food"
                    name="favFood"
                    value={formData.favFood}
                    minLength="3"
                    required
                />
                <br/>
                <textarea
                    onChange={handleChange}
                    className="comments" 
                    type="text"
                    placeholder="Tell us about yourself"
                    name="comments"
                    value={formData.comments}
                    minLength="3"
                    required
                />
                <button>Submit</button>
            </form>
            {badges}
        </div>
    )
}