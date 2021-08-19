import React from 'react'
import FourStyle from "./FourPost.module.css";
function FourPost(props) {
    const {postMedia}=props;
    console.log(postMedia);
    
    return (
        
        <div className={FourStyle.post__container}>
        <div className={FourStyle.image_container}>
            <img src={postMedia[1]}>
            </img>
            <img src={postMedia[2]}>
            </img>
        </div>
        <div className={FourStyle.image_container}>
            <img src={postMedia[1]}>
            </img>
            <img src={postMedia[2]}>
            </img>
        </div>
    </div>
    )
}

export default FourPost
