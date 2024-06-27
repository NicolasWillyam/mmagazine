import Link from 'next/link'
import React from 'react'

const EmailForm = () => {
  return (
    <div className="text-left py-auto max-w-[350px] mx-auto">
      <div className="text-4xl leading-[36px]">
        <p className="italic">Email</p>
        <p>Sign Up</p>
      </div>
      <div className="mt-6 flex gap-4 ">
        <div className="w-full ">
          <input
            type="email"
            placeholder="Enter your email address..."
            className="w-full py-2 pb-4 border-b-[1px] border-black/50 text-sm font-light outline-none"
          />
          <p className="text-black/50 text-[10px] mt-2">
            By subscribing to this BDG newsletter, you agree to our{' '}
            <span className="font-semibold underline underline-offset-2">
              <Link href={'/'}>Terms of Service</Link>
            </span>{' '}
            and{' '}
            <span className="font-semibold underline underline-offset-2">
              <Link href={'/'}>Privacy Policy</Link>
            </span>
          </p>
          <div className="mt-6">
            <button className="text-sm font-bold">SUBMIT</button>
          </div>
        </div>
      </div>
      <hr className="my-6 border-t-[2px] border-black" />
      <div>
        <p className="text-[28px] font-semibold">You will Also Like</p>
        <div className="mt-6 w-full grid grid-cols-2 gap-6">
          <div className="">
            <div className="w-full h-[165px] bg-gray-200"></div>
            <p className="mt-4 text-sm font-light">
              All of Our Favorite Summer Accessories Are Made of Mesh
            </p>
          </div>

          <div className="">
            <div className="w-full h-[165px] bg-gray-200"></div>
            <p className="mt-4 text-sm font-light">
              All of Our Favorite Summer Accessories Are Made of Mesh
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailForm
