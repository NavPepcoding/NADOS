import React from 'react'
import TwoMediaStyles from "./TwoPostMedia.module.css"
function TwoPostMedia(props) {
    const {postMedia}=props;
    console.log(postMedia);
    return (
        <div className={TwoMediaStyles.twoMedia}>
            {postMedia.map((img)=>{
                console.log(img);
               return <img src={img}></img>
            })
            }
        </div>
    )
}

export default TwoPostMedia
