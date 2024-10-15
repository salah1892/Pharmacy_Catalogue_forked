import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import NavCatalogue from "./Catalogue/NavCatalogue";
import NavCPD from "./MyCPD/NavCPD";

import Catalogue from "./Catalogue/Catalogue";
import MyCPD from "./MyCPD/MyCPD";
import CPDPlan from "./MyCPD/CPDPlan";

import { NavContext } from "./Context/NavContext";

import { Switch, Route, Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export default function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { isCatalogue, changeIsCatalogue } = React.useContext(NavContext);

  let catalogueLink = "";
  let cpdLink = "";

  if (isCatalogue) {
    catalogueLink = "underline";
    cpdLink = "none";
  } else {
    catalogueLink = "none";
    cpdLink = "underline";
  }

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className="nav-container">
            <Link
              className="nav-button"
              style={{ textDecoration: catalogueLink }}
              to="/catalogue"
              onClick={() => changeIsCatalogue("catalogue")}
            >
              Catalogue
            </Link>
            <Link
              className="nav-button"
              style={{ textDecoration: cpdLink }}
              to="/"
              onClick={() => changeIsCatalogue("cpd")}
            >
              My CPD
            </Link>
            <div className="nav-icon">
              <i className="material-icons">account_circle</i>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="Mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
            {isCatalogue ? <NavCatalogue /> : <NavCPD />}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
            {isCatalogue ? <NavCatalogue /> : <NavCPD />}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/" component={MyCPD} />
          <Route path="/catalogue" component={Catalogue} />
          <Route path="/plan" component={CPDPlan} />
        </Switch>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object
};
