import React from "react";
interface Props {
  isScrolled: boolean;
}

{
  /* <div
      className={`w-full border-b transition-all duration-300 ${
        props.isScrolled ? "h-16" : "h-28"
      }`} */
}
const HeaderTitle: React.FC<Props> = (props) => {
  return (
    <div
      className={`w-full text-center bg-black text-white text-xs flex items-center justify-center transition-all duration-300 ${
        props.isScrolled ? "h-0" : "h-6"
      }`}
    >
      M Magazine: the Editorial on Luxury Fashion by Mysense
    </div>
  );
};

export default HeaderTitle;
