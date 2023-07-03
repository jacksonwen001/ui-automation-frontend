import { deleteProjectApi } from "@/api/project";
import { useCollapse } from "@/hooks/useCollapse";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useProjectState } from "../state/ProjectContext";
import { reloadProjectsAction } from "../state/ProjectActions";

export const useDeleteProject = (project_id: string) => {
  const [loading, setLoading] = useState(false);

  const { visible, open, close } = useCollapse(false);
  const { enqueueSnackbar } = useSnackbar();
  const { dispatch } = useProjectState();

  const remove = () => {
    setLoading(true);
    deleteProjectApi(project_id)
      .then(() => {
        enqueueSnackbar("delete project successful!");
        dispatch(reloadProjectsAction());
      })
      .catch((error) => {
        enqueueSnackbar("error: " + error.response.statusText);
      })
      .finally(() => {
        setLoading(false);
        close();
      });
  };

  return { visible, open, close, loading, remove };
};
