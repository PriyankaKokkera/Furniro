


const Footer = () => {
  return (
    <div className="w-full lg:w-[1240px] h-auto px-[20px] sm:px-[40px] lg:px-[100px] py-[48px] mt-[50px] relative border-t border-[#D9D9D9]">

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">

        {/* Funiro Logo and Address Section */}
        <div>
          <p className="font-[Poppins] font-bold text-[24px] leading-[100%] tracking-[0%] text-[#000000]">
            Funiro.
          </p>

          <div className="mt-[50px]">
            <p className="font-[Poppins] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#9F9F9F]">
              400 University Drive Suite 200 Coral
            </p>
            <p className="font-[Poppins] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#9F9F9F]">
              Gables, FL 33134 USA
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="mt-[50px] lg:mt-0 w-full lg:w-[200px]">
          <p className="font-[Poppins] font-medium text-[16px] leading-[100%] tracking-[0%] text-[#9F9F9F]">
            Links
          </p>
          <ul className="flex flex-col gap-[16px] mt-[30px]">
            <li><p className="font-[Poppins] font-medium text-[16px] text-[#000000]">Home</p></li>
            <li><p className="font-[Poppins] font-medium text-[16px] text-[#000000]">Shop</p></li>
            <li><p className="font-[Poppins] font-medium text-[16px] text-[#000000]">About</p></li>
            <li><p className="font-[Poppins] font-medium text-[16px] text-[#000000]">Contact</p></li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="mt-[50px] lg:mt-0 w-full lg:w-[200px]">
          <p className="font-[Poppins] font-medium text-[16px] leading-[100%] tracking-[0%] text-[#9F9F9F]">
            Help
          </p>
          <ul className="flex flex-col gap-[16px] mt-[30px]">
            <li><p className="font-[Poppins] font-medium text-[16px] text-[#000000]">Payment Options</p></li>
            <li><p className="font-[Poppins] font-medium text-[16px] text-[#000000]">Returns</p></li>
            <li><p className="font-[Poppins] font-medium text-[16px] text-[#000000]">Privacy Policies</p></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="mt-[50px] lg:mt-0 w-full lg:w-[300px]">
          <p className="font-[Poppins] font-medium text-[16px] leading-[100%] tracking-[0%] text-[#9F9F9F]">
            Newsletter
          </p>
          <div className="flex flex-col sm:flex-row gap-[20px] mt-[30px]">
            <input 
              type="text" 
              placeholder="Enter Your Email Address" 
              className="w-full border-b-2 border-[#000000] focus:outline-none focus:border-b-4 transition-all text-[14px] font-[Poppins] text-[#9F9F9F] placeholder-[#9F9F9F]"
            />
            <p className="text-[14px] leading-[100%] font-[Poppins] font-medium text-[#000000] mt-[10px] sm:mt-0 sm:ml-[10px]">
              <u>SUBSCRIBE</u>
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[59px] mt-[50px]">
        <div className="w-full border border-[#D9D9D9]"></div>
        <p className="text-[16px] font-[Poppins] font-normal text-[#000000] mt-[20px] text-center">
          2023 Funiro. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
