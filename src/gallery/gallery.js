import React, { Component } from 'react';
import './gallery.css';
class Gallery extends Component {
  render() {
    let images = [];
    this.props.images.forEach((image, index) => {
      images.push(
        <div className="card">
            <img key={index} className="card-img-top" src={image} alt="Loading image"></img>
        </div>
      )
    })
    return (
      <div>
            {images}
      </div>
    )
  }
}

export default Gallery;