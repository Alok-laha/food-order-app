import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import {useContext} from 'react';
import CartContext from '../../store/cart-Context';
import CartItem from './CartItem';


const Cart= props =>{

    const cartCtx= useContext(CartContext);
    const totalAmount= `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItem= cartCtx.items.length > 0

    const cartItemremoveHandler= id => {
        cartCtx.removeItem(id)
    }

    const cartItemAddhandler = item=> {
        cartCtx.addItem({...item, amount: 1});
    }

    const cartItems = (
        <ul className={classes['cart-items']}>
          {cartCtx.items.map((item) => (
            <CartItem 
            key={item.id} 
            name={item.name} 
            price={item.price} 
            amount={item.amount}
            onRemove={cartItemremoveHandler.bind(null, item.id)}
            onAdd={cartItemAddhandler.bind(null, item)}
             />
          ))}
        </ul>
      );
    return (
        <Modal onClick={props.onHide}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHide}>close</button>
                {hasItem && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
}

export default Cart;