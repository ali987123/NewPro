// import image from "../assets/Img1.avif";
// import Navbar from "./Navbar";
// const Hero = () => {
//   return (
//     <>
//       <div className="relative">
//         <img
//           className="w-full h-[calc(100vh-4rem)] sm:h-96 md:h-[75vh] lg:h-screen bg-cover object-cover "
//           src={image}
//           alt="Hero Image"
//         />
//       <div className="absolute bottom-4 right-4 bg-white/70 backdrop-blur-md border border-white p-4 rounded-lg shadow-lg">
//   <h2 className="text-lg font-bold text-gray-800 pb-20">
//     Sound Design Masterclass
//   </h2>
//   <p className="text-sm text-gray-600"></p>
// </div>

//       <div className="flex items-center">
//         <Navbar/>
//       </div>
//     </>
//   );
// };

// export default Hero;

import image from "../assets/Img1.avif";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <div className="relative">

        <img
          className="w-full h-[calc(100vh-4rem)] sm:h-96 md:h-[75vh] lg:h-screen bg-cover object-cover"
          src={image}
          alt="Hero Image"
        />

        
        <div className="absolute bottom-4 right-4 bg-white/70 backdrop-blur-md border border-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold text-gray-800 pb-4">
            Sound Design Masterclass
          </h2>
          <p className="text-sm text-black font-semibold  ">
            Learn the art of design
          </p>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
      </div>
    </>
  );
};

export default Hero;

