import styled from "styled-components";

const PrimaryBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: #4200ff;
  color: white;
  font-size: 14px;
  width: fit-content;
  padding: 15px;
  border-radius: 5px;
  border: none;
  gap: 10px;
  font-weight: bold;
  cursor: pointer;
`;

const Button = () => {
  return (
    <PrimaryBtn className="primary-btn">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
      </svg>
      Create Folder
    </PrimaryBtn>
  );
};

export default Button;
