import React from 'react'
import FlareIcon from '@mui/icons-material/Flare';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../stylesheets/Navbar.css';

import SideBar from '../components/SideBar';

const Navbar = () => {


  const handleLogout = () => {
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === 'logout') {
      handleLogout();
    }
  };


  return (
    <div className='navbar'>
      <SideBar />
      <input type='text' placeholder='Search' className='search' />
      <NotificationsIcon htmlColor='white' />
      <Box sx={{ minWidth: 80 }} borderColor={'white'} bgcolor={'white'}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label"><AccountCircleIcon /></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={handleSelectChange}
            label="Options"
            defaultValue=""
          >
            <MenuItem value="profile">Profile</MenuItem>
            <MenuItem value="setting">Setting</MenuItem>
            <MenuItem value="logout">Logout</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  )
}

export default Navbar


