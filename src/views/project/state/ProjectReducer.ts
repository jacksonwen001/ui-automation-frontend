import { ProjectResponse } from "@/api/project";
import { ProjectActions } from "./ProjectActions";

export type ProjectState = {
  projects: ProjectResponse[];
  total: number; 
  reload: boolean;
};

export const projectStateReducer = (
  draft: ProjectState,
  action: ProjectActions
): ProjectState | void => {
  switch (action.type) {
    case "ADD_PROJECTS":
      draft.projects.push(action.payload);
      break;
    case "UPDATE_PROJECT":
      break;
    case "DELETE_PROJECT":
      break;
    case "SET_PROJECTS":
      draft.projects = action.payload;
      break;
    case "RELOAD":
      draft.reload = !draft.reload
      break;
    default: {
      break;
    }
  }
};
