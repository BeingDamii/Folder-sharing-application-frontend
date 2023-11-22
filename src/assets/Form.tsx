import avatarImg from "../assets/avatar-img.png";
import { useState } from "react";
import SelectInput from "./selectInput";
import Button from "./Button";
import { PlusIcon } from "./icons";
import { NewFolderContext } from "./contexts";
import { useNavigate } from "react-router-dom";
import { FormWrapper } from "../styles/forms.styled";

const Form = () => {
  // form state
  const [foldername, setFolderName] = useState("");
  const [selected, setSelected] = useState("Folder type");
  // const [newFolder, setNewFolder] = useState({});
  const [error, setError] = useState<null | string>(null);
  const options: string[] = ["Folder type", "Image folder", "Document folder"];

  const navigate = useNavigate();
  let newFolder: {
    folderName: string;
    selected: string;
  } = { folderName: "demo", selected: "demo" };

  const handleClick = () => {
    if (!foldername || selected === "Folder type") {
      setError("Folder name is empty or you didn't select a folder type");
      return;
    }

    newFolder = { folderName: foldername, selected: selected };

    // console.log(newFolder);

    // Clear states after successful submission
    setError("");
    setFolderName("");
    setSelected("Folder type");

    navigate("/add-files");
  };
  return (
    <NewFolderContext.Provider value={newFolder}>
      <FormWrapper>
        <div className="avatar-section">
          <div className="img-wrapper">
            <img src={avatarImg} alt="avatar" className="avatar" />
          </div>
          <div className="text-wrapper">
            <h3>Welcome back,</h3>
            <h1>Eugene Ebenezer</h1>
          </div>
        </div>
        <p className="desc">
          Create a new folder of up to 5 items and get a link you can share.
        </p>
        <div className="heading">
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V4C20 2.9 19.1 2 18 2H10L8 0Z"
              fill="black"
            />
          </svg>

          <h3>New folder</h3>
        </div>
        <div className="form-elements">
          <input
            value={foldername}
            onChange={(e) => setFolderName(e.target.value)}
            type="text"
            className="folder-name"
            placeholder="Folder name"
          />
          <SelectInput
            options={options}
            selected={selected}
            setSelected={setSelected}
          />
          {error && <p className="error">{error}</p>}
          <Button
            buttonText="Create Folder"
            IconImage={PlusIcon}
            clickFn={handleClick}
          />
        </div>
      </FormWrapper>
    </NewFolderContext.Provider>
  );
};

export default Form;
