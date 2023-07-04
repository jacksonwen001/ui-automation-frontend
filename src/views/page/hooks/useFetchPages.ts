import { PageResponse, QueryPageRequest, queryPagesApi } from "@/api/page";
import { useProjectId } from "@/hooks/useProjectId";
import { useQueryStatus } from "@/hooks/useQueryStatus";
import { useEffect, useState } from "react";

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
  const [params, setParams] = useState<QueryPageRequest>({
    project_id,
    current: 1,
    size: 10,
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
  }, [params]);
  return { isLoading, isError, errorMessage, pages, total, params, setParams };
};
