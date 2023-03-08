import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";



export const Navigation = () => {
    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to="/">
            <div>
                <CrwnLogo className="logo" />
            </div>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/shop">Shop</Link>
                <Link className="nav-link" to="/sign-in">Sign In</Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
    );
  };