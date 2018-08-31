import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beachGear: [
        {
          id: 1,
          name: "Flip Flops",
          description: "Some flippy floppys",
          price: 5.99,
          imageUrl:
            "https://i.pinimg.com/736x/86/51/8c/86518c2adfb760bf5e9091841ab6fc9c--girls-flip-flops-beach-flip-flops.jpg"
        },
        {
          id: 3,
          name: "Sun tan lotion",
          description: "Gotta look fly guy",
          price: 7.99,
          imageUrl:
            "https://images.all-free-download.com/images/graphicthumb/summer_cream_protect_lotion_design_vector_582414.jpg"
        }
      ],
      camping: [
        {
          id: 2,
          name: "Tent",
          description: "TENTS",
          price: 6.99,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhEXFLblyNPD1fknwWEaJ-sc_t6o0NANN1ZHltRn6CuEbJUTT0aQ"
        },
        {
          id: 4,
          name: "Mice",
          description: "Not blind",
          price: 8.99,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Assorted_computer_mice_-_MfK_Bern.jpg/220px-Assorted_computer_mice_-_MfK_Bern.jpg"
        }
      ],

      cart: []
    };
    this.checkout = this.checkout.bind(this);
  }
  handleAddItemToCart(item) {
    let newCart = this.state.cart.map(cartItem => {
      return {
        id: cartItem.id,
        name: cartItem.name,
        description: cartItem.description,
        price: cartItem.price,
        imageUrl: cartItem.imageUrl
      };
    });
    newCart.push(item);
    this.setState({
      cart: newCart
    });
  }
  checkout() {
    alert("Here's yer stuff");
    this.setState({
      cart: []
    });
  }
  render() {
    return (
      <div>
        <section className="products">
          <div className="products_header">
            <h1>PRODUCTS</h1>
          </div>
          <table className="products_body">
            <tr>
              <td>
                <h2>Beach Gear</h2>
              </td>
            </tr>
            {this.state.beachGear.map(item => {
              return (
                <tr className="product_container clearfix">
                  <td>
                    <img className="product_img" src={item.imageUrl} />
                  </td>
                  <td>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    <button onClick={() => this.handleAddItemToCart(item)}>Add to Cart</button>
                  </td>
                </tr>
              );
            })}
            <h2>Camping</h2>
            {this.state.camping.map(item => {
              return (
                <tr className="products_container clearfix">
                  <td>
                    <img className="product_img" src={item.imageUrl} />
                  </td>
                  <td>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    <button onClick={() => this.handleAddItemToCart(item)}>Add to Cart</button>
                  </td>
                </tr>
              );
            })}
          </table>
        </section>
        <section className="cart">
          <div className="cart_header">
            <h1>CART</h1>
            <div className="total">
              <h4>TOTAL</h4>
              <p>${this.state.cart.reduce((accumulator, current) => (accumulator += current.price), 0).toFixed(2)}</p>
              <button onClick={this.checkout}>Checkout</button>
            </div>
          </div>
          <table className="cart_body">
            {this.state.cart.map(item => {
              return (
                <tr className="products_container clearfix">
                  <td>
                    <img className="product_img" src={item.imageUrl} />
                  </td>
                  <td>
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
                  </td>
                </tr>
              );
            })}
          </table>
        </section>
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
