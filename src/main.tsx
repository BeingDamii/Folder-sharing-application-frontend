import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import AddFilesPage from "./pages/addFilesPage";
import { NewFolderProvider } from "./assets/contexts";

const router = createBrowserRouter([
  {
    path: "/",
    element:<NewFolderProvider><Home /></NewFolderProvider> ,
  },
  {
    path: "/add-files",

    element: (
      <NewFolderProvider>
        <AddFilesPage />
      </NewFolderProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
