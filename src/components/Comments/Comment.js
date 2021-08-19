import { Avatar, Card, CardActions, CardContent, CardHeader, Typography } from '@material-ui/core'
import React,{useState} from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CommentStyle from "./CommentBox.module.css";
import Styles from "./Comment.module.css";
import Replies from "./Replies";
import CommentInput from './CommentInput';
function Comment({comment}) {
    const [isReplyActive,setReplyActive] =useState(false);
    function handleReplies(){
       setReplyActive(!isReplyActive);
    }
    return (
        <div className={CommentStyle.allcomment__container}>
        <div className={CommentStyle.comment_container}>
            <Avatar className={CommentStyle.comment_avtar} src={comment.profileUrl}>R</Avatar>
            <Card className={CommentStyle.comment_card}>
                <CardHeader style={{ paddingBottom: "0px" }} title={<>
                    <div className={CommentStyle.more_icon}>
                        <div className={CommentStyle.comment__header}>
                            <h6>{comment.username}</h6> <p>17 Aug 2021 03:39am</p>

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
                        {comment.comment}
                    </Typography>
                </CardContent>
                <CardActions>
                    <div className={CommentStyle.favorite_div}>
                        <FavoriteIcon style={{ fontSize: "1rem" }} className={CommentStyle.favorite}></FavoriteIcon>
                        <Typography variant="caption">132</Typography>
                    </div>

                    <Typography className={Styles.show_replies} variant="caption" color="primary" onClick={handleReplies}>{isReplyActive?"Hide Replies":"Show Replies"}</Typography>

                </CardActions>
            </Card>
        </div>
        {isReplyActive==true?<> <CommentInput comp={"Reply"}></CommentInput><Replies Replies={comment.Replies}></Replies></>:
        <></>

        }     
        
    </div>
    )
}

export default Comment
