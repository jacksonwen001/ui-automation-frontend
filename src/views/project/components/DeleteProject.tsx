import { Transition } from "@/components/Transitions";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { useDeleteProject } from "../hooks/useDeleteProject";

export const DeleteProject = ({
  project_id,
  project_name,
}: {
  project_id: string;
  project_name: string;
}) => {
  const { visible, close, open, remove, loading } = useDeleteProject(project_id);

  return (
    <div>
      <Dialog open={visible} onClose={close} TransitionComponent={Transition}>
        <DialogTitle>Delete Project</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you wanna delete this project: {project_name}
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={close}>cancel</Button>
          <LoadingButton
            variant="contained"
            color="error"
            onClick={remove}
            loading={loading}
          >
            Delete
          </LoadingButton>
        </DialogActions>
      </Dialog>
      <IconButton onClick={open}>
        <DeleteOutlineOutlined />
      </IconButton>
    </div>
  );
};
