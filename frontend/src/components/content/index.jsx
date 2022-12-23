import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import swStadiums from "../../data/stadiums.json"
import { Link,useParams} from 'react-router-dom';

export const Content = () => {
    // const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const theme = createTheme();
    
    let {stadiumID}=useParams();
    console.log(stadiumID);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container sx={{ py: 8 }} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {swStadiums.map((stadium) => (
                        <Grid item key={stadium} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia style={{paddingTop:'initial',height:263,width:263}}
                                    component="img"
                                    sx={{
                                        // 16:9
                                        pt: '56.25%',
                                    }}
                                    image={stadium.photo}
                                    alt="random"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {stadium.name}
                                    </Typography>
                                    <Typography>
                                        {stadium.location}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link to='/renttime'>
                                        <Button size="small">View</Button>
                                    </Link>
                                    
                                    <Button size="small">Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            
        </ThemeProvider>
    )
}