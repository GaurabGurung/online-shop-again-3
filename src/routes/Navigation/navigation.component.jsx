import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assests/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";

import "./navigation.styles.scss"
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

const Navigation = () => {

    const {isCartOpen} = useContext(CartContext);

    return (
        <>       
            <div className="navigation">
                <Link className="link-container" to= "/" >
                    <CrownLogo className="logo-container"/>
                </Link>
                    <div className="nav-links-container">
                        <Link className="nav-link" to= "/Shop" >
                            <span>SHOP</span>
                        </Link>
                        <Link className="nav-link" to= "/Auth" >
                            <span>SIGN IN</span>
                        </Link>
                        <CartIcon />
                    </div>
                { isCartOpen && <CartDropDown/> }
            </div>
            <Outlet/>
        </>
    )
}

export default Navigation;