import { FaUserGraduate, FaFolder } from 'react-icons/fa'; // Importing student and folder icons

const Section2 = () => {
  return (
    <section className="bg-black text-white py-10">
      <div className=" bg-black text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
          Our Key Features
        </h2>
        <div className="flex justify-between space-x-8">

          <div className="flex flex-col items-center text-center">
            <FaUserGraduate className="text-6xl text-blue-500 mb-4" />
            <p className="text-lg text-white">Highly Experienced Students</p>
          </div>


          <div className="flex flex-col items-center text-center">
            <FaFolder className="text-6xl text-green-500 mb-4" />
            <p className="text-lg text-white">Well-Organized Materials</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
