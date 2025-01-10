import img2 from "../assets/Img2.jpg";

const Section = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 p-6 md:p-12 bg-black">

      <div className="text-left flex-1 flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 ">
          What will u learn?
        </h2>
        <ul className="list-disc list-inside space-y-3 ">
          <li>What are Frequency</li>
          <li>Using DAW</li>
          <li>Vocals processing</li>
          <li>Mixing</li>
          <li>Mixing Console</li>
          <li>Mastering</li>
        </ul>
      </div>


      <div className="flex-1 flex justify-center items-center">
        <img
          src={img2}
          alt="Description of the image"
          className="w-full max-w-md md:max-w-lg h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Section;
