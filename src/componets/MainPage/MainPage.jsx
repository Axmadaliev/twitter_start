import "./Mainpage.scss"
import stars from "../../Assert/Homepage/startsHeader.png"
import owner from "../../Assert/img/owner.png"
import image from "../../Assert/img/image.png"
import gif from "../../Assert/img/gif.png"
import stats from "../../Assert/img/stats.png"
import smile from "../../Assert/img/smile.png"
import date from "../../Assert/img/date.png"
import comment from "../../Assert/img/comment.png"
import retweet from "../../Assert/img/retweet.png"
import retweet2 from "../../Assert/img/retweet2.png"
import like from "../../Assert/img/like.png"
import likefill from "../../Assert/img/likefill.png"
import share from "../../Assert/img/share.png"
import statistics from "../../Assert/img/statistics.png"
import follower1 from "../../Assert/img/follower1.png"
import follower2 from "../../Assert/img/follower2.png"
import follower3 from "../../Assert/img/follower3.png"
import kabob from "../../Assert/img/kabob.png"
import { a, Link } from "react-router-dom"


function MainPage() {
    return <div className="homepage">
        <header className="header">
            <div className="navbar">
                <Link to="/home" className="navbar__title">Home</Link> 
                <img src={stars} alt="" />
            </div>
        </header>
        <div className="userBlog">
            <div className="userBlog__block">
                <img src={owner} alt="myblog" />
                <div className="userComment" >What's happening</div>
            </div>
            <div className="mediaCard">
                <img src={image} alt="" />
                <img src={gif} alt="" />
                <img src={stats} alt="" />
                <img src={smile} alt="" />
                <img src={date} alt="" />
            </div>
            <a href="#" className="tweetBtn"> Tweet</a>
        </div>
        <div className="follower">
            <img className="follower__img" src={follower1}  alt="" /> 
            <div className="follower__card">
                <div className="follower__card__info">
                    <h4 className="follower__card__info__name">Designsta</h4>
                    <a href="#" className="follower__card__info__email">@inner</a>
                    <div className="follower__card__info__email" > 25m</div>
                </div>
                <p className="follower__card__comment">
                    Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?
                </p>
                <div className="follower__stats">
                    <div className="follower__stats__card" > <img src={comment} alt="" />  10</div>
                    <div className="follower__stats__card" > <img src={retweet} alt="" />  1</div>
                    <div className="follower__stats__card" > <img src={like} alt="" />  8</div>
                    <div className="follower__stats__card" > <img src={share} alt="" />  </div>
                    <div className="follower__stats__card" > <img src={statistics} alt="" /> </div>
                </div>
            </div>
        </div>
        <div className="follower">
            <img className="follower__img" src={follower2}  alt="" /> 
            <div className="follower__card">
                <div className="follower__card__info">
                    <h4 className="follower__card__info__name">cloutexhibition</h4>
                    <a href="#" className="follower__card__info__email">@RajLahoti </a>
                    <div className="follower__card__info__email" > 22m</div>
                </div>
                <p className="follower__card__comment">
                YPIP dasturining bu yilgi sezoni ham o'z nihoyasiga yetmoqda. Menhrefrlik davomida talaba va yangi bitiruvchilarni o'sayotganini ko'rib hursand bo'ladi odam.
                </p>
                <div className="follower__stats">
                    <div className="follower__stats__card" > <img src={comment} alt="" />  </div>
                    <div className="follower__stats__card" > <img src={retweet2} alt="" />  5</div>
                    <div className="follower__stats__card" > <img src={likefill} alt="" />  9</div>
                    <div className="follower__stats__card" > <img src={share} alt="" />  </div>
                    <div className="follower__stats__card" > <img src={statistics} alt="" /> </div>
                </div>
            </div>
        </div>
        <div className="follower">
            <img className="follower__img" src={follower3}  alt="" /> 
            <div className="follower__card">
                <div className="follower__card__info">
                    <h4 className="follower__card__info__name">CreativePhohref</h4>
                    <a href="#" className="follower__card__info__email">@cloutexhibition</a>
                    <div className="follower__card__info__email" > 1h</div>
                </div>
                <p className="follower__card__comment">
                Обетда..... <br />
                Кечиринглар
                </p>
                <img style={{marginhrefp: "20px"}} src={kabob}  alt="" /> 

                <div className="follower__stats">
                    <div className="follower__stats__card" > <img src={comment} alt="" />  10</div>
                    <div className="follower__stats__card" > <img src={retweet} alt="" />  1</div>
                    <div className="follower__stats__card" > <img src={like} alt="" />  8</div>
                    <div className="follower__stats__card" > <img src={share} alt="" />  </div>
                    <div className="follower__stats__card" > <img src={statistics} alt="" /> </div>
                </div>
            </div>
        </div>
    </div>
}

export default MainPage;