import React, { ReactNode, createContext, useState } from "react";

// Create a context for the new folder state
interface NewFolderState {
  folderName: string;
  selected: string;
}

const NewFolderContext = createContext<{
  newFolder: NewFolderState;
  setNewFolder: React.Dispatch<React.SetStateAction<NewFolderState>>;
}>({
  newFolder: {
    folderName: "",
    selected: "",
  },
  setNewFolder: () => {},
});

interface NewFolderProviderProps {
  children: ReactNode;
}

export const NewFolderProvider: React.FC<NewFolderProviderProps> = ({
  children,
}) => {
  const [newFolder, setNewFolder] = useState<NewFolderState>({
    folderName: "demo",
    selected: "demo",
  });

  function upDateNewFolder(item){
    setNewFolder(item)
  }

  return (
    <NewFolderContext.Provider value={{ newFolder, upDateNewFolder }}>
      {children}
    </NewFolderContext.Provider>
  );
};

export default NewFolderContext;
