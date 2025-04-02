import table from "../assets/Images.png"
import chair from "../assets/Images (1).png"
import sofa1 from "../assets/Images (2).png"
import hall from "../assets/image 2 (2).png"
import share from "../assets/gridicons_share.png"
import compare from "../assets/compare-svgrepo-com 1.png"
import like from "../assets/Vector (1).png"
import qwe from "../assets/image 5 (1).png"
import qwe1 from "../assets/image 6 (1).png"
import qwe2 from "../assets/image 7 (1).png"
import qwe3 from "../assets/image 8 (1).png"

const Products = () => {
  return (
    <div className="lg:ml-[102px] lg:w-[1236px] lg:h-[1175px] lg:flex lg:flex-col lg:py-[56px] lg:mt-[76px] md:ml-[0px] md:w-[98%] sm:ml-[0px] sm:w-[98%] ml-[80px] mt-[156px] md:mt-[56px] ">
    <p className="font-poppins font-bold lg:text-[40px] leading-[120%] tracking-[0%] text-[#3A3A3A] text-center md:text-[30px] text-[40px]">
  Our Products
</p>
<div className="lg:flex  lg:mb-[32px] lg:w-[1236] lg:h-[446px] lg:mt-[32px] gap-[32px] lg:md-[68%] md:gap-[8px] sm:gap-[2px] lg:[90%] lg:ml-[95px] lg:gap-[32px]  mt-[15px] md:flex">



<div className="lg:w-[285px] lg:h-[446px]  lg:flex lg:flex-col lg:gap-[8px] relative group overflow-hidden w-[320px] flex bg-[#F4F5F7] md:flex md:flex-col lg:rounded-none md:rounded-2xl ">
{/* lg:w-[285px] lg:h-[446px] bg-[#F4F5F7] lg:flex lg:flex-col gap-[8px] relative group overflow-hidden w-[320px] mt-[12px] flex lg:mt-[0px] md:flex md:flex-col lg:rounded-none md:rounded-2xl "> */}
<div className="absolute lg:top-[24px] lg:left-[213px] lg:w-[48px] lg:h-[48px] rounded-full bg-[#E97171] lg:px-[5px] lg:py-[12px] w-[32px] h-[30px] px-[2px] py-[2px] left-[112px] top-[12px] md:w-[40px] md:h-[40px] md:top-[24px] md:left-[120px] md:px-[5px] md:py-[8px]">
  <span className="font-poppins font-medium lg:text-[16px] leading-[150%] text-white text-[11px] md:text-[12px]" >
    -30%
  </span>
  </div> 

<img
  src={table}
  alt="Stylish Chair"
  className="lg:w-[285px] lg:h-[301px] object-cover transition duration-300 group-hover:opacity-60 w-[150px] md:w-full"
/>


<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition duration-300 "></div>


<div className="absolute lg:inset-0 lg:flex lg:flex-col lg:items-center lg:justify-center opacity-0 group-hover:opacity-100 transition duration-300 z-20">
  <button className="px-6 py-2 bg-white text-black font-semibold shadow-md w-[202px] h-[48px]">
    Add to cart
  </button>
  <div className="flex gap-[20px] mt-4 text-white bg-amber-400">
    <div className="flex items-center gap-[2px]">
    <img src={share} alt="" className="w-[16px] h-[16px]"/>
    <p className="cursor-pointer hover:text-gray-300">Share</p>
    </div>
    <div className="flex items-center gap-[2px]">
    <img src={compare} alt="" className="w-[16px] h-[16px]"/>
    <p className="cursor-pointer hover:text-gray-300">Compare</p>
    </div>
    <div className="flex items-center gap-[2px]">
    <img src={like} alt="" className="w-[16px] h-[16px]"/>
    <p className="cursor-pointer hover:text-gray-300">Like</p>
    </div>
  </div>
</div>


<div className="lg:w-[249px] lg:h-[99px] lg:mt-[16px] lg:mr-[20px] lg:mb-[30px] lg:ml-[16px] relative z-10 lg:flex lg:flex-col lg:gap-[8px] w-[249px] h-[99px] mt-[16px] mr-[20px] mb-[30px] ml-[16px]  flex flex-col gap-[8px] md:w-[249px] md:h-[99px] md:mt-[16px] md:mr-[20px] md:mb-[30px] md:ml-[16px]  md:flex md:flex-col md:gap-[8px]">
  <p className="font-poppins font-semibold lg:text-[24px] text-[#3A3A3A] text-[16px] md:text-[18px]">
  Syltherine
  </p>
  <p className="font-poppins font-medium lg:text-[16px] text-[#898989] text-[12px] md:text-[14px]">
  Stylish cafe chair
  </p>
  {/* <p className="font-poppins font-semibold text-[20px] text-[#3A3A3A]">
  Rp 7.000.000
  </p> */}
  <div className="lg:flex lg:gap-[16px] gap-[10px] md:gap-[10px] md:flex md:flex-col">
  {/* flex items-center lggap-[16px] gap-[10px] text-[12px] */}
  <p className="font-poppins font-semibold lg:text-[20px] leading-[150%] tracking-[0%] text-[#3A3A3A] text-[16px] md:text-[16px]">
  Rp 2.500.000
</p>
<p className="font-poppins font-normal lg:text-[16px]  text-[1px] leading-[150%] tracking-[0%] text-[#B0B0B0] line-through md:text-[16px]">
Rp 3.500.000
</p>
</div>
</div>

</div>


  {/* first one */}


  <div className="lg:w-[285px]  lg:h-[446px] bg-[#F4F5F7] lg:flex lg:flex-col gap-[8px] relative group overflow-hidden w-[320px] mt-[12px] flex lg:mt-[0px] md:flex md:flex-col lg:rounded-none md:rounded-2xl md:mt-[0px]">
    

  <img
    src={hall}
    alt="Stylish Chair"
    className="lg:w-[285px] lg:h-[301px] object-cover transition duration-300 group-hover:opacity-60 w-[150px] md:w-full"
  />

 
  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition duration-300 "></div>

  
  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 z-20 ">
    <button className="px-6 py-2 bg-white text-black font-semibold shadow-md w-[202px] h-[48px]">
      Add to cart
    </button>
    <div className="flex gap-[20px] mt-4 text-white">
      <div className="flex items-center gap-[2px]">
      <img src={share} alt="" className="w-[16px] h-[16px]"/>
      <p className="cursor-pointer hover:text-gray-300">Share</p>
      </div>
      <div className="flex items-center gap-[2px]">
      <img src={compare} alt="" className="w-[16px] h-[16px]"/>
      <p className="cursor-pointer hover:text-gray-300">Compare</p>
      </div>
      <div className="flex items-center gap-[2px]">
      <img src={like} alt="" className="w-[16px] h-[16px]"/>
      <p className="cursor-pointer hover:text-gray-300">Like</p>
      </div>
    </div>
  </div>

  
  <div className="lg:w-[249px] lg:h-[99px] lg:mt-[16px] lg:mr-[20px] lg:mb-[30px] lg:ml-[16px] relative z-10 lg:flex lg:flex-col lg:gap-[8px] w-[249px] h-[99px] mt-[16px] mr-[20px] mb-[30px] ml-[16px]  flex flex-col gap-[8px] md:w-[249px] md:h-[99px] md:mt-[10px] md:mr-[20px] md:mb-[30px] md:ml-[16px]  md:flex md:flex-col md:gap-[8px] ">
    <p className="font-poppins font-semibold lg:text-[24px] text-[#3A3A3A]  text-[16px] md:text-[18px]">
      Leviosa
    </p>
    <p className="font-poppins font-medium lg:text-[16px] text-[#898989] text-[12px] md:text-[14px]">
      Stylish cafe chair
    </p>
    <p className="font-poppins font-semibold lg:text-[20px] text-[#3A3A3A] text-[16px] md:text-[16px]">
      Rp 2.500.000
    </p>
  </div>

 

</div>


{/* //second one */}

<div className="lg:w-[285px] lg:h-[446px] bg-[#F4F5F7] lg:flex lg:flex-col gap-[8px] relative group overflow-hidden w-[320px] flex mt-[12px] lg:mt-[0px] md:flex md:flex-col lg:rounded-none md:rounded-2xl md:mt-[0px]">
<div className="absolute lg:top-[24px] lg:left-[213px] lg:w-[48px] lg:h-[48px] rounded-full bg-[#E97171] lg:px-[5px] lg:py-[12px] w-[32px] h-[30px] px-[2px] py-[2px] left-[112px] top-[12px] md:w-[40px] md:h-[40px] md:top-[24px] md:left-[120px] md:px-[5px] md:py-[8px]">
  <span className="font-poppins font-medium lg:text-[16px] leading-[150%] text-white text-[11px] md:text-[12px]">
    -50%
  </span>
  </div> 

<img
  src={chair}
  alt="Stylish Chair"
  className="lg:w-[285px] lg:h-[301px] object-cover transition duration-300 group-hover:opacity-60 w-[150px] md:w-full"
/>


<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition duration-300 "></div>


<div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 z-20 ">
  <button className="px-6 py-2 bg-white text-black font-semibold shadow-md w-[202px] h-[48px]">
    Add to cart
  </button>
  <div className="flex gap-[20px] mt-4 text-white">
    <div className="flex items-center gap-[2px]">
    <img src={share} alt="" className="w-[16px] h-[16px]"/>
    <p className="cursor-pointer hover:text-gray-300">Share</p>
    </div>
    <div className="flex items-center gap-[2px]">
    <img src={compare} alt="" className="w-[16px] h-[16px]"/>
    <p className="cursor-pointer hover:text-gray-300">Compare</p>
    </div>
    <div className="flex items-center gap-[2px]">
    <img src={like} alt="" className="w-[16px] h-[16px]"/>
    <p className="cursor-pointer hover:text-gray-300">Like</p>
    </div>
  </div>
</div>


<div className="lg:w-[249px] lg:h-[99px] lg:mt-[16px] lg:mr-[20px] lg:mb-[30px] lg:ml-[16px] relative z-10 lg:flex lg:flex-col lg:gap-[8px] w-[249px] h-[99px] mt-[16px] mr-[20px] mb-[30px] ml-[16px]  flex flex-col gap-[8px] md:w-[249px] md:h-[99px] md:mt-[12px] md:mr-[20px] md:mb-[30px] md:ml-[16px]  md:flex md:flex-col md:gap-[px]">
  
  <p className="font-poppins font-semibold lg:text-[24px] text-[#3A3A3A] text-[12px] md:text-[18px]">
  Lolito
  </p>
  <p className="font-poppins font-medium lg:text-[16px] text-[#898989] text-[12px] md:text-[14px]">
  Luxury big sofa
  </p>
  {/* <p className="font-poppins font-semibold text-[20px] text-[#3A3A3A]">
  Rp 7.000.000
  </p> */}
  <div className="lg:flex lg:items-center lg:gap-[16px] gap-[10px] md:gap-[8px] md:flex md:flex-col  ">
  <p className="font-poppins font-semibold lg:text-[20px] leading-[150%] tracking-[0%] text-[#3A3A3A] text-[12px] md:text-[16px]  ">
  Rp 7.000.000
</p>
<p className="font-poppins font-normal lg:text-[16px] leading-[150%] tracking-[0%] text-[#B0B0B0] line-through text-[12px] md:text-[16px]">
Rp 14.000.000
</p>
</div>
</div>

</div>

{/* fourth one */}

<div className="lg:w-[285px] lg:h-[446px] bg-[#F4F5F7] lg:flex lg:flex-col gap-[8px] relative group overflow-hidden w-[320px] flex mt-[12px] lg:mt-[0px] md:flex md:flex-col lg:rounded-none md:rounded-2xl md:mt-[0px]">
<div className="absolute lg:top-[24px] lg:left-[213px] lg:w-[48px] lg:h-[48px] rounded-full bg-[#E97171] lg:px-[5px] lg:py-[12px] w-[32px] h-[30px] px-[2px] py-[2px] left-[112px] top-[12px] md:w-[40px] md:h-[40px] md:top-[24px] md:left-[120px] md:px-[5px] md:py-[8px]">
  <span className="ffont-poppins font-medium lg:text-[16px] leading-[150%] text-white text-[11px] md:text-[12px]">
    NEW
  </span>
  </div> 

<img
  src={sofa1}
  alt="Stylish Chair"
  className="lg:w-[285px] lg:h-[301px] object-cover transition duration-300 group-hover:opacity-60 w-[150px] md:w-full"
/>


<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition duration-300 "></div>


<div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 z-20 ">
  <button className="px-6 py-2 bg-white text-black font-semibold shadow-md w-[202px] h-[48px]">
    Add to cart
  </button>
  <div className="flex gap-[20px] mt-4 text-white"> 
    <div className="flex items-center gap-[2px]">
    <img src={share} alt="" className="w-[16px] h-[16px]"/>
    <p className="cursor-pointer hover:text-gray-300">Share</p>
    </div>
    <div className="flex items-center gap-[2px]">
    <img src={compare} alt="" className="w-[16px] h-[16px]"/>
    <p className="cursor-pointer hover:text-gray-300">Compare</p>
    </div>
    <div className="flex items-center gap-[2px]">
    <img src={like} alt="" className="w-[16px] h-[16px]"/>
    <p className="cursor-pointer hover:text-gray-300">Like</p>
    </div>
  </div>
</div>


<div className="lg:w-[249px] lg:h-[99px] lg:mt-[16px] lg:mr-[20px] lg:mb-[30px] lg:ml-[16px] relative z-10 lg:flex lg:flex-col lg:gap-[8px] w-[249px] h-[99px] mt-[16px] mr-[20px] mb-[30px] ml-[16px]  flex flex-col gap-[8px] md:w-[249px] md:h-[99px] md:mt-[12px] md:mr-[20px] md:mb-[30px] md:ml-[16px]  md:flex md:flex-col md:gap-[px] ">
  <p className="font-poppins font-semibold lg:text-[24px] text-[#3A3A3A] text-[12px] md:text-[18px]">
  Respira
  </p>
  <p className="font-poppins font-medium lg:text-[16px] text-[#898989] text-[12px] md:text-[14px]">
  Outdoor bar table and stool
  </p>
  {/* <p className="font-poppins font-semibold text-[20px] text-[#3A3A3A]">
  Rp 7.000.000
  </p> */}
 
  <p className="font-poppins font-semibold lg:text-[20px] text-[#3A3A3A] text-[16px] md:text-[16px]">
  Rp 500.000
</p>


</div>

</div>
 
  
</div>



{/* // ****************8888SECOND ROW   ************************88        */}



<div className="lg:flex  mb-[32px] lg:w-[1236] lg:h-[448px] lg:mt-[32px] gap-[32px]  md:[68%] md:gap-[8px] sm:gap-[2px] lg:[90%] lg:ml-[95px] lg:gap-[32px] mt-[10px]  md:flex "> 



<div className="lg:w-[285px] lg:h-[446px]  lg:flex lg:flex-col lg:gap-[8px] relative group overflow-hidden w-[320px] flex bg-[#F4F5F7] md:flex md:flex-col lg:rounded-none md:rounded-2xl"> 
<div className="absolute lg:top-[24px] lg:left-[213px] lg:w-[48px] lg:h-[48px] rounded-full bg-[#E97171] lg:px-[5px] lg:py-[12px] w-[32px] h-[30px] px-[2px] py-[2px] left-[112px] top-[12px] md:w-[40px] md:h-[40px] md:top-[24px] md:left-[120px] md:px-[5px] md:py-[8px]">
  <span className="ffont-poppins font-medium lg:text-[16px] leading-[150%] text-white text-[11px] md:text-[12px]">
    -30%
  </span>
  </div> 

 <img
  src={qwe}
  alt="Stylish Chair"
  className="lg:w-[285px] lg:h-[301px] object-cover transition duration-300 group-hover:opacity-60 w-[150px] md:w-full"
/> 


<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition duration-300 "></div> 



<div className="absolute inset-0 lg:flex lg:flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 z-20 ">
  <button className="px-6 py-2 bg-white text-black font-semibold shadow-md w-[202px] h-[48px]">
    Add to cart 
  </button> 
  <div className="flex gap-[20px] mt-4 text-white">
    <div className="flex items-center gap-[2px]">
    <img src={share} alt="" className="w-[16px] h-[16px]"/>
    <p className="cursor-pointer hover:text-gray-300">Share</p>
    </div>
    <div className="flex items-center gap-[2px]">
    <img src={compare} alt="" className="w-[16px] h-[16px]"/>
    <p className="cursor-pointer hover:text-gray-300">Compare</p>
    </div>
    <div className="flex items-center gap-[2px]">
    <img src={like} alt="" className="w-[16px] h-[16px]"/>
    <p className="cursor-pointer hover:text-gray-300">Like</p>
    </div>
  </div>
</div> 


<div className="lg:w-[249px] lg:h-[99px] lg:mt-[16px] lg:mr-[20px] lg:mb-[30px] lg:ml-[16px] relative z-10 lg:flex lg:flex-col lg:gap-[8px] w-[249px] h-[99px] mt-[16px] mr-[20px] mb-[30px] ml-[16px]  flex flex-col gap-[8px] md:w-[249px] md:h-[99px] md:mt-[16px] md:mr-[20px] md:mb-[30px] md:ml-[16px]  md:flex md:flex-col md:gap-[8px]">
  <p className="font-poppins font-semibold lg:text-[24px] text-[#3A3A3A] text-[16px] md:text-[18px]">
  Grifo
  </p>
  <p className="font-poppins font-medium lg:text-[16px] text-[#898989] text-[12px] ">
  Night lamp
  </p> 
  <div className="lg:flex lg:gap-[16px] gap-[10px] md:gap-[10px] md:flex md:flex-col">
  <p className="font-poppins font-semibold lg:text-[20px] leading-[150%] tracking-[0%] text-[#3A3A3A] text-[16px] md:text-[16px]">
  Rp 7.000.000
</p>
<p className="font-poppins font-normal lg:text-[16px] leading-[150%] tracking-[0%] text-[#B0B0B0] line-through text-[12px] md:text-[16px]">
Rp 14.000.000
</p>
</div>




</div>

</div>
 

  {/* // first one  */}


  <div className="lg:w-[285px] lg:h-[446px]  lg:flex lg:flex-col lg:gap-[8px] relative group overflow-hidden w-[320px] flex bg-[#F4F5F7] md:flex md:flex-col lg:rounded-none md:rounded-2xl">
  <div className="absolute lg:top-[24px] lg:left-[213px] lg:w-[48px] lg:h-[48px] rounded-full bg-[#E97171] lg:px-[5px] lg:py-[12px] w-[32px] h-[30px] px-[2px] py-[2px] left-[112px] top-[12px] md:w-[40px] md:h-[40px] md:top-[24px] md:left-[120px] md:px-[5px] md:py-[8px]">
  <span className="ffont-poppins font-medium lg:text-[16px] leading-[150%] text-white text-[11px] md:text-[12px]">
    NEW
  </span>
  </div> 

  <img
    src={qwe1}
    alt="Stylish Chair"
    className="lg:w-[285px] lg:h-[301px] object-cover transition duration-300 group-hover:opacity-60 w-[150px] md:w-full "
  />

 
  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition duration-300 "></div>

  
  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 z-20 ">
    <button className="px-6 py-2 bg-white text-black font-semibold shadow-md w-[202px] h-[48px]">
      Add to cart
    </button> 
     <div className="flex gap-[20px] mt-4 text-white">
      <div className="flex items-center gap-[2px]">
      <img src={share} alt="" className="w-[16px] h-[16px]"/>
      <p className="cursor-pointer hover:text-gray-300">Share</p>
      </div>
      <div className="flex items-center gap-[2px]">
      <img src={compare} alt="" className="w-[16px] h-[16px]"/>
      <p className="cursor-pointer hover:text-gray-300">Compare</p>
      </div>
      <div className="flex items-center gap-[2px]">
      <img src={like} alt="" className="w-[16px] h-[16px]"/>
      <p className="cursor-pointer hover:text-gray-300">Like</p>
      </div>
    </div>
  </div>

  
  <div className="lg:w-[249px] lg:h-[99px] lg:mt-[16px] lg:mr-[20px] lg:mb-[30px] lg:ml-[16px] relative z-10 lg:flex lg:flex-col lg:gap-[8px] w-[249px] h-[99px] mt-[16px] mr-[20px] mb-[30px] ml-[16px]  flex flex-col gap-[8px] md:w-[249px] md:h-[99px] md:mt-[16px] md:mr-[20px] md:mb-[30px] md:ml-[16px]  md:flex md:flex-col md:gap-[8px]">
    <p className="font-poppins font-semibold lg:text-[24px] text-[#3A3A3A] text-[16px] ">
    Muggo
    </p>
    <p className="font-poppins font-medium lg:text-[16px] text-[#898989] text-[12px] ">
    Small mug
    </p>
    <p className="font-poppins font-semibold lg:text-[20px] text-[#3A3A3A] text-[16px]">
    Rp 150.000
    </p>
  </div> 

 

</div> 
{/* //second one */}

<div className="lg:w-[285px] lg:h-[446px]  lg:flex lg:flex-col lg:gap-[8px] relative group overflow-hidden w-[320px] flex bg-[#F4F5F7] md:flex md:flex-col lg:rounded-none md:rounded-2xl">
<div className="absolute lg:top-[24px] lg:left-[213px] lg:w-[48px] lg:h-[48px] rounded-full bg-[#E97171] lg:px-[5px] lg:py-[12px] w-[32px] h-[30px] px-[2px] py-[2px] left-[112px] top-[12px] md:w-[40px] md:h-[40px] md:top-[24px] md:left-[120px] md:px-[5px] md:py-[8px]">
  <span className="font-poppins font-medium lg:text-[16px] leading-[150%] text-white text-[11px] md:text-[12px]">
    -50%
  </span>
  </div>  

<img
  src={chair}
  alt="Stylish Chair"
  className="lg:w-[285px] lg:h-[301px] object-cover transition duration-300 group-hover:opacity-60 w-[150px] md:w-full"
/>


<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition duration-300 "></div>


<div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 z-20 ">
  <button className="px-6 py-2 bg-white text-black font-semibold shadow-md w-[202px] h-[48px]">
    Add to cart
  </button> 
   <div className="flex gap-[20px] mt-4 text-white">
    <div className="flex items-center gap-[2px]">
    <img src={share} alt="" className="w-[16px] h-[16px]"/>
    <p className="cursor-pointer hover:text-gray-300">Share</p>
    </div>
    <div className="flex items-center gap-[2px]">
    <img src={compare} alt="" className="w-[16px] h-[16px]"/>
    <p className="cursor-pointer hover:text-gray-300">Compare</p>
    </div>
    <div className="flex items-center gap-[2px]">
    <img src={like} alt="" className="w-[16px] h-[16px]"/>
    <p className="cursor-pointer hover:text-gray-300">Like</p>
    </div>
  </div>
</div> 

 <div className="w-[249px] h-[99px] mt-[16px] mr-[20px] mb-[30px] ml-[16px] relative z-10 flex flex-col gap-[8px]">
  <p className="font-poppins font-semibold lg:text-[24px] text-[#3A3A3A] text-[16px]">
  Pingky
  </p>
  <p className="font-poppins font-medium lg:text-[16px] text-[#898989] text-[12px]">
  Cute bed set
  </p> 
   
  <div className="lg:flex items-center lg:gap-[16px]">
  <p className="font-poppins font-semibold lg:text-[20px] leading-[150%] tracking-[0%] text-[#3A3A3A] text-[16px]">
  Rp 7.000.000
</p>
<p className="font-poppins font-normal text-[16px] leading-[150%] tracking-[0%] text-[#B0B0B0] line-through">
Rp 14.000.000
</p>
</div>
</div>

</div> 

{/* fourth one */}

 <div className="lg:w-[285px] lg:h-[446px]  lg:flex lg:flex-col lg:gap-[8px] relative group overflow-hidden w-[320px] flex bg-[#F4F5F7] md:flex md:flex-col lg:rounded-none md:rounded-2xl">
<div className="absolute lg:top-[24px] lg:left-[213px] lg:w-[48px] lg:h-[48px] rounded-full bg-[#E97171] lg:px-[5px] lg:py-[12px] w-[32px] h-[30px] px-[2px] py-[2px] left-[112px] top-[12px] md:w-[40px] md:h-[40px] md:top-[24px] md:left-[120px] md:px-[5px] md:py-[8px]">
  <span className="font-poppins font-medium lg:text-[16px] leading-[150%] text-white text-[11px] md:text-[12px]">
    NEW
  </span>
  </div>  

 <img
  src={qwe2}
  alt="Stylish Chair"
  className="lg:w-[285px] lg:h-[301px] object-cover transition duration-300 group-hover:opacity-60 w-[150px] md:w-full"
/>


<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition duration-300 "></div>


<div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 z-20 ">
  <button className="px-6 py-2 bg-white text-black font-semibold shadow-md w-[202px] h-[48px]">
    Add to cart
  </button> 
  <div className="flex gap-[20px] mt-4 text-white">
    <div className="flex items-center gap-[2px]">
    <img src={share} alt="" className="w-[16px] h-[16px]"/>
    <p className="cursor-pointer hover:text-gray-300">Share</p>
    </div>
    <div className="flex items-center gap-[2px]">
    <img src={compare} alt="" className="w-[16px] h-[16px]"/>
    <p className="cursor-pointer hover:text-gray-300">Compare</p>
    </div>
    <div className="flex items-center gap-[2px]">
    <img src={like} alt="" className="w-[16px] h-[16px]"/>
    <p className="cursor-pointer hover:text-gray-300">Like</p>
    </div>
  </div> 
</div>


<div className="lg:w-[249px] lg:h-[99px] lg:mt-[16px] lg:mr-[20px] lg:mb-[30px] lg:ml-[16px] relative z-10 lg:flex lg:flex-col lg:gap-[8px] w-[249px] h-[99px] mt-[16px] mr-[20px] mb-[30px] ml-[16px]  flex flex-col gap-[8px] md:w-[249px] md:h-[99px] md:mt-[16px] md:mr-[20px] md:mb-[30px] md:ml-[16px]  md:flex md:flex-col md:gap-[8px]">
  <p className="font-poppins font-semibold lg:text-[24px] text-[#3A3A3A] text-[16px]">
  Potty
  </p>
  <p className="font-poppins font-medium text-[16px] text-[#898989] ">
  Minimalist flower pot 
  </p>
 
 
  <p className="font-poppins font-semibold lg:text-[20px] leading-[150%] tracking-[0%] text-[#3A3A3A] text-[16px]">
  Rp 500.000
</p>


</div>

</div>

  
</div>
 

  <button className="font-poppins font-semibold lg:text-[16px] leading-[150%] text-[#B88E2F] border border-[#B88E2F] lg:px-[78px] lg:py-[12px] lg:w-[245px] lg:h-[48px] lg:mx-auto md:text-[14px] md:px-[50px] md:py-[12px] md:w-[200px] md:h-[48px] md:mx-auto absolute md:left-[280px] lg:left-[600px] lg:top-[2580px] md:top-[1970px]">
    Show More
  </button>




 


    </div>
    
  )
}

export default Products
