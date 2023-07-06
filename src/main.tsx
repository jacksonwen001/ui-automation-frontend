import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import "./index.css";
import { router } from "./router";
import { AppContextProvdier } from "./state/AppContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
      <AppContextProvdier>
        <RouterProvider router={router} />
      </AppContextProvdier>
    </SnackbarProvider>
  </React.StrictMode>
);
