import { useEffect, useState } from "react";
import { QueryProjectRequest, queryProjectApi } from "@/api/project";
import { useProjectState } from "../state/ProjectContext";
import {
  setProjectAction,
  setProjectTotalAction,
} from "../state/ProjectActions";

export const useFetchProjects = () => {
  const [params, setParams] = useState<QueryProjectRequest>({
    current: 1,
    size: 10,
  });
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<any>();

  const { dispatch, reload } = useProjectState();

  useEffect(() => {
    queryProjectApi(params)
      .then((res) => {
        setIsLoading(true);
        dispatch(setProjectAction(res.projects));
        setTotal(res.total);
        setIsLoading(false);
      })
      .catch((err) => {
        setisError(true);
        setErrorMessage(err);
        console.log(err);
      });
  }, [params, reload]);

  return { isLoading, isError, errorMessage, params, setParams, total };
};
