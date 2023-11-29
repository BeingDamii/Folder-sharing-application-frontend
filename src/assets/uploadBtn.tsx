import styled from "styled-components";
import React, { ChangeEvent } from "react";

const UploadBtn: React.FC = () => {
  const handleFileSelect = () => {
    // Trigger the file input
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    fileInput.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Handle the selected file
    const selectedFiles = event.target.files;
    // Do something with the selected files
    console.log(selectedFiles);
  };

  return (
    <UploadBtnWrapper>
      <button onClick={handleFileSelect}>Click to add files.</button>

      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept=".png, .jpg, .jpeg, .gif"
      />
    </UploadBtnWrapper>
  );
};

const UploadBtnWrapper = styled.div`
  margin-top: 10px;
  button {
    width: 100%;
    height: 95px;
    border-radius: 10px;
    border: 1px dashed #000;
    background-color: transparent;
    cursor: pointer;
    font-size: 16px;
  }
`;

export default UploadBtn;
