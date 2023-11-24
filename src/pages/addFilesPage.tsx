import styled from "styled-components";
import Logo from "../assets/Logo";
import AddForm from "../assets/addForm";
import { FC, useContext } from "react";
import NewFolderContext, { NewFolderContextProps } from "../assets/contexts";

const AddFilesPage: FC = () => {
  // Use the useContext hook to access the NewFolderContext
  const newFolderContext = useContext<NewFolderContextProps | undefined>(
    NewFolderContext
  );

  if (!newFolderContext) {
    // Handle the case where the context is not provided (optional)
    console.error("NewFolderContext is undefined");
    // You can provide a default behavior or return null
    return null;
  }

  const { newFolder } = newFolderContext;

  console.log("from add files page", newFolder);

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
