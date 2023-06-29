import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'; // Import axios, not Axios
import './SignUp.css';

function SignUp() {

    const navigate = useNavigate();
  const schema = yup.object().shape({
    FirstName: yup.string().required('First Name is required'),
    LastName: yup.string().required(),
    username: yup.string().required('Use any preferred username'),
    Email: yup.string().email().required(),
    Password: yup.string().min(4).max(10).required('Password is required'),
    ConfirmPassword: yup.string().oneOf([yup.ref('Password'), null]),
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });

  const confirmSubmission = (data) => {
    axios.post("http://localhost:8081/auth/register", data)
      .then((response) => {
        response.data.message && alert(response.data.message);
        console.log(response.data);
        navigate("/contact");
      })
      .catch((error) => {
        alert(error.response.data.error);
        console.log(error.data)
        //navigate("/");

      })
      .finally(() => {
        reset();
      });
  };

  return (
    <div className='main'>
      <div className='signup-content1'>
        <h1 style={{ fontFamily: 'monospace', fontWeight: 'bolder' }}>Create an account with us</h1>
        <h3>Sign up now and unlock exclusive access!</h3>

        <form onSubmit={handleSubmit(confirmSubmission)}>
          <label>Enter First Name</label><br /><br />
          <input type='text' placeholder='FirstName' {...register('FirstName')} /><br />
          <p>{errors.FirstName?.message}</p>

          <label>Enter Last Name</label><br /><br />
          <input type='text' placeholder='LastName' {...register('LastName')} /><br />
          <p>{errors.LastName?.message}</p>

          <label>User Name</label><br /><br />
          <input type='text' placeholder='username' {...register('username')} /><br />
          <p>{errors.username?.message}</p>

          <label>Enter Email</label><br /><br />
          <input type='email' placeholder='Email' {...register('Email')} /><br />
          <p>{errors.Email?.message}</p>

          <label>Enter Password</label><br /><br />
          <input type='password' placeholder='Password' {...register('Password')} /><br />
          <p>{errors.Password?.message}</p>

          <label>Confirm Password</label><br /><br />
          <input type="password" placeholder='ConfirmPassword' {...register('ConfirmPassword')} /><br />
          <p>{errors.ConfirmPassword?.message}</p>

          <input type='submit' value='Submit Form' style={{ width: '50%', color: 'black', backgroundColor: 'gold', fontWeight: 'bolder' }} />
        </form>
      </div>
      <div className='signup-content2'>
        <img src='src\assets\home-sweet-home.jpg' style={{ width: '100%', height: '120vh', paddingRight: '10px', borderRadius: '20px' }} />
      </div>
    </div>
  );
}

export default SignUp;
