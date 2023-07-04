import { Transition } from "@/components/Transitions";
import { useCollapse } from "@/hooks/useCollapse";
import { AddOutlined } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useAddPage } from "../hooks/useAddPage";

export const AddPage = () => {
  const { visible, open, close } = useCollapse(false);
  const { add, loading, setRequestData } = useAddPage();

  const create = () => {
    add();
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
        <DialogTitle>Add Page</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            aria-label="Name"
            fullWidth
            variant="standard"
            required
            onChange={(e) => setRequestData("name", e.currentTarget.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          <LoadingButton onClick={create} variant="contained" loading={loading}>
            Add
          </LoadingButton>
        </DialogActions>
      </Dialog>
      <Button startIcon={<AddOutlined />} variant="contained" onClick={open}>
        Add Page
      </Button>
    </div>
  );
};
