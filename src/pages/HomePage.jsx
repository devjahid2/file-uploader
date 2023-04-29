import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import DragAndDrop from "../components/dragAndDrop/DragAndDrop";
import SelectLanguage from "../components/selectLanguage/SelectLanguage";
import VideoPlayer from "../components/videPlayer/VideoPlayer";
import Download from "../components/download/Download";

const HomePage = () => {
  const [paths, setPaths] = useState([]);
  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <div className="separator"></div>
      <div className="container">
        <DragAndDrop setPaths={setPaths} />
        <SelectLanguage />
        <VideoPlayer src={paths} />
        <Download src={paths} />
      </div>
    </>
  );
};

export default HomePage;
