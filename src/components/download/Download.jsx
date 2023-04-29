import React from "react";
import { images } from "../../assets/images/images";

const Download = ({ src }) => {
  return (
    <div className="my-5 content text-center">
      <a href={src[0]} download={true} className="default-btn d-block w-fit-content m-auto download-btn">
          <img className="me-2" src={images.download_icon} alt="download" />
          Download
      </a>
    </div>
  );
};

export default Download;
