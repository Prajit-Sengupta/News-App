import React, { Component } from "react";

export class NewsItem extends Component {

    render() {
        let {title, description, imageUrl, newsUrl} = this.props; //destructuring
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl? imageUrl: "https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA="} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
                            Read more..
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;

//in destructuring its like pulling out items(here title, about), from the object(which is this.props)
