import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Header(props) {
  return (
    <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit"> 
              header
            </Typography>
          </Toolbar>
        </AppBar>
  )
}

export {
  Header
}
