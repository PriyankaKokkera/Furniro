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
    <div className="ml-[102px] w-[1236px] h-[1175px] flex flex-col py-[56px] mt-[76px] md:ml-[0px] md:w-[98%] sm:ml-[0px] sm:w-[98%] ">
    <p className="font-poppins font-bold text-[40px] leading-[120%] tracking-[0%] text-[#3A3A3A] text-center">
  Our Products
</p>
<div className="flex  mb-[32px] w-[1236] h-[446px] mt-[32px] gap-[32px] md-[68%] md:gap-[8px] sm:gap-[2px] lg:[90%] lg:ml-[95px] lg:gap-[32px]">



<div className="w-[285px] h-[446px]  flex flex-col gap-[8px] relative group overflow-hidden ">
<div className="absolute top-[24px] left-[213px] w-[48px] h-[48px] rounded-full bg-[#E97171] px-[5px] py-[12px]">
  <span className="font-poppins font-medium text-[16px] leading-[150%] text-white">
    -30%
  </span>
  </div> 

<img
  src={table}
  alt="Stylish Chair"
  className="w-[285px] h-[301px] object-cover transition duration-300 group-hover:opacity-60"
/>


<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition duration-300 "></div>


<div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 z-20 ">
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


<div className="w-[249px] h-[99px] mt-[16px] mr-[20px] mb-[30px] ml-[16px] relative z-10 flex flex-col gap-[8px]">
  <p className="font-poppins font-semibold text-[24px] text-[#3A3A3A] ">
  Syltherine
  </p>
  <p className="font-poppins font-medium text-[16px] text-[#898989] ">
  Stylish cafe chair
  </p>
  {/* <p className="font-poppins font-semibold text-[20px] text-[#3A3A3A]">
  Rp 7.000.000
  </p> */}
  <div className="flex items-center gap-[16px]">
  <p className="font-poppins font-semibold text-[20px] leading-[150%] tracking-[0%] text-[#3A3A3A]">
  Rp 2.500.000
</p>
<p className="font-poppins font-normal text-[16px] leading-[150%] tracking-[0%] text-[#B0B0B0] line-through">
Rp 3.500.000
</p>
</div>
</div>

</div>


  {/* first one */}


  <div className="w-[285px] h-[446px] bg-[#F4F5F7] flex flex-col gap-[8px] relative group overflow-hidden">
    

  <img
    src={hall}
    alt="Stylish Chair"
    className="w-[285px] h-[301px] object-cover transition duration-300 group-hover:opacity-60"
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
    <p className="font-poppins font-semibold text-[24px] text-[#3A3A3A] ">
      Leviosa
    </p>
    <p className="font-poppins font-medium text-[16px] text-[#898989] ">
      Stylish cafe chair
    </p>
    <p className="font-poppins font-semibold text-[20px] text-[#3A3A3A]">
      Rp 2.500.000
    </p>
  </div>

 

</div>
{/* //second one */}

<div className="w-[285px] h-[446px] bg-[#F4F5F7] flex flex-col gap-[8px] relative group overflow-hidden">
<div className="absolute top-[24px] left-[213px] w-[48px] h-[48px] rounded-full bg-[#E97171] px-[5px] py-[12px]">
  <span className="font-poppins font-medium text-[16px] leading-[150%] text-white">
    -50%
  </span>
  </div> 

<img
  src={chair}
  alt="Stylish Chair"
  className="w-[285px] h-[301px] object-cover transition duration-300 group-hover:opacity-60"
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
  <p className="font-poppins font-semibold text-[24px] text-[#3A3A3A] ">
  Lolito
  </p>
  <p className="font-poppins font-medium text-[16px] text-[#898989] ">
  Luxury big sofa
  </p>
  {/* <p className="font-poppins font-semibold text-[20px] text-[#3A3A3A]">
  Rp 7.000.000
  </p> */}
  <div className="flex items-center gap-[16px]">
  <p className="font-poppins font-semibold text-[20px] leading-[150%] tracking-[0%] text-[#3A3A3A]">
  Rp 7.000.000
</p>
<p className="font-poppins font-normal text-[16px] leading-[150%] tracking-[0%] text-[#B0B0B0] line-through">
Rp 14.000.000
</p>
</div>
</div>

</div>

{/* fourth one */}

<div className="w-[285px] h-[446px] bg-[#F4F5F7] flex flex-col gap-[8px] relative group overflow-hidden">
<div className="absolute top-[24px] left-[213px] w-[48px] h-[48px] rounded-full bg-[#2EC1AC] px-[5px] py-[12px]">
  <span className="font-poppins font-medium text-[16px] leading-[150%] text-white">
    NEW
  </span>
  </div> 

<img
  src={sofa1}
  alt="Stylish Chair"
  className="w-[285px] h-[301px] object-cover transition duration-300 group-hover:opacity-60"
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
  <p className="font-poppins font-semibold text-[24px] text-[#3A3A3A] ">
  Respira
  </p>
  <p className="font-poppins font-medium text-[16px] text-[#898989] ">
  Outdoor bar table and stool
  </p>
  {/* <p className="font-poppins font-semibold text-[20px] text-[#3A3A3A]">
  Rp 7.000.000
  </p> */}
 
  <p className="font-poppins font-semibold text-[20px] leading-[150%] tracking-[0%] text-[#3A3A3A]">
  Rp 500.000
</p>


</div>

</div>
 
  
</div>



{/* // ****************8888SECOND ROW   ************************88        */}



<div className="flex  mb-[32px] w-[1236] h-[446px] mt-[32px] gap-[32px]  md:[68%] md:gap-[8px] sm:gap-[2px] lg:[90%] lg:ml-[95px] lg:gap-[32px]">



<div className="w-[285px] h-[446px] bg-[#F4F5F7] flex flex-col gap-[8px] relative group overflow-hidden">
{/* <div className="absolute top-[24px] left-[213px] w-[48px] h-[48px] rounded-full bg-[#E97171] px-[5px] py-[12px]">
  <span className="font-poppins font-medium text-[16px] leading-[150%] text-white">
    -30%
  </span>
  </div>  */}

<img
  src={qwe}
  alt="Stylish Chair"
  className="w-[285px] h-[301px] object-cover transition duration-300 group-hover:opacity-60"
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
  <p className="font-poppins font-semibold text-[24px] text-[#3A3A3A] ">
  Grifo
  </p>
  <p className="font-poppins font-medium text-[16px] text-[#898989] ">
  Night lamp
  </p>
  {/* <p className="font-poppins font-semibold text-[20px] text-[#3A3A3A]">
  Rp 7.000.000
  </p> */}
  <p className="font-poppins font-semibold text-[20px] leading-[150%] tracking-[0%] text-[#3A3A3A]">
  Rp 1.500.000
</p>

</div>

</div>


  {/* first one */}


  <div className="w-[285px] h-[446px] bg-[#F4F5F7] flex flex-col gap-[8px] relative group overflow-hidden">
  <div className="absolute top-[24px] left-[213px] w-[48px] h-[48px] rounded-full bg-[#2EC1AC] px-[5px] py-[12px]">
  <span className="font-poppins font-medium text-[16px] leading-[150%] text-white">
    NEW
  </span>
  </div>

  <img
    src={qwe1}
    alt="Stylish Chair"
    className="w-[285px] h-[301px] object-cover transition duration-300 group-hover:opacity-60"
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
    <p className="font-poppins font-semibold text-[24px] text-[#3A3A3A] ">
    Muggo
    </p>
    <p className="font-poppins font-medium text-[16px] text-[#898989] ">
    Small mug
    </p>
    <p className="font-poppins font-semibold text-[20px] text-[#3A3A3A]">
    Rp 150.000
    </p>
  </div>

 

</div>
{/* //second one */}

<div className="w-[285px] h-[446px] bg-[#F4F5F7] flex flex-col gap-[8px] relative group overflow-hidden">
<div className="absolute top-[24px] left-[213px] w-[48px] h-[48px] rounded-full bg-[#E97171] px-[5px] py-[12px]">
  <span className="font-poppins font-medium text-[16px] leading-[150%] text-white">
    -50%
  </span>
  </div> 

<img
  src={chair}
  alt="Stylish Chair"
  className="w-[285px] h-[301px] object-cover transition duration-300 group-hover:opacity-60"
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
  <p className="font-poppins font-semibold text-[24px] text-[#3A3A3A] ">
  Pingky
  </p>
  <p className="font-poppins font-medium text-[16px] text-[#898989] ">
  Cute bed set
  </p>
  {/* <p className="font-poppins font-semibold text-[20px] text-[#3A3A3A]">
  Rp 7.000.000
  </p> */}
  <div className="flex items-center gap-[16px]">
  <p className="font-poppins font-semibold text-[20px] leading-[150%] tracking-[0%] text-[#3A3A3A]">
  Rp 7.000.000
</p>
<p className="font-poppins font-normal text-[16px] leading-[150%] tracking-[0%] text-[#B0B0B0] line-through">
Rp 14.000.000
</p>
</div>
</div>

</div>

{/* fourth one */}

<div className="w-[285px] h-[446px] bg-[#F4F5F7] flex flex-col gap-[8px] relative group overflow-hidden">
<div className="absolute top-[24px] left-[213px] w-[48px] h-[48px] rounded-full bg-[#2EC1AC] px-[5px] py-[12px]">
  <span className="font-poppins font-medium text-[16px] leading-[150%] text-white">
    NEW
  </span>
  </div> 

<img
  src={qwe2}
  alt="Stylish Chair"
  className="w-[285px] h-[301px] object-cover transition duration-300 group-hover:opacity-60"
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
  <p className="font-poppins font-semibold text-[24px] text-[#3A3A3A] ">
  Potty
  </p>
  <p className="font-poppins font-medium text-[16px] text-[#898989] ">
  Minimalist flower pot
  </p>
  {/* <p className="font-poppins font-semibold text-[20px] text-[#3A3A3A]">
  Rp 7.000.000
  </p> */}
 
  <p className="font-poppins font-semibold text-[20px] leading-[150%] tracking-[0%] text-[#3A3A3A]">
  Rp 500.000
</p>


</div>

</div>

  
</div>
 

  <button className="font-poppins font-semibold text-[16px] leading-[150%] text-[#B88E2F] border border-[#B88E2F] px-[78px] py-[12px] w-[245px] h-[48px] mx-auto">
    Show More
  </button>




 


    </div>
    
  )
}

export default Products
