import React from 'react';
import Component from '../../components/card/Component';
import FeedHeader from '../../components/FeedHeader/FeedHeader';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import Post from "../../components/Post/Post";
import Style from "./HomePage.module.css";
function HomePage() {
    return (
        <>
        <FeedHeader/>
        <div className={Style.main_container}>
        <LeftSideBar />
         <Post></Post>
         <Component></Component>
        </div>
        </>
    )
}

export default HomePage
