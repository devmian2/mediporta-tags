import { Box, BoxProps } from "@mui/material";
import type { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
  sx?: BoxProps["sx"];
};

function Wrapper(props: WrapperProps) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        ...props.sx,
      }}
    >
      {props.children}
    </Box>
  );
}

export default Wrapper;
