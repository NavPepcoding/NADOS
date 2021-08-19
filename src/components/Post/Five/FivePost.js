import React, { useState } from 'react'
import PostCarousel from '../PostCarousel/PostCarousel';
import FiveStyle from "./FivePost.module.css";
function FivePost(props) {
    const [showImages, setShowImages] = useState(false);
    const { postMedia } = props;
    function handleShowImage() {
       
        setShowImages(!showImages);
    }
    
    return (
        <>
            <div className={FiveStyle.post__container}>
                <div className={FiveStyle.image_container}>
                    <img src={postMedia[1]}>
                    </img>
                    <img src={postMedia[2]}>
                    </img>
                </div>
                <div className={FiveStyle.image_container}>
                    <img src={postMedia[1]}>
                    </img>
                    <div className={FiveStyle.load_more}>
                        <img src={postMedia[1]}>
                        </img>
                        <div className={FiveStyle.more__images} onClick={handleShowImage}>
                            +{postMedia.length - 3}
                        </div>
                    </div>
                </div>
            </div>
            {showImages==true?<PostCarousel images={postMedia} handleShowImage={handleShowImage}></PostCarousel>:<></>

            }
        </>
    )
}

export default FivePost
