import React from "react"
import Login from "./components/authentication/login";
import AppliedTo from "./components/job status/appliedTo";
const App = (props) => {

  return (
    <>
    <div>
      This is the Home Screen
    </div>
    <button onClick={() => window.location.href = '/login'} href="/login">Login</button> 
    <AppliedTo />
    </>
    
  )
};

export default App;
