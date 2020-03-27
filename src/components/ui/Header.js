import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Tabs, Tab, Button, Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
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
    marginBottom: "3em"
  },
  logo: {
    height: "8em"
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
  }
}));

const Header = () => {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabChange = (e, value) => {
    setTabValue(value);
  };

  const handleMenuOpen = e => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleMenuClose = e => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleMenuItemClick = (e, index) => {
    setAnchorEl(null);
    setOpen(false);
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

            <Tabs
              className={classes.tabContainer}
              value={tabValue}
              onChange={handleTabChange}
              // indicatorColor="primary"
            >
              <Tab
                className={classes.tab}
                label="Home"
                component={Link}
                to="/"
              />
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
              open={open}
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
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
