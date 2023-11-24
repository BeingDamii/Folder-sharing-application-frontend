import React, {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

// Create a context for the new folder state
interface NewFolderState {
  folderName: string;
  selected: string;
}

export interface NewFolderContextProps {
  newFolder: NewFolderState;
  setNewFolder: Dispatch<SetStateAction<NewFolderState>>;
}

const NewFolderContext = createContext<NewFolderContextProps | undefined>(
  undefined
);

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

  return (
    <NewFolderContext.Provider value={{ newFolder, setNewFolder }}>
      {children}
    </NewFolderContext.Provider>
  );
};

export default NewFolderContext;
