import { AppBar ,Image, Toolbar,Button} from '@material-ui/core'
import React from 'react'
import Ellipse1 from "../../assets/Ellipse1.png";
import "./LoginSignUpHeader.css";
function Header() {
    return (
        
          <AppBar className="app__bar">
              <Toolbar className="tool__bar">
               
                <img className="appbar__img" src={Ellipse1}></img>
               
           
              <div class="header_buttons">
              <Button color="inherit" style={{color:"black"}}>Comunity</Button>
            <Button color="inherit"  style={{color:"black"}}>Career</Button>
            <Button color="inherit"  style={{color:"black"}}>Content</Button>
            <Button color="inherit"  style={{color:"black"}}>Compete</Button>
              </div>
          
          </Toolbar>
           
          </AppBar>
       
    )
}

export default Header
