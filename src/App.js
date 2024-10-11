import React, { useState } from "react"; // Import useState
import "./App.css";
import uitoolkit from "@zoom/videosdk-ui-toolkit";
import "@zoom/videosdk-ui-toolkit/dist/videosdk-ui-toolkit.css";

function App() {
  const [token, setToken] = useState("");
  const [sessionName, setSessionName] = useState("");


  const handleJoin = () => {  
    var config = {
      videoSDKJWT: token,
      sessionName: sessionName, 
      userName: "Instructor",
      sessionPasscode: "abc123",
      features: ["video", "audio", "share", "chat", "users", "settings", "preview"],
      options: { init: {}, audio: {}, video: {}, share: {}},
    };
    const sessionContainer = document.getElementById("sessionContainer");
    uitoolkit.joinSession(sessionContainer, config);
  };

  return (
    <div className="App">
      <div id="sessionContainer"></div>
      <div className="inputContainer">
        <input
          type="text"
          value={token}
          onChange={(e) => setToken(e.target.value)} // Update state on token input change
          placeholder="Enter JWT token"
        />
        <input
          type="text"
          value={sessionName}
          onChange={(e) => setSessionName(e.target.value)} // Update state on session name input change
          placeholder="Enter session name"
        />
        <button onClick={handleJoin}>Join</button>
      </div>
    </div>
  );
}

export default App;
