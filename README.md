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

In this step we need to create a list of products on the state of our App component. Each product should be represented by an object with an image url, title, price, and description property. Our App.js should have two sides: on the left we will display the list of products. On the right will be the cart. A user should have the ability to add an item from the products list to the cart by clicking a button. If an item is clicked multiple times, we can add duplicates of that item to the cart. 

## Step 2

### Summary

In this step we will display the total price from the cart. We will also change the data structure of our products on state, so that they are sorted into categories. E.g. `this.state = { shoes: [...], shirts: [...], hats: [...] }`, where each item on state is an array of product objects. Then display the products on the left side sorted into categories with a header for the type of product. We also want to have a checkout button on the cart side. This should clear out the cart and display an alert to inform the user that their purchase has been completed.

## Step 3

### Summary

In this step we will add two text input fields on the cart side of our app. These will take in an mailing address and email address from the user. We want to verify that these fields have been filled out and are not empty when the user clicks on 'checkout'. If the user attempts to checkout without filling out both of these fields, display an inline error (which will be conditionally rendered), E.g. some red text that says: 'You must fill out all required fields'. 

## Step 4

### Summary

In this step we want to be able to delete an item from the cart. We also want to be able to toggle between a simple list view and a full card view for the products on display, using conditional rendering. 