import React from "react";
import styled from "styled-components";

interface CircularProgressProps {
  progress: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ progress }) => {
  return (
    <CircularProgressStyled className="circular-progress" percentage={progress}>
      {progress !== 100 && (
        <div className="percent">
          <svg>
            <circle cx={10} cy={10} r={10}></circle>
            <circle cx={10} cy={10} r={10}></circle>
          </svg>
        </div>
      )}
      {progress === 100 && (
        <div className="done">
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.99991 10.67L1.82991 6.5L0.409912 7.91L5.99991 13.5L17.9999 1.5L16.5899 0.0899963L5.99991 10.67Z"
              fill="#04DA0D"
            />
          </svg>
        </div>
      )}
    </CircularProgressStyled>
  );
};

const CircularProgressStyled = styled.div<{ percentage: number }>`
  .percent {
    position: relative;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      position: absolute;
      width: 30px;
      height: 30px;

      circle {
        width: 25px;
        height: 25px;
        fill: none;
        stroke-width: 3;
        stroke: #3000f0;
        stroke-dasharray: 55;
        stroke-dashoffset: 55;
        stroke-linecap: round;
        transform: translate(5px, 5px);

        &:nth-child(1) {
          stroke-dashoffset: 0;
          stroke: #d6d6d6;
        }

        &:nth-child(2) {
          stroke-dashoffset: calc(
            55 - (55 * ${(props) => props.percentage}) / 100
          );
          stroke: #3000f0;
        }
      }
    }
  }
`;

export default CircularProgress;
