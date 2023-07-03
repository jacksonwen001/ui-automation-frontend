import {
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import React from "react";

import { ProjectResponse } from "@/api/project";
import { DeleteProject } from "./DeleteProject";
import { EditProject } from "./EditProject";

export const ProjectItem = (props: ProjectResponse) => {
  const { id, name } = props;
  return (
    <Grid item xs={3}>
      <Box>
        <Card variant="outlined" sx={{ minWidth: 250 }}>
          <React.Fragment>
            <CardContent>
              <Typography variant="h6" component="div">
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
