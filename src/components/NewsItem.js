import React, { Component } from "react";

export class NewsItem extends Component {

    render() {
        let {title, description, imageUrl} = this.props; //destructuring
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="/newsdetail" className="btn btn-sm btn-primary">
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
