import  "./SideBar.scss"
import twitterLogo from "../../Assert/SidebarImgs/twitter-logo.png"
import homeLink from "../../Assert/SidebarImgs/homeLink.png"
import exploreLink from "../../Assert/SidebarImgs/exploreLink.png"
import notificationsLink from "../../Assert/SidebarImgs/notificationLink.png"
import messagesLink from "../../Assert/SidebarImgs/messagesLink.png"
import bookmarksLink from "../../Assert/SidebarImgs/bookmarksLink.png"
import listsLink from "../../Assert/SidebarImgs/listsLink.png"
import profileLink from "../../Assert/SidebarImgs/profileLink.png"
import moreLink from "../../Assert/SidebarImgs/moreLink.png"
import { Link } from "react-router-dom"
import { memo } from "react"
// import { Link } from "react-router-dom"

function Sidebar() {
    console.log('leftbar');
    return <div className="sideBar">
        <Link to='/'>
            <img className="sidebar__img" src={twitterLogo} alt="" />
        </Link>
        <div className="sidebarMenu">
            <div className="sidebarMenu__card">
                <img src={homeLink} alt="" />
                <Link to="/" className="sidebarMenu__card__link"> Home</Link>
            </div>
            <div className="sidebarMenu__card">
                <img src={exploreLink} alt="" />
                <a href="#" className="sidebarMenu__card__link"> Explore</a>
            </div>
            <div className="sidebarMenu__card">
                <img src={notificationsLink} alt="" />
                <a href="#" className="sidebarMenu__card__link"> Notifications</a>
            </div>
            <div className="sidebarMenu__card">
                <img src={messagesLink} alt="" />
                <a href="#" className="sidebarMenu__card__link"> Messages</a>
            </div>
            <div className="sidebarMenu__card">
                <img src={bookmarksLink} alt="" />
                <a href="#" className="sidebarMenu__card__link"> Bookmarks</a>
            </div>
            <div className="sidebarMenu__card">
                <img src={listsLink} alt="" />
                <a href="#" className="sidebarMenu__card__link"> Lists</a>
            </div>
            <div className="sidebarMenu__card">
                <img src={profileLink} alt="" />
                <a href="#" className="sidebarMenu__card__link"> Profile</a>
            </div>
            <div className="sidebarMenu__card">
                <img src={moreLink} alt="" />
                <a href="#" className="sidebarMenu__card__link"> More</a>
            </div>
        </div>
        <a href="#" className="tweetBtn"> Tweet</a>
    </div>
}

export default memo(Sidebar) ;