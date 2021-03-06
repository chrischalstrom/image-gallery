import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import './App.css';
import ImageGallery from './containers/ImageGallery';

class App extends Component {
  componentDidMount() {
    if (this.props.location.pathname.match('images')) return;

    // the only page in the app is the image gallery
    this.props.history.replace('/images/');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Image Gallery</h1>
        </header>
        <section>
          <Route path="/images/:imageId?">
            <ImageGallery />
          </Route>
        </section>
      </div>
    );
  }
}

export default withRouter(App);
