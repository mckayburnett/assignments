/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */
  import React from "react"
  import ReactDOM from "react-dom"
  
  const reactBody = (
      <div>
          <div>
              <img src="./react-logo.png" width="40px"/>
          </div>
          <div>
              <h1>Fun facts about React</h1>
              <ul>
                  <li>Was first released in 2013</li>
                  <li>Was originally created by Jordan Walke</li>
                  <li>Has well over 100K stars on Github</li>
                  <li>Is maintained by Facebook</li>
                  <li>Powers thousands of enterprise apps, including mobile apps</li>
              </ul>
          </div>
      </div>
  )
  ReactDOM.render(reactBody, document.getElementById("root"))
  

  /**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */
import React from "react"
import ReactDOM from "react-dom"
function NewPage(){
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ul>
                <li>It's what I'll be using in my career</li>
                <li>Much more efficient than vanilla Javascript</li>
                <li>It's fun!</li>
                <li>I will be able to develop more at a better pace</li>
            </ul>
        </div>
    )
}
ReactDOM.render(<NewPage />, document.getElementById("root"))


/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */
    import React from "react"
    import ReactDOM from "react-dom"
    
    function Page() {
        return (
            <>
                <header>
                    <nav>
                        <img src="./react-logo.png" width="40px"/>
                    </nav>
                </header>
                <h1>Reasons I'm excited to learn React</h1>
                <ol>
                    <li>It's a popular library, so I'll be 
                    able to fit in with the cool kids!</li>
                    <li>I'm more likely to get a job as a developer
                    if I know React</li>
                </ol>
                <footer>
                    <small>© 2021 Burnett development. All rights reserved.</small>
                </footer>
            </>
        )
    }
    
    ReactDOM.render(<Page />, document.getElementById("root"))