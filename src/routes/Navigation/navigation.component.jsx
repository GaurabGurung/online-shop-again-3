import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assests/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";

import "./navigation.styles.scss"


const Navigation = () => {

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
            </div>
            <Outlet/>
        </>
    )
}

export default Navigation;