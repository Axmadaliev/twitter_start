// import { a } from "react-router-dom";
import "./RightBar.scss"
import settings from "../../Assert/img/settings.png"
import more from "../../Assert/img/more.png"
// import search from "../../Assert/img/search.png"
import follower4 from "../../Assert/img/follower4.png"
import follower5 from "../../Assert/img/follower5.png"
function RightBar() {
    return (  
        <div className="rightBar">
            <label className="search_label">                
                <input type="text" className="searchInput" placeholder="Search Twitter" />
            </label>
                <div className="trends">
                    <div className="trends__header">
                        <h4 className="trends__header__title"> Trends for you</h4> 
                        <a className="trends__card__more" href='#'  >
                            <img src={settings} alt="" />
                        </a>
                    </div>
                    <div className="trends__card">
                        <div className="trends__card__block">
                            <div className="trends__card__block__place"> Trending in Germany</div>
                            <div className="trends__card__block__title"> Revolution</div>
                            <div className="trends__card__block__time"> 50.4K Tweets</div>
                        </div>
                        <a className="trends__card__more" href='#'  >
                            <img src={more} alt="" />
                        </a>
                    </div>
                    <div className="trends__card">
                        <div className="trends__card__block">
                            <div className="trends__card__block__place"> Trending in Germany</div>
                            <div className="trends__card__block__title"> Revolution</div>
                            <div className="trends__card__block__time"> 50.4K Tweets</div>
                        </div>
                        <a className="trends__card__more" href='#'  >
                            <img src={more} alt="" />
                        </a>
                    </div>
                    <div className="trends__card">
                        <div className="trends__card__block">
                            <div className="trends__card__block__place"> Trending in Germany</div>
                            <div className="trends__card__block__title"> Revolution</div>
                            <div className="trends__card__block__time"> 50.4K Tweets</div>
                        </div>
                        <a className="trends__card__more" href='#'  >
                            <img src={more} alt="" />
                        </a>
                    </div>
                    <a className="trends__card__link" href='#'  >Show more</a>

                </div>
                <div className="recomends">
                    <h3 className="recomends__title"> You might like</h3>
                    <div className="recomends__card">
                        <img src={follower4} alt="" />
                        <div className="recomends__card__user">
                            <h4 className="recomends__card__user__name"> Mushtariy</h4>
                            <h4 className="recomends__card__user__email"> @Mushtar565266</h4>
                        </div>
                        <a href="#" className="recomends__card__follow"> Follow</a>
                    </div>
                    <div className="recomends__card">
                        <img src={follower5} alt="" />
                        <div className="recomends__card__user">
                            <h4 className="recomends__card__user__name"> Shuhratbek</h4>
                            <h4 className="recomends__card__user__email"> @mrshukhrat</h4>
                        </div>
                        <a href="#" className="recomends__card__follow"> Follow</a>
                    </div>
                    <a className="trends__card__link" href='#'  >Show more</a>

                </div>
                <div className="moreDetail">
                    <a href="#" className="moreDetail__link"> Terms of Service</a>
                    <a href="#" className="moreDetail__link"> Privacy Policy</a>
                    <a href="#" className="moreDetail__link"> Cookie Policy</a> <br />
                    <a href="#" className="moreDetail__link"> Imprint</a>
                    <a href="#" className="moreDetail__link"> Ads Info</a>
                    <a href="#" className="moreDetail__link"> More ···</a>
                    <a href="#" className="moreDetail__link"> © 2021 Twitter, Inc.</a>
                </div>
        </div>
    );
}

export default RightBar;