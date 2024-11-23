import React, { useState } from 'react';
import styles from './form.module.css'; // Import CSS Module
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../../utils/AxiosService';
import ApiRoutes from '../../utils/ApiRoutes';

function Purchase() {
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentMode, setPaymentMode] = useState('Credit Card');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await AxiosService.delete(ApiRoutes.DELETEALL.path)
      const validationErrors = {};
      if (!address) validationErrors.address = 'Address is required';
      if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) {
        validationErrors.phoneNumber = 'Phone number must be 10 digits';
      }
  
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
      } else {
        alert('Purchase Completed successfully! please track the link sent to your mobile no !! Thank you');
        toast.success("We appreciate your business and are excited for you to enjoy your new product.");
        navigate('/home')
      }
    } catch (error) {
      
    }
 
  };

  return (
    <div className={styles.formContainer}>
      <h2>Address and Payment Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            className={styles.textarea}
          />
          {errors.address && <p className={styles.error}>{errors.address}</p>}
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            id="phoneNumber"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            className={styles.input}
          />
          {errors.phoneNumber && <p className={styles.error}>{errors.phoneNumber}</p>}
        </div>

        <div>
          <label>Payment Mode:</label>
          <div className={styles.radioGroup}>
            <input
              type="radio"
              id="creditCard"
              name="paymentMode"
              value="Credit Card"
              checked={paymentMode === 'Credit Card'}
              onChange={(e) => setPaymentMode(e.target.value)}
            />
            <label htmlFor="creditCard">Credit Card</label>
          </div>
          <div className={styles.radioGroup}>
            <input
              type="radio"
              id="paypal"
              name="paymentMode"
              value="PayPal"
              checked={paymentMode === 'PayPal'}
              onChange={(e) => setPaymentMode(e.target.value)}
            />
            <label htmlFor="paypal">PayPal</label>
          </div>
          <div className={styles.radioGroup}>
            <input
              type="radio"
              id="bankTransfer"
              name="paymentMode"
              value="Bank Transfer"
              checked={paymentMode === 'Bank Transfer'}
              onChange={(e) => setPaymentMode(e.target.value)}
            />
            <label htmlFor="bankTransfer">Bank Transfer</label>
          </div>
        </div>

        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
}

export default Purchase;
