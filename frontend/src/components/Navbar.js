import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    return (
      <AppBar position="static">
        <Toolbar className="navbar">
          <Typography variant="h5" component="div">
            Fitness Tracker
          </Typography>
          <div className="buttons">
            <Link to="/workouts">
                <Button color="inherit">Workouts</Button>
            </Link>
            <Link to="/weight">
            <Button color="inherit">Weight</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    );
  }

export default Navbar;