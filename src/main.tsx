import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import { router } from "./router";
import { AppContextProvdier } from "./state/AppContext";
import "jsoneditor/dist/jsoneditor.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
      <AppContextProvdier>
        <RouterProvider router={router} />
      </AppContextProvdier>
    </SnackbarProvider>
  </React.StrictMode>
);
