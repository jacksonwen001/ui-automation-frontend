import {
  PageResponse,
  QueryPageUsagesResponse,
  queryPageUsagesApi,
} from "@/api/page";
import { Transition } from "@/components/Transitions";
import { useCollapse } from "@/hooks/useCollapse";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";

import { useDeletePage } from "../hooks/useDeletePage";
import { useState } from "react";
import { nanoid } from "nanoid";
import React from "react";
import { useSnackbar } from "notistack";

export const DeletePage = (page: PageResponse) => {
  const { visible, open, close } = useCollapse(false);
  const { remove } = useDeletePage(page);
  const [activeStep, setActiveStep] = useState(0);
  const [errorStep, setErrorStep] = useState(-1);
  const [pageUsags, setPageUsags] = useState<QueryPageUsagesResponse>({
    used: true,
    scenarios: [],
  });
  const steps = ["Query", "Confirm"];

  const { enqueueSnackbar } = useSnackbar();

  const isStepFailed = (step: number) => {
    return errorStep === step;
  };

  const handleQuery = () => {
    queryPageUsagesApi(page.id).then((res) => {
      const nextStepIndex = activeStep + 1;
      setActiveStep(nextStepIndex);
      if (res.used) setErrorStep(nextStepIndex);
      else setErrorStep(-1);
      setPageUsags(res);
    });
  };

  const handleFinish = () => {
    close();
    if (errorStep != -1) {
      enqueueSnackbar("page was in used. cannot be deleted ", {
        variant: "error",
      });
      return;
    }
    remove();
  };

  return (
    <>
      <Dialog
        open={visible}
        onClose={close}
        TransitionComponent={Transition}
        fullWidth
      >
        <DialogTitle>Delete Project</DialogTitle>
        <DialogContent>
          <Stepper activeStep={activeStep}>
            {steps.map((step, index) => {
              const labelProps: {
                optional?: React.ReactNode;
                error?: boolean;
              } = {};

              if (isStepFailed(index)) {
                labelProps.optional = (
                  <Typography variant="caption" color="error">
                    Cannot Delete.
                  </Typography>
                );
                labelProps.error = true;
              }

              return (
                <Step key={nanoid()}>
                  <StepLabel {...labelProps}>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>

          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              {activeStep == 0 && (
                <>
                  Do you wanna delete this page? please query if this page is in
                  used.
                </>
              )}
              {activeStep == 1 && (
                <>
                  {pageUsags.used
                    ? `this page was in used by ${pageUsags.scenarios.map(
                        (it) => it
                      )}`
                    : "this page was not in used. You can delete it now"}
                </>
              )}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              {activeStep === steps.length - 1 ? (
                <Button onClick={handleFinish}>
                  {pageUsags.used ? "Cancel" : "Confirm"}
                </Button>
              ) : (
                <Button onClick={handleQuery}>Query</Button>
              )}
            </Box>
          </React.Fragment>
        </DialogContent>
      </Dialog>
      <IconButton onClick={open}>
        <DeleteOutlineOutlined />
      </IconButton>
    </>
  );
};
