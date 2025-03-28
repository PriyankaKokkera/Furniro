import rectangle from "../assets/Rectangle 24.png"
import arrow from "../assets/Vector 1.png"
import rect from "../assets/Rectangle 25.png"
import rect2 from "../assets/Rectangle 26.png"
const ExploreMore = () => {
  return (
    
    <div className="w-full h-[670px] mt-[69px] bg-[#FCF8F3] relative">


      {/* first div started */}

      <div className="w-[422px] h-[151px] absolute top-[223px] left-[100px]  flex flex-col gap-[7px]">
      <h1 className="font-poppins font-bold text-[40px] leading-[120%] tracking-[0%] text-[#3A3A3A]">
  50+ Beautiful Rooms Inspiration
</h1>
<p className="font-poppins font-medium text-[16px] leading-[150%] tracking-[0%]  text-[#616161]">
  Our designer already made a lot of beautiful prototypes of rooms that inspire you.
</p>


      </div>
       {/* first div completed */}




        {/* second div started */}
      <div className="absolute top-[399px] left-[100px]">
      <button className="w-[175px] h-[48px] text-[#FFFFFF]  bg-[#B88E2F] font-poppins font-semibold text-[16px] leading-[150%] tracking-[0%]">Explore More</button>
      </div>
    
  {/* second div ended */}

  {/* <third div started */}
     
    
    <div className="absolute top-[44px] left-[564px] w-[404px] h-[582px] bg-amber-700 ">
      <div className="relative top-[0px]">
      <img src={rectangle} alt="" />
      {/* text box */}
      
      <div className=" absolute top-[428px] left-[24px] w-[217px] h-[130px] backdrop-blur-sm bg-[#FFFFFFB8] px-[32px] py-[32px]" >
      
       
        <div className="w-[142px] h-[24px] flex items-center gap-[8px]">
        <span className="font-poppins font-medium text-[16px] leading-[150%] tracking-[0%]  text-[#616161]">
  01
</span>
<div className="w-[27px] border border-[#616161]"></div>
<span className="font-poppins font-medium text-[16px] leading-[150%] tracking-[0%] text-[#616161]">
  Bed Room
</span>

        </div>

        <span className="font-poppins font-semibold text-[28px] leading-[120%] tracking-[0%] text-[#3A3A3A]">
  Inner Peace
</span>
</div> 


{/* </div> */}
{/* text box */}
<button className="bg-[#B88E2F] absolute top-[510px] left-[241px] w-[48px] h-[48px] px-[12px] py-[12px]">
  <img src={arrow} alt="" />
</button>

      

      </div>
      
      
      

    </div>

    {/* <third div complted */}
    

    {/* fourt div started */}


<div className="w-[372px] h-[486px] absolute top-[44px] left-[992px] ">

<img src={rect} alt="" />


</div>


 



<div className="absolute top-[578px] left-[1039px] w-[120px] h-[27px] flex items-center gap-[20px]">
  {/* First Dot */}
  <div className="relative group w-[27px] h-[27px] flex items-center justify-center">
    <div className="absolute w-[11px] h-[11px] rounded-full bg-[#D8D8D8] transition-opacity duration-300 group-hover:opacity-0"></div>
    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[27px] h-[27px] rounded-full border border-[#B88E2F] flex items-center justify-center">
      <div className="w-[11px] h-[11px] rounded-full bg-[#B88E2F]"></div>
    </div>
  </div>

  {/* Second Dot */}
  <div className="relative group w-[27px] h-[27px] flex items-center justify-center">
    <div className="absolute w-[11px] h-[11px] rounded-full bg-[#D8D8D8] transition-opacity duration-300 group-hover:opacity-0"></div>
    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[27px] h-[27px] rounded-full border border-[#B88E2F] flex items-center justify-center">
      <div className="w-[11px] h-[11px] rounded-full bg-[#B88E2F]"></div>
    </div>
  </div>

  {/* Third Dot */}
  <div className="relative group w-[27px] h-[27px] flex items-center justify-center">
    <div className="absolute w-[11px] h-[11px] rounded-full bg-[#D8D8D8] transition-opacity duration-300 group-hover:opacity-0"></div>
    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[27px] h-[27px] rounded-full border border-[#B88E2F] flex items-center justify-center">
      <div className="w-[11px] h-[11px] rounded-full bg-[#B88E2F]"></div>
    </div>
  </div>

  <div className="relative group w-[27px] h-[27px] flex items-center justify-center">
    <div className="absolute w-[11px] h-[11px] rounded-full bg-[#D8D8D8] transition-opacity duration-300 group-hover:opacity-0"></div>
    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[27px] h-[27px] rounded-full border border-[#B88E2F] flex items-center justify-center">
      <div className="w-[11px] h-[11px] rounded-full bg-[#B88E2F]"></div>
    </div>
  </div>
</div>






  
<div className="absolute top-[311px] left-[1337px] shadow-[0px_4px_14px_1px_#00000029] rounded-full w-[48px] h-[48px] flex items-center justify-center bg-white z-10">
  <div className="relative w-[14px] h-[14px] border-r-[1.8px] border-t-[1.8px] border-[#B88E2F] rotate-45 z-20"></div>
</div>

<div className="absolute left-[1388px] top-[44px] w-[372px] h-[486px]">
  <img src={rect2} alt="" />

</div>



 {/* sixth div completed */}





    </div> 
   
  )
}

export default ExploreMore
