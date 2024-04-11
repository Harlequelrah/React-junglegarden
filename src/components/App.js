// import logo from '././logo.svg';
import "../App.css";
import Banner from "./Banner.js";
// import Cart from "./Cart.js";
import React from "react";
import ShoppingList from "./ShoppingList.js";
function App() {
  return (
    // <React.Fragment>
    //   <Banner />
    //   <Cart />
    //   <ShoppingList />
    // </React.Fragment>
    <div>
      <Banner />
      {/* <Cart /> */}
      <ShoppingList />
    </div>
  );
}

export default App;
