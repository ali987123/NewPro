
import { Students } from "../Data";

const Students1 = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center my-8">Students</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {Students.map((student, id) => (
          <div
            key={id}
            className="flex flex-row items-start p-4 shadow-md "
          >
            <img
              src={student.Profile_Image}
              alt={student.name}
              className="w-28 h-28 rounded-full object-cover mb-4"
            />
            <h5 className=" text-lg font-medium text-white p-4">{student.name} {student.description}</h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default Students1;
