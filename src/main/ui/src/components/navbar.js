import {AppBar, Box, Grid, Toolbar, Typography} from "@mui/material";
import Link from "next/link";

export default function Navbar() {
    const navItems = [
        {title: "Home", link: '/'},
        {title: "Order", link: '/orders'},
        {title: "Customer", link: '/customers'}
    ]

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" component="div">
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" color="inherit" component="div">
                                Empulse - Assignment
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Box sx={{flexGrow: 1, display: {xs: 'flex'}}} justifyContent={{md: "flex-end", sm: "flex-start"}}>
                                {
                                    navItems.map((item) => (
                                        <Typography color="inherit" key={item.title}>
                                            <Link href={item.link}
                                                  style={{
                                                      textDecoration: 'none',
                                                      color: '#fff',
                                                      padding: '4px',
                                                      margin: '8px',
                                                      textTransform: 'uppercase',
                                                      fontFamily: 'inherit'
                                                  }}
                                            >
                                                {item.title}
                                            </Link>
                                        </Typography>
                                    ))
                                }
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}