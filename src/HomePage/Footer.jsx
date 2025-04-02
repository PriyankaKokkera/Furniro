// const Footer = () => {
//   return (
//     <div className="w-full max-w-[1240px] h-auto px-4 sm:px-[40px] lg:px-[100px] py-[48px] lg:mt-[50px] relative border-t border-[#D9D9D9] mt-[2px]">
//       {/* Main Content */}
//       <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-y-6 lg:gap-y-0 bg-amber-950 md:flex ">
        
//         {/* Logo & Address */}
//         <div className="text-center lg:text-left">
//           <p className="font-[Poppins] font-bold text-[24px] text-[#000000]">
//             Funiro.
//           </p>
//           <div className="mt-6">
//             <p className="text-[16px] text-[#9F9F9F]">400 University Drive Suite 200 Coral</p>
//             <p className="text-[16px] text-[#9F9F9F]">Gables, FL 33134 USA</p>
//           </div>
//         </div>

//         {/* Links Section */}
//         <div className="mt-6 lg:mt-0 text-center lg:text-left">
//           <p className="text-[16px] text-[#9F9F9F]">Links</p>
//           <ul className="flex flex-col gap-4 mt-4">
//             <li><p className="text-[16px] text-[#000000]">Home</p></li>
//             <li><p className="text-[16px] text-[#000000]">Shop</p></li>
//             <li><p className="text-[16px] text-[#000000]">About</p></li>
//             <li><p className="text-[16px] text-[#000000]">Contact</p></li>
//           </ul>
//         </div>

//         {/* Help Section */}
//         <div className="mt-6 lg:mt-0 text-center lg:text-left">
//           <p className="text-[16px] text-[#9F9F9F]">Help</p>
//           <ul className="flex flex-col gap-4 mt-4">
//             <li><p className="text-[16px] text-[#000000]">Payment Options</p></li>
//             <li><p className="text-[16px] text-[#000000]">Returns</p></li>
//             <li><p className="text-[16px] text-[#000000]">Privacy Policies</p></li>
//           </ul>
//         </div>

//         {/* Newsletter Section */}
//         <div className="mt-6 lg:mt-0 text-center lg:text-left w-full lg:w-[300px]">
//           <p className="text-[16px] text-[#9F9F9F]">Newsletter</p>
//           <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-4">
//             <input 
//               type="text" 
//               placeholder="Enter Your Email Address" 
//               className="w-full border-b-2 border-[#000000] focus:outline-none focus:border-b-4 transition-all text-[14px] text-[#9F9F9F] placeholder-[#9F9F9F] px-2 py-1"
//             />
//             <p className="text-[14px] font-medium text-[#000000] cursor-pointer mt-2 sm:mt-0 sm:ml-2">
//               <u>SUBSCRIBE</u>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="w-full mt-10 text-center">
//         <div className="w-full border border-[#D9D9D9]"></div>
//         <p className="text-[14px] text-[#000000] mt-4">
//           2023 Funiro. All rights reserved.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <div className="w-full max-w-[1240px] h-auto px-4 sm:px-6 md:px-10 lg:px-16 py-12 lg:mt-12 relative border-t border-gray-300">
      <div className="flex flex-col md:flex-row justify-between items-start lg:items-center gap-y-8 lg:gap-y-0">
        {/* Logo & Address */}
        <div className="text-center md:text-left w-full md:w-1/4">
          <p className="font-bold text-2xl text-black">Funiro.</p>
          <div className="mt-4 text-gray-500 text-sm">
            <p>400 University Drive Suite 200</p>
            <p>Coral Gables, FL 33134 USA</p>
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <p className="text-gray-500 font-medium">Links</p>
          <ul className="flex flex-col gap-2 mt-2 text-black">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <p className="text-gray-500 font-medium">Help</p>
          <ul className="flex flex-col gap-2 mt-2 text-black">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <p className="text-gray-500 font-medium">Newsletter</p>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mt-3">
            <input 
              type="text" 
              placeholder="Enter Your Email Address" 
              className="w-full border-b-2 border-black focus:outline-none focus:border-b-4 transition-all text-sm text-gray-500 px-2 py-1"
            />
            <p className="text-sm font-medium text-black cursor-pointer mt-2 sm:mt-0 sm:ml-2">
              <u>SUBSCRIBE</u>
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full mt-8 text-center">
        <div className="w-full border border-gray-300"></div>
        <p className="text-sm text-black mt-4">2023 Funiro. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
