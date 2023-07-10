import { useEffect, useRef, useState } from "react";
import {
  Button,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

import { useJSONEditor } from "@/hooks/useJSONEditor";

export const CreateApi = () => {
  const editContainer = useRef<any>();
  const [json, setJSON] = useState<string>();
  const [parsedJSON, setParsedJSON] = useState<JSON>();
  const { enqueueSnackbar } = useSnackbar();
  const [tempJSON, setTempJSON] = useState<JSON>();
  const onChangeJSON = (json: any) => {
    console.log("JSON changed");
    setTempJSON(json);
  };
  const parseJSON = () => {
    setParsedJSON(undefined);
    try {
      let jsonObj = JSON.parse(json!);
      setParsedJSON(jsonObj);
    } catch (error) {
      enqueueSnackbar("" + error, { variant: "error" });
      console.log(error)

    }
  };
  const toJSONStr = () => {
    setJSON(JSON.stringify(tempJSON));
  };

  useEffect(() => {
    let editor = useJSONEditor(editContainer.current, onChangeJSON, "tree");
    if (parsedJSON) {
      editor.set(parsedJSON);
    }
    return () => {
      if (editor) editor.destroy();
    };
  }, [parsedJSON]);

  return (
    <div className="w-full h-full space-y-5">
      <div className="">
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <FormControl
            required
            sx={{
              width: 130,
            }}
          >
            <InputLabel id="demo-simple-select-label">Method</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Method"
            >
              <MenuItem value={"POST"}>POST</MenuItem>
              <MenuItem value={"DELETE"}>DELETE</MenuItem>
              <MenuItem value={"GET"}>GET</MenuItem>
              <MenuItem value={"PUT"}>PUT</MenuItem>
            </Select>
          </FormControl>
          <InputBase
            required
            sx={{ ml: 1, flex: 1 }}
            placeholder="Enter URL or paste text"
            inputProps={{ "aria-label": "URL" }}
          />
        </Paper>
      </div>

      <div className="space-y-5">
        <div className="space-y-3">
          <Typography>Request Content: </Typography>
          <TextField
            fullWidth
            rows={4}
            multiline
            onChange={(e) => {
              setJSON(e.currentTarget.value.replaceAll("\\", "").trim());
            }}
            value={json}
          />
          <div className="flex items-center justify-center gap-5">
            <Button onClick={parseJSON} className="self-end">
              <KeyboardDoubleArrowDownIcon />
            </Button>
            <Button onClick={toJSONStr} className="self-end">
              <KeyboardDoubleArrowUpIcon />
            </Button>
          </div>
        </div>
        <div ref={editContainer} className="h-64 overflow-scroll"></div>
      </div>


      <div className="w-full flex items-center justify-center mt-10 gap-5 ">
        <Button variant="contained" color="primary">
          Submit
        </Button>
        <Button variant="outlined" color="error">
          Cancel
        </Button>
      </div>
    </div>
  );
};
