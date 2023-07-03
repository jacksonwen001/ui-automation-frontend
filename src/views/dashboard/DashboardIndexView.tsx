import { Grid, List, ListItem, Paper } from "@mui/material";

export const DashboardIndexView = () => {
  return (
    <div>
     <Grid container direction={'row'} columns={12} spacing={2} border={1} marginTop={10}>
      <Grid item xs={3} md={3}>
        <Paper>dsds</Paper>
      </Grid>
      <Grid item xs={3} md={3}>
        <Paper>dsds</Paper>
      </Grid>
      <Grid item xs={3} md={3}>
        <Paper>dsds</Paper>
      </Grid>
      <Grid item xs={3} md={3}>
        <Paper>dsds</Paper>
      </Grid>
     </Grid>
    </div>
  );
};
