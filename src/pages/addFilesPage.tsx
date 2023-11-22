import styled from "styled-components";
import Logo from "../assets/Logo";
import AddForm from "../assets/addForm";
import { FC, useContext } from "react";
import { NewFolderContext } from "../assets/contexts";

const AddFilesPage: FC = () => {
  const NewFolder = useContext(NewFolderContext);

  console.log(NewFolder);
  
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
