import React from 'react';
import { makeStyles, ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Settings from './Settings';
import Dashboard from './Dashboard';

const theme = createTheme({
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#424242',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
    },
    MuiTypography: {
      h5: {
        fontWeight: 500,
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: 'bold',
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#303030',
      },
    },
    MuiListItem: {
      button: {
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeight,
    padding: theme.spacing.small,
    borderRadius: theme.spacing.unit,
    '&:hover': {
      backgroundColor: theme.overrides.MuiListItem.button['&:hover'].backgroundColor,
    },
  },
  drawer: {
    backgroundColor: theme.overrides.MuiDrawer.paper.backgroundColor,
  },
  button: {
    textTransform: theme.overrides.MuiButton.label.textTransform,
  },
  h5: {
    fontWeight: theme.overrides.MuiTypography.h5.fontWeight,
  },
  primaryText: {
    fontWeight: theme.overrides.MuiListItemText.primary.fontWeight,
  },
  appBar: {
    backgroundColor: theme.overrides.MuiAppBar.colorPrimary.backgroundColor,
  },
}));


export default function App() {
  
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

const handleDrawerToggle = () => {
  setDrawerOpen(!drawerOpen);
};

 return (
   <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            My App
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/settings">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Routes>
      </main>
    </div>
</ThemeProvider>
  );
};
