import { useState } from "react";
import { useSnackbar } from "notistack";

import { CreateProjectRequest, createProjectApi } from "@/api/project";
import { useProjectState } from "../state/ProjectContext";
import {
  reloadProjectsAction,
} from "../state/projectActions";

export const useAddproject = () => {
  const { dispatch } = useProjectState();
  const { enqueueSnackbar } = useSnackbar();
  const [request, setRequest] = useState<CreateProjectRequest>({
    name: "",
  });

  const submit = () => {
    createProjectApi(request)
      .then((res) => {
        dispatch(reloadProjectsAction());
        enqueueSnackbar("created project success!", { variant: "success" });
      })
      .catch((error) =>
        enqueueSnackbar(
          "create project failed. error: " + error.response.statusText,
          { variant: "error" }
        )
      );
  };

  return { submit, setRequest };
};
