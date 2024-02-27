import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import { Link } from 'react-router-dom';






export default function Sidebar() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List> 
      <Link to="home" style={{textDecoration:"none", color:"#006DAB",}}> 
            <ListItemButton>
              Home
            </ListItemButton>
        </Link>
        <Link to="motors" style={{textDecoration:"none", color:"#006DAB",}}> 
            <ListItemButton>
              Motor
            </ListItemButton>
        </Link>
        <Link to="caravan" style={{textDecoration:"none", color:"#006DAB",}}> 
            <ListItemButton>
              Caravan
            </ListItemButton>
        </Link>
        <Link to="tuning" style={{textDecoration:"none", color:"#006DAB",}}> 
            <ListItemButton>
              Tuning
            </ListItemButton>
        </Link>
        <Link to="usedCar" style={{textDecoration:"none", color:"#006DAB",}}> 
            <ListItemButton>
              Used Car
            </ListItemButton>
        </Link>
        <Link to="places" style={{textDecoration:"none", color:"#006DAB",}}> 
            <ListItemButton>
              Camping Location
            </ListItemButton>
        </Link>
        <Link to="/" style={{textDecoration:"none", color:"#006DAB",}}> 
            <ListItemButton>
              Log Out
            </ListItemButton>
        </Link>
      </List>
      <Divider />

    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><ListRoundedIcon/></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}