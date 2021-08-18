import { Avatar,  Card, CardActions, CardContent, CardHeader, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import PostStyle from "./Post.module.css";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Image4 from "../../assets/Image4.jpg";
import Image6 from "../../assets/Image6.jpg";
import Image5 from "../../assets/Image5.jpg";
import Image1 from "../../assets/Image1.svg";

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteIcon from '@material-ui/icons/Favorite';
import OnePostMedia from '../../components/Post/One/OnePostMedia';
import TwoPostMedia from '../../components/Post/Two/TwoPostMedia';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ShareIcon from '@material-ui/icons/Share';

import ThreePost from './Three/ThreePost';
import FourPost from './Four/FourPost';
import FivePost from './Five/FivePost';
import Dummy from './Skeleton/Dummy';
import CommentBox from '../Comments/CommentBox';
import CommentInput from '../Comments/CommentInput';
function Post() {
    const [desc, setDesc] = useState(false);
    const [loading, setLoading] = useState(true);
    const [commentActive,setCommentActive]=useState(false);
    const PostData = {
        profileUrl: "https://media.vanityfair.com/photos/5d41c7688df537000832361b/4:3/w_2668,h_2001,c_limit/GettyImages-945005812.jpg",
        username: "Dovkush Sharma",
        userInfo: "FREELANCE WRITER || CONTENT WRITER || ALL KIND OF GENERAL DOMAINS (fashion,food, personal development, lifestyle etc) |",
        posttime: "12hr",
        action: "Updated",
        postDesc: `Hello connections,
        I am elated to announce that I have joined Accenture as an Associate Software Engineer.
        
        I am super thrilled about this opportunity and can't wait to explore and grow with the amazing team at Accenture
        
        I am thankful to everyone who has been there for me throughout the journey.
        
        I am feeling very excited & hoping for a cherishable journey ahead🎉`,
        postMedia: [Image5,Image4,Image6,Image1,Image6],
        like: 132,
        comment: 4,
        share: 45,
    }
    const commentData=[{
       profileUrl:"data:image/jpeg;base64,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",
       username:"Mukesh Ambani",
       time:Date.now(),
       comment:"Do you need something?",
       likes:132,
       Replies:[{profileUrl:"https://m.economictimes.com/thumb/msid-84866117,width-1200,height-900,resizemode-4,imgsize-150407/mallya.jpg",
       username:"Vijay Maliya",
       time:Date.now(),
       comment:"Yes , I need Loan",
       likes:132,},{profileUrl:"https://m.economictimes.com/thumb/msid-84866117,width-1200,height-900,resizemode-4,imgsize-150407/mallya.jpg",
       username:"Vijay Maliya",
       time:Date.now(),
       comment:"Yes , I need Loan",
       likes:132,
      
       }]
       },{
      profileUrl:"https://m.economictimes.com/thumb/msid-84866117,width-1200,height-900,resizemode-4,imgsize-150407/mallya.jpg",
       username:"Vijay Maliya",
       time:Date.now(),
       comment:"Yes , I need Loan",
       likes:132,
       Replies:[{profileUrl:"https://m.economictimes.com/thumb/msid-84866117,width-1200,height-900,resizemode-4,imgsize-150407/mallya.jpg",
       username:"Vijay Maliya",
       time:Date.now(),
       comment:"Yes , I need Loan",
       likes:132,},{profileUrl:"https://m.economictimes.com/thumb/msid-84866117,width-1200,height-900,resizemode-4,imgsize-150407/mallya.jpg",
       username:"Vijay Maliya",
       time:Date.now(),
       comment:"Yes , I need Loan",
       likes:132,
      
       }]
       }]
    function truncate(str, n) {
        console.log(str);
        return str?.length > n ? str.substring(0, n - 1) + "..." : str;
    }
    function handleSeeMore() {
        setDesc(!desc);

    }
    setTimeout(() => {
        setLoading(false);
    }, 2000)
    //--------- comment handler-------
   function handleCommentActive(){
       console.log(commentActive);
    setCommentActive(!commentActive);
   }
   //--------Like handler----------
   function handleLike(){
       alert("Liked");
   }
   //--------Share handler---------
   function handleShare(){
       alert("share");
   }


    return (
        <>

            {loading == true ? (<>
                <div className={PostStyle.post_container}><Dummy></Dummy></div></>) : (<><div className={PostStyle.post_container}>
                    <Card className={PostStyle.post_card}>

                        <CardHeader

                            avatar={
                                <Avatar className={PostStyle.profile_imgpost} aria-label="recipe" src={PostData.profileUrl}>

                                </Avatar>
                            }
                            title={<div className={PostStyle.subtitle}>
                                <Typography variant="h6" class={PostStyle.post__header} >{PostData.username} </Typography>
                                <MoreHorizIcon className={PostStyle.more_icon}></MoreHorizIcon>
                            </div>
                            }
                            subheader={
                                <>

                                    <div className={PostStyle.header__info}>
                                        <p>{PostData.posttime}</p> <span style={{ margin: "0px  3px 3px 3px " }}><FiberManualRecordIcon style={{ fontSize: "0.3rem" }} /> </span><span>{PostData.action}</span>
                                    </div>
                                </>
                            }

                        >
                        </CardHeader>

                        <CardContent>

                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                                {desc == false ? truncate(PostData.postDesc, 250) : PostData.postDesc}
                            </Typography>
                            <Typography className={PostStyle.postdescseemore} onClick={handleSeeMore}>
                                {desc == false ? "see more" : "see less"}
                            </Typography>


                        </CardContent>


                        <CardContent>
                            {PostData.postMedia.length == 5 ? <FivePost postMedia={PostData.postMedia}></FivePost> :
                                PostData.postMedia.length == 4 ? <FourPost postMedia={PostData.postMedia}></FourPost> :
                                    PostData.postMedia.length == 3 ? <ThreePost postMedia={PostData.postMedia}></ThreePost> : PostData.postMedia.length == 2 ?
                                        <TwoPostMedia postMedia={PostData.postMedia}></TwoPostMedia> : <OnePostMedia postMedia={PostData.postMedia}></OnePostMedia>
                            }
                        </CardContent>
                        <CardActions >
                            <div className={PostStyle.post_buttons}>

                                <div className={PostStyle.post_icon}>
                                    <FavoriteIcon onClick={()=>{handleLike()}}/>
                                    <Typography variant="body2">{PostData.like}</Typography>
                                </div>
                                <div className={PostStyle.post_icon}>
                                    <ChatBubbleIcon onClick={handleCommentActive}/>
                                    <Typography variant="body2">{PostData.comment}</Typography>
                                </div>
                                <div className={PostStyle.post_icon}>
                                    <ShareIcon onClick={()=>{handleShare()}}/>
                                    <Typography variant="body2">{PostData.share}</Typography>
                                </div>
                            </div>

                        </CardActions>
                        <div className={PostStyle.blank_line}></div>
                        
                        {commentActive?<><CommentInput/><CommentBox commentData={commentData}></CommentBox></>:<></>

                        }
                    </Card>
                </div>
                </>
            )
            }
        </>
    )
}

export default Post
