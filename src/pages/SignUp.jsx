
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

import './SignUp.css'

function SignUp() {

    const schema = yup.object().shape({
        FirstName: yup.string().required('First Name is required'),
        LastName:yup.string().required(),
        Email:yup.string().email().required(),
        Passward:yup.string().min(8).max(10).required('password  is required'),
        ConfirmPassward:yup.string().oneOf([yup.ref('Passward'),null])
    })// schema  for restricting the input in the fields 

    const {register, handleSubmit, formState:{errors}}= useForm({resolver: yupResolver(schema)}) 
    //function for the hook resolver 

    const confirmSubmision =(data)=>{
        console.log(data)
    }//print output for the form
  return (
    <div className='main'>

         <div className='signup-content1'>
            <h1 style={{fontFamily:'monospace', fontWeight:'bolder'}}>Creat an account with us</h1>
            <h3>Sign up now and unlock exclusive access!</h3>

            <form  onSubmit={handleSubmit(confirmSubmision)}>
                <label>Enter First Name</label><br/><br/>
                <input type='text' placeholder='First Name'{...register('FirstName')}/><br/>
                <p>{errors.FirstName?.message}</p> 

                <label>Enter Last Name</label><br/><br/>
                <input type='text' placeholder='Last Name'{... register('LastName')}/><br/>
                <p>{errors.LastName?.message}</p>
                <label>Enter Email</label><br/><br/>
                <input type='email' placeholder='Enter Email'{... register('Email')}/><br/>
                <p>{errors.Email?.message}</p>

                <label>Enter Password</label><br/><br/>
                <input type='text' placeholder='Passward'{... register('Passward')}/><br/>
                <p>{errors.Passward?.message}</p>

                <label>Confirm Password</label><br/><br/>
                <input type="text" placeholder='Confirm password' {... register('ConfirmPassward')}/><br/>
                <p>{errors.ConfirmPassward?.message}</p>

                <input type='submit' value='submit form' style={{width:'50%', color:'black', backgroundColor:'gold', 
        fontWeight:'bolder'}} />
            </form>
            </div> 
            <div className='signup-content2'>
                <img src='src\assets\home-sweet-home.jpg' style={{width:'100%',height:'100vh',paddingRight:'10px',borderRadius: '20px'}}/>
            </div>
    </div>
  )
}

export default SignUp