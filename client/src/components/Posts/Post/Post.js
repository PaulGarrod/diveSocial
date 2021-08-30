import React from 'react';
import { Card, CardActions, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import moment from 'moment';

import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../../actions/posts.js';

import useStyles from './styles.js';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <CardMedia component='div' className={classes.image} image={post.selectedFile} title={post.title}>
            </CardMedia>
            <div className={classes.content}>
                <div className={classes.title}>
                    <Typography variant='h4' className={classes.postEntry}>{post.creator}</Typography>
                    { post.diveNumber && <Typography variant='h6' className={classes.postEntry}>Dive #{post.diveNumber}</Typography> }
                </div>
                <Typography variant='h6' className={classes.postEntry}>Location: {post.location}</Typography>
                <Typography variant='body1' className={classes.postEntry}>Maximum Depth: {post.maxDepth}</Typography>
                <Typography variant='body1' className={classes.postEntry}>Dive Duration: {post.duration}</Typography>
                { post.buddy != false && <Typography variant='body1' className={classes.postEntry}>Buddy: {post.buddy}</Typography> }
                {/* { post.notes && <Typography variant='body2' className={classes.postEntry}>Notes: {post.notes}</Typography> } */}
                <Typography variant='body1' className={classes.postEntry}>Dive Logged: {moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.details}>
                { post.tags !== false && <Typography variant='body2' color='textSecondary'>{post.tags.slice(0, 4).map((tag) => `#${tag} `)}. . .</Typography> }
            </div>
            <CardActions className={classes.cardActions}>
                <Button color='primary' size='small' onClick={()=> setCurrentId(post._id) }>
                    <MoreVertIcon fontSize='medium' />
                    &nbsp;Edit
                </Button>
                <Button size='small' color='primary' onClick={() => dispatch(deletePost(post._id))} >
                    <DeleteForeverIcon fontSize='medium' />
                    &nbsp;Delete
                </Button>
                <Button size='small' color='primary' onClick={() => dispatch(likePost(post._id))} >
                    <ThumbUpAltIcon fontSize='medium' />
                    &nbsp;Likes:&nbsp;{post.likeCount}
                </Button>
            </CardActions>
        </Card>
    )
} 

export default Post;