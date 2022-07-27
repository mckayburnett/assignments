/*1. Pass in a new color of your choosing in place of the old one. 
    
    Hint: we don’t care what the previous color was.


    const [color, setColor] = React.useState("pink")
    function changeColor(){
        setColor("red")

    
2. Toggle between the colors pink and blue. If the current color is pink, we want to set it to blue. If it’s currently blue, set it back to pink.

const [color, setColor] = React.useState(["pink"])
        setColor(prevColor => {
            if(prevColor === "pink"){
                return "blue"
            } else {
                return "pink"
            }
        })
    }    
    

    
3. Add a new person object to the following `people` array in state. You can hard-code a new object but it must be a person object with `firstName` and `lastName` properties.
    
    const [people, setPeople] = useState([
    	{
    		firstName: "John",
    		lastName: "Smith"
    	}
    ])
    
    setPeople(prevPeople => prevPeople + {
        firstName: "McKay",
        lastName: "Burnett"
    })
    ```
    
4. Change the following state-setting functions to use an implicit return
    1. 
        

        const [colors, setColors] = setState(["pink", "blue"])
        
        setColors(prevColors => [...prevColors, "green"])
        
        
    2. 
        

        const [countObject, setCountObject] = setState({
        	count: 0
        })
        
        setCountObject(prevState=> {
        	return {
        		count: prevState.count + 1
        	}
        })
        ```
        
5. Update the following state to add an additional property `age` and set the value to `30`, ensuring that the other properties are not overwritten.
    
    const [person, setPerson] = useState({
    		firstName: "John",
    		lastName: "Smith"
    })
    
    setPerson(prevPerson => prevPerson + age: 30)
    ```
    
6. What’s wrong with the following state update?
    
    ```jsx
    const [colors, setColors] = useState(["pink", "blue"])
    
    setColors("green")
    ```*/