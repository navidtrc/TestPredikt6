import { AppBar, Box, Button, MenuItem, Toolbar, Typography, createTheme, Container } from "@mui/material";
import { useNavigate, Outlet, Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import Menu from '@mui/material/Menu';
import AuthService from "../services/auth.service";


import { ThemeProvider } from "@emotion/react";

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

const graycolor = "#bfbfbf"
const iconwidth = "0.8em"

export default function DashboardLayout() {
  let navigate = useNavigate();

  const pages = [
    // { label: "About", to: "/about" },
    // { label: "Contact", to: "/contact" },
    // { label: "Testimonials", to: "/testimonials" },
    // { label: "FAQ", to: "/faq" },
  ];
  const toTarget = () => {
    navigate(pages.to);
  }
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static"
        elevation={0}
        sx={{
          px: 0,
          mx: "auto",
          position: "relative",
          background: "white",
          color: "black",
          boxShadow: 1,
          mb: "2px"
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ px: '8%' }}>
            <Link to='/'>
              <Typography color="inherit" fontSize="36px" fontWeight="900" sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                color: graycolor,
                textDecoration: 'none',

              }} >
                TestPredikt™
              </Typography>
              <Typography variant="h4" color="inherit" sx={{

                display: { xs: 'flex', md: 'none' },
                // fontFamily: 'monospace',
                fontSize: 'xx-large',
                // letterSpacing: '.3rem',
                fontWeight: 'bold',
                color: graycolor,
                textDecoration: 'none',
              }} >
                TP
              </Typography>
            </Link>
            <Link to='talktous'>
              <LocalPostOfficeOutlinedIcon fontSize="large" sx={{ color: graycolor, ml: 3, width: iconwidth, }} />
            </Link>
            <Link to='talktous'>
              <Typography variant="h6" sx={{ color: graycolor, ml: 2, display: { xs: 'none', md: 'flex' }, }} noWrap>
                Talk to Us
              </Typography>
            </Link>
            <Box
              sx={{
                justifyContent: "end",
                flexGrow: 1,
                display: { xs: "flex", sm: "flex" },
              }}
            >
              {pages.map((page) => (
                <Link to={page.to} key={page.label} >
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      mx: 1,
                      my: 2,
                      color: "black",
                      display: "block",
                      textTransform: "none",
                    }}
                  >
                    {page.label}
                  </Button>
                </Link>
              ))}
              {/*<div style={{ marginTop: "20px", color: "grey" }}>|</div>*/}
              {/*<Link to='/login'>*/}
              {/*  <Button*/}
              {/*    variant="outlined"*/}
              {/*    size="small"*/}
              {/*    sx={{ mx: 1, my: 2, color: "primary", display: "block" }}*/}
              {/*  >*/}
              {/*    Login*/}
              {/*  </Button>*/}
              {/*</Link>*/}
              <NotificationsActiveOutlinedIcon fontSize="large" sx={{ color: graycolor, ml: 3, width: iconwidth }} />
              <AccountCircleOutlinedIcon fontSize="large" sx={{ color: graycolor, ml: 3, width: iconwidth }} />


              <Button onClick={() => {
                AuthService.logout();
              }}>Logout
              </Button>

            </Box>

          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </ThemeProvider>
  );
};
