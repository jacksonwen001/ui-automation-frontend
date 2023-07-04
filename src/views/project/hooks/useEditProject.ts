import { updateProjectApi } from "@/api/project";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useProjectState } from "../state/ProjectContext";
import { reloadProjectsAction } from "../state/projectActions";

export const useUpdateProject = (id: string, name: string) => {
  const [projectName, setProjectName] = useState<string>(name);

  const { enqueueSnackbar } = useSnackbar();
  const { dispatch } = useProjectState();

  const update = () => {
    updateProjectApi(id, { name: projectName })
      .then(() => {
        enqueueSnackbar("updated project success!", { variant: "success" });
        dispatch(reloadProjectsAction());
      })
      .catch((err) => {
        enqueueSnackbar(
          "update project failed. error: " + err.response.statusText,
          { variant: "error" }
        );
      });
  };

  return { projectName, setProjectName, update };
};
