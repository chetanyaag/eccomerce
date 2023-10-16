


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MoneyIcon from '@mui/icons-material/Money';
// import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';
// const pages = ['Create Link', 'Create User'];
const pages = ['dashboard', 'createUser', ];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const logout = "logout";
// const pageDict ={
//   "Create User":"createUser",
//   "Create Link":"dashboard"
// }

function NavBarDash() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const cookies = new Cookies();
  const router = useRouter();
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout =(e) =>{
    e.preventDefault();
    cookies.set('token', '', { path: '/', expires: (new Date(Date.now())) });
    router.push("/login");
  }
  return (
    <AppBar  color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MoneyIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              // letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PaisaBacha
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  
                  <Link href={page} legacyBehavior><Typography textAlign="center">{page}</Typography></Link>
                </MenuItem>
              ))}
             <MenuItem key={logout} onClick={handleCloseNavMenu}><Typography textAlign="center" onClick={handleLogout}>{logout}</Typography></MenuItem>
            
            </Menu>

          </Box>
          <MoneyIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PaisaBacha
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link href={page} legacyBehavior>
                <a style={{ textDecoration: 'none' }}>
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' } } 
              >
                {page}
              </Button></a>
              </Link>
            ))}
            <Button
             key={logout} 
             onClick={handleLogout}
             sx={{ my: 2, color: 'white', display: 'block' } } 
             >Logout</Button>
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBarDash;