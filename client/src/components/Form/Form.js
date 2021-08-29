import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';

import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost, getPosts } from '../../actions/posts'
import useStyles from './styles.js';

const Form = ( { currentId, setCurrentId } ) => {
    const [postData, setPostData] = useState({
        creator: '',
        diveNumber: '',
        location: '',
        notes: '',
        buddy: '',
        tags: '',
        maxDepth: '',
        duration: '',
        selectedFile: '' 
    });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(post) setPostData(post);
    }, [post]);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    
    const clear = () => {
        setCurrentId(null);
        setPostData({creator: '',
        diveNumber: '',
        location: '',
        notes: '',
        buddy: '',
        tags: '',
        maxDepth: '',
        duration: '',
        selectedFile: ''})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
        clear();
    }

    
    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' 
            noValidate 
            className={`${classes.form}`} 
            onSubmit={handleSubmit}>
                <Typography variant='h4'>{ currentId ? 'Edit your Log' : 'Create a new Log!'}</Typography>
                <TextField 
                className={classes.input}
                name='creator' 
                variant='outlined' 
                label='Creator' 
                fullWidth
                value={postData.creator}
                onChange={(e) => setPostData({
                    ...postData, creator: e.target.value
                })}/>
                <TextField 
                className={classes.input}
                name='diveNumber' 
                variant='outlined'
                label='Dive Number' 
                fullWidth
                value={postData.diveNumber}
                onChange={(e) => setPostData({
                    ...postData, diveNumber: e.target.value
                })}/>
                <TextField 
                className={classes.input}
                name='location' 
                variant='outlined' 
                label='Location' 
                fullWidth
                value={postData.location}
                onChange={(e) => setPostData({
                    ...postData, location: e.target.value
                })}/>
                <TextField 
                className={classes.input}
                name='buddy' 
                variant='outlined' 
                label='Dive Buddy' 
                fullWidth
                value={postData.buddy}
                onChange={(e) => setPostData({
                    ...postData, buddy: e.target.value
                })}/>
                <TextField 
                className={classes.input}
                name='notes' 
                variant='outlined' 
                label='Notes' 
                fullWidth
                value={postData.notes}
                onChange={(e) => setPostData({
                    ...postData, notes: e.target.value
                })}/>
                <TextField 
                className={classes.input}
                name='maxDepth' 
                variant='outlined' 
                label='Maximum Depth (M)' 
                fullWidth
                value={postData.maxDepth}
                onChange={(e) => setPostData({
                    ...postData, maxDepth: e.target.value
                })}/>
                <TextField 
                className={classes.input}
                name='duration' 
                variant='outlined' 
                label='Duration (Mins)' 
                fullWidth
                value={postData.duration}
                onChange={(e) => setPostData({
                    ...postData, duration: e.target.value
                })}/>
                <TextField 
                className={classes.input}
                name='tags' 
                variant='outlined' 
                label='Tags (seperate by comma)' 
                fullWidth
                value={postData.tags}
                onChange={(e) => setPostData({
                    ...postData, tags: e.target.value.split(',')
                })}/>
                <div className={classes.fileInput}>
                    <FileBase
                        type='file'
                        multiple={false}
                        onDone={ ({base64}) => setPostData({ 
                            ...postData, selectedFile: base64 
                        })}
                    />
                </div>  
                <Button className={classes.button} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
                <Button className={classes.button} variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;