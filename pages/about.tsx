import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import Head from 'next/head'
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content={'About - M MAGAZINE Vietnam'} />
        <meta
          property="og:url"
          content={`https://www.mmagazinevietnam.com/privacy-policy`}
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content="About" />
        <meta
          name="twitter:description"
          content={'About - M MAGAZINE Vietnam'}
        />
      </Head>
      <NavBar state="black" category={null} />
      <div className="py-48 grid grid-cols-1 gap-24 sm:px-0 px-4 sfu-font">
        <p className="max-w-[800px] mx-auto text-3xl leading-[36px] sm:text-[55px] sm:leading-[66px] text-black text-center uppercase px-4 sm:px-0">
          M MAGAZINE VIETNAM - THE WOMEN’S EVOLUTION
        </p>
        <div className="max-w-[960px] mx-auto text-xl text-center grid grid-cols-1 gap-6">
          <p>
            MMAGAZINEVIETNAM.com là sản phẩm số của Mysense Việt Nam.
            MMAGAZINEVIETNAM.com là trang thông tin về thời trang, làm đẹp và
            phong cách sống cao cấp, dành cho phụ nữ đam mê thời trang, làm đẹp
            và các vấn đề văn hóa.
          </p>
          <p>
            Ngoài chia sẻ những bí quyết về thời trang, làm đẹp và gợi ý trang
            phục đẹp hàng ngày, M MAGAZINE còn là người bạn đồng hành của bạn,
            chia sẻ các câu chuyện, góc nhìn từ các nữ doanh nhân thành công đặc
            biệt là trong các lĩnh vực xa xỉ, thời trang và làm đẹp, mang đến
            cho bạn nguồn cảm hứng mỗi ngày, giúp bạn luôn tự tin trên con đường
            tạo nên thành tựu của riêng mình.
          </p>
          <p>
            Thế kỉ 21 thuộc về bạn, hãy mở rộng thế giới xung quanh mình mỗi
            ngày cùng MMAGAZINEVIETNAM.com.
          </p>
          <div className="w-full  mx-auto text-center grid grid-cols-1 gap-3 mt-4">
            <p className="font-bold text-xl ">
              Mọi thông tin quảng cáo, xin vui lòng liên hệ:
            </p>
            <p>Mrs. Trần Thanh Thảo</p>
            <p>Email: thaotran@mmagazinevietnam.com</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
