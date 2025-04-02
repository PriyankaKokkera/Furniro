
import backgroundImage from "../assets/scandinavian-interior-mockup-wall-decal-background 1.png";

const Hero = () => {
  return (
    <div className="relative w-full h-[716px] md:h-screen overflow-hidden">
     
      <img
        src={backgroundImage}
        alt="sofa"
        className="absolute inset-0 w-full h-full object-cover"
      />

      
      <div className="absolute bg-[#FFF3E3] rounded-[10px] shadow-lg 
                      lg:px-[39px] lg:py-[62px] lg:w-[643px] lg:h-[443px] px-[4px] py-[20px]  w-[300px] h-[215px]
                      left-[50px] top-[103px] 
                      lg:left-[50%] lg:top-[20%] lg:-translate-x-1/2 
                       md:w-[250px] md:h-[250px] md:p-4  md:left-[480px] md:top-[100px]
                      sm:w-[90%] sm:left-[5%] sm:top-[15%] sm:p-6">
        
        <div className="w-full">
          <span className="font-poppins font-semibold text-[16px] tracking-[3px] text-[#333333]">
            New Arrival
          </span>

          <div className="lg:mt-2 mt-[0px]">
            <p className="font-poppins font-bold lg:text-[52px] lg:leading-[65px] text-[#B88E2F] text-[25px] leading-[35px]">
              Discover Our
            </p>
            <p className="font-poppins font-bold lg:text-[52px] lg:leading-[65px] text-[#B88E2F] text-[25px] leading-[35px]">
              New Collection
            </p>
          </div>

          <p className="lg:mt-4 font-poppins font-medium lg:text-[18px] text-[#333] text-[16px] mt-[2px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere ut perferendis nulla nostrum.
          </p>

          {/* <button className="lg:mt-6 lg:w-[222px] lg:py-[25px] bg-[#B88E2F] w-[100px] h-[20px] lg:px-[22px]
                             font-poppins font-bold lg:text-[26px] uppercase 
                             text-white rounded-md shadow-md text-[12px]">
            BUY NOW
          </button> */}
          <button className="lg:mt-8 sm:mt-6 lg:px-8 sm:px-6 md:px-6 lg:py-6 sm:py-3 md:py-1 bg-[#B88E2F] text-white mt-[2px] px-[2px]
//                           font-poppins font-bold text-[12px] sm:text-[14px] md:text-[15px] 
//                           uppercase rounded-md shadow-md hover:bg-[#A07C29] transition absolute md:top-[185px] lg:top-[300px]">
          BUY NOW
        </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
