

import { useState } from "react";
import logo from "../assets/logo.png";
import heart from "../assets/akar-icons_heart.png";
import search from "../assets/akar-icons_search.png";
import shoppingcart from "../assets/ant-design_shopping-cart-outlined.png";
import alert from "../assets/mdi_account-alert-outline.png";
import { MdMenu } from "react-icons/md";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full h-[80px] fixed top-0 left-0 bg-white flex items-center shadow-md z-50 px-6 md:px-[54px] ">
        <div className="w-full max-w-[1286px] mx-auto flex items-center justify-between px-4 h-full">
          
          <div className="flex items-center gap-2 w-auto">
            <img src={logo} alt="logo" className="w-[45px] h-[30px]" />
            <span className="font-montserrat font-bold text-[28px] md:text-[34px]">
              Furniro
            </span>
          </div>

     
          <div className="hidden md:flex px-[9px] py-[8px] items-center">
            <ul className="flex gap-6 md:gap-[16px] font-poppins font-medium text-[16px] text-black">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Shop</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>

          
          <div className="flex gap-3 md:gap-[24px] justify-end w-full md:w-auto">
            <img src={alert} alt="alert" className="w-[26px] md:w-[28px]" />
            <img src={search} alt="search" className="w-[26px] md:w-[28px]" />
            <img src={heart} alt="heart" className="w-[26px] md:w-[28px]" />
            <img src={shoppingcart} alt="shoppingcart" className="w-[26px] md:w-[28px]" />
           
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <MdMenu size={32} />
            </button>
          </div>
        </div>

      
        {menuOpen && (
          <div className="absolute top-full right-0 w-[180px] bg-white border border-gray-300 shadow-md z-50 flex flex-col items-center py-4 rounded-lg md:hidden">
            <ul className="flex flex-col gap-4 text-[16px] font-poppins text-black w-full text-center">
              <li className="cursor-pointer hover:text-gray-600" onClick={() => setMenuOpen(false)}>Home</li>
              <li className="cursor-pointer hover:text-gray-600" onClick={() => setMenuOpen(false)}>Shop</li>
              <li className="cursor-pointer hover:text-gray-600" onClick={() => setMenuOpen(false)}>About</li>
              <li className="cursor-pointer hover:text-gray-600" onClick={() => setMenuOpen(false)}>Contact</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
