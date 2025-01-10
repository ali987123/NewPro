
// import  { useState } from "react";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const NavItems = [
//     { title: "About" },
//     { title: "Course Details" },
//     { title: "blog" },
//     { title: "testimonials" },
//   ];

//   return (
//     <nav className="flex justify-between items-center absolute top-8 bg-black text-white rounded-lg px-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
        
//           <div className="flex-shrink-0">
//             <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-red-500 ">SoundDZign</h1>
//           </div>

//           <div className="hidden md:flex space-x-8">
//             {NavItems.map((item, index) => (
//               <a
//                 key={index}
//                 href="#"
//                 className="hover:text-red-400 transition-colors"
//               >
//                 {item.title}
//               </a>
//             ))}
//           </div>

        
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
//             >
//               {isMobileMenuOpen ? (
//                 <span className="text-xl">✖</span>
//               ) : (
//                 <span className="text-xl">☰</span>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-gray-700">
//           <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
//             {NavItems.map((item, index) => (
//               <a
//                 key={index}
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600 hover:text-blue-400"
//               >
//                 {item.title}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavItems = [
    { title: "About" },
    { title: "Course Details" },
    { title: "Blog" },
    { title: "Testimonials" },
  ];

  return (

      <nav className=" absolute justify-center m-7 ml-16 top-6 bg-black text-white rounded-lg shadow-lg w-[70%] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-red-500">
                SoundDZign
              </h1>
            </div>

            <div className="hidden md:flex space-x-8 ">
              {NavItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-red-400 transition-colors text-sm"
                >
                  {item.title}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              >
                {isMobileMenuOpen ? (
                  <span className="text-lg">✖</span>
                ) : (
                  <span className="text-lg">☰</span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-700">
            <div className="space-y-1 px-4 pt-2 pb-3">
              {NavItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-600 hover:text-blue-400"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
   
  );
};

export default Navbar;
