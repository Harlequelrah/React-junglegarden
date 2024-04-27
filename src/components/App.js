// import logo from '././logo.svg';
// import QuestionForm from "./QuestionForm.js";
import "../App.css";
import Footer from "./Footer.js";
import Cart from "./Cart.js";
import Banner from "./Banner.js";
import "../styles/Layout.css";
// import Cart from "./Cart.js";
import React from "react";
import ShoppingList from "./ShoppingList.js";
import logo from '../assets/logo.png'
import { useState ,useEffect} from "react";
function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart): [])
  useEffect(
    ()=>{
      localStorage.setItem('cart',JSON.stringify(cart))
    }
  )
  // const [isCartOpen,setCart]=useState(true)
  return(
    // <React.Fragment>
    //   <Banner />
    //   <Cart />
    //   <ShoppingList />
    // </React.Fragment>
    <div>
      <Banner >
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
        <h1 className='lmj-title'>La maison jungle</h1>
        {/* <div style={{marginTop:'100px'}}>
        {isCartOpen?
        <button onClick={()=>setCart(false)}>cacher</button>:
        <button onClick={()=>setCart(true)}>afficher</button>}
        </div> */}

      </Banner>
      {/* <QuestionForm /> */}
      <div className='lmj-layout-inner'>
      <Cart cart={cart} updateCart={updateCart} />
      {/* {isCartOpen && <Cart cart={cart}  updateCart={updateCart} /> } */}
      <ShoppingList cart={cart} updateCart={updateCart} />
			</div>
      <Footer />
    </div>

  );
}

export default App;
