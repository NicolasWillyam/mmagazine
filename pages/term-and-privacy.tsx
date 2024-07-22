import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import Head from 'next/head'
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content={'Privacy Policy - M MAGAZINE Vietnam'}
        />
        <meta
          property="og:url"
          content={`https://www.mmagazinevietnam.com/privacy-policy`}
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content="Privacy Policy" />
        <meta
          name="twitter:description"
          content={'Privacy Policy - M MAGAZINE Vietnam'}
        />
      </Head>
      <NavBar state="black" category={null} />
      <div className="py-48 grid grid-cols-1 gap-24 sfu-font">
        <p className="text-3xl leading-[36px] sm:text-[55px] sm:leading-[66px] text-black text-center uppercase">
          term & Privacy
        </p>
        <div className="max-w-[960px] mx-auto sm:pt-20 text-xl text-left px-4 sm:px-0">
          <p>
            Website MMAGAZINEVIETNAM.com tôn trọng tất cả các quyền riêng tư của
            người sử dụng. <br /> <br />
          </p>
          <p>1. MMAGAZINEVIETNAM.com thu thập:</p>
          <p>
            • Đối với khách viếng thăm: Bạn không bị yêu cầu cung cấp thông tin
            nhận dạng cá nhân khi viếng thăm trang website.
          </p>
          <p>
            • Đối với người đăng ký thành viên và tham gia các hoạt động trên
            website: Được yêu cầu cung cấp một số thông tin cá nhân để có thể sử
            dụng các dịch vụ chính trên website, các thông tin này sẽ được hiển
            thị rõ ràng trên website để bạn có thể hoàn thành nó.
          </p>
          <p>
            • Tập tin Cookie: MMAGAZINEVIETNAM.com chỉ sử dụng cookie để nhận ra
            bạn khi bạn đang viếng thăm trang web, tập tin này giúp xác định
            việc sử dụng và phục vụ bạn tốt hơn.
          </p>{' '}
          <br />
          <p>
            2. Các thông tin thu thập được MMAGAZINEVIETNAM.com sử dụng như thế
            nào?
          </p>
          <p>
            • Chúng tôi sẽ không sử dụng thông tin cá nhân của bạn trên trang
            web này nếu không được phép. Nếu bạn đồng ý cung cấp thông tin cá
            nhân, bạn sẽ được bảo vệ. Thông tin cá nhân của bạn sẽ được sử dụng
            với mục đích liên lạc cùng bạn để thông báo các thông tin cập nhật
            của MMAGAZINEVIETNAM.com như thư điện tử tin tức, chương trình
            khuyến mại qua email…
          </p>
          <p>
            • Thông tin cá nhân của bạn sẽ không được gửi cho bất kỳ ai sử dụng
            ngoại trừ MMAGAZINEVIETNAM.com và các trường hợp mở rộng cần thiết
            để bạn có thể tham gia vào những trang web khác (những nhà cung cấp
            dịch vụ, đối tác, các công ty quảng cáo) và/hoặc theo yêu cầu bởi
            luật pháp.
          </p>
          <p>
            • Nếu chúng tôi chia sẻ thông tin cá nhân của bạn cho các nhà cung
            cấp dịch vụ, công ty quảng cáo, các công ty đối tác liên quan, chúng
            tôi cũng yêu cầu họ bảo vệ thông tin cá nhân của bạn như cách chúng
            tôi thực hiện.
          </p>{' '}
          <br />
          <p>3. Bảo mật</p>
          <p>
            • Thông tin cá nhân của bạn là một trong những tài sản quan trọng
            nhất đối với MMAGAZINEVIETNAM.com. Nó được bảo mật trong trung tâm
            dữ liệu của MMAGAZINEVIETNAM.com và chỉ được truy cập khi cần kiểm
            tra nhận dạng thông tin cá nhân để thực thi chính sách về Chính sách
            riêng tư này
          </p>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
