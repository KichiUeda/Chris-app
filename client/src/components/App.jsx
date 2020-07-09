/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Carousel from './Carousel.jsx';
import GlobalStyle from '../GlobalStyle.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: window.location.pathname,
      product_data: []
    };
    this.fetchImages = this.fetchImages.bind(this);
  }

  fetchImages(id) {
    // eslint-disable-next-line react/destructuring-assignment
    const requestURL = `http://127.0.0.1:3005/traits${id}`;
    // eslint-disable-next-line no-undef
    console.log(requestURL);
    fetch(requestURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ product_data: data });
      })
      .catch((err) => {
        throw err;
      });
  }

  componentDidMount() {
    const id = this.state.product_id.slice(0, -1);
    this.fetchImages(id);
  }

  render() {
    return (
      <div>
        {/* <h1>This will be Traits service hello</h1> */}
        <GlobalStyle />
        <Carousel />
      </div>
    );
  }
}

export default App;
