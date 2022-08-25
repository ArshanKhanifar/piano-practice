import * as React from "react";
import { PropsWithChildren } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Piano } from "@mui/icons-material";
import { Link } from "@mui/material";
import { Stack } from "@mui/system";

const pages = ["Scales", "Chords", "Blog"];

const ButtonAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Piano fontSize={"large"} />
            <Stack spacing={2} direction={"row"} alignItems={"center"}>
              {pages.map((page) => (
                <Link
                  key={page}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Link>
              ))}
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ButtonAppBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
