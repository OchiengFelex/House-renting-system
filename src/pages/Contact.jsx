import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'; // Import axios, not Axios
import {Context} from "../components/context/userContext/Context.jsx";

import { useContext } from 'react';


import './Contact.css'

function Contact() {

    const {user, dispatch} = useContext (Context);

    const navigate = useNavigate();
    const schema = yup.object().shape({
        username: yup.string().required('Use any preferred username'),
        Password: yup.string().min(4).max(100).required('Password is required')
      });
    
      const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });

      const Submission = (data) => {
        axios.post("http://localhost:8081/auth/login", data)
          .then((response) => {
            if (response){
                dispatch({type: "LOGIN_SUCCESS", payload:response})
                response.data.message && alert(response.data.message);
                alert("Logged in successfully");
                console.log(response.data);
                navigate("/houselisting");
            }
  console.log(user)
           
          })
          .catch((error) => {
            alert(error.response.data.error);
             navigate("/signup");
            console.log(error.data)
          })
          .finally(() => {
            reset();
          });
      };


  return (
    <div className='main-contact'>
     
    <div id='main-body'>
        
    <div className="contact-one">
        <h1>Contact Us</h1>
     <h4>Say Hello 😊 : Tell us how we can guide you</h4>
        </div>
    
     <div className="form-login">
    <h1  style={{ color: '#950740'}}>Login</h1>
    <form onSubmit={handleSubmit(Submission)}>
    <label>User Name</label><br /><br />
          <input type='text' placeholder='username' {...register('username')} /><br />
          <p>{errors.username?.message}</p>

          <label>Enter Password</label><br /><br />
          <input type='password' placeholder='Password' {...register('Password')} /><br />
          <p>{errors.Password?.message}</p>

          <input type='submit' value='Log in ' style={{ width: '50%', color: 'white', backgroundColor: '#950740', fontWeight: 'bolder' }} />

    </form>
     </div>
    <div id='content'>
        <h3>Shear your experience with us</h3>
    </div>

    </div>

    </div>
  )
}

export default Contact