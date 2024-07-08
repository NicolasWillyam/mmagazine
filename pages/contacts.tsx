import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import Head from 'next/head'
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Contacts</title>
        <meta name="description" content={'Contacts - M MAGAZINE Vietnam'} />
        <meta
          property="og:url"
          content={`https://www.mmagazinevietnam.com/privacy-policy`}
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content="Contacts" />
        <meta
          name="twitter:description"
          content={'Contacts - M MAGAZINE Vietnam'}
        />
      </Head>
      <NavBar state="black" />
      <div className="py-48 grid grid-cols-1 gap-24">
        <p className="text-3xl leading-[36px] sm:text-[55px] sm:leading-[66px] text-black text-center uppercase">
          Contacts
        </p>
        <div className="max-w-[960px] mx-auto text-base text-center grid grid-cols-1 gap-2 px-4">
          <p className="font-bold text-lg">
            Mọi thông tin quảng cáo, xin vui lòng liên hệ:
          </p>
          <p>Mrs. Trần Thanh Thảo</p>
          <p>Email: thaotran@mmagazinevietnam.com</p>
          <p>0703538930</p>
          <p>108 Mai Thị Lựu, phường Đa Kao, quận 1, thành phố Hồ Chí Minh</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PrivacyPolicy
