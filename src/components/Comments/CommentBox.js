import { Avatar, Card, CardActions, CardContent, CardHeader, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CommentStyle from "./Comment.module.css";
import Replies from "./Replies";
import Comment from "./Comment";
function CommentBox(props) {
    const { commentData } = props;
  
    return (
        <>
            {commentData.map((comment) => {
                return (
              <Comment comment={comment}></Comment>         
                )
            })

            }
        </>
    )
}

export default CommentBox
