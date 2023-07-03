import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import { useCollapse } from "@/hooks/useCollapse";
import { useAddproject } from "../hooks/useAddProject";
import { Transition } from "@/components/Transitions";
import { LoadingButton } from "@mui/lab";

export const AddProject = () => {
  const { visible, open, close } = useCollapse(false);
  const { submit, setRequest } = useAddproject();
  const add = () => {
    submit();
    close();
  };

  return (
    <div>
      <Dialog open={visible} onClose={close} TransitionComponent={Transition}>
        <DialogTitle>Add Project</DialogTitle>
        <DialogContent>
          <DialogContentText className="flex items-center gap-2">
            <AutoAwesomeIcon /> create one new project and start your testing
            journey.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            aria-label="Name"
            fullWidth
            variant="standard"
            required
            onChange={(e) => setRequest({ name: e.currentTarget.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          <LoadingButton onClick={add} variant="contained">Add</LoadingButton>
        </DialogActions>
      </Dialog>
      <Button startIcon={<AddCircleOutlineIcon />} variant='contained' onClick={open}>
        Add Project
      </Button>
    </div>
  );
};
