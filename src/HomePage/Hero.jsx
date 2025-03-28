import backgroungImage from "../assets/scandinavian-interior-mockup-wall-decal-background 1.png"

const Hero = () => {
  return (
    <>
    <div className="w-full h-[716px] relative top-[0px]">
    <img src={backgroungImage} alt="sofa" className="w-full h-full object-cover"/>
    
    <div className="w-[643px] h-[443px] rounded-[10px] bg-[#FFF3E3] absolute top-[153px] left-[780px]  px-[39px] py-[62px] shadow-lg">
      <div className="w-[561px] h-[344px]">
        <span className="font-poppins font-semibold text-[16px] leading-[100%] tracking-[3px] text-[#333333]">
          New Arrival
        </span>
        
        <div className="w-[559px] h-[127px] mt-[4px]">
          <p className="font-poppins font-bold text-[52px] leading-[65px] tracking-[0px] text-[#B88E2F]">
            Discover Our
          </p>
          <p className="font-poppins font-bold text-[52px] leading-[65px] tracking-[0px] text-[#B88E2F]">
            New Collection
          </p>
        </div>
        
        <div className="w-[546px] h-[52px] mt-[17px]">
          <p className="font-poppins font-medium text-[18px] leading-[24px] tracking-[0px] text-[#333333]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere ut perferendis nulla nostrum. Voluptatibus.
          </p>
        </div>
        
        <button className="mt-[46px] px-[72px] py-[25px] bg-[#B88E2F] w-[222px] h-[74px] font-poppins font-bold text-[16px] leading-[100%] tracking-[0px] uppercase text-[#FFFFFF]">
          BUY NOW
        </button>
      </div>
    </div>
  </div>
 

  </>
  
  )
}

export default Hero
