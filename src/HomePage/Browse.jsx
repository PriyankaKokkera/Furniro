

import dining from "../assets/Mask Group.png";
import living from "../assets/Image-living room.png";
import bedroom from "../assets/Mask Group (1).png";

const Browse = () => {
  return (
    <div className="mt-[56px] px-4 md:px-0 mx-auto max-w-[1183px] w-full ">
      {/* Title Section */}
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-[559px] text-center">
          <p className="font-poppins font-bold lg:text-[32px] leading-[100%] text-[#333333] mb-2 text-[32px] md:text-[25px]">
            Browse The Range
          </p>
          <p className="font-poppins font-normal lg:text-[20px] leading-[100%] text-[#666666] text-[20px] md:text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      
      <div className="flex flex-wrap justify-center gap-[20px] lg:mt-[62px] mt-[62px] md:mt-[26px]">
       
        <div className="lg:w-[381px] lg:h-[480px] flex flex-col items-center sm:w-full md:w-[48%] md:h-[250px] w-[150px] mt-[45px] lg::mt-[35px] md:mt-[1px] ">
          <img src={dining} alt="Dining" className="w-full h-full object-cover lg:rounded-none md:rounded-3xl" />
          <p className="font-poppins font-semibold lg:text-[24px] text-center text-[#333333] mt-[30px] sm:mt-4 md:mt-2 text-[24px] md:text-[20px] lg:ml-[0px] md:ml-[-120px] ">
            Dining
          </p>
        </div>

     
        <div className="lg:w-[381px] lg:h-[480px] flex flex-col items-center sm:w-full md:w-[48%] w-[150px]  md:h-[250px] sm:mt-[45px]  mt-[52px]  lg::mt-[35px] md:mt-[1px]">
          <img src={living} alt="Living" className="w-full h-full object-cover lg:rounded-none md:rounded-3xl" />
          <p className="font-poppins font-semibold lg:text-[24px] text-center text-[#333333] mt-[30px] sm:mt-4 md:mt-2 text-[24px] md:text-[20px] lg:ml-[0px] md:ml-[70px]">
            Living
          </p>
        </div>

        
        <div className="lg:w-[381px] lg:h-[480px] flex flex-col items-center sm:w-full md:w-[48%] w-[150px] md:h-[250px] sm:mt-[45px]  lg::mt-[35px] md:mt-[1px]">
          <img src={bedroom} alt="Bedroom" className="w-full h-full object-cover lg:rounded-none md:rounded-3xl" />
          <p className="font-poppins font-semibold lg:text-[24px] text-center text-[#333333] mt-[30px] sm:mt-4 md:mt-2 text-[24px] md:text-[20px] ">
            Bedroom
          </p>
        </div>
      </div>
    </div>
  );
};

export default Browse;
