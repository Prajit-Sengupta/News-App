import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor(){
        const articles= [
            {
                "source": { "id": "bleacher-report", "name": "Bleacher Report" },
                "author": "Gary Davenport",
                "title": "2021 Fantasy Football Big Board: Updated Rankings for Last Week of NFL Preseason",
                "description": "It's almost go time.   Less than two weeks remain until the Dallas Cowboys and Tampa Bay Buccaneers kick off the 2021  NFL  season—and with it another year of fantasy football...",
                "url": "https://bleacherreport.com/articles/2947715-2021-fantasy-football-big-board-updated-rankings-for-last-week-of-nfl-preseason",
                "urlToImage": "https://img.bleacherreport.net/img/slides/photos/004/472/337/hi-res-ea9f7f0f0bf1a04117e0485c16a52115_crop_exact.jpg?w=1200&h=1200&q=75",
                "publishedAt": "2021-08-27T14:01:38Z",
                "content": "Don Wright/Associated Press\r\nAs it so often is, the story of the summer at the quarterback position has been the incoming rookie class. Those youngsters are getting wildly different introductions to … [+4684 chars]"
            },
            {
                "source": { "id": "nfl-news", "name": "NFL News" },
                "author": null,
                "title": "NFL Fantasy Football Podcast: Preseason Finales (aka The End of the Beginning)",
                "description": "Marcas Grant and Michael F. Florio discuss the Rams' trade for Sony Michel, the RB situation in Detroit, QB starters being named in Jacksonville and Denver, and the latest on Joe Burrow, Jameis Winston and Sam Darnold.",
                "url": "https://www.nfl.com/news/nfl-fantasy-football-podcast-preseason-finales-aka-the-end-of-the-beginning",
                "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/eta20gh3zpwci6du4qbw",
                "publishedAt": "2021-08-27T13:52:59.9298853Z",
                "content": "Marcas Grant and Michael F. Florio are back for a new edition of the NFL Fantasy Football Podcast! In this episode, the hosts start with some preseason news, covering the impacts of the Los Angeles R… [+791 chars]"
            },
            {
                "source": { "id": "bbc-news", "name": "BBC News" },
                "author": "BBC News",
                "title": "Benjamin Mendy: Manchester City footballer remanded in custody on rape charges",
                "description": "Defender Benjamin Mendy is charged with four counts of rape and one count of sexual assault.",
                "url": "http://www.bbc.co.uk/news/uk-england-manchester-58353366",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/B649/production/_120256664_45a80f6a-9e76-4fe8-9e58-d83869c1fbd6.jpg",
                "publishedAt": "2021-08-27T13:52:26.8912322Z",
                "content": "image captionBenjamin Mendy was charged on Thursday following a police investigation\r\nManchester City footballer Benjamin Mendy has been remanded in custody after appearing in court charged with rape… [+1429 chars]"
            },
            {
                "source": { "id": "four-four-two", "name": "FourFourTwo" },
                "author": "PA Staff",
                "title": "Charlie Mulgrew in the best shape of his career due to new eating regime",
                "description": "Dundee United defender Charlie Mulgrew has imposed an eating curfew on himself as he looks to extend his time in top-flight football.",
                "url": "https://www.fourfourtwo.com/news/charlie-mulgrew-in-the-best-shape-of-his-career-due-to-new-eating-regime-1630059414000",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/W6XfSSDEyf88ZqniAFoiSn-1200-80.jpg",
                "publishedAt": "2021-08-27T10:16:54Z",
                "content": "Dundee United defender Charlie Mulgrew has imposed an eating curfew on himself as he looks to extend his time in top-flight football.\r\nThe 35-year-old was on a vegan diet for a couple of years but ha… [+2064 chars]"
            },
            {
                "source": { "id": "fox-sports", "name": "Fox Sports" },
                "author": "FOX Sports",
                "title": "The 10 must-see college football prospects — and when to see them on TV",
                "description": "With the start of college football, draft analyst Rob Rang pinpoints the best time to see each of his top 10 pro prospects.",
                "url": "http://www.foxsports.com/stories/college-football/college-football-prospects-kayvon-thibodeaux-spencer-rattler-drake-london-derek-stingley-kyle-hamilton",
                "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2021/08/1408/814/8.26.21_10-must-see-CFB-prospects-and-where-to-see-them-16x9.jpg?ve=1&tl=1",
                "publishedAt": "2021-08-26T23:15:02Z",
                "content": "By Rob RangFOX Sports NFL Draft Analyst\r\nCollege football fans, our long wait is nearly over. \r\nThough a full slate of games doesn't take place until Sept. 4, the 2021-22 season officially kicks off … [+12663 chars]"
            },
            {
                "source": { "id": "nfl-news", "name": "NFL News" },
                "author": null,
                "title": "Ravens trade fifth-round CB Shaun Wade to Patriots for draft picks",
                "description": "Shaun Wade's tumultuous football journey has met another turn, with Baltimore trading the Ohio State alum to the New England Patriots.",
                "url": "https://www.nfl.com/news/ravens-close-to-trading-fifth-round-pick-shaun-wade-to-patriots",
                "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/c5xzldn6hkhlkahahk7f",
                "publishedAt": "2021-08-26T22:37:25.4321548Z",
                "content": "Shaun Wade's tumultuous football journey has met another turn.\r\nThe Ravens have agreed to trade the fifth-round pick to the Patriots for a 2022 seventh-round selection and a 2023 fifth-rounder, NFL N… [+1297 chars]"
            },
            {
                "source": { "id": "fox-sports", "name": "Fox Sports" },
                "author": "FOX Sports",
                "title": "How to bet college football Week 0",
                "description": "College football season is finally here, and Sammy P has some advice on a Week 0 contest between Nebraska and Illinois.",
                "url": "http://www.foxsports.com/stories/college-football/how-to-bet-college-football-week-0",
                "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2021/08/1408/814/8.26.21_The-Best-bets-for-CFB-Week-0_16x9.jpg?ve=1&tl=1",
                "publishedAt": "2021-08-26T21:18:03Z",
                "content": "By Sam PanayotovichFOX Sports Betting Analyst\r\nFinally, the college football season is here.\r\nFive FBS games will be played this Saturday in college football Week 0, and sports bettors are loading up… [+3405 chars]"
            },
            {
                "source": { "id": "espn", "name": "ESPN" },
                "author": "Tristan H. Cockcroft",
                "title": "Fantasy football draft help - The best picks for each slot in Rounds 1 and 2",
                "description": "Get ready for your fantasy draft -- regardless of when you pick -- by planning for all possibilities ahead of time. Tristan H. Cockcroft recommends which players you should take in 10- and 12-team leagues.",
                "url": "http://espn.go.com/fantasy/football/insider/story/_/id/32081786/fantasy-football-draft-help-best-picks-slot-rounds-1-2",
                "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0825%2Fr900507_1296x729_16%2D9.jpg",
                "publishedAt": "2021-08-26T12:20:00Z",
                "content": "Draft position is an annual source of stress for fantasy football managers.\r\nWhile I often preach changing your league format to salary-cap style as a method of eliminate this, I also recognize the c… [+17718 chars]"
            },
            {
                "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
                "author": null,
                "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
                "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
                "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
                "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
                "publishedAt": "2020-04-27T07:20:43Z",
                "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
            }
        ]

        super();
        console.log("Hello")
        this.state={
            articles: this.articles,
            loading: false
            
        }
    }
    render() {
        return (
            <div className="container my-3">
                <h2>Top Headlines!</h2>

                <div className="row">
                    <div className="col-md-auto">
                    <NewsItem title="News 1" description="This the first news"  imageUrl="https://img.bleacherreport.net/img/slides/photos/004/472/337/hi-res-ea9f7f0f0bf1a04117e0485c16a52115_crop_exact.jpg?w=1200&h=1200&q=75" newsUrl="Todo/"/>
                    </div>
                    <div className="col-md-auto">
                    <NewsItem title="News 1" description="This the first news"/>
                    </div>
                    <div className="col-md-auto">
                    <NewsItem title="News 1" description="This the first news"/>
                    </div>
                </div>

              
            </div>
        )
    }
}

export default News
