import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beachGear:[
        {
          id:1,
          name:'Flip Flops',
          description:'Some flippy floppys',
          price:5.99,
          imageUrl:'http://via.placeholder.com/350x150'
        },
        {
          id:2,
          name:'Tent',
          description:'TENTS',
          price:6.99,
          imageUrl:'http://via.placeholder.com/350x150'
        },
      ],
        camping:[
          {
            id:3,
            name:'Sun tan lotion',
            description:'Gotta look fly guy',
            price:7.99,
            imageUrl:'http://via.placeholder.com/350x150'
          },
          {
            id:4,
            name:'Mice',
            description:'Not blind',
            price:8.99,
            imageUrl:'http://via.placeholder.com/350x150'
          },

        ],
      
      cart:[]
    }
    this.checkout = this.checkout.bind(this);
  }
  handleAddItemToCart( item ){
    let newCart = this.state.cart.map( cartItem => {
      return {
        id:cartItem.id,
        name:cartItem.name,
        description:cartItem.description,
        price:cartItem.price,
        imageUrl:cartItem.imageUrl
      }
    })
    newCart.push(item)
    this.setState({
      cart:newCart
    })
  }
  checkout(){
    alert("Here's yer stuff")
    this.setState({
      cart:[]
    })
  }
  render() {
    return (
      <div>
        <div className='products'>
          <h1>PRODUCTS</h1>
          <h2>Beach Gear</h2>
          {
            this.state.beachGear.map( item => {
              return(
                <div>
                  <img src={item.imageUrl}/>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                  <button onClick={() => this.handleAddItemToCart(item)}>Add to Cart</button>
                </div>
              )
            })
          }
          <h2>Camping</h2>
          {
            this.state.camping.map( item => {
              return(
                <div>
                  <img src={item.imageUrl}/>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                  <button onClick={() => this.handleAddItemToCart(item)}>Add to Cart</button>
                </div>
              )
            })
          }
          
        </div>
        <div className='cart'>
          <h1>CART</h1>
          {
            this.state.cart.map( item => {
              return( 
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                </div>
              )
            })
          }

        </div>
        <div className='total'>
          <h1>TOTAL</h1>
          <p>${
            this.state.cart.reduce( ( accumulator, current ) => accumulator+= current.price,0)
          }</p>
          <button onClick={this.checkout}>Checkout</button>
        </div>
      </div>
    );
  }
}

export default App;


// 1 - single screen, sidebar, left side is a list of products.
// 2 - add in props - list component, list item component, clean it up
// 3 - add in axios.
// Each day every project has 4 stages
// day 1
// - 1 mini project + 20-30% more
//     - class, functional, state
//     - list of products, pre-hardcoded onto state. Click add to cart and it adds it to a list on the sidebar. Clicking add to cart multiple times increases the qty.
// - 2 is where the afternoon project is now
//     - get a total, left side, multiple categories. Header for each category that is not seperate component, different background color or header color for each category. Checkout btn, cart is cleared. No nesting state.Each category is a seperate property on state
// - 3 including concepts from previous days: never super complex
//     - user input validation
//     - fake credit card payment
// - 4 black diamond - almost no direction
//     - Delete item out of cart, update quantity, update between list and card view on product side. Idea is conditional rendering.
// Stage 3-4 need to stay independant of other projects. These are the push yourselves levels.
