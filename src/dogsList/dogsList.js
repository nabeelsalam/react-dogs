import React, { Component } from 'react';
import './dogsList.css';

function DogsListItem(props) {
  return (
    <li className={props.className} id = {props.dog} onClick={() => props.handleClick(props.dog)}>{props.dog}</li>
  )
}
class DogsList extends Component {
  render() {
    let dogsListContent = [];
    this.props.dogs.forEach((dog) => {
      let className = 'list-group-item';
      if (this.props.selectedDog === dog) {
        className += ' active'
      }
      dogsListContent.push(
        <DogsListItem className={className} key = {dog} dog={dog} handleClick={this.props.handleClick}/>
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