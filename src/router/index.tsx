import { createBrowserRouter } from "react-router-dom";
import { ProjectIndexView } from "../views/project/ProjectIndexView";
import { ProjectStateProvider } from "@/views/project/state/ProjectContext";
import { DashboardIndexView } from "@/views/dashboard/DashboardIndexView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProjectStateProvider>
        <ProjectIndexView />
      </ProjectStateProvider>
    ),
  },
  {
    path: "/dashboard",
    element: <DashboardIndexView />,
  },
]);
