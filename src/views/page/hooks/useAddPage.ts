import { CreatePageRequest, createPageApi } from "@/api/page";
import { useProjectId } from "@/hooks/useProjectId";
import { useSnackbar } from "notistack";
import { useState } from "react";

export const useAddPage = () => {
  const project_id = useProjectId();
  const [request, setRequest] = useState<CreatePageRequest>({
    project_id,
    name: "",
  });
  const setRequestData = (key: string, value: string) => setRequest({...request, [key]: value})

  const [loading, setloading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const add = () => {
    if (!request.name)
      enqueueSnackbar("page name cannot be empty", { variant: "error" });
    setloading(true);
    createPageApi(request)
      .then(() => {
        enqueueSnackbar("create page success", { variant: "success" });
      })
      .catch((error) =>
        enqueueSnackbar(
          "create page failed. error: " + error.response.statusText,
          { variant: "error" }
        )
      )
      .finally(() => setloading(false));
  };

  return { add, loading, setRequestData };
};
