import { useState } from "react";
import { useSnackbar } from "notistack";

import { CreateProjectRequest, createProjectApi } from "@/api/project";
import { useProjectState } from "../state/ProjectContext";
import { createProjectAction, reloadProjectsAction } from "../state/ProjectActions";

export const useAddproject = () => {
  const { dispatch } = useProjectState();
  const { enqueueSnackbar } = useSnackbar();
  const [request, setRequest] = useState<CreateProjectRequest>({
    name: "",
  });

  const submit = () => {
    createProjectApi(request)
      .then((res) => {
        dispatch(createProjectAction(res));
        dispatch(reloadProjectsAction())
        enqueueSnackbar("created!");

      })
      .catch((error) => enqueueSnackbar("error: " + error.response.statusText));
  };

  return { submit, setRequest };
};
