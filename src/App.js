import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import ImageGallery from './containers/ImageGallery';

class App extends Component {
  componentDidMount() {
    // the only page in the app is the image gallery
    this.props.history.replace('/images/0');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Image Gallery</h1>
        </header>
        <section>
          <Route path="/images/:imageId">
            <ImageGallery />
          </Route>
        </section>
      </div>
    );
  }
}

export default withRouter(App);
