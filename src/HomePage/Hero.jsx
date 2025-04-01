
import backgroundImage from "../assets/scandinavian-interior-mockup-wall-decal-background 1.png";

const Hero = () => {
  return (
    <div className="relative w-full h-[716px] md:h-screen overflow-hidden">
      {/* Full-Screen Background Image */}
      <img
        src={backgroundImage}
        alt="sofa"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Centered Content Box (Keeps Default Design, Adjusts for Small Screens) */}
      <div className="absolute bg-[#FFF3E3] rounded-[10px] shadow-lg 
                      px-[39px] py-[62px] w-[643px] h-[443px] 
                      left-[780px] top-[153px] 
                      lg:left-[50%] lg:top-[20%] lg:-translate-x-1/2 
                      md:w-[80%] md:max-w-[643px] md:h-auto md:p-8 
                      sm:w-[90%] sm:left-[5%] sm:top-[15%] sm:p-6">
        
        <div className="w-full">
          <span className="font-poppins font-semibold text-[16px] tracking-[3px] text-[#333333]">
            New Arrival
          </span>

          <div className="mt-2">
            <p className="font-poppins font-bold text-[52px] leading-[65px] text-[#B88E2F]">
              Discover Our
            </p>
            <p className="font-poppins font-bold text-[52px] leading-[65px] text-[#B88E2F]">
              New Collection
            </p>
          </div>

          <p className="mt-4 font-poppins font-medium text-[18px] text-[#333]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere ut perferendis nulla nostrum.
          </p>

          <button className="mt-6 w-[222px] py-[25px] bg-[#B88E2F] 
                             font-poppins font-bold text-[16px] uppercase 
                             text-white rounded-md shadow-md">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
