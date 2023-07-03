import { Grid } from "@mui/material";

import { useProjectState } from "../state/ProjectContext";
import { ProjectItem } from "./ProjectItem";
export const ProjectList = () => {
  const { projects } = useProjectState();
  return (
    <Grid container direction={"row"} columns={12} spacing={2} className="overflow-auto">
      {projects.map((project) => (
        <ProjectItem key={project.id} {...project} />
      ))}
    </Grid>
  );
};
