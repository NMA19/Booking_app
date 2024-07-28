import { useState } from "react";
import { Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Items from "./List";

export default function ButtonUsage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <div className="p-4 flex justify-between items-center">
      <div className="hidden md:flex space-x-6">
        <Link to="/register">
          <Button 
            className="m-2" 
            variant="contained" 
            sx={{ 
              backgroundColor: 'darkorange', 
              color: 'white',
              '&:hover': { backgroundColor: 'darkred' }
            }}
          >
            Register
          </Button>
        </Link>
        <Link to="/login">
          <Button 
            className="m-2" 
            variant="contained" 
            sx={{ 
              backgroundColor: 'darkorange', 
              color: 'white',
              '&:hover': { backgroundColor: 'darkred' }
            }}
          >
            Login
          </Button>
        </Link>
        {/* <Items /> */}
      </div>
      <div className="md:hidden">
        <IconButton onClick={toggleDrawer(true)} sx={{ color: 'white' }}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <div className="p-4 w-64 bg-red-900 text-white">
            <List>
              <ListItem button component={Link} to="/register" onClick={toggleDrawer(false)}>
                <ListItemText primary="Register" />
              </ListItem>
              <ListItem button component={Link} to="/login" onClick={toggleDrawer(false)}>
                <ListItemText primary="Login" />
              </ListItem>
              <Items />
            </List>
          </div>
        </Drawer>
      </div>
    </div>
  );
}
