import React from "react";
import {
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";

import { ProjectResponse } from "@/api/project";
import { DeleteProject } from "./DeleteProject";
import { EditProject } from "./EditProject";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import { STORAGE_PROJECT_ID } from "@/constants";

export const ProjectItem = (props: ProjectResponse) => {
  const { id, name } = props;
  const navigate = useNavigate();
  const [, setStorage] = useLocalStorage<string | null>(
    STORAGE_PROJECT_ID,
    null
  );
  const goto = () => {
    navigate("/dashboard");
    setStorage(id);
  };

  return (
    <Grid item xs={3}>
      <Box>
        <Card variant="outlined" sx={{ minWidth: 250 }}>
          <React.Fragment>
            <CardContent>
              <Typography variant="h6" component="div" onClick={goto}>
                {name}
              </Typography>
              <Typography sx={{ md: "1.5" }} color="text.secondary">
                {""}
              </Typography>
              <Typography variant="body2">{""}</Typography>
            </CardContent>
            <CardActions>
              <DeleteProject project_id={id} project_name={name} />
              <EditProject {...props} />
            </CardActions>
          </React.Fragment>
        </Card>
      </Box>
    </Grid>
  );
};
