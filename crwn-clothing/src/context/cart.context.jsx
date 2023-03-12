import { createContext, useState , useEffect} from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItem already exists
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // if it does, increase the quantity

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // if it doesn't, add it to the cartItems array

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem=(cartItems, cardItemToRemove)=>{
  //find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cardItemToRemove.id
  );

  // check id the quantity is equal to 1, if so remove the item
  if(existingCartItem.quantity === 1){
    return cartItems.filter(cartItem=>cartItem.id !== cardItemToRemove.id)
  }
  // return back cratitems with matching item removed
  return cartItems.map((cartItem) =>
  cartItem.id === cardItemToRemove.id
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem
);

}
const clearCartItem=(cartItems, cardItemToRemove)=>{
  return cartItems.filter(cartItem=>cartItem.id !== cardItemToRemove.id)
}



export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cardItems: [],
  addItemToCart: () => {},
  removeItemFromCart:()=>{},
  cartCount: 0,
  cartTotal:0
});

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(newCartCount)
  }, [cartItems]);
  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
    setCartTotal(newCartTotal)
  }, [cartItems]);


  const addItemToCart = (producToAdd) => {
    setCartItems(addCartItem(cartItems, producToAdd));
  };
  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };
  const clearItemFromCart = (cartItemToRemove) => {
    setCartItems(clearCartItem(cartItems, cartItemToRemove));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems ,cartCount,removeItemToCart,clearItemFromCart, cartTotal  };
  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
};

export default CartProvider;
