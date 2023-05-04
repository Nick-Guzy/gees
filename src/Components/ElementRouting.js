import SignIn from "./SignIn"
import { useState } from "react";

function ElementRouting() {
  const [currentlyVisibleState, setCurrentlyVisibleState] = useState("SignIn")
    return (
      <div>
        {currentlyVisibleState === "SignIn" ? <SignIn /> : <div></div> }
        <button onClick={ () => setCurrentlyVisibleState("SignIn")}>See all Projects</button>
      </div>
    )
  }

  export default ElementRouting;