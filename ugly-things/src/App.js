import React from "react"
import Form from "./Form"
import List from "./List"
import {ContextProvider} from "./Context"

function App() {
  return (
    <>
      <ContextProvider>
        <h1 className="mainTitle">Ugly Things</h1>
        <Form />
        <List />
      </ContextProvider>
    </>
  );
}

export default App;
