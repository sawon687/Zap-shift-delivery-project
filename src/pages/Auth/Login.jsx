import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

const Login = () => {
    const {register,handleSubmit, formState:{errors}}=useForm()
    const handleLogin=(data)=>{

        console.log(data)
    }
    return (
        <div className='flex justify-center items-center h-full'>
           <form className=' w-[400px]' onSubmit={handleSubmit(handleLogin)} >
            <h1 className='text-5xl font-bold'>Welcome Back</h1>
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
          {
             errors.password?.type=== 'minLength' && <p className='text-red-500'>Pleace enter password min 6 charcters</p>
          }
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn bg-[#CAEB66] mt-4">Login</button>
          <p className='text-[16px] text-gray-500 my-2'>Don’t have any account?<Link> Register</Link></p>
          <h1 className='text-center font-semibold text-xl text-gray-400'>OR</h1>
          {/* Google */}
<button type='submit' className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
        </fieldset>
           </form>
        </div>
    );
};

export default Login;