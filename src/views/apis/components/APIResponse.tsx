import { Typography } from "@mui/material";
import { useEffect, useRef } from "react";

export const APIResponse = ({ response }: { response: string }) => {
  const responseView = useRef<any>();
  

  useEffect(() => {

  }, []);

  return (
    <div>
      <Typography>Response: </Typography>
      <div ref={responseView}></div>
    </div>
  );
};
