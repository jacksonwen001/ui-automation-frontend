import { Grow, Stack } from "@mui/material";

import { AddPage } from "./components/AddPage";
import { ListPage } from "./components/ListPage";

export const PageIndexView = () => {
  return (
    <Grow in>
      <Stack spacing={3}>
        <AddPage />
        <ListPage />
      </Stack>
    </Grow>
  );
};
