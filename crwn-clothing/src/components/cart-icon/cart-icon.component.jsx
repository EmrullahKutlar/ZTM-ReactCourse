import "./cart-icon.styles.jsx";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
// import { CartContext } from "../../context/cart.context";
import { CartIconContainer, ItemCount } from './cart-icon.styles.jsx';
import { useDispatch, useSelector } from "react-redux";
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";


const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen ,cartCount} = useContext(CartContext);
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleCart = () =>  dispatch(setIsCartOpen(!isCartOpen));
    // setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingBag className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
