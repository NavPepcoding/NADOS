import React from 'react'
import Recommendation from '../Recommendation/Recommendation'
import Skills from '../Skills/Skills'

const Profile = () => {
    return (
        <div style={{display:'flex', justifyContent:'space-between', width:'88%', margin: "0 auto"}}>
           <Skills /> 
           <Recommendation />
        </div>
    )
}

export default Profile
