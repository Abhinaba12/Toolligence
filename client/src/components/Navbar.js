import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';



const drawerWidth = 240;



function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const loggedIn = JSON.parse(localStorage.getItem("authToken"))

    const navigate = useNavigate()
    // handle logout
    const handleLogout = async () => {
        try {
            await axios.post('/api/v1/auth/logout')
            localStorage.removeItem("authToken")
            localStorage.removeItem("username")
            toast.success("Sign Out successful!")
            navigate("/login")
        } catch (error) {
            console.log(error)

        }
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} >
            <Typography variant="h6" sx={{ my: 2 }} style={{color: ''}}>
            Tool<a class="fade">ligence</a>
            </Typography >
            <Divider color='black' />
            <List >
                <ListItem className='listitem' disablePadding>
                    <ListItemButton  >
                        <Link to="/" className='drawerlinks'> <ListItemText>Home</ListItemText></Link>
                    </ListItemButton>
                </ListItem>
                <ListItem className='listitem' disablePadding>
                    <ListItemButton  >
                        <Link to="/tools" className='drawerlinks'> <ListItemText>Tools</ListItemText></Link>
                    </ListItemButton>
                </ListItem>
                {!loggedIn ? (
                    <>
                        <ListItem className='listitem' disablePadding>
                            <ListItemButton>
                                <Link to="/register" className='drawerlinks'> <ListItemText>Sign Up</ListItemText></Link>
                            </ListItemButton>
                        </ListItem>
                        <ListItem className='listitem' disablePadding>
                            <ListItemButton>
                                <Link to="/login" className='drawerlinks'> <ListItemText>Sign In</ListItemText></Link>
                            </ListItemButton>
                        </ListItem>
                    </>

                ) : (
                    <ListItem className='listitem' disablePadding>
                        <ListItemButton>
                            <Link to="/login" className='drawerlinks' onClick={handleLogout}> <ListItemText>Sign Out</ListItemText></Link>
                        </ListItemButton>
                    </ListItem>
                )}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar component="nav" position='static' sx={{ boxShadow: 10 }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Tool<a class="fade">ligence</a>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button sx={{ color: 'white', fontSize: "15px" }}>
                            <Link className='navlinks' to="/">Home</Link>
                            <Link className='navlinks' to="/Tools">Tools</Link>
                            {
                                loggedIn ? (<Link className='navlinks' to="/login" onClick={handleLogout}>Sign Out</Link>) : (<><Link className='navlinks' to="/register">Sign Up</Link><Link className='navlinks' to="/login">Sign In</Link></>)
                            }

                        </Button>

                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}


export default Navbar;