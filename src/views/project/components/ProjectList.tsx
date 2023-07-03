import { Grid } from "@mui/material";
import { useProjectState } from "../state/ProjectContext";

import { ProjectItem } from "./ProjectItem";
export const ProjectList = () => {
  const { projects } = useProjectState();
  return (
    <Grid container gap={2} direction={"row"} columns={4}>
      {projects.map((project) => (
        <ProjectItem key={project.id} {...project} />
      ))}
    </Grid>
  );
};
