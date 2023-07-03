import { updateProjectApi } from "@/api/project";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useProjectState } from "../state/ProjectContext";
import { reloadProjectsAction } from "../state/ProjectActions";

export const useUpdateProject = (id: string, name: string) => {
  const [projectName, setProjectName] = useState<string>(name);

  const { enqueueSnackbar } = useSnackbar();
  const { dispatch } = useProjectState();

  const update = () => {
    updateProjectApi(id, { name: projectName })
      .then(() => {
        enqueueSnackbar("updated!");
        dispatch(reloadProjectsAction());
      })
      .catch((err) => {
        enqueueSnackbar("error: " + err.response.statusText);
      });
  };

  return { projectName, setProjectName, update };
};
