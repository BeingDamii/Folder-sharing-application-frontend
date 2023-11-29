import styled from "styled-components";
import Logo from "../assets/Logo";
import AddForm from "../assets/addForm";
import { FC } from "react";

const AddFilesPage: FC = () => {
  return (
    <PageStyles>
      <Logo />
      <AddForm />
    </PageStyles>
  );
};

const PageStyles = styled.div`
  padding: 50px 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default AddFilesPage;
