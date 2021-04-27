import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

const CartButton= props =>{
    return (
        <button className={classes.button}>
            <span className={ classes.icon}>
                <CartIcon />
            </span>
            <span >
            <p>Your cart</p>
            </span>
            <span className={classes.badge}>
                3
            </span>
        </button>
    );
}

export default CartButton;