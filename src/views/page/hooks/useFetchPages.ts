import { PageResponse, QueryPageRequest, queryPagesApi } from "@/api/page";
import { useProjectId } from "@/hooks/useProjectId";
import { useQueryStatus } from "@/hooks/useQueryStatus";
import { useEffect, useState } from "react";
import { usePageState } from "../states/PageContext";

export const useFetchPages = () => {
  const [pages, setPages] = useState<PageResponse[]>([])
  const [total, setTotal] = useState(0);
  const {
    isLoading,
    isError,
    errorMessage,
    setIsLoading,
    setIsError,
    setErrorMessage,
  } = useQueryStatus();
  const project_id = useProjectId();
  const {reload} = usePageState()
  const [params, setParams] = useState<QueryPageRequest>({
    project_id,
    current: 1,
    size: 5,
  });
  useEffect(() => {
    setIsLoading(true);
    queryPagesApi(params)
      .then((res) => {
        setIsLoading(false);
        setTotal(res.total);
        setPages(res.pages)
      })
      .catch((error) => {
        setIsError(true);
        setErrorMessage(error);
      });
  }, [params, reload]);
  return { isLoading, isError, errorMessage, pages, total, params, setParams };
};
