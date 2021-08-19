import React from 'react'
import ThreeStyle from "./ThreePost.module.css";
function ThreePost(props) {
    const {postMedia}=props;
    console.log(postMedia);
  
    return (
        <div className={ThreeStyle.threemedia}>
            <img src={postMedia[0]}>
            </img>
            <div className={ThreeStyle.two_container}>
                <img src={postMedia[1]}>
                </img>
                <img src={postMedia[2]}>
                </img>
            </div>
        </div>
    )
}

export default ThreePost
