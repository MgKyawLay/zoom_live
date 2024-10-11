import React from "react";
import ZoomVideo from "@zoom/videosdk";
import appColors from "./appcolor";

let client = ZoomVideo.createClient();
let videoDevices;
let localVideoTrack;

client.init("en-US", "Global", { patchJsMedia: true }).then(() => {
  ZoomVideo.getDevices().then((devices) => {
    videoDevices = devices.filter((device) => {
      return device.kind === "videoinput";
    });

    localVideoTrack = ZoomVideo.createLocalVideoTrack(videoDevices[0].deviceId);
    localVideoTrack.start(document.querySelector("#preview-camera-video"));
  });

  // turn on camera preview
});

const HostPanel = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: "50%",
          width: "50%",
          backgroundColor: appColors.grey200,
        }}
      >
        <h1 style={{ position: "absolute", color: "white" }}>Preview</h1>
        <video
          id="preview-camera-video"
          style={{ height: "100%", width: "100%" }}
        ></video>
      </div>
      <button
        style={{
          backgroundColor: appColors.primary500,
          color: "white",
          border: "none",
          padding: "10px 20px",
          marginTop: "20px",
          cursor: "pointer",
        }}
      >
        Join Now
      </button>
    </div>
  );
};

export default HostPanel;
