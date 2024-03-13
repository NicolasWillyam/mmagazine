import React from "react";
import "../../../styles/fonts.css";
import Image from "next/image";
import { ProductCard } from "@/components/ui/product";
import { Button } from "@/components/ui/button";
import { ArticleCard, ArticleLayout } from "@/components/ui/article";

function page() {
  return (
    <div className="pt-10 pb-20 text-center max-w-7xl mx-auto">
      <div className="mx-auto">
        <p className="text-xs font-medium text-uppercase">XU HƯỚNG</p>
        <p style={{ fontFamily: "SFUGoudyMedium" }} className="text-6xl my-6">
          QUIET LUXURY: ĐỊNH NGHĨA, SỰ BẮT ĐẦU VÀ SỨC ẢNH HƯỞNG ĐỐI VỚI PHỤ NỮ
        </p>
        <p className="text-xs font-medium text-uppercase">
          M MAGAZINE / THỜI TRANG / XU HƯỚNG / QUIET LUXURY
        </p>
      </div>
      <Image
        src={"/images/article-image.png"}
        width={1180}
        height={840}
        alt="image"
        className="mx-auto my-6"
      />
      <p className="text-sm font-light text-uppercase">
        QUIET LUXURY NHƯNG LẠI LÀ XU HƯỚNG {'"'}ỒN ÀO {'"'} NHẤT THỜI GIAN QUA
      </p>
      <div className="mt-16 grid grid-cols-2 px-16">
        <div className="grid grid-cols-2 w-fit h-fit mx-auto gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div
          style={{ letterSpacing: "1%", lineHeight: "20px" }}
          className="text-left text-sm font-light mx-5"
        >
          <p>
            Trong một thế giới thường được định nghĩa bởi sự quá mức, một xu
            hướng mới mẻ và mạnh mẽ đã âm thầm nổi lên: “Quiet Luxury”. Phong
            cách tinh tế nhưng tác động lớn này đang tái định nghĩa thế giới
            thời trang bằng cách ưu tiên chất lượng, sự đơn giản, và sự thanh
            lịch. Quiet Luxury thể hiện sự tự tin và tinh tế, không cần nói một
            lời nào nhưng vẫn là một tuyên ngôn quyết liệt
          </p>
          <br />
          <p>
            Trải qua nhiều năm, xu hướng này trở nên vững bền, đạt đến mức độ
            mong muốn cao, được thúc đẩy bởi làng giải trí, sự ủng hộ của những
            người có ảnh hưởng và tác động lan truyền rộng rãi của nó đối với
            văn hóa đại chúng. Năm 2018, phong cách này đã trở nên nổi bật, đặc
            biệt là khi nó xuất hiện trong loạt phim truyền hình nổi tiếng
            "Succession". Tủ đồ tinh tế và kín đáo của các nhân vật, đặc trưng
            bởi sự tinh tế, sự tỉ mỉ trong cắt may, và sự ưa thích màu sắc trung
            tính, phản ánh tinh thần của Quiet Luxury.
          </p>
          <br />
          <p>
            Mặc dù xu hướng này đã tồn tại suốt nhiều thập kỷ, nhưng năm nay, nó
            đã được cộng đồng người dùng TikTok quảng bá mạnh mẽ, được gọi là
            "thẩm mỹ tiền cổ". Sự nổi tiếng của nó được kích thích bởi Sofia
            Richie-Grainge, người đã tạo ra làn sóng trên mạng xã hội với phong
            cách tinh tế mới của mình, bao gồm giày búp bê, váy dài thanh lịch
            và phụ kiện tối giản, được ghi nhận là "Hiệu ứng Sofia Richie" khi
            được những người khác sao chép.
          </p>
          <br />
          <p>
            Gwyneth Paltrow là một người có ảnh hưởng khác thường được nhắc đến
            với phong cách vượt thời gian. Đáng chú ý, trong phiên tòa xét xử vụ
            trượt tuyết năm 2016, nữ diễn viên đoạt giải Oscar đã xuất hiện
            trong những bộ trang phục từ các thương hiệu danh tiếng như Loro
            Piana và The Row. Trong suốt phiên tòa, ngôi sao đã mang đến câu nói
            "Money talks, wealth whispers" (tạm dịch: “Người nhiều tiền thích
            khoe mẽ, người giàu thực thụ thích mọi thứ kín đáo”) với trang phục
            là những chiếc áo len len, áo jumper đan và áo blazer chất lượng.
          </p>
          <br />
          <p>
            Khác biệt với văn hóa thời trang nhanh, Quiet Luxury ủng hộ việc
            tiêu thụ chậm và có ý thức. Nó khuyến khích chúng ta xem xét nguồn
            gốc của trang phục, thúc đẩy thời trang có ý thức và các yếu tố về
            đạo đức. Cách tiếp cận này đánh giá cao những sản phẩm có số lượng
            ít nhưng chất lượng cao được thiết kế và sản xuất một cách có suy
            nghĩ, vượt ra khỏi chu kỳ nhanh chóng của các xu hướng khác đang
            thống trị ngành công nghiệp thời trang.
          </p>
          <br />
          <p
            style={{ fontFamily: "UVNSangSong" }}
            className="w-full text-center text-6xl my-6"
          >
            vẻ đẹp bẩm sinh của những thiết kế được chế tác tinh xảo
          </p>

          <p>
            Quiet Luxury thể hiện sự đơn giản, nơi sự vắng mặt của logo và chữ
            trở thành một tuyên bố. Thay vì dựa vào thương hiệu hào nhoáng, nó
            phát triển nhờ vẻ đẹp bẩm sinh của các thiết kế được chế tác khéo
            léo , để chất lượng và thiết kế tự nói lên điều đó. Các màu trung
            tính như màu be dịu, tông màu đất, màu xám trầm và màu đen cổ điển
            chiếm ưu thế trong bảng màu.
          </p>

          <br />
          <p>
            Các thương hiệu nổi tiếng như Max Mara , Loro Piana, Khaite, The
            Row, Toteme, Brunello Cucinelli , Jil Sander , Ferragamo , Michael
            Kors và Bottega Veneta dẫn đầu phong trào Quiet Luxury. Bộ sưu tập
            của họ thể hiện bản chất của thẩm mỹ, giới thiệu các sản phẩm may
            mặc và phụ kiện tôn vinh sự kết hợp giữa sự thanh lịch cổ điển và sự
            tối giản hiện đại.
          </p>
          <br />
          <p>
            Tạo ra một bộ trang phục mang phong cách Quiet Luxury có thể đơn
            giản, đầy cảm hứng và tự do. Hãy nghĩ đến những chiếc áo sơ mi lụa
            kết hợp với những bộ vest được cắt may khéo léo, quần tây với áo sơ
            mi cài cúc sắc sảo hoặc một chiếc váy maxi thể hiện sự quyến rũ nhẹ
            nhàng. Một chiếc áo ghi lê xếp lớp bên ngoài một chiếc áo sơ mi tối
            giản hoặc một chiếc áo khoác dài có vẻ quyến rũ vượt thời gian.
          </p>
          <br />
          <p>
            Phụ kiện cũng đóng một vai trò quan trọng trong phong cách Quiet
            Luxury. Hãy cân nhắc một chiếc túi xách da đơn giản nhưng tinh tế để
            bổ sung cho bộ trang phục của bạn và chắc chắn là không có những
            logo lòe loẹt. Đồ trang sức cũng cần phải phù hợp, ưu tiên những món
            đồ tinh tế tỏa ra sự sang trọng và thu hút sự chú ý nhờ vẻ đẹp tinh
            tế của chúng.
          </p>
          <br />
          <p>
            Mặc dù được xếp vào danh mục xu hướng hot nhất của mùa nhưng Quiet
            Luxury không chỉ chạy theo thời trang; đó là một triết lý coi trọng
            chất lượng, tính toàn vẹn và trường tồn theo thời gian. Trong một
            thế giới bị tấn công bởi mức tiêu thụ quá mức và phô trương dễ thấy,
            xu hướng này là một tuyên ngôn rõ ràng, dứt khoát và đầy sự tinh tế.
          </p>
        </div>
      </div>

      <div className="w-full text-center  my-24">
        <p style={{ fontFamily: "TUV-Domaine-Regular" }} className="text-6xl">
          Sắm ngay các Xu Hướng Mới Nhất
        </p>
        <button
          style={{ letterSpacing: "5%" }}
          className="uppercase text-sm text-white bg-black px-6 py-3 mt-8"
        >
          trending now
        </button>
      </div>
      <div className="text-lg uppercase">
        <p>CÓ THỂ BẠN sẽ THÍCH</p>

        <div className="w-full grid grid-cols-4 gap-4 mt-6">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </div>
  );
}

export default page;
