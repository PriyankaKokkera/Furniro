

import rectangle from "../assets/Rectangle 24.png";
import arrow from "../assets/Vector 1.png";
import rect from "../assets/Rectangle 25.png";
import rect2 from "../assets/Rectangle 26.png";

const ExploreMore = () => {
  return (
    <div className="lg:w-full lg:h-[670px] lg:mt-[69px] bg-[#FCF8F3] relative md:[50%] md:h-[1200px] lg:ml-[102px]  h-[885px] flex flex-col lgpy-[56px] md:mt-[76px] md:ml-[0px] md:w-[98%] sm:ml-[0px] sm:w-[98%] overflow-hidden ml-[12px] mt-[12px] w-[320px]">
      {/* first div started */}
      <div className="lg:w-[422px] lg:h-[151px] absolute lg:top-[223px] lg:left-[100px] flex flex-col gap-[7px]  md:top-[130px] md:left-[5px] lg:[70%] overflow-hidden md:w-[300px] sm:top-[130px] sm:left-[5px]  sm:w-[250px] w-[320px]">
        <h1 className="font-poppins font-bold lg:text-[40px] leading-[120%] tracking-[0%] text-[#3A3A3A] md:text-[25px] text-[25px]">
          50+ Beautiful Rooms Inspiration
        </h1>
        <p className="font-poppins font-medium lg:text-[16px] leading-[150%] tracking-[0%] text-[#616161] text-[12px]">
          Our designer already made a lot of beautiful prototypes of rooms that inspire you.
        </p>
      </div>
      {/* first div completed */}

      {/* second div started */}
      <div className="absolute lg:top-[399px] lg:left-[100px] md:top-[320px] md:left-[5px] sm:top-[410px] sm:left-[12px] top-[120px]">
        <button className="w-[175px] h-[48px] text-[#FFFFFF] bg-[#B88E2F] font-poppins font-semibold text-[16px] leading-[150%] tracking-[0%]">
          Explore More
        </button>
      </div>
      {/* second div ended */}

      {/* third div started */}
      <div className="absolute lg:top-[44px] lg:left-[564px] w-[404px] h-[582px] x md:top-[30px] md:left-[320px] sm:left-[280px] sm:top-[12px] top-[204px]">
        <div className="relative top-[0px]">
          <img src={rectangle} alt="" className="lg:w-[404px] lg:h-[582px] w-[320px] h-[320px]" />
          {/* text box */}
          <div className="absolute lg:top-[428px] lg:left-[24px] lg:w-[217px] lg:h-[130px] backdrop-blur-sm bg-[#FFFFFFB8] lg:px-[32px] lg:py-[32px] md:top-[452px] sm:top-[40px] sm:left-[12px] top-[230px] w-[160px] px-[20px] py-[20px]">
            <div className="w-[142px] h-[24px] flex items-center gap-[8px]">
              <span className="font-poppins font-medium lg:text-[16px] leading-[150%] tracking-[0%] text-[#616161] text-[12px]">
                01
              </span>
              <div className="w-[27px] border border-[#616161]"></div>
              <span className="font-poppins font-medium lg:text-[16px] leading-[150%] tracking-[0%] text-[#616161] text-[12px]">
                Bed Room
              </span>
            </div>
            <span className="font-poppins font-semibold lg:text-[28px] leading-[120%] tracking-[0%] text-[#3A3A3A] ">
              Inner Peace
            </span>
          </div>
          {/* text box */}
          <button className="bg-[#B88E2F] absolute lg:top-[510px] lg:left-[241px] lg:w-[48px] lg:h-[48px] lg:px-[12px] lg:py-[12px] md:left-[222px] md:top-[525px] sm:left-[222px] sm:top-[532px] w-[30px] h-[30px] top-[286px] left-[160px]"  >
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>
      {/* third div completed */}

      {/* fourth div started */}
      <div className="lg:w-[372px] lg:h-[486px] absolute lg:top-[44px] lg:left-[992px] md:top-[620px] md:left-[120px] sm:left-[120px] sm:top-[620px] top-[540px]">
        <img src={rect} alt="" className="w-[250px] h-[300px] lg:w-full lg:h-full"/>
      </div>
      <div className="absolute lg:top-[578px] lg:left-[1039px] lg:w-[120px] lg:h-[27px] flex items-center lg:gap-[20px] md:top-[1112px] md:left-[375px]  sm:top-[1125px] sm:left-[480px] top-[850px] left-[180px] gap-[12px]">
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

      <div className="absolute lg:top-[311px] lg:left-[1337px] shadow-[0px_4px_14px_1px_#00000029] rounded-full lg:w-[48px] lg:h-[48px] flex items-center justify-center bg-white z-10 md:top-[850px] md:left-[450px] sm:top-[850px] sm:left-[470px] top-[620px] left-[238px] w-[24px] h-[24px]">
        <div className="relative w-[14px] h-[14px] border-r-[1.8px] border-t-[1.8px] border-[#B88E2F] rotate-45 z-20"></div>
      </div>

      <div className="absolute lg:left-[1388px] lg:top-[44px] lg:w-[372px] lg:h-[486px] md:top-[620px] md:left-[475px] sm:left-[510px] sm:top-[620px] top-[540px] left-[260px]">
        <img src={rect2} alt=""className="h-[300px] lg:h-full"/>
      </div>
      {/* fourth div completed */}
    </div>
  );
};

export default ExploreMore;
