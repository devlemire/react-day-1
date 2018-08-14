import React, { Component } from 'react';
import './App.css';
const testImg = 'http://media.comicbook.com/2018/07/squirtle-1-1119670-1280x0.jpeg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="left_side">
        <div className="center_title"><h1>Products</h1></div>

        <div className="product_container clearfix">
          <img src={testImg} alt="product_image"/>
          <div className="product_description">
              <h3>Test_Product</h3>
              <p>test description test descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest description</p>
          </div>
        </div>

        <div className="product_container clearfix">
          <img src={testImg} alt="product_image"/>
          <div className="product_description">
              <h3>Test_Product</h3>
              <p>test description</p>
          </div>
        </div>

        <div className="product_container clearfix">
          <img src={testImg} alt="product_image"/>
          <div className="product_description">
              <h3>Test_Product</h3>
              <p>test description</p>
          </div>
        </div>
        <div className="product_container clearfix">
          <img src={testImg} alt="product_image"/>
          <div className="product_description">
              <h3>Test_Product</h3>
              <p>test description</p>
          </div>
        </div>
        <div className="product_container clearfix">
          <img src={testImg} alt="product_image"/>
          <div className="product_description">
              <h3>Test_Product</h3>
              <p>test description</p>
          </div>
        </div>
        <div className="product_container clearfix">
          <img src={testImg} alt="product_image"/>
          <div className="product_description">
              <h3>Test_Product</h3>
              <p>test description</p>
          </div>
        </div>
        <div className="product_container clearfix">
          <img src={testImg} alt="product_image"/>
          <div className="product_description">
              <h3>Test_Product</h3>
              <p>test description</p>
          </div>
        </div>
        

        </section>






        <section className="right_side">
        <div className="center_title"><h1>Cart</h1></div>
        <ul>
          <li>list_item</li>
          <li>list_item</li>
          <li>list_item</li>
        </ul>
        </section> 
      </div>
    );
  }
}

export default App;
