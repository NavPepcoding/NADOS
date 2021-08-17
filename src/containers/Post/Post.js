import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core'
import React,{useState} from 'react'
import PostStyle from "./Post.module.css";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Image1 from "../../assets/Image1.svg"
import Image2 from "../../assets/Image2.svg"
import Image3 from "../../assets/Image3.svg"
import LargePostMedia from '../../components/Post/OnePostMedia';
import ShortPostMedia from '../../components/Post/TwoPostMedia';
import OnePostMedia from '../../components/Post/OnePostMedia';
import TwoPostMedia from '../../components/Post/TwoPostMedia';
import ThreePostMedia from '../../components/Post/ThreePostMedia/ThreePostMedia';
function Post() {
    const[desc,setDesc]=useState(false);
    
    const PostData = {
        username: "Dovkush Sharma",
        userInfo: "FREELANCE WRITER || CONTENT WRITER || ALL KIND OF GENERAL DOMAINS (fashion,food, personal development, lifestyle etc) |",
        posttime: "23hr",
        postDesc:`Hello connections,
        I am elated to announce that I have joined Accenture as an Associate Software Engineer.
        
        I am super thrilled about this opportunity and can't wait to explore and grow with the amazing team at Accenture
        
        I am thankful to everyone who has been there for me throughout the journey.
        
        I am feeling very excited & hoping for a cherishable journey ahead🎉`,
        postMedia:[Image1,Image2,Image3]
    }
    function truncate(str, n) {
        console.log(str);
        return str?.length > n ? str.substring(0, n - 1) + " . . ." : str;
    }
function handleSeeMore(){
   setDesc(!desc);
   
}
// ,Image2,Image3
    return (

        <div className={PostStyle.post_container}>
            <Card>
                <CardHeader
                className={PostStyle.post__header}
                    avatar={
                        <Avatar aria-label="recipe">
                            R
                        </Avatar>
                    }
                    title={<Typography variant="body2"  >{PostData.username} . </Typography>}
                    subheader={
                        <>
                            <Typography variant="body2"> {truncate(PostData.userInfo, 70)}
                         </Typography>
                            <div className={PostStyle.header__info}>
                                <p>{PostData.posttime}</p> <span style={{ margin: "0px  2px 0px 2px " }}><FiberManualRecordIcon style={{ fontSize: "small" }} /> </span><span>Edited</span>
                            </div>

                        </>
                    }

                >
             </CardHeader>
               
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                {desc==false?truncate(PostData.postDesc,100):PostData.postDesc}
               </Typography>
               <Typography className={PostStyle.postdescseemore} onClick={handleSeeMore}>
                {desc==false?"see more":"see less"}
               </Typography>
                </CardContent>
                
            
              <CardContent>
                  {/* {PostData.postMedia.length==1?<OnePostMedia postMedia={PostData.postMedia}></OnePostMedia>
                  :<TwoPostMedia postMedia={PostData.postMedia}></TwoPostMedia> } */}
                  <ThreePostMedia postMedia={PostData.postMedia}></ThreePostMedia>
              </CardContent>
           
            </Card>
        </div>
    )
}

export default Post
