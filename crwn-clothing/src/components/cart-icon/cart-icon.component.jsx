import "./cart-icon.style.scss";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen ,cartCount} = useContext(CartContext);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
