import React, { useState, useEffect } from "react";
import "./App.css";
import uitoolkit from "@zoom/videosdk-ui-toolkit";
import "@zoom/videosdk-ui-toolkit/dist/videosdk-ui-toolkit.css";

function App() {
  useEffect(() => {
    joinSession();
  }, []);
  var sessionContainer;
  var chatContainer;
  var videoContainer;
  var controlsContainer;

  var config = {
    videoSDKJWT:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfa2V5IjoiVnEzYjdsUmhSdDdsTklLYjF3NlB6R0hqRU1odm9hMFAzVWFxIiwicm9sZV90eXBlIjoxLCJ0cGMiOiJ0ZXN0MSIsInZlcnNpb24iOjEsImlhdCI6MTczMDg4MDE5NywiZXhwIjoxNzMwODgzNzk3fQ.o-taB9gn7zBWeR5ZrNbznquqxx0MteEyUfP_MhmaLs8",
    sessionName: "test1",
    userName: "user1",
    sessionPasscode: "abc123",
    features: ["video", "audio", "settings", "users", "chat", "share"],
  };

  function joinSession() {
    sessionContainer = document.getElementById("sessionContainer");
    chatContainer = document.getElementById("chatContainer");
    videoContainer = document.getElementById("videoContainer");
    controlsContainer = document.getElementById("controlsContainer");

    uitoolkit.showUitoolkitComponents(sessionContainer, config);
    uitoolkit.showChatComponent(chatContainer);
    // uitoolkit.showVideoComponent(videoContainer);
    uitoolkit.showControlsComponent(controlsContainer);

    uitoolkit.onSessionClosed(sessionClosed);
    function sessionClosed() {
      uitoolkit.hideControlsComponent(controlsContainer);
      // uitoolkit.hideVideoComponent(videoContainer);
      uitoolkit.hideChatComponent(chatContainer);
      uitoolkit.hideUitoolkitComponents(sessionContainer);
    }
  }

  return (
      <div
        id="sessionContainer"
        // className="App"
      >
        <div className="left">
          <div id="chatContainer"></div>
        </div>
        <div className="right">
          <div id="videoContainer"></div>
          <div id="controlsContainer"></div>
        </div>
      </div>
  );
}

export default App;
