import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import diveImg from './images/dive.jpg';

import useStyles from './styles.js';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container className={classes.container} maxwidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography color='primary' variant='h2' align='center'>Social Divers Log</Typography>
            </AppBar>
                <Typography className={classes.font} variant='subtitle1' align='center'>
                    A free space for divers to log dives and share their experiences.
                </Typography>
                {/* <img className={classes.image} src={diveImg} alt='Two divers seated'/> */}
            <Grow in>
                <Container className={classes.cardContainer}>
                    <Grid container justifyContent='space-between' align-items='stretch' spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;