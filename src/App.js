import React, { Component } from 'react';
import Navbar from './navbar/navbar.js';
import DogsList from './dogsList/dogsList.js';
import Gallery from './gallery/gallery.js';
import logo from './logo.svg';

import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      images: []
    };
    this.dogClicked = this.dogClicked.bind(this);
  }
  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/list')
      .then((res) => {
        return res.json();
      })
      .then((dogs) => {
        this.setState({
          dogs: dogs.message,
          selectedDog: dogs.message[0]
        });
        return fetch(`https://dog.ceo/api/breed/${dogs.message[0]}/images`)
      })
      .then((res) => {
        return res.json();
      })
      .then((images) => {
        this.setState({
          images: images.message
        });
      })
  }

  dogClicked(e) {
    let breed = e.target.id;
    this.setState({
      selectedDog: breed
    });
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then((res) => {
        return res.json();
      })
      .then((images) => {
        this.setState({
          images: images.message
        });
      })
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="row">
        <div className="col-3">
          <DogsList dogs={this.state.dogs} selectedDog={this.state.selectedDog} handleClick={this.dogClicked}/>
        </div>
        <div className="col-9">
          <Gallery images={this.state.images} />
        </div>        
        </div>
      </div>
      );
  }
}
export default App;
