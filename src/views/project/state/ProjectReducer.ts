import { ProjectResponse } from "@/api/project";
import { ProjectActions } from "./projectActions";

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
    case "SET_PROJECTS":
      draft.projects = action.payload;
      break;
    case "RELOAD":
      draft.reload = !draft.reload;
      break;
    default: {
      break;
    }
  }
};
