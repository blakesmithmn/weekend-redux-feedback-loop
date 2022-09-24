import './Header.css'

// MUI IMPORTS:
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';



function Header() {
    return (
        <header className='App-header'>
            <Grid container spacing={0} direction="column" alignItems="center" justify="center">
                <Grid item xs={3} md={6} lg={12}>
                    <AppBar position='static' className='appbar' sx={{ maxWidth: 850 }}>
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                                Daily Feedback
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
        </header>
    )
};

export default Header;