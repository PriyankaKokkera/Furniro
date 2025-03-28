
import logo from "../assets/logo.png"; // Make sure you have the logo imported
import heart from "../assets/akar-icons_heart.png";
import search from "../assets/akar-icons_search.png";
import shoppingcart from "../assets/ant-design_shopping-cart-outlined.png"; import alert from "../assets/mdi_account-alert-outline.png";




const Nav = () => {   
  return (     
    <>            
      <div className="w-full h-[100px] fixed top-0 left-0 bg-white flex items-center shadow-md z-50 px-[54px] py-[29px]">
        <div className="w-full max-w-[1286px] mx-auto flex items-center justify-between px-4 h-[41px]">
          <div className="flex items-center gap-[5px] w-[185px] h-full mr-[266px]">
            <img src={logo} alt="logo" className="w-[50px] h-[32px]" />
            <span className="font-montserrat font-bold  text-[34px] leading-[100%]">
              Furniro
            </span>
          </div>
          <div className="w-[430px] h-[24px] mr-[158px] px-[9px] py-[8px]">
          <ul className="flex gap-[75px] font-poppins font-medium text-[16px] leading-[100%] tracking-[0%] text-[#000000]">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          </div>
          
          <div className="flex gap-[45px]">
            <img src={alert} alt="alert" className="w-[28px] h-[28px]" />
            <img src={search} alt="search" className="w-[28px] h-[28px]" />
            <img src={heart} alt="heart" className="w-[28px] h-[28px]" />
            <img src={shoppingcart} alt="shoppingcart" className="w-[28px] h-[28px]" />
          </div>
        </div>
      </div>
      
      

  
    </>
  ); 
}; 

export default Nav;