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
          imageUrl:'http://via.placeholder.com/350x100',
          quantity:0
        },
        {
          id:2,
          name:'Tent',
          description:'TENTS',
          price:6.99,
          imageUrl:'http://via.placeholder.com/350x100',
          quantity:0
        },
      ],
        camping:[
          {
            id:3,
            name:'Sun tan lotion',
            description:'Gotta look fly guy',
            price:7.99,
            imageUrl:'http://via.placeholder.com/350x100',
            quantity:0
          },
          {
            id:4,
            name:'Mice',
            description:'Not blind',
            price:8.99,
            imageUrl:'http://via.placeholder.com/350x100',
            quantity:0
          },

        ],
      
      cart:[],
      address:'',
      creditCard:'',
      toggleCardView:false
    }
    this.checkout = this.checkout.bind(this);
    this.handleToggleView = this.handleToggleView.bind(this);
  }
  
  handleAddItemToCart( item ){
    let newCart = this.state.cart.map( cartItem => {
      return {
        id:cartItem.id,
        name:cartItem.name,
        description:cartItem.description,
        price:cartItem.price,
        imageUrl:cartItem.imageUrl,
        quantity:cartItem.quantity
      }
    })
    let itemIndex = newCart.findIndex( cartItem => cartItem.id === item.id)
    if( itemIndex!== -1){
      newCart[itemIndex].quantity++
    } else {
      item.quantity++
      newCart.push(item)
    }
    this.setState({
      cart:newCart
    })
  }

  removeItemFromCart( id ){
    let newCart = this.state.cart.map( cartItem => {
      return {
        id:cartItem.id,
        name:cartItem.name,
        description:cartItem.description,
        price:cartItem.price,
        imageUrl:cartItem.imageUrl,
        quantity:cartItem.quantity
      }
    })
    let itemIndex = newCart.findIndex( cartItem => cartItem.id === id)
    if(newCart[itemIndex].quantity === 1){
      newCart.splice(itemIndex,1)
    }
    else {
      newCart[itemIndex].quantity--
    }
    this.setState({
      cart:newCart
    })
  }
  
  checkout(){
    if(!this.state.address || !this.state.creditCard){
      alert("WHERE YOU LIVE. WHERE MY MONEY")
    }
    else{
      alert("Here's yer stuff")
      this.setState({
        cart:[]
      })
    }
    
  }
  handleAddressInput( address ){
    this.setState({
      address
    })
  }
  handleCreditCardInput( creditCard ){
    this.setState({
      creditCard
    })
  }
  handleToggleView(){
    this.setState({
      toggleCardView:!this.state.toggleCardView
    })
  }
  
  render() {
    return (
      <div>
        <div className='products'>
          <h1>PRODUCTS</h1>
          <button onClick={this.handleToggleView}>Toggle View</button>
          <h2>Beach Gear</h2>
          {
            this.state.beachGear.map( item => {
              return(
                <div className={this.state.toggleCardView ? 'product_card' : 'product_list'}>
                  <img src={item.imageUrl} alt='the item'/>
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                  </div>
                  <button onClick={() => this.handleAddItemToCart(item)}>Add to Cart</button>
                </div>
              )
            })
          }
          <h2>Camping</h2>
          {
            this.state.camping.map( item => {
              return(
                <div className={this.state.toggleCardView ? 'product_card': 'product_list'}>
                  <img src={item.imageUrl} alt='the item'/>
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                  </div>
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
                  <p>${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => this.removeItemFromCart(item.id)}>Remove from cart</button>
                </div>
              )
            })
          }

        </div>
        <div className='inputs'>
          <input placeholder='address' value={this.state.address} onChange={ (e) => this.handleAddressInput(e.target.value)}/>
          <input placeholder='credit card info' value={this.state.creditCard} onChange={ (e) => this.handleCreditCardInput(e.target.value)}/>
        </div>
        <div className='total'>
          <h1>TOTAL</h1>
          <p>${
            this.state.cart.reduce( ( accumulator, current ) => accumulator+= current.price*current.quantity,0)
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
//     - item displays quantity
// - 4 black diamond - almost no direction
//     - Delete item out of cart, update quantity, update between list and card view on product side. Idea is conditional rendering.
// Stage 3-4 need to stay independant of other projects. These are the push yourselves levels.
