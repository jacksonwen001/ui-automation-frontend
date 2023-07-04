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
import { PageResponse } from "@/api/page";

export const EditPage = (page: PageResponse) => {
  const { visible, open, close } = useCollapse(false);
  const submit = () => {
    close();
  };
  return (
    <>
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
            defaultValue={page.name}
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
    </>
  );
};
