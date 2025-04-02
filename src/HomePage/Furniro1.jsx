
import rect36 from "../assets/2.png";
import rect37 from "../assets/Rectangle 37.png";
import rect38 from "../assets/Rectangle 38.png";
import rect39 from "../assets/Rectangle 39.png";
import rect40 from "../assets/Rectangle 40.png";
import rect41 from "../assets/Rectangle 41.png";
import rect43 from "../assets/Rectangle 43.png";
import rect44 from "../assets/Rectangle 44.png";
import rect45 from "../assets/Rectangle 45.png";

const Furniro1 = () => {
  return (
    <div className="lg:w-full lg:h-full lg:mt-[62px] lg:px-[150px] sm:px-8  md:px-[0px]  overflow-hidden px-[12px]  mt-[62px] md:mt-[22px] md:h-[850px]">

      {/* Title Section */}
      <div className="w-full mb-8 text-center">
        <p className="font-[Poppins] font-semibold lg:text-[20px] leading-[150%] tracking-[0%] text-[#616161] text-[13px] md:text-[20px]">
          Share your setup with
        </p>
        <p className="font-[Poppins] font-bold lg:text-[40px] leading-[120%] tracking-[0%] text-[#3A3A3A] text-[25px] md:text-[40px]">
          #FuniroFurniture
        </p>
      </div>

      {/* Image Section */}
      <div className="lg:w-full lg:h-[1440px] relative  lg:ml-[0px] ml-[12px] h-[820px] ">

        {/* First Image Row */}
        <div className="lg:flex lg:flex-wrap lg:gap-[56px] justify-center sm:justify-start md:gap-[6px]  absloute top-[102px] left-[110px] lg:top-[0px] lg:left-[0px] flex gap-[18px]" >
          <img src={rect36} alt="" className="lg:w-[300px] sm:w-[174px]  sm:h-[382px] md:w-[220px] md:h-[220px] w-[150px] h-[150px] lg:rounded-none md:rounded-2xl" />
          <img src={rect38} alt="" className="lg:w-[500px]l sm:w-[451px]  sm:h-[312px] lg:mt-[56px]  md:h-[220px] w-[150px] h-[150px] md:w-[220px] lg:rounded-none md:rounded-2xl" />
        </div>

        {/* Second Image Row */}
        <div className="lg:flex lg:flex-wrap lg:gap-[66px] mt-[16px] justify-center sm:justify-start md:gap-[6px] absloute top-[102px] left-[110px] lg:top-[0px] lg:left-[0px] flex gap-[18px]">
          <img src={rect37} alt="" className="lg:w-[500px] sm:w-[282px] h-[150px] sm:h-[242px] md:w-[220px] w-[150px] md:h-[220px] lg:mt-[0px] md:mt-[12px] lg:rounded-none md:rounded-2xl" />
          <img src={rect39} alt="" className="lg:w-[500px] sm:w-[344px] h-[150px] sm:h-[242px] md:w-[220px] sm:mt-[12px] w-[150px] md:h-[220px] lg:rounded-none md:rounded-2xl" />
        </div>

        {/* Absolute Positioned Image */}
        <div className="absolute lg:left-[65%] transform -translate-x-[-22%] lg:top-[10px] lg: w-[500px] sm:left-[80px] sm:top-[20px] md-[80%] md:left-[410px]  md:top-[4px] md:w-[220px]  top-[320px] left-[-90px] ">
          <img src={rect40} alt="" className="lg:w-[500px] sm:w-[295px] h-[150px] sm:h-[392px] w-[300px] lg-h-[300px] md:w-[220px] md:h-[220px] lg:rounded-none md:rounded-2xl" />
        </div>

        {/* Second Set of Images */}
       
        <div className="mt-[15px] flex flex-wrap justify-center sm:justify-start gap-[56px] sm:left-[800px] ">
  
  {/* First set of images */}
  <div className="lg:flex lg:flex-wrap lg:gap-[56px] justify-center sm:justify-start md:gap-[6px]  flex mt-[162px] gap-[6px]   absolute lg:top-[500px] lg-h-[500px]  md:top-[323px]">
    <img src={rect45} alt="" className="lg:w-full sm:w-[425px] h-[150px] sm:h-[433px] w-[300px] lg-h-[300px] md:h-[250px] md:w-[220px] lg:rounded-none md:rounded-2xl" />
    <img src={rect43} alt="" className="lg:w-full sm:w-[290px] h-[150px] sm:h-[348px] lg:mt-[56px] sm:mt-[-2px] w-[300px] mt-[1px] lg-h-[300px] md:h-[250px] md:w-[220px] lg:rounded-none md:rounded-2xl" />
  </div>

  {/* Second set of images */}
  <div className="lg:flex lg:flex-wrap lg:gap-[8px]  justify-center sm:justify-start lg:mt-[62px] md:gap-[12px] md:mt-[2px] sm:mt-[-25px] flex  gap-[6px]  absolute top-[650px] lg:top-[600px]  md:top-[246px]   md:left-[460px] lg:left-[700px] md:flex md:flex-col ">
    <img src={rect41} alt="" className="lg:w-full sm:w-[178px] h-[150px] sm:h-[196px] lg:mt-[11px] md:mt-[0px] w-[300px] md:h-[220px] md:w-[220px] lg:rounded-none md:rounded-2xl" />
    <img src={rect44} alt="" className="lg:w-full sm:w-[258px] h-[150px] sm:h-[196px] lg:mt-[59px] md:mt-[0px] sm:mt-[0px] w-[300px] md:h-[250px] md:w-[220px] lg:rounded-none md:rounded-2xl" />
  </div>
  
</div>


      </div>
    </div>
  );
};

export default Furniro1;
