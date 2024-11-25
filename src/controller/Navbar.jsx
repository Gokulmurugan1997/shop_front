import React from 'react'
import Logout from './Logout'
import { useNavigate } from 'react-router-dom'

function Navbar({cart, setcart}) {
    let navigate = useNavigate();
    const cartCount = Array.isArray(cart) ? cart.length : cart; // Assuming cart can be an array or number

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="#!">Shop</a>
                    <button className="btn btn-outline-dark" onClick={() => navigate('/seller/login')}>
                        Sell Product
                    </button>
                    <button className="btn btn-outline-dark" onClick={() => navigate('/mycart')}>
                    <span className="badge bg-dark text-white ms-1 rounded-pill">Cart {cartCount}</span>
                    </button>
                    
                </div>
                <Logout /> {/* Assuming this is a component that handles logging out */}
            </nav>
        </>
    );
}

export default Navbar;
