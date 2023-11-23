import styled from "styled-components";
export const PrimaryBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: #4200ff;
  color: white;
  font-size: 14px;
  width: fit-content;
  padding: 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  gap: 10px;
  font-weight: bold;

  &[disabled] {
    background-color: #c6c6c6;
    cursor: not-allowed;
  }

  :hover {
    background-color: #3000f0;
  }
`;

interface Props {
  clickFn: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isActive?: boolean;
  buttonText: string;
  IconImage?: React.ComponentType | undefined;
}

const Button = ({
  clickFn,
  isActive = false,
  buttonText,
  IconImage,
}: Props) => {
  return (
    <PrimaryBtn onClick={clickFn} disabled={isActive} className="primary-btn">
      {IconImage && <IconImage />}
      {buttonText}
    </PrimaryBtn>
  );
};

export default Button;
