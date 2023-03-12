import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./cart-dropdown.stles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";



const CartDropdown = () => {
  const {cartItems}= useContext(CartContext);



  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem  key={item.id} cartItem={item} />
        ))}
      </div>
      <Button> Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
