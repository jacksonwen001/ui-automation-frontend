import { PropsWithChildren, createContext } from "react";
import { ProjectState, projectStateReducer } from "./projectReducer";
import { FC, useContext } from "react";
import { useImmerReducer } from "use-immer";
import { ProjectActions } from "./projectActions";
import { ProjectResponse } from "@/api/project";

type ProjectContextProps = {
  projects: ProjectResponse[];
  total: number;
  reload: boolean;
  dispatch: React.Dispatch<ProjectActions>;
};
const ProjectContext = createContext<ProjectContextProps>(
  {} as ProjectContextProps
);

export const ProjectStateProvider: FC<PropsWithChildren> = ({ children }) => {
  const initialState: ProjectState = {
    reload: false,
    projects: [],
    total: 0,
  };

  const [state, dispatch] = useImmerReducer(projectStateReducer, initialState);
  const { projects, reload, total } = state;

  return (
    <ProjectContext.Provider value={{ projects, total, dispatch, reload }}>
      {children}
    </ProjectContext.Provider>
  );
};
export const useProjectState = () => {
  return useContext(ProjectContext);
};
