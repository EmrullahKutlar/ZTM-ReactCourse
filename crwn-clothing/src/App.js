import { useEffect } from "react";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
// import {
//   onAuthStateChangedListener,
//   createUserDocumentFromAuth,
// } from "./utils/firebase/firebase.utils";
// import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";
// import {getCurrentUser} from './utils/firebase/firebase.utils';
import { checkUserSession } from "./store/user/user.action";

const App = () => {
  const dispacth = useDispatch();
  useEffect(() => {
    // const unsubscribe = onAuthStateChangedListener((user) => {
    //   if (user) {
    //     createUserDocumentFromAuth(user);
    //   }
    //   dispacth(setCurrentUser(user));
    // });
    // return unsubscribe;
    // getCurrentUser()
  dispacth(checkUserSession())    
  }, [dispacth]);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="sign-in" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
