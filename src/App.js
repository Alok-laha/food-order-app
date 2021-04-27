import './App.css';
import Header from './component/Layout/Header';
import React, {useState} from 'react'
import Meals from './component/Meals/Meals';
import Cart from './component/Cart/Cart';
import CartProvider from './store/CartProvider';


function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler= ()=>{
    setShowCart(true);
  }

  const hideCartHandler= ()=>{
    setShowCart(false);
  }

  return (
      <CartProvider>
        {showCart && <Cart onHide={hideCartHandler}/>}
        <Header onShow={showCartHandler} />
        <main>
          <Meals />
        </main>
      </CartProvider>
  );
}

export default App;
