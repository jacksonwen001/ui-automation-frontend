import { createBrowserRouter } from "react-router-dom";
import { ProjectIndexView } from "../views/project/ProjectIndexView";
import { ProjectStateProvider } from "@/views/project/state/ProjectContext";
import { DashboardIndexView } from "@/views/dashboard/DashboardIndexView";
import { PageIndexView } from "@/views/page/PageIndexView";
import { ScenarioIndexView } from "@/views/scenario/ScenarioIndexView";
import { SuiteIndexView } from "@/views/suite/SuiteIndexView";
import { Layout } from "@/views/layout/Layout";

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
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardIndexView />,
      },
      {
        path: "/pages",
        element: <PageIndexView />,
      },
      {
        path: "/scenarios",
        element: <ScenarioIndexView />,
      },
      {
        path: "/suites",
        element: <SuiteIndexView />,
      },
    ],
  },
]);
