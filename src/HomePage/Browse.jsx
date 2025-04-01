

import dining from "../assets/Mask Group.png";
import living from "../assets/Image-living room.png";
import bedroom from "../assets/Mask Group (1).png";

const Browse = () => {
  return (
    <div className="mt-[56px] px-4 md:px-0 mx-auto max-w-[1183px] w-full">
      {/* Title Section */}
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-[559px] text-center">
          <p className="font-poppins font-bold text-[32px] leading-[100%] text-[#333333] mb-2">
            Browse The Range
          </p>
          <p className="font-poppins font-normal text-[20px] leading-[100%] text-[#666666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      
      <div className="flex flex-wrap justify-center gap-[20px] mt-[62px]">
       
        <div className="w-[381px] h-[480px] flex flex-col items-center sm:w-full md:w-[48%] lg:w-[32%] sm:mt-[45px] md:mt-[35px]">
          <img src={dining} alt="Dining" className="w-full h-full object-cover" />
          <p className="font-poppins font-semibold text-[24px] text-center text-[#333333] mt-[30px] sm:mt-4 md:mt-6">
            Dining
          </p>
        </div>

     
        <div className="w-[381px] h-[480px] flex flex-col items-center sm:w-full md:w-[48%] lg:w-[32%] sm:mt-[45px] md:mt-[35px]">
          <img src={living} alt="Living" className="w-full h-full object-cover" />
          <p className="font-poppins font-semibold text-[24px] text-center text-[#333333] mt-[30px] sm:mt-4 md:mt-6">
            Living
          </p>
        </div>

        
        <div className="w-[381px] h-[480px] flex flex-col items-center sm:w-full md:w-[48%] lg:w-[32%] sm:mt-[45px] md:mt-[35px]">
          <img src={bedroom} alt="Bedroom" className="w-full h-full object-cover" />
          <p className="font-poppins font-semibold text-[24px] text-center text-[#333333] mt-[30px] sm:mt-4 md:mt-6">
            Bedroom
          </p>
        </div>
      </div>
    </div>
  );
};

export default Browse;
