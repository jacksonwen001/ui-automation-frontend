import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import "./index.css";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
      <>
        <RouterProvider router={router} />
      </>
    </SnackbarProvider>
  </React.StrictMode>
);
