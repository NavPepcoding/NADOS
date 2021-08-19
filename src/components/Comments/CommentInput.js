import React from 'react'
import { Avatar, Button, CardActions, } from '@material-ui/core'
import ImageIcon from '@material-ui/icons/Image';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Styles from "./CommentInput.module.css"

function CommentInput({comp}) {
    
    return (
        <CardActions className={comp?Styles.managewidth:Styles.comment_container}>

                            <Avatar className={Styles.profile_imgpost} src="https://media.vanityfair.com/photos/5d41c7688df537000832361b/4:3/w_2668,h_2001,c_limit/GettyImages-945005812.jpg">

                            </Avatar>
                            <div className={Styles.comment_input}>
        <div data-placeholder='Add a Comment...' contentEditable="true"></div>
        <Button  className={Styles.upload_img} endIcon={ <InsertEmoticonIcon></InsertEmoticonIcon>} component="label" color="secondar">
        </Button>
       
        <Button className={Styles.upload_img} startIcon={<ImageIcon></ImageIcon>} component="label" color="secondar">
            <input type="file" hidden  accept="image"/></Button>
        
    </div>
    </CardActions>
       
    )
}

export default CommentInput
