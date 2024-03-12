import React, { ReactNode } from "react";
import "../styles/fonts.css";
interface Props {
  isScrolled: boolean;
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

interface PageHeaderTitleProps {
  children: ReactNode;
}
const PageHeaderTitle: React.FC<PageHeaderTitleProps> = ({ children }) => {
  return (
    <div
      style={{ fontFamily: "TUV-Domaine-Regular" }}
      className="w-full h-48 flex items-center justify-center"
    >
      <p className="text-6xl">{children}</p>
    </div>
  );
};

export { HeaderTitle, PageHeaderTitle };
