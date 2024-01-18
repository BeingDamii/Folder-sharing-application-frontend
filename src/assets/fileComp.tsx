import React from "react";
import styled from "styled-components";
import CircularProgress from "./circularProgress";

interface FileCompProps {
  progress: number;
  fileName: string;
}

const FileComp: React.FC<FileCompProps> = ({ progress, fileName }) => {
  return (
    <FileCompStyled>
      <svg
        width="25"
        height="26"
        viewBox="0 0 25 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="1"
          width="24"
          height="24"
          rx="4.5"
          fill="white"
          stroke="#D9D9D9"
        />
        <g clipPath="url(#clip0_24_265)">
          <path
            d="M17.4642 11.959V17.3929C17.4642 17.7481 17.3231 18.0887 17.0719 18.3399C16.8208 18.5911 16.4801 18.7322 16.1249 18.7322H9.87493C9.51973 18.7322 9.17908 18.5911 8.92791 18.3399C8.67675 18.0887 8.53564 17.7481 8.53564 17.3929V8.4643C8.53564 8.1091 8.67675 7.76845 8.92791 7.51728C9.17908 7.26612 9.51973 7.12502 9.87493 7.12502H12.6302C12.867 7.12505 13.094 7.21909 13.2614 7.38645L17.2028 11.3279C17.3701 11.4953 17.4642 11.7223 17.4642 11.959Z"
            stroke="black"
            strokeWidth="0.892857"
            strokeLinejoin="round"
          />
          <path
            d="M13 7.34823V10.6964C13 10.9332 13.0941 11.1603 13.2615 11.3278C13.429 11.4952 13.6561 11.5893 13.8929 11.5893H17.2411"
            stroke="black"
            strokeWidth="0.892857"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_24_265">
            <rect
              width="10"
              height="12.8571"
              fill="white"
              transform="translate(8 6.5)"
            />
          </clipPath>
        </defs>
      </svg>
      <div className="file-details-wrapper">
        <h3 className="file-title">{fileName}</h3>
        <p className="upload-percentage">{progress}%</p>
      </div>

      <CircularProgress progress={progress} />
    </FileCompStyled>
  );
};

const FileCompStyled = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  .file-details-wrapper {
    display: flex;
    flex-direction: column;
    width: 80%;
    h3 {
      margin-top: -5px;
      font-size: 14px;
      color: black;
      font-weight: bold;
    }
    p {
      font-size: 12px;
      color: #707070;
    }
  }
  .circular-progress {
    /* margin-left: 150px; */
  }
`;

export default FileComp;
