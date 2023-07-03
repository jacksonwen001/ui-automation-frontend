import {
  ProjectResponse,
  QueryProjectsResponse,
  UpdateProjectRequest,
} from "@/api/project";

export type ProjectActions =
  | {
      type: "ADD_PROJECTS";
      payload: ProjectResponse;
    }
  | {
      type: "UPDATE_PROJECT";
      payload: {
        projectId: string;
        request: UpdateProjectRequest;
      };
    }
  | {
      type: "DELETE_PROJECT";
      payload: string;
    }
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

export const createProjectAction = (
  payload: ProjectResponse
): ProjectActions => ({
  type: "ADD_PROJECTS",
  payload,
});

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

export const updateProjectAction = (
  projectId: string,
  request: UpdateProjectRequest
): ProjectActions => ({
  type: "UPDATE_PROJECT",
  payload: {
    projectId,
    request,
  },
});

export const removeProjectAction = (projectId: string): ProjectActions => ({
  type: "DELETE_PROJECT",
  payload: projectId,
});
