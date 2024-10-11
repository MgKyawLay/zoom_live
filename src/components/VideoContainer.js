import ZoomVideo from "@zoom/videosdk";
import React from "react";

const VideoContainer = ({ participants }) => {
    const client = ZoomVideo.createClient();
    const steam = client.getMediaStream();
    console.log("🚀 ~ VideoContainer ~ steam:", steam)
  return (
    <div>
      {participants.map((participant) => (
        <div>
          <ZoomVideo
            participantId={participant.userId}
            width="300px"
            height="200px"
            className="participant-video"
          />
        </div>
      ))}
    </div>
  );
};

export default VideoContainer;
