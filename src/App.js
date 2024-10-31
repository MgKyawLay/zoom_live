import React, { useState, useEffect } from "react";
import "./App.css";
import uitoolkit from "@zoom/videosdk-ui-toolkit";
import "@zoom/videosdk-ui-toolkit/dist/videosdk-ui-toolkit.css";

function App() {
  const [token, setToken] = useState("");
  const [sessionName, setSessionName] = useState("");
  const [hideBtn, setHideBtn] = useState(false);
  const width = window.innerWidth;
  const height = window.innerHeight;

  useEffect(() => {
    // Parse URL parameters
    const params = new URLSearchParams(window.location.search);
    const tokenParam = params.get("token");
    const sessionNameParam = params.get("session_name");

    if (tokenParam) setToken(tokenParam);
    if (sessionNameParam) setSessionName(sessionNameParam);
  }, []);

  const handleJoin = () => {
    const config = {
      videoSDKJWT: token,
      sessionName: sessionName,
      userName: "Instructor",
      sessionPasscode: "abc123",
      features: ["video", "audio", "share", "chat", "users", "settings"],
      options: { init: {}, audio: {}, video: {}, share: {} },
    };

    const sessionContainer = document.getElementById("sessionContainer");
    uitoolkit.joinSession(sessionContainer, config);
    setHideBtn(true)
  };

  return (
    <div className="App" style={{ height: '100vh', width: '100vw',}}>
      <div id="sessionContainer"></div>
      <div className="inputContainer">
        {
          !hideBtn && <button onClick={handleJoin} style={{padding: 10, borderRadius: 100, backgroundColor:'blue', color:'white'}}>Start Live Session</button>
        }
        
      </div>
    </div>
  );
}

export default App;
