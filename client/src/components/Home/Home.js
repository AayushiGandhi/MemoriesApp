import React, {useState, useEffect} from "react";
import Form from '../Form/Form.js';
import Posts from '../Posts/Posts.js';
import {Container, Grow, Grid, Paper, AppBar, TextField, Button} from '@material-ui/core';
import {useDispatch} from "react-redux";
import {getPosts} from "../../actions/posts.js";
import Pagination from "../Pagination";
import { useNavigate, useLocation } from "react-router-dom";
import ChipInput from 'material-ui-chip-input';
import { mergeClasses } from "@material-ui/styles";
import useStyles from './styles'

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const Home = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();
    const query = useQuery();
    const page = query.get('page') || 1
    const searchQuery = query.get('searchQuery')

    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid container justifyContent="space-between" className = {classes.gridContainer} alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar className={classes.appBarSearch} position="static" color="inherit">
                            <TextField name="search" variant="outlined" label="Search Memories" fullWidth value="TEST" onChange={() => {}}/>
                        </AppBar>

                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        <Paper elevation={6}>
                            <Pagination />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home
