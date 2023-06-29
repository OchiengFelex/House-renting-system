import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import './Booking.css'

function Booking() {

    const schema = yup.object().shape({
        username: yup.string().required('Use the  username used to register'),
        property_name: yup.string().required(),
        location: yup.string().required('Insert the location of the property')
      });

      const navigate = useNavigate();

      const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });

      const booking = (data) => {
        axios.post("http://localhost:8081/bookings", data)
          .then((response) => {
            response.data.message && alert(response.data.message);
            console.log(response.data);
            alert("Booking successful");
            navigate("/");
          })
          .catch((error) => {
            alert(error.response.data.error);
            console.log(error.data);
          })
          .finally(() => {
            reset();
          });
      };
    
    

  return (
    
    <div className="booking-main">
        <div className="booking-content">
            <div className="content">
            <div>
            <h1 >
                Book Your Property Of Choice.
            </h1>
            </div>
        
        <div className="booking-form">
            <form onSubmit={handleSubmit(booking)}>
                
            <label>Enter username</label><br /><br />
          <input type='text' placeholder='username' {...register('username')} /><br />
          <p>{errors.username?.message}</p>

          <label>Enter property_name</label><br /><br />
          <input type='text' placeholder='property_name' {...register('property_name')} /><br />
          <p>{errors.property_name?.message}</p>

          <label>Confirm location</label><br /><br />
          <input type="text" placeholder='location' {...register('location')} /><br />
          <p>{errors.location?.message}</p>

          <input type='submit' value='Submit Form' style={{ width: '30%', color: 'white', backgroundColor: ' #f9004d', fontWeight: 'bolder' }} />
            </form>
                 </div>
            </div>
        </div>
    </div>


  )
}

export default Booking