import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import useAuth from '../../customeHook/useAuth';
import GoogleLogin from './scochalLogin/GoogleLogin';
import axios from 'axios';

const Register = () => {
   
        const {register,handleSubmit, formState:{errors}}=useForm()
         const { createUser,updateUserProfile}=useAuth()
        const handleRegister=(data)=>{
        
             console.log(data)
             const profileImge=data.photo[0]
          
            console.log(data.email,data.password,data.name)
              createUser(data.email,data.password).then(res=>{
                 console.log(res)
                 const formData=new FormData();
                 formData.append('image',profileImge)
                 console.log(formData)
                //  send the photo to store and get the url
                 const imgae_Api_url=`https://api.imgbb.com/1/upload?&key=${import.meta.env.VITE_Photo_Api_Key}`

                // photo url convert
                axios.post(imgae_Api_url,formData).then(res=>
                {
                    console.log('after imge upload',res)
                    console.log(res.data.data.url)
                    const photoUrl=res.data.data.url
                    const updateProfile={
                        displayName:data.name,
                        photoURL:photoUrl
                    }

                    updateUserProfile(updateProfile).then(res=>
                    {
                         alert('user profile updated')
                         console.log(res)
                    }
                    ).catch(error=>{
                        console.log(error)
                    })

                }
                )


              }).catch(error=>{
                console.log(error)
              })
            console.log(data)
        }
    return (
        <div className='flex justify-center items-center h-full'>
           <form  onSubmit={handleSubmit(handleRegister)} >
                      <h1 className='text-5xl font-bold '>Create an Account</h1>
                      <h3 className='my-2 font-xl font-semibold'>Register with ZapShift</h3>
                      <fieldset className="fieldset">
                              {/* name */}
                    <label className="label">Name</label>
                    <input type="text" className="input w-full" placeholder="Enter your Name" {...register('name', { required: true })} />
                     {
                       errors.name?.type==='required' &&<p className='text-red-500'>Pleace Enter your Name</p>
                     }
                     {/* photo */}
                    <label className="label">Photo</label>
                    <input type="file" className="file-input w-full" placeholder="Enter your Name" {...register('photo', { required: true })} />
                      {
                       errors.photo?.type==='required' &&<p className='text-red-500'>Pleace Enter your photo</p>
                     }
                    
                          {/* email */}
                    <label className="label">Email</label>
                    <input type="email" className="input w-full" placeholder="Email" {...register('email', { required: true })}
                     />
                     {
                       errors.email?.type==='required' &&<p className='text-red-500'>Pleace Enter your email</p>
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
                    <button type='submit' className="btn bg-[#CAEB66] mt-4">Login</button>
                    <p className='text-[14px] text-gray-500 my-2'>Already have an account?<Link to='/Login' className='hover:underline hover:text-[#CAEB66]'> Login</Link></p>
                    <h1 className='text-center font-semibold  text-gray-400'>OR</h1>
                    <GoogleLogin></GoogleLogin>
                  </fieldset>
                     </form>
        </div>
    );
};

export default Register;