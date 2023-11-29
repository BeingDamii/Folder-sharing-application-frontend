import styled from "styled-components";
import Button from "./Button";
import { FolderIcon, UploadIcon } from "./icons";
import { FormWrapper } from "../styles/forms.styled";
import NewFolderContext, { NewFolderContextProps } from "./contexts";
import { useContext } from "react";
import UploadBtn from "./uploadBtn";

const AddForm = () => {
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

  console.log("from add files page", newFolder.selected);
  function saveFolder() {
    console.log("folder saved!");
  }
  return (
    <AddFormWrapper>
      <FolderIcon />
      <h3>My pictures folder</h3>
      <h1>Add files to folder</h1>
      <p className="desc">
        {newFolder.selected === "Image folder" &&
          "File size must not exceed 2MB, only PNG, JPEG, or GIF formats are allowed."}

        {newFolder.selected === "Document folder" &&
          " File size must not exceed 2MB, only word, PDF, or Text formats are allowed."}
      </p>
      <UploadBtn/>
      <Button
        clickFn={saveFolder}
        IconImage={UploadIcon}
        buttonText="Upload Image"
      />
    </AddFormWrapper>
  );
};

const AddFormWrapper = styled(FormWrapper)`
  width: 35%;
  .primary-btn {
    margin-top: 20px;
  }
  h3 {
    font-size: 16px;
    font-weight: 400;
    margin-top: 10px;
  }
  h1 {
    font-size: 22px;
  }
  .desc{
    margin-top: 10px;
  }
`;

export default AddForm;
