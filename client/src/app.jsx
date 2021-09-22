import React from "react"
import Login from "./components/authentication/login";

const App = (props) => {

  return (
    <>
    <div>
      This is the Home Screen
    </div>
    <button onClick={() => window.location.href = '/login'}>Login</button> 
    </>
    
  )
};

export default App;
