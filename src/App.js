
import "./App.css";
import uitoolkit from "@zoom/videosdk-ui-toolkit";
import "@zoom/videosdk-ui-toolkit/dist/videosdk-ui-toolkit.css";

function App() {
  const handleJoin = () => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBfa2V5IjoiVnEzYjdsUmhSdDdsTklLYjF3NlB6R0hqRU1odm9hMFAzVWFxIiwidHBjIjoiand0IHRlc3QiLCJyb2xlX3R5cGUiOjEsInNlc3Npb25fa2V5Ijoiand0IHRlc3Q1MjA0IiwidXNlcl9pZGVudGl0eSI6IkRhdyBUaW4gTmlsYXIgVHVuIiwidmVyc2lvbiI6MSwiaWF0IjoxNzI3MTUxNzEzLCJleHAiOjE3MjcxNTg5MTN9.jlQ1H3XIvfYsEprPpVtwAwbfp1E6FCu5uVdHxPtcbRE";
    var config = {
      videoSDKJWT: token,
      sessionName: "jwt test",
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
