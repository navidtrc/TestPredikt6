import * as React from 'react';
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  Container,
  createTheme,
  Divider
} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { ThemeProvider } from "@emotion/react";
import { useNavigate, Outlet, Link } from "react-router-dom";
import AuthService from "../services/auth.service";
import { useState, useEffect } from "react";


const theme = createTheme({
  typography: {
    fontFamily: [
      'Fira Sans',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});

export default function MainLayout() {

  const CustomizedMenuItem = (props) => {
    //it needs divider
    if (props.color.toLowerCase() === "primary") {
      return (
        <>
          <ThemeProvider theme={theme}>
            <Divider
              sx={{
                mt: "20px",
                mb: "20px",
              }}
              style={{ backgroundColor: "gray" }}
              orientation="vertical"
              flexItem />
            <Link to={props.to}>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  mx: 1,
                  my: 2,
                  color: props.color,
                  display: "block",
                  textTransform: "none",
                }}
              >
                {props.label}
              </Button>
            </Link>
          </ThemeProvider>
        </>

      )
    } else {
      return (
        <ThemeProvider theme={theme}>
          <Link to={props.to} >
            <Button
              variant="outlined"
              size="small"
              sx={{
                mx: 1,
                my: 2,
                color: props.color,
                display: "block",
                textTransform: "none",
              }}
            >
              {props.label}
            </Button>
          </Link>
        </ThemeProvider>
      );
    }
  };

  let navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined);
  const [loggedinUserName, setLoggedinUserName] = useState(undefined);
  const pages = [
    { label: "About", to: "/about", color: "black" },
    { label: "Contact", to: "/contact", color: "black" },
    { label: "Testimonials", to: "/testimonials", color: "black" },
    { label: "FAQ", to: "/faq", color: "black" },
    {
      label: (loggedinUserName != undefined) ? "Dashboard" : "Login"
      , to: (currentUser != undefined) ? "/dashboard" : "/login"
      , color: "primary"
    },
  ];
  const toTarget = () => {
    navigate(pages.to);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      // debugger;
      setCurrentUser(user);
      let tempUser = AuthService.getCurrentUserName();
      if (tempUser) {

        setLoggedinUserName(tempUser);
      }
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="static"
          elevation={0}
          sx={{
            px: 0,
            mx: "auto",
            position: "relative",
            background: "white",
            color: "black",
            boxShadow: 1,
            mb: 1
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ px: '8%' }}>
              <Typography color="inherit" fontSize="36px" fontWeight="900" sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                color: 'inherit',
                textDecoration: 'none',

              }} >
                <Link to="/">
                  TestPredikt™
                </Link>
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {
                    pages.map((page) => (
                      <Link to={page.to} key={page.label} >
                        <MenuItem key={page.label} onClick={handleCloseNavMenu}

                        >
                          <Typography textAlign="center" color='black' textDecoration='none'>{page.label}</Typography>
                        </MenuItem>
                      </Link>
                    ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,

                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontSize: 'xx-large',
                  // letterSpacing: '.3rem',
                  fontWeight: 'bold',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                TestPredikt™
              </Typography>
              <Box sx={{
                justifyContent: "end",
                flexGrow: 1,
                display: { xs: "none", sm: "flex" },
              }}>
                {pages.map((page) => (
                  <CustomizedMenuItem
                    key={page.label}
                    label={page.label}
                    to={page.to}
                    color={page.color} />
                ))}
              </Box>

            </Toolbar>
          </Container>
        </AppBar>
        <Outlet />
        <div className="mainLayout"></div>
      </div>
    </ThemeProvider >
  );
}
