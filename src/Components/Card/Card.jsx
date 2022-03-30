import React, { Component } from 'react';
import img from "../../imgs/download.png"
class Card extends Component {
    state = {  } 
    render() { 
        return (
            <div className={this.props.className}>
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
}

export default Card;