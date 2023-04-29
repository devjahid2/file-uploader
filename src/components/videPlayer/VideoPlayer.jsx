import React from "react";
import Player from "griffith";

const VideoPlayer = ({ src }) => {
  const sources = {
    hd: {
      play_url: src,
    },
  };
  const props = {
    id: "videoPlayer",
    title: "videoPlayer",
    cover: "",
    sources,
    useAutoQuality: true,
  };
  return (
    <div className="mt-5 content mb-5">
      <Player {...props} />
    </div>
  );
};

export default VideoPlayer;
