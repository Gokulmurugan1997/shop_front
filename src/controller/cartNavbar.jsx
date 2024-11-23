import React from 'react'
import Logout from './Logout'
import { useNavigate } from 'react-router-dom'

function cartNavbar({cart,setcart}) {
    let navigate = useNavigate()
  return <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">My Cart</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse cart" id="navbarSupportedContent">
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" onClick={()=>navigate('/home')}>
                            Back
                        </button>
                    </form>
                </div>
            </div>
        </nav>
  
  </>
}
export default cartNavbar