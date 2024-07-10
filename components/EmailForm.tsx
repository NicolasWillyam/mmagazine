import { addUserToList } from 'lib/sanity.client'
import Link from 'next/link'
import handle from 'pages/api/disable-draft'
import React, { useState } from 'react'

import { SuggestPostInPostBody } from './SuggestPost'

const EmailForm = () => {
  const [email, setEmail] = useState<string>('')
  const handleSendMail = async (tmp: string) => {
    // const res = await addUserToList(tmp)
  }

  return (
    <>
      <div className="text-4xl leading-[36px]">
        <p className="italic">Đăng Ký Email</p>
        {/* <p>Đăng Kí Email</p> */}
      </div>
      <div className="mt-6 flex gap-4 ">
        <div className="w-full ">
          <form action={() => handleSendMail(email)}>
            <input
              type="email"
              placeholder="Nhâp email của bạn..."
              className="w-full py-2 pb-4 border-b-[1px] border-black/50 text-sm font-light outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-black/50 text-xs mt-2">
              Bằng cách đăng ký nhận bản tin này, bạn đồng ý với{' '}
              <span className="font-semibold underline underline-offset-2">
                <Link href={'/'}>Điều Khoản Dịch Vụ</Link>
              </span>{' '}
              và{' '}
              <span className="font-semibold underline underline-offset-2">
                <Link href={'/'}>Chính Sách Bảo Mật</Link>
              </span>{' '}
              của chúng tôi
            </p>
            <div className="mt-6">
              <button className="text-sm font-bold" type="submit">
                GỬI
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr className="my-6 border-t-[2px] border-black" />
    </>
  )
}

export default EmailForm
