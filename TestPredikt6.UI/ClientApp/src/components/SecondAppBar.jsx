import {
  Typography,
  AppBar,
} from "@mui/material";
import React, { Component } from 'react';

class SecondAppBar extends Component {
  render() {
    return (<AppBar position="static" elevation={0} sx={{ px: 0, py: 1, position: "relative", background: "white", color: "black", boxShadow: 1 }}>
      <Typography fontSize="36px" fontWeight="300">
        {this.props.title}
      </Typography>
    </AppBar>);
  }
}

export default SecondAppBar;