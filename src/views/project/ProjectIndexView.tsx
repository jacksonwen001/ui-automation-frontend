import {
  Alert,
  CircularProgress,
  Grow,
  Pagination,
  Stack,
} from "@mui/material";

import { ProjectList } from "./components/ProjectList";
import { useFetchProjects } from "./hooks/usefetchProjects";
import { AddProject } from "./components/AddProject";

export const ProjectIndexView = () => {
  const { total, isLoading, isError, errorMessage, params, setParams } =
    useFetchProjects();
  return (
    <Grow in>
      <div className="bg-gray-100 w-screen h-screen flex items-center justify-center">
        <Stack flexWrap="wrap" spacing={3} className="w-3/4 h-full m-auto mt-3">
          <AddProject />
          {isLoading ? (
            <CircularProgress />
          ) : isError ? (
            <Alert severity="error">{errorMessage.response.statusText}</Alert>
          ) : (
            <ProjectList />
          )}
          <div className="self-end">
            <Pagination
              boundaryCount={5}
              count={total}
              variant="outlined"
              showFirstButton
              showLastButton
              page={params.current}
              onChange={(e, page) =>
                setParams({
                  ...params,
                  current: page,
                })
              }
            />
          </div>
        </Stack>
      </div>
    </Grow>
  );
};
