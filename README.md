<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

In this project we will create a react application using state management and input validation. We will render our app based on data stored on state. We will be using event listeners to manipulate state and change the displayed data, by adding items to a cart list.

* Components
* State
* .gitignore
* NPM install

# Live Example

<a href=#">Click Me!</a>

<img src="#" />

## Setup

* `Fork` and `clone` this repository.
* `cd` into the project directory.
* Run `npm install`.
* After `npm install` has finished run `npm start`.

## Step 1

### Summary

In this step we will create a class component called App. We will import product data from `products.js`, which we will store on state of this component. Each product is represented by an object with an id, image url, title, price, and description property. Our App component should have two sides: on the left we will display the list of products. On the right will be the cart. A user should have the ability to add an item from the products list to the cart by clicking a button. If an item is clicked multiple times, we can add duplicates of that item to the cart. 

### Instructions

* Open `src/App.js`. This file will be empty. Create a class component that is the default export.
* create two divs in the return statement of App's render method. The first will hold the products list, the other will hold the cart list. 
* Create an h1 for each of these divs, to label them as Products and Cart respectively. 
* In the products div, map over the products array on state and return a div with and image, h4, and p tags to represent the data for the specific product. There should also be an Add to Cart button.
* Write a method on the App component called `handleAddToCart`. This will take one parameter, an object, which it will add to the cart array on state. 

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `src/App.js`. Create a class component called App that is the default export. 

```js
import React, { Component } from 'react';

export default class App extends Component {}
```

Now we need to import the product data from `products.js`, and set it to state. 

```js
import products from './products.js'
```
...

```js
constructor(props) {
    super(props);
    this.state = {
        products: products,
        cart: []
    }
}
```
Create two sections within app, with an h1 in each. These are the containers for the Products and Cart.

```js
render(){
    return(
        <div className="App">
            <section className="products">
                <h1>Products</h1>
            </section>
            <section className="cart">
                <h1>Cart</h1>
            </section>
        </div>
    )
}
```
Within the products section, map over the product data on state, in order to render the image, name, description and price into JSX. Also add an Add to Cart button.
```js
<section className="App">
    {
        this.state.products.map(item=>(
            <div>
                <img src={item.imageUrl}/>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <button>Add to Cart</button>
            </div>
        ))
    }
</section>
```
Now map over the cart array, and display that data within the cart component. Only display the name, description, and price. 
```js
<section className="cart">
    {
        this.state.cart.map(item=>(
            <div>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <p>{item.price}</p>
            </div>
        ))
    }
</section>
```
Write a method called `addItemToCart`, that will add the item to the cart array on state. Make sure to create a deep copy of the cart array, to avoid modifying state directly. 
```js
addToCart(item){
    const newCart = this.state.cart.map( cartItem => {
        return {
            id:          cartItem.id,
            name:        cartItem.name,
            description: cartItem.description,
            price:       cartItem.price,
            imageUrl:    cartItem.imageUrl
        }
    })
    newCart.push(item)
    this.setState({
        cart: newCart
    })
}
```
Now use this method as the onclick for our Add to Cart button.
```js
<button onClick={() => this.addToCart(item)}> Add to Cart < /button>
```
</details>


## Step 2

### Summary

In this step we will display the total price from the cart. We will also change the data structure of our products on state, so that they are sorted into categories. E.g. `this.state = { shoes: [...], shirts: [...], hats: [...] }`, where each item on state is an array of product objects. Then display the products on the left side sorted into categories with a header for the type of product. We also want to have a checkout button on the cart side. This should clear out the cart and display an alert to inform the user that their purchase has been completed.

## Step 3

### Summary

In this step we will add two text input fields on the cart side of our app. These will take in an mailing address and email address from the user. We want to verify that these fields have been filled out and are not empty when the user clicks on 'checkout'. If the user attempts to checkout without filling out both of these fields, display an inline error (which will be conditionally rendered), E.g. some red text that says: 'You must fill out all required fields'. 

## Step 4

### Summary

In this step we want to be able to delete an item from the cart. We also want to be able to toggle between a simple list view and a full card view for the products on display, using conditional rendering. <img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

In this project we will create a react application using state management and input validation. We will render our app based on data stored on state. We will be using event listeners to manipulate state and change the displayed data, by adding items to a cart list.

- Components
- State
- .gitignore
- NPM install

# Live Example

<a href=#">Click Me!</a>

<img src="#" />

## Setup

- `Fork` and `clone` this repository.
- `cd` into the project directory.
- Run `npm install`.
- After `npm install` has finished run `npm start`.

## Step 1

### Summary

In this step we will create a class component called App. We will import product data from `products.js`, which we will store on state of this component. Each product is represented by an object with an id, image url, title, price, and description property. Our App component should have two sides: on the left we will display the list of products. On the right will be the cart. A user should have the ability to add an item from the products list to the cart by clicking a button. If an item is clicked multiple times, we can add duplicates of that item to the cart.

### Instructions

- Open `src/App.js`. This file will be empty. Create a class component that is the default export.
- create two divs in the return statement of App's render method. The first will hold the products list, the other will hold the cart list.
- Create an h1 for each of these divs, to label them as Products and Cart respectively.
- In the products div, map over the products array on state and return a div with and image, h4, and p tags to represent the data for the specific product. There should also be an Add to Cart button.
- Write a method on the App component called `handleAddToCart`. This will take one parameter, an object, which it will add to the cart array on state.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `src/App.js`. Create a class component called App that is the default export.

```js
import React, { Component } from "react";

export default class App extends Component {}
```

Now we need to import the product data from `products.js`, and set it to state.

```js
import products from "./products.js";
```

...

```js
constructor(props) {
    super(props);
    this.state = {
        products: products,
        cart: []
    }
}
```

Create two sections within app, with an h1 in each. These are the containers for the Products and Cart.

```js
render(){
    return(
        <div className="App">
            <section className="products">
                <h1>Products</h1>
            </section>
            <section className="cart">
                <h1>Cart</h1>
            </section>
        </div>
    )
}
```

Within the products section, map over the product data on state, in order to render the image, name, description and price into JSX. Also add an Add to Cart button.

```js
<section className="App">
  {this.state.products.map(item => (
    <div>
      <img src={item.imageUrl} />
      <h4>{item.name}</h4>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <button>Add to Cart</button>
    </div>
  ))}
</section>
```

Now map over the cart array, and display that data within the cart component. Only display the name, description, and price.

```js
<section className="cart">
  {this.state.cart.map(item => (
    <div>
      <h4>{item.name}</h4>
      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
  ))}
</section>
```

Write a method called `addItemToCart`, that will add the item to the cart array on state. Make sure to create a deep copy of the cart array, to avoid modifying state directly.

```js
addToCart(item){
    const newCart = this.state.cart.map( cartItem => {
        return {
            id:          cartItem.id,
            name:        cartItem.name,
            description: cartItem.description,
            price:       cartItem.price,
            imageUrl:    cartItem.imageUrl
        }
    })
    newCart.push(item)
    this.setState({
        cart: newCart
    })
}
```

Now use this method as the onclick for our Add to Cart button.

```js
<button onClick={() => this.addToCart(item)}> Add to Cart </button>
```

</details>

## Step 2

### Summary

In this step we will display the total price from the cart. In step 1, we were given the dataset for the products. Now we will create our own products and organize them into categories. E.g. `this.state = { shoes: [...], shirts: [...], hats: [...] }`, where each item on state is an array of product objects. Then display the products on the left side sorted into categories with a header for the type of product. We also want to have a checkout button on the cart side. This should clear out the cart and display an alert to inform the user that their purchase has been completed.

### Instructions

- Create a container to display the Total amount, at the bottom of the App component
- This container can be a div with an 'h1' inside it and a 'p' tag
- This container should also include the Checkout Button, which should call the checkout method, to clear out the cart and call an alert to let the user know that their purchase has been completed.
* create your own data on state, sorted into category arrays.
* You should follow the same object structure as we had in step 1, with each product that you create having a unique id, name, description, price, and imageUrl.
<details>
<summary> Detailed Instructions </summary>

Here we will create the Total container. Use the Array.reduce method to sum up the total cost.

```js
<div className="total">
    <h1>TOTAL</h1>
    <p>${
        this.state.cart.reduce((accumulator, current) => (accumulator += current.price), 0)
        }
    </p>
    <button onClick={this.checkout}>Checkout</button>
</div>
```
checkout method on App component
```js
checkout = () => {
    this.setState({
        cart: []
    });
    alert('Purchase is complete!');
}
```

Here we will create our own categories of products on state
```js
this.state = {
    cart: [],
    hats: [
        {
            id: 1,
            name: 'Fisherman\'s Hat',
            description: 'Headgear commonly used by fishermen. Increases fishing skill marginally.',
            price: 12.99,
            imageUrl: ''
        },
        {
            id: 2, 
            name: 'Metal Hat',
            description: 'Uncomfortable, but sturdy.',
            price: 8.99,
            imageUrl: ''
        }
    ],
    beachGear: [
        {
            id: 3,
            name: 'Tent',
            description: 'Portable shelter.',
            price: 32.99,
            imageUrl: ''
        }
    ]
}
```
Once we have created these product category arrays, we will display them in sections for each category. 
```js
<div className="products">
    <h1>PRODUCTS</h1>
    <h2>Hats</h2>
    {
        this.state.hats.map( item => {
            return(
                <div>
                    <img src={item.imageUrl} />
                    <h4>{item.name}</h4>
                    <p>{item.descrition}</p>
                    <p>{item.price}</p>
                    <button onClick={()=> this.addItemToCart(item)}> Add to Cart </button>
                </div>
            )
        })
    }
    <h2>Beach Gear</h2>
    {
        // ... same as above
    }
</div>
```
</details>

## Step 3

### Summary

In this step we will add two text input fields on the cart side of our app. These will take in an mailing address and email address from the user. We want to verify that these fields have been filled out and are not empty when the user clicks on 'checkout'. If the user attempts to checkout without filling out both of these fields, display an inline error (which will be conditionally rendered), E.g. some red text that says: 'You must fill out all required fields'.

## Step 4

### Summary

In this step we want to be able to delete an item from the cart. We also want to be able to toggle between a simple list view and a full card view for the products on display, using conditional rendering.
