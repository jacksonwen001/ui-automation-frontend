import { EditOutlined } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";

import { Transition } from "@/components/Transitions";
import { useCollapse } from "@/hooks/useCollapse";
import { useUpdateProject } from "../hooks/useEditProject";
import { ProjectResponse } from "@/api/project";

export const EditProject = (props: ProjectResponse) => {
  const { id, name } = props;
  const { visible, open, close } = useCollapse(false);
  const { projectName, setProjectName, update } = useUpdateProject(id, name);
  const submit = () => {
    update();
    close();
  };
  return (
    <div>
      <Dialog
        open={visible}
        onClose={close}
        TransitionComponent={Transition}
        fullWidth
      >
        <DialogTitle>Update Project</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            aria-label="Name"
            fullWidth
            variant="standard"
            required
            defaultValue={projectName}
            onChange={(e) => setProjectName(e.currentTarget.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={submit}>submit</Button>
        </DialogActions>
      </Dialog>
      <IconButton onClick={open}>
        <EditOutlined />
      </IconButton>
    </div>
  );
};
