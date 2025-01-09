import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

export default function MenuAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h3"
            display="flex"
            justifyContent="center"
            alignItems="center"
            component="div"
            sx={{ flexGrow: 1, justifyItems: "center" }}
          >
            <p>User profile management System</p>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
