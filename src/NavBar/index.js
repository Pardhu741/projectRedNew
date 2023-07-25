import React, { useState } from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, TextField, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import './index.css'
import '../global.css'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const navigate = useNavigate()
    const drawerWidth = 300

    const [item, setItem] = useState(-1)

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigation = (path, index) => {
        setItem(index)
        navigate(path);
        console.log(item, 'item')
    }

    

    return (
        <Box sx={{ flexGrow: 1 }} className="header">
            <AppBar position="static" sx={{ background: '#f31c1c' }}>
                <Toolbar>
                    {isSmallScreen ? (
                        <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between', width: '100%' }}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                className='fade-in-image'
                                sx={{
                                    mr: 2,
                                }}
                                onClick={() => handleNavigation('/')}
                            >
                                <img
                                    src='https://static.wixstatic.com/media/e0c28e_1be442af1f3249648629da001003cc4e~mv2.png/v1/fill/w_60,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ProjectRedLogo.png' alt="Logo" />
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                color="inherit"
                                aria-label="open menu"
                                sx={{ ml: 5 }}
                                onClick={handleMenuClick}
                            >
                                <MenuIcon style={{ color: '#000000' }} />
                            </IconButton>
                        </div>
                    ) : (
                        <>
                            <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                                <div>
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="open drawer"
                                        className='fade-in-image'
                                        sx={{
                                            mr: 2,
                                        }}
                                        onClick={() => handleNavigation('/')}
                                    >
                                        <img
                                            src='https://static.wixstatic.com/media/e0c28e_1be442af1f3249648629da001003cc4e~mv2.png/v1/fill/w_60,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ProjectRedLogo.png' alt="Logo" />
                                    </IconButton>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "flex-end", width: '100%' }}>
                                    <ListItem button sx={{ width: 150 }} onClick={() => {
                                        handleNavigation('/whatWeDo');
                                        setItem(0);
                                    }}
                                    >
                                        <ListItemText primary="What we do" className={item === 0 ? 'global-text-sty-manp' : 'global-text-sty'} />
                                    </ListItem>
                                    <ListItem button sx={{ width: 150 }} onClick={() => {
                                        handleNavigation('/whoWe');
                                        setItem(1);
                                    }}
                                    >
                                        <ListItemText primary="Who we are" className={item === 1 ? 'global-text-sty-manp' : 'global-text-sty'} />
                                    </ListItem>
                                    <ListItem button sx={{ width: 150 }}
                                    onClick={() => {
                                        handleNavigation('/ourWork');
                                        setItem(2);
                                    }}
                                    >
                                        <ListItemText primary="Our work" className={item === 2 ? 'global-text-sty-manp' : 'global-text-sty'} />
                                    </ListItem>
                                    <ListItem button sx={{ width: 150 }}
                                    onClick={() => {
                                        handleNavigation('/joinUs');
                                        setItem(3);
                                    }}
                                    >
                                        <ListItemText primary="Join us" className={item === 3 ? 'global-text-sty-manp' : 'global-text-sty'} />
                                    </ListItem>
                                </div>
                            </div>
                        </>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer anchor={isSmallScreen ? 'right' : ''} open={isMenuOpen} onClose={handleMenuClick} sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "red" },
            }}>
                <Toolbar sx={{ justifyContent: 'flex-end' }}>
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="close menu"
                        sx={{ ml: 2 }}
                        onClick={handleMenuClick}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
                <List>
                    <ListItem button>
                        <ListItemText primary="What we do" className={item === 0 ? 'global-text-sty-manp' : 'global-text-sty'}
                        onClick={() => {
                            handleNavigation('/whatWeDo');
                            setItem(0);
                        }}
                        />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Who we are" className={item === 1 ? 'global-text-sty-manp' : 'global-text-sty'}
                        onClick={() => {
                            handleNavigation('/whoWe');
                            setItem(1);
                        }}
                        />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Our work" className={item === 2 ? 'global-text-sty-manp' : 'global-text-sty'} 
                        onClick={() => {
                            handleNavigation('/ourWork');
                            setItem(2);
                        }}
                        />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Join us" className={item === 3 ? 'global-text-sty-manp' : 'global-text-sty'}
                        onClick={() => {
                            handleNavigation('/joinUs');
                            setItem(3);
                        }}
                        />
                    </ListItem>
                </List>
                {/* <SearchIcon /> */}
            </Drawer>
        </Box>
    );
};

export default Navbar;
