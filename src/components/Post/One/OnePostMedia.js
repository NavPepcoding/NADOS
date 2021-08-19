import React from 'react'
import OnePostStyles from "./OnePostMedia.module.css"
function OnePostMedia(props) {

    return (
        <div className={OnePostStyles.onemedia}>
          <img src={props.postMedia[0]} className="post_image"></img>
        </div>
    )
}

export default OnePostMedia
