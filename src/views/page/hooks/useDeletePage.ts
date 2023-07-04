import {
  PageResponse,
  QueryPageUsagesResponse,
  deletePageApi,
  queryPageUsagesApi,
} from "@/api/page";
import { useQueryStatus } from "@/hooks/useQueryStatus";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";

export const useQueryPageUsages = (page: PageResponse) => {
  const {
    isLoading,
    isError,
    errorMessage,
    setIsLoading,
    setIsError,
    setErrorMessage,
  } = useQueryStatus();
  const [pageUsages, setPageUsages] = useState<QueryPageUsagesResponse>({
    used: false,
    scenarios: [],
  });

  const [activeStep, setActiveStep] = useState(0);
  const [canDelete, setCanDelete] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    queryPageUsagesApi(page.id)
      .then((res) => {
        setIsLoading(false);
        setPageUsages(res);
        if (res.used) setCanDelete(false);
        else {
          setCanDelete(true);
          setActiveStep(activeStep + 1)
        } 
      })
      .catch((error) => {
        setIsError(true);
        setCanDelete(false)
        setErrorMessage(error.response.statusText);
      });
  }, []);

  return {
    isLoading,
    isError,
    errorMessage,
    pageUsages,
    activeStep,
    setActiveStep,
    canDelete,
    setCanDelete,
  };
};

export const useDeletePage = (page: PageResponse) => {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const remove = () => {
    setLoading(true);
    deletePageApi(page.id)
      .then(() => {
        enqueueSnackbar("delete page success", { variant: "success" });
        setLoading(false);
      })
      .catch((error) =>
        enqueueSnackbar(
          "delete page failed. error: " + error.response.statusText,
          { variant: "error" }
        )
      );
  };
  return { loading, remove };
};
