import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import {
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em"
    }
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em"
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em"
    }
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px"
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px"
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  },
  drawerIcon: {
    height: "50px",
    width: "50px"
  },
  drawIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawer: {
    backgroundColor: theme.palette.common.blue
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange
  },
  drawerItemSelected: {
    opacity: 1
  }
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const lessThanMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabChange = (e, newValue) => {
    setTabValue(newValue);
  };

  const handleMenuOpen = e => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuClose = e => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(index);
  };

  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/customsoftware" },
    { name: "Mobile App Development", link: "/mobileapps" },
    { name: "Website Development", link: "/websites" }
  ];

  useEffect(() => {
    if (window.location.pathname === "/" && tabValue !== 0) {
      setTabValue(0);
    } else if (window.location.pathname === "/services" && tabValue !== 1) {
      setTabValue(1);
    } else if (window.location.pathname === "/revolution" && tabValue !== 2) {
      setTabValue(2);
    } else if (window.location.pathname === "/about" && tabValue !== 3) {
      setTabValue(3);
    } else if (window.location.pathname === "/contact" && tabValue !== 4) {
      setTabValue(4);
    }

    switch (window.location.pathname) {
      case "/":
        if (tabValue !== 0) {
          setTabValue(0);
        }
        break;
      case "/services":
        if (tabValue !== 1) {
          setTabValue(1);
          setSelectedIndex(0);
        }
        break;
      case "/customsoftware":
        if (tabValue !== 1) {
          setTabValue(1);
          setSelectedIndex(1);
        }
        break;
      case "/mobileapps":
        if (tabValue !== 1) {
          setTabValue(1);
          setSelectedIndex(2);
        }
        break;
      case "/websites":
        if (tabValue !== 1) {
          setTabValue(1);
          setSelectedIndex(3);
        }
        break;
      case "/revolution":
        if (tabValue !== 2) {
          setTabValue(2);
        }
        break;
      case "/about":
        if (tabValue !== 3) {
          setTabValue(3);
        }
        break;
      case "/contact":
        if (tabValue !== 4) {
          setTabValue(4);
        }
        break;
      case "/estimate":
        if (tabValue !== 5) {
          setTabValue(5);
        }
        break;
      default:
        break;
    }
  }, [tabValue]);

  const tabs = (
    <>
      {" "}
      <Tabs
        className={classes.tabContainer}
        value={tabValue}
        onChange={handleTabChange}
        // indicatorColor="primary"
      >
        <Tab className={classes.tab} label="Home" component={Link} to="/" />
        <Tab
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? true : undefined}
          className={classes.tab}
          label="Services"
          component={Link}
          to="/services"
          onMouseOver={e => handleMenuOpen(e)}
        />
        <Tab
          className={classes.tab}
          label="The Revolution"
          component={Link}
          to="/revolution"
        />
        <Tab
          className={classes.tab}
          label="About Us"
          component={Link}
          to="/about"
        />
        <Tab
          className={classes.tab}
          label="Contact Us"
          component={Link}
          to="/contact"
        />
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        component={Link}
        to="/estimate"
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        MenuListProps={{ onMouseLeave: handleMenuClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
      >
        {menuOptions.map((option, index) => (
          <MenuItem
            key={option}
            onClick={e => {
              handleMenuItemClick(e, index);
              setTabValue(1);
              handleMenuClose();
            }}
            selected={index === selectedIndex && tabValue === 1}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List disablePadding>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setTabValue(0);
            }}
            divider
            button
            component={Link}
            to="/"
            selected={tabValue === 0}
          >
            <ListItemText
              className={
                tabValue === 0
                  ? [classes.drawerItemSelected, classes.drawerItem]
                  : classes.drawerItem
              }
              disableTypography
            >
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setTabValue(1);
            }}
            divider
            button
            component={Link}
            to="/services"
            selected={tabValue === 1}
          >
            <ListItemText
              className={
                tabValue === 1
                  ? [classes.drawerItemSelected, classes.drawerItem]
                  : classes.drawerItem
              }
              disableTypography
            >
              Services
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setTabValue(2);
            }}
            divider
            button
            component={Link}
            to="/revolution"
            selected={tabValue === 2}
          >
            <ListItemText
              className={
                tabValue === 2
                  ? [classes.drawerItemSelected, classes.drawerItem]
                  : classes.drawerItem
              }
              disableTypography
            >
              The Revolution
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setTabValue(3);
            }}
            divider
            button
            component={Link}
            to="/about"
            selected={tabValue === 3}
          >
            <ListItemText
              className={
                tabValue === 3
                  ? [classes.drawerItemSelected, classes.drawerItem]
                  : classes.drawerItem
              }
              disableTypography
            >
              About Us
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setTabValue(4);
            }}
            divider
            button
            component={Link}
            to="/contact"
            selected={tabValue === 4}
          >
            <ListItemText
              className={
                tabValue === 4
                  ? [classes.drawerItemSelected, classes.drawerItem]
                  : classes.drawerItem
              }
              disableTypography
            >
              Contact Us
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setTabValue(5);
            }}
            divider
            button
            component={Link}
            to="/estimate"
            className={classes.drawerItemEstimate}
            selected={tabValue === 5}
          >
            <ListItemText
              className={
                tabValue === 5
                  ? [classes.drawerItemSelected, classes.drawerItem]
                  : classes.drawerItem
              }
              disableTypography
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setTabValue(0)}
              disableRipple
            >
              <img className={classes.logo} src={logo} alt="company logo" />
            </Button>
            {lessThanMediumScreen ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
