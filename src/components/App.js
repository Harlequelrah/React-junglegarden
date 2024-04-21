// import logo from '././logo.svg';
import QuestionForm from "./QuestionForm.js";
import "../App.css";
import Footer from "./Footer.js";
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
      <QuestionForm />
      {/* <Cart /> */}
      <ShoppingList />
      <Footer />
    </div>

  );
}

export default App;
