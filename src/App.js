import logo from "./logo.svg";
import "./App.css";
import uitoolkit from "@zoom/videosdk-ui-toolkit";
import "@zoom/videosdk-ui-toolkit/dist/videosdk-ui-toolkit.css";

function App() {
  const handleJoin = () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfa2V5IjoiVnEzYjdsUmhSdDdsTklLYjF3NlB6R0hqRU1odm9hMFAzVWFxIiwicm9sZV90eXBlIjoxLCJ0cGMiOiJzZXNzaW9uIDEiLCJ2ZXJzaW9uIjoxLCJpYXQiOjE3MjIyNzEyMDUsImV4cCI6MTcyMjI3NDgwNX0.8f6UcJWv8sEShoLZbsn4iMV2bzxRONnpRTAH0xgJwX0";
    var config = {
      videoSDKJWT: token,
      sessionName: "session 1",
      userName: "UserA",
      sessionPasscode: "abc123",
      features: ["video", "audio", "share", "chat", "users", "settings"],
    };
    const sessionContainer = document.getElementById("sessionContainer");
    uitoolkit.joinSession(sessionContainer, config);
  };
  return (
    <div className="App">
      <div id="sessionContainer"></div>
      <button onClick={handleJoin}>join</button>
    </div>
  );
}

export default App;
