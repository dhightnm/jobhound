import React from "react"
import Login from "./components/authentication/login";
import AppliedTo from "./components/job status/appliedTo";
import NavBar from "./components/NavBar/NavBar";

const App = (props) => {

  return (
    <>
    <NavBar />
    <div>
      This is the Home Screen
    </div>
    <button onClick={() => window.location.href = '/login'}>Login</button> 
    <AppliedTo />
    </>
    
  )
};

export default App;
