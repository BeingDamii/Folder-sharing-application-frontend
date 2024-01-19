import { useState } from "react";
import styled from "styled-components";

const SelectInputStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  .input-selector {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    padding: 10px;
    width: 100%;
    border: none;
    margin-top: 20px;
    border-bottom: 1px solid black;
    cursor: pointer;
    .input-selection {
      font-size: 16px;
      color: #707070;
    }
  }
  .options {
    position: absolute;
    padding: 20px;
    width: 100%;
    border-radius: 10px;
    border: 1px solid #9e9e9e;
    display: flex;
    flex-direction: column;
    background-color: white;
    gap: 10px;
    top: 70px;
    .option {
      font-size: 14px;
      cursor: pointer;
      padding-bottom: 10px;
      border-bottom: 1px solid #bbbbbb;
    }
  }
  .hideOptions {
    display: none;
  }
`;

interface Props {
  selected: string;
  setSelected: (option: string) => void;
  options: string[];
}



const SelectInput = ({ selected, options, setSelected }: Props) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionClick = (optionText: string) => {
    setSelected(optionText);
    setShowOptions(false);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <SelectInputStyled>
      <button className="input-selector" onClick={toggleOptions}>
        <p className="input-selection">{selected}</p>
        <svg
          width="14"
          height="11"
          viewBox="0 0 14 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 10.5L0.937822 0H13.0622L7 10.5Z" fill="black" />
        </svg>
      </button>
      <div className={showOptions ? "options" : "hideOptions"}>
        {options.map((option) => (
          <h4
            key={option}
            className="option"
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </h4>
        ))}
      </div>
    </SelectInputStyled>
  );
};

// #endregion

export default SelectInput;
