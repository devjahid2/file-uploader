import React, { useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { images } from "../../assets/images/images";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "50px 20px",
  borderWidth: 2,
  borderRadius: 15,
  borderColor: "#cccccc",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
  cursor:"pointer"
};

const focusedStyle = {
  borderColor: "#cccccc",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};
const DragAndDrop = ({ setPaths }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setPaths(acceptedFiles.map((file) => URL.createObjectURL(file)));
    },
    [setPaths]
  );

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ accept: { "video/*": [] }, onDrop });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <div className="content mt-5">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div className="d-flex gap-2 align-items-center">
          <img src={images.upload_icon} alt="upload icon" />
          <p className="uploader-title">Drag & Drop Files Here to Upload</p>
        </div>
        <div className="text-center mt-4">
          <button className="default-btn select-btn">
            Select files to Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
