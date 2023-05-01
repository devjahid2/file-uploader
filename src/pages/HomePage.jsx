import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import DragAndDrop from "../components/dragAndDrop/DragAndDrop";
import SelectLanguage from "../components/selectLanguage/SelectLanguage";
import VideoPlayer from "../components/videPlayer/VideoPlayer";
import Download from "../components/download/Download";
import Swal from "sweetalert2";

const HomePage = () => {
  const [paths, setPaths] = useState([]);
  if(paths[0]){
    // return(
      Swal.fire(
        'Video Uploaded Done!',
        'Your video has been Uploaded',
        'success'
      )
      // console.log('alert')
    // )
  }
  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <div className="separator"></div>
      <div className="container">
        <DragAndDrop setPaths={setPaths} />
        <SelectLanguage src={paths} />
        <VideoPlayer src={paths} />
        <Download src={paths} />
      </div>
    </>
  );
};

export default HomePage;
