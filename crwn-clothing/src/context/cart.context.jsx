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



export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cardItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

    setCartCount(newCartCount)
  }, [cartItems]);

  const addItemToCart = (producToAdd) => {
    setCartItems(addCartItem(cartItems, producToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems ,cartCount  };
  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
};

export default CartProvider;
