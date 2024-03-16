import Header from "@/components/header";
import { usePathname } from "next/navigation";
import React from "react";
import article1 from "../../../public/images/article1.png";
import article2 from "../../../public/images/article2.png";
import article3 from "../../../public/images/article3.png";
import article4 from "../../../public/images/article4.png";

function page() {
  return (
    <div>
      <div className="bg-black w-full h-[58px]">
        <Header />
      </div>
      <div className="mt-24 max-w-[923px] mx-auto text-center">
        <div className="grid grid-cols-1 gap-y-5 py-8">
          <p className="text-center  text-lg font-normal underline underline-offset-2">
            BEAUTY
          </p>
          <p className="text-[55px] leading-[70px]">
            Hedi Slimane cùng Celine ra mắt dòng sản phẩm trang điểm mới{" "}
          </p>
          <p
            style={{ lineHeight: "32px" }}
            className="text-[25px] w-[80%] mx-auto font-light"
          >
            Celine Beauté ra mắt với thỏi son đỏ đựng trong hộp màu vàng tràn
            đầy cảm hứng từ nghệ thuật—trước khi mở rộng sang dòng son 15 màu
            vào tháng 1 năm 2025.
          </p>
          <p>13.3.2024 by Celia</p>
        </div>
        <div
          style={{ backgroundImage: `url(${article1.src})` }}
          className="w-full h-[480px]"
        ></div>
        <p className="w-[80%] mx-auto py-8 leading-[25px] font-light">
          Celine, thuộc sở hữu của LVMH, đang mở rộng sang mảng mỹ phẩm—lần đầu
          tiên trong 80 năm lịch sử của một thương hiệu thời trang xa xỉ. Celine
          Beauté sẽ ra mắt vào mùa thu này với một thỏi son duy nhất—một màu đỏ
          rực rỡ với tên gọi là {"'"}Rouge Triomphe{"'"}. Công thức với kết cấu
          mịn màng được làm từ hương hoa hồng và bột gạo. Sản phẩm khoác lên
          mình lớp vỏ màu vàng có thiết kế tối giản, lấy cảm hứng từ phong cách
          Art Deco với chiếc hộp màu vàng độc đáo, được ép chìm với logo
          Triomphe biểu tượng của Celine.
        </p>
        <div
          style={{ backgroundImage: `url(${article2.src})` }}
          className="w-full h-[786px]"
        ></div>
        <p className="w-[80%] mx-auto py-8 leading-[25px] font-light">
          Hedi Slimane, giám đốc nghệ thuật của Celine, đã tiết lộ tin tức tại
          buổi trình diễn Mùa Đông 2024 và ra mắt một bộ phim ngắn do ông đạo
          diễn. Các người mẫu trong bộ phim đang sử dụng son môi {'"'}La Peau
          Nue{'"'}
          Rose Naturel, một trong số mười lăm màu trong dòng sản phẩm son môi
          {'"'}Le Rouge Celine{'"'} sẽ được ra mắt vào tháng 1 năm 2025.
        </p>
        <div
          style={{ backgroundImage: `url(${article3.src})` }}
          className="w-full h-[540px]"
        ></div>
        <p className="w-[80%] mx-auto py-8 leading-[25px] font-light">
          Thông cáo báo chí viết: “Việc tạo ra Celine Beauté nhằm làm phong phú
          thêm nguồn gốc văn hóa, thúc đẩy ý tưởng của Pháp về sự nữ tính và
          quyến rũ, được Hedi Slimane chắt lọc trong 5 năm qua trong các quy tắc
          tổ chức mới của ông cho Maison Celine”. Với mỗi mùa, Celine sẽ phát
          triển các sản phẩm dự kiến ​​​​sẽ bao gồm son dưỡng môi, mascara , bút
          kẻ mắt, bút chì mắt, sơn móng tay và phấn má.
        </p>
        <div
          style={{ backgroundImage: `url(${article4.src})` }}
          className="w-full h-[832px]"
        ></div>
        <div className="py-8">
          <p className="w-[80%] mx-auto leading-[25px] font-light">
            Celine là thương hiệu xa xỉ mới nhất thử sức trong lĩnh vực làm đẹp,
            cùng với Kering và Dolce & Gabbana cũng có những động thái tương tự
            vào năm ngoái. Nhưng Celine có thể sẽ có sẵn kiến ​​thức chuyên môn
            nội bộ với việc LVMH ươm tạo Dior Beauty, các thương hiệu của Kendo
            bao gồm Fenty Beauty và Sephora Collection. LVMH không công bố số
            liệu về các thương hiệu của mình, nhưng các nguồn tin thị trường cho
            thấy Celine đang đạt doanh thu hàng năm là 3 tỷ euro.
          </p>{" "}
          <br />
          <p className="w-[80%] mx-auto leading-[25px] font-light">
            Bên cạnh đó, Miu Miu gần đây đã ký thỏa thuận cấp phép với L{"'"}
            Oréal Groupe , sau thương hiệu chị em Prada, công bố ra mắt sản phẩm
            chăm sóc da và trang điểm vào năm ngoái; Valentino ra mắt dòng mỹ
            phẩm màu vào năm 2021.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
