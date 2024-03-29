import { Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
import { signInStart, signInSuccess,signInFailure } from '../redux/user/user.slice';

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({})
  const {loading, error: error} = useSelector((state) => state.user)


  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.email || !formData.password) {
      return dispatch(signInFailure('Please Fill in all details'))
    }
    try {
      dispatch(signInStart())
      const res = await fetch('http://localhost:3000/api/auth/signin', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json();
      console.log(data)

      if (data.success === false) {
       dispatch(signInFailure(data.message))
       return
      }
      dispatch(signInSuccess(data))
      
       // Redirect the user based on isAdmin status
       if (data && data.isAdmin) {
        navigate('/dashboard');
      } else {
        navigate('/download');
      }
    } catch (error) {
      dispatch(signInFailure(error.message))
    }
  }

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row gap-5'>
        {/*left*/}
        <div className='flex-1'>
        <Link to='/' className=' font-bold dark:text-white text-4xl'>
        <span className='px-2 py-1 rounded-lg bg-gradient-to-r from-orange-500 via-purple-500 to-red-500 text-white '>UtibuHc</span>
        </Link>
        <p className='text-sm mt-5'>
        Welcome UtibuHc your one stop medicine ordering platform,Place your order and have 
        your medication delivered to your doorstep or pickup point of your choice
        </p>
        </div>

        {/*right*/}
        <div className='flex-1'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div className=''>
              <Label value='Enter Email'/>
              <TextInput
                type='email'
                placeholder='example@gmail.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div className=''>
              <Label value='Enter password'/>
              <TextInput
                type='password'
                placeholder='*******'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button disabled={loading} gradientDuoTone='purpleToPink' type='submit'>
              {loading ? (
                  <>
                    <Spinner className='sm'>
                      <span className='pl-3'>Signing in...</span>
                    </Spinner>
                  </>
              ) : 'Sign In'
              }
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}