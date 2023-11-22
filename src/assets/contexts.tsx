import { createContext } from "react";

// Define the type for the form state
interface FormState {
  foldername: string;
  selected: string;
}

// Create a context for the new folder state
export const NewFolderContext = createContext<FormState | null>(null);
