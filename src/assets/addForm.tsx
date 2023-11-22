import styled from "styled-components";
import { FormWrapper } from "./Form";
import Button from "./Button";
import { FolderIcon, UploadIcon } from "./icons";

const AddForm = () => {
  function saveFolder() {
    console.log("folder saved!");
  }
  return (
    <AddFormWrapper>
      <FolderIcon />
      <h3>My pictures folder</h3>
      <h1>Add files to folder</h1>
      <p className="desc">
        File size must not exceed 2MB, only PNG, JPEG, or GIF formats are
        allowed.
      </p>
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
  p {
  }
`;

export default AddForm;
