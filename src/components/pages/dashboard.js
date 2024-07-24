import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SideNav from '../include/sidenav';
import DashboardNav from '../include/nav_dashboard';
import './dashboard.css';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

function Dashboard() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
      <DashboardNav />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container rowSpacing={1}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Card sx={{ minWidth: '49%', height: 164 }} className='card_gradient'>
                  <CardContent>
                    <div>
                      <CreditCardIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div">
                      $2000
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                      Total Earnings
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: '49%', height: 164 }} className='card_gradient'>
                  <CardContent>
                    <div>
                      <ShoppingBagIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div">
                      $2000
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                      Total Orders
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card sx={{ maxWidth: '100%' }}>
                  <Stack spacing={2} direction={"row"}>
                    <div className='icon_style'>
                      <StorefrontIcon />
                    </div>
                    <div className='padding_all'>
                      <span className='price_title'>$230</span>
                      <br />
                      <span className='price_description'>Total Income</span>
                    </div>
                  </Stack>
                </Card>
                <Card sx={{ maxWidth: '100%' }}>
                  <Stack spacing={2} direction={"row"}>
                    <div className='icon_style'>
                      <StorefrontIcon />
                    </div>
                    <div className='padding_all'>
                      <span className='price_title'>$230</span>
                      <br />
                      <span className='price_description'>Total Income</span>
                    </div>
                  </Stack>
                </Card>
              </Stack>
            </Grid>
            <Box height={60} />
            <Grid item xs={8}>
              <Card sx={{ height: "60vh" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: "60vh" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
