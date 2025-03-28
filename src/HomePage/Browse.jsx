import dining from "../assets/Mask Group.png"
import living from "../assets/Image-living room.png"
import bedroom from "../assets/Mask Group (1).png"
const Browse = () => {
  return (
    <>
   


    <div className="mt-[56px] ml-[131px] max-w-[1183px] w-full h-[685px]">
    <div className="w-full flex flex-col items-center justify-center">
    <div className="w-[559px] h-[77px] text-center">
      <p className="font-poppins font-bold text-[32px] leading-[100%] text-[#333333] mb-2">
        Browse The Range
      </p>
      <p className="font-poppins font-normal text-[20px] leading-[100%] text-[#666666]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  </div >
  <div className="flex items-center gap-[20px] mt-[62px] ">
      <div className="w-[381px] h-[480px]">
      <img src={dining} alt="" />
      <p className="font-poppins font-semibold text-[24px] leading-[100%] tracking-[0px] text-center text-[#333333] mt-[30px]">
  Dining
</p>

      </div>
      


      <div className="w-[381px] h-[480px] ">
      <img src={living} alt="" />
      <p className="font-poppins font-semibold text-[24px] leading-[100%] tracking-[0px] text-center text-[#333333] mt-[30px]">
  Living
</p>

      </div>
      <div className="w-[381px] h-[480px]">
      <img src={bedroom} alt=""/>
      <p className="font-poppins font-semibold text-[24px] leading-[100%] tracking-[0px] text-center text-[#333333] mt-[30px]">
  Bedroom
</p>

      </div>
      
      
     
    </div>
    </div>
    </>
  )
}

export default Browse
