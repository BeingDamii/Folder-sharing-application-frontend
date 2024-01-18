import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import axios, { AxiosResponse } from 'axios';
import FileComp from './fileComp';

interface FileUpload {
  file: File;
  progress: number;
}

const UploadBtn: React.FC = () => {
  const [fileUploads, setFileUploads] = useState<FileUpload[]>([]);

  const handleFileSelect = () => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    fileInput.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      const newFileUploads: FileUpload[] = Array.from(selectedFiles).map((file) => ({
        file,
        progress: 0,
      }));
      setFileUploads(newFileUploads);

      newFileUploads.forEach(uploadFile);
    }
  };

  const uploadFile = async (fileUpload: FileUpload) => {
    const formData = new FormData();
    formData.append("file", fileUpload.file);
  
    try {
      const response: AxiosResponse = await axios.post("/upload", formData, {
        onUploadProgress: (progressEvent) => {
          const progress = (progressEvent.loaded / progressEvent.total!) * 100; // Use optional chaining here
          setFileUploads((prevFileUploads) =>
            prevFileUploads.map((prevFileUpload) =>
              prevFileUpload === fileUpload
                ? { ...prevFileUpload, progress }
                : prevFileUpload
            )
          );
        },
      });
  
      // Handle the response if needed
      console.log("Upload successful:", response.data);
    } catch (error) {
      // Handle errors if any
      console.error("Error uploading file:", error);
    }
  };
  

  return (
    <UploadBtnWrapper>
      <button onClick={handleFileSelect}>Select Files</button>

      {fileUploads.map((fileUpload, index) => (
        <div key={index}>
          {/* Assume FileComp is a React component with appropriate props */}
          <FileComp
            progress={fileUpload.progress}
            fileName={fileUpload.file.name}
          />
        </div>
      ))}

      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept=".png, .jpg, .jpeg, .gif"
        multiple
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
