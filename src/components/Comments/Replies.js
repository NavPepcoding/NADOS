import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, Typography } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CommentStyle from "./CommentBox.module.css";
import Style from "./Replies.module.css";
import CommentInput from './CommentInput';
function Replies({Replies}) {
    
    return (
        <>
        {Replies.map((Reply)=>{
            return (
               <>
           
            <div className={Style.comment_reply}>
            <Avatar className={CommentStyle.comment_avtar} src={Reply.profileUrl}>R</Avatar>
            <Card className={CommentStyle.comment_card}>
                <CardHeader style={{ paddingBottom: "0px" }} title={<>
                    <div className={CommentStyle.more_icon}>
                        <div className={Style.comment__header}>
                            <h6>{Reply.username}</h6> <p>17 Aug 2021 03:39am</p>
    
                        </div>
                        <MoreHorizIcon ></MoreHorizIcon>
                    </div></>}
                    subheader={<h6>UI/UX dev</h6>}
                />
                <CardContent style={{
                    paddingTop: "0px"
                    , paddingBottom: "0"
                }}>
                    <Typography variant="body2" className={CommentStyle.comment_desc}>
                        {Reply.comment}
                    </Typography>
                </CardContent>
                <CardActions>
                    <div className={CommentStyle.favorite_div}>
                        <FavoriteIcon style={{ fontSize: "1rem" }} className={CommentStyle.favorite}></FavoriteIcon>
                        <Typography variant="caption">132</Typography>
                    </div>
    
                    <Typography variant="caption" color="primary">Reply</Typography>
    
                </CardActions>
            </Card>
        </div>
        </>
            )
        })
        
        }
        
        </>
        
    )
}

export default Replies

