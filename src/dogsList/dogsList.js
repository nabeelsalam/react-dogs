import React, { Component } from 'react';
import './dogsList.css';
class DogsList extends Component {
  render() {
    let dogsListContent = [];
    this.props.dogs.forEach((dog) => {
      let className = 'list-group-item';
      if (this.props.selectedDog === dog) {
        className += ' active'
      }
      dogsListContent.push(
        <li className={className} id = {dog} key={dog} onClick={this.props.handleClick}>{dog}</li>
      )
    })
    return (
      <ul className="list-group">
            {dogsListContent}
        </ul>
    )
  }
}

export default DogsList;