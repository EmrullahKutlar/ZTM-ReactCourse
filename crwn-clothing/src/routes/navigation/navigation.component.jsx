import {  Outlet } from "react-router-dom";
import { Fragment, /*useContext */} from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
// import { UserContext } from "../../context/user.context.jsx";
import { useSelector } from "react-redux";
import {selectCurrentUser} from "../../store/user/user.selector";


import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
// import { CartContext } from "../../context/cart.context";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

export const Navigation = () => {
  const currentUser= useSelector(selectCurrentUser)
  const isCartOpen= useSelector(selectIsCartOpen)
  // const { currentUser } = useContext(UserContext);
  // const {isCartOpen} = useContext(CartContext);
  const signOutHandler = async () => {
     await signOutUser();
  };
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
        <NavLink to='/'>HOME</NavLink>

          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/sign-in'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
