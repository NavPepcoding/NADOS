import React from 'react'
import styles from "./PostCarousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CancelIcon from '@material-ui/icons/Cancel';

function PostCarousel(props) {
    const{images}=props;
    console.log(images);
    function handleClose(){
        props.handleShowImage();
    }
    return (
        <div className={styles.postCarousel_container}>
            <div className={styles.closeCrousel}>
                   <CancelIcon className={styles.close} onClick={handleClose}></CancelIcon>
            </div>
            <div className={styles.post_carousel}>
            <Carousel interval={2000}   axis="horizontal" infiniteLoop={true}
                showStatus={false} showIndicators={true} showThumbs={false} showArrows={true} dynamicHeight={true}
            >
                {images.map((image)=>{
                    return(
                        <div className={styles.image_div}>
                        <img className={styles.img} src={image} />
                     </div>
                    )
                })

                }
              
               
            </Carousel>
            </div>
        </div>
    )
}

export default PostCarousel
