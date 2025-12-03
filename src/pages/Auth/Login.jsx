import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import useAuth from '../../customeHook/useAuth';
import GoogleLogin from './scochalLogin/GoogleLogin';

const Login = () => {
    const {register,handleSubmit, formState:{errors}}=useForm()
    const {signInUser}=useAuth()
    const handleLogin=(data)=>{
           signInUser(data.email,data.password).then(res=>{
             console.log(res)
           }).catch(error=>
            {
                 console.log(error)
            }
           )
        console.log(data)
    }
    return (
        <div className='flex justify-center items-center h-full'>
           <form className=' w-[400px]' onSubmit={handleSubmit(handleLogin)} >
            <h1 className='text-4xl font-bold'>Welcome Back</h1>
            <h3 className='my-2 font-xl font-semibold'>Login with ZapShift</h3>
            <fieldset className="fieldset">
                {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" {...register('email', { required: true })}
           />
           {
             errors.email &&<p className='text-red-500'>Pleace Enter your email</p>
           }
       {/* password */}
             <label className="label">Password</label>
          <input type="password" className="input w-full" placeholder="Password" {...register('password',{required:true, minLength:6})} />
          {
            errors.password?.type==='required'&& <p className='text-red-500'>Pleace enter your password</p>
          }
         
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn bg-[#CAEB66] mt-4">Login</button>
          <p className='text-[16px] text-gray-500 my-2'>Don’t have any account?<Link to='/Register'> Register</Link></p>
          <h1 className='text-center font-semibold  text-gray-400'>OR</h1>
           <GoogleLogin></GoogleLogin>
        </fieldset>
           </form>
        </div>
    );
};

export default Login;