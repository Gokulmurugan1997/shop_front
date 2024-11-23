import React,{useState} from 'react'
import CartNav from './cartNavbar'
import Card from "./Card";
import ApiRoutes from "../utils/ApiRoutes";
import AxiosService from "../utils/AxiosService";
import toast from "react-hot-toast";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const [cart, setCart] = useState(0);
    const [products, setProducts] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const navigate = useNavigate()
    
    const productDetails = async () => {
      try {
        const res = await AxiosService.get(ApiRoutes.GETMYCART.path);
        const res1 = await AxiosService.get(ApiRoutes.COSTCART.path)
        const { totalAmount, totalCount } = res1.data;

        setProducts(res.data);
        setTotalAmount(totalAmount); 
        setTotalCount(totalCount);
      } catch (error) {
        toast.error(error.response.data.message || error.message);
      }
    };
    const handleClick = ()=>{
        navigate('/purchase')
    }
  
    useEffect(() => {
      productDetails();
    }, []);
  return <>
  <CartNav/>
<div className='carthome'>
<div className='cart1'>
<h1 className='head'>Price details</h1>
<Form>
      <Form.Group className="mb-3" controlId="form">
      <div className="row row1">
      <div className="col">Price( {totalCount} items)</div>
      <div className="col col1">{totalAmount}$</div>
    </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="form">
        <Form.Label>
      <div className="row row1">
      <div className="col">Delivery Charges</div>
      <div className="col col1"><s>80$</s>Free Delivery</div>
    </div>
        </Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="form">
      <div className="row row1">
      <div className="col">Total Amount</div>
      <div className="col col1">{totalAmount}$</div>
    </div>
      </Form.Group>
      <div className='buttonc'>
      <Button variant="primary" type="submit" onClick={handleClick}>
        Place Order
      </Button>
      </div>
    </Form>
</div>
<div>
    <section className="py-5 home">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((product, id) => (
              <Card cart={cart} setCart={setCart} product={product} key={id} />
            ))}
          </div>
        </div>
    </section>
    </div>
    </div>
  </>
}

export default Cart
