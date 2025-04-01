
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
    <div className="w-full h-auto mt-[62px] px-[150px] sm:px-8 lg:px-12 md:px-[0px]">

      {/* Title Section */}
      <div className="w-full mb-8 text-center">
        <p className="font-[Poppins] font-semibold text-[20px] leading-[150%] tracking-[0%] text-[#616161]">
          Share your setup with
        </p>
        <p className="font-[Poppins] font-bold text-[40px] leading-[120%] tracking-[0%] text-[#3A3A3A]">
          #FuniroFurniture
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full  relative ">

        {/* First Image Row */}
        <div className="flex flex-wrap lg:gap-[76px] justify-between sm:justify-start md:gap-[6px]">
          <img src={rect36} alt="" className="lg:w-[300px] sm:w-[174px] h-auto sm:h-[382px] md:w-[120px]" />
          <img src={rect38} alt="" className="lg:w-[500px]l sm:w-[451px] h-auto sm:h-[312px] mt-[56px] md:w-[420px]" />
        </div>

        {/* Second Image Row */}
        <div className="flex flex-wrap lg:gap-[66px] mt-[16px] justify-center sm:justify-start md:gap-[6px]">
          <img src={rect37} alt="" className="lg:w-[500px] sm:w-[282px] h-auto sm:h-[242px] md:w-[220px]" />
          <img src={rect39} alt="" className="lg:w-[500px] sm:w-[344px] h-auto sm:h-[242px] md:w-[320px] sm:mt-[12px]" />
        </div>

        {/* Absolute Positioned Image */}
        <div className="absolute lg:left-[55%] transform -translate-x-[-32%] lg:top-[2px] lg: w-[500px] sm:left-[80px] sm:top-[20px] md-[80%] md:left-[482px] md:w-[220px] ">
          <img src={rect40} alt="" className="w-full sm:w-[295px] h-auto sm:h-[392px]" />
        </div>

        {/* Second Set of Images */}
       
        <div className="mt-[15px] flex flex-wrap justify-center sm:justify-start gap-[56px] sm:left-[1000px]">
  
  {/* First set of images */}
  <div className="flex flex-wrap lg:gap-[56px] justify-center sm:justify-start md:gap-[6px]">
    <img src={rect45} alt="" className="w-full sm:w-[425px] h-auto sm:h-[433px]" />
    <img src={rect43} alt="" className="w-full sm:w-[290px] h-auto sm:h-[348px] lg:mt-[56px] sm:mt-[-2px]" />
  </div>

  {/* Second set of images */}
  <div className="flex flex-wrap lg:gap-[56px]  justify-center sm:justify-start lg:mt-[62px] md:gap-[26px] md:mt-[2px] sm:mt-[-25px]">
    <img src={rect41} alt="" className="w-full sm:w-[178px] h-auto sm:h-[196px] mt-[11px] md:mt-[0px]" />
    <img src={rect44} alt="" className="w-full sm:w-[258px] h-auto sm:h-[196px] mt-[59px] md:mt-[0px] sm:mt-[0px]" />
  </div>
  
</div>


      </div>
    </div>
  );
};

export default Furniro1;
