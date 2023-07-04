import {
  ProjectResponse,
  UpdateProjectRequest,
} from "@/api/project";

export type ProjectActions =
  | {
      type: "SET_PROJECTS";
      payload: ProjectResponse[];
    }
  | {
      type: "SET_PROJECT_TOTAL";
      payload: number;
    }
  | {
      type: "RELOAD";
    };

export const reloadProjectsAction = (): ProjectActions => ({
  type: "RELOAD",
});
export const setProjectAction = (
  payload: ProjectResponse[]
): ProjectActions => ({
  type: "SET_PROJECTS",
  payload,
});
export const setProjectTotalAction = (
  payload: number
): ProjectActions => ({
  type: "SET_PROJECT_TOTAL",
  payload,
});


