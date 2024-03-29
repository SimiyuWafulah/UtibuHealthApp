import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
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
          <form className='flex flex-col gap-4'>
            <div className=''>
              <Label value='Enter Email'/>
              <TextInput
                type='email'
                placeholder='example@gmail.com'
                id='email'
              />
            </div>
            <div className=''>
              <Label value='Enter password'/>
              <TextInput
                type='passoword'
                placeholder='*******'
                id='password'
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}