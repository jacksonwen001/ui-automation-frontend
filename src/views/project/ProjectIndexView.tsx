import { Alert, CircularProgress, Grow, Pagination, Stack } from "@mui/material";

import { ProjectList } from "./components/ProjectList";
import { useFetchProjects } from "./hooks/useFetchProjects";
import { AddProject } from "./components/AddProject";
import { usePagination } from "@/hooks/usePaginate";

export const ProjectIndexView = () => {
  const { total, isLoading, isError, errorMessage, params, setParams } =
    useFetchProjects();
    const range = usePagination({
      page: params.current,
      total: total,
      size: params.size,
    });
    
  return (
    <Grow in>
      <div className="bg-gray-100 w-screen h-screen flex items-center justify-center overflow-auto">
        <Stack
          flexWrap="wrap"
          spacing={2}
          className="w-3/4 h-full m-auto mt-3 flex"
        >
          <AddProject />
          {isLoading ? (
            <CircularProgress />
          ) : isError ? (
            <Alert severity="error">{errorMessage.response.statusText}</Alert>
          ) : (
            <ProjectList />
          )}
          <div className="self-end">
          <Pagination count={range.length} onChange={(_, current) => setParams({...params, current})} color="primary"/>
          </div>
        </Stack>
      </div>
    </Grow>
  );
};
