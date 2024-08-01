import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchStudentDataRequest } from "../store/studentSlice";
import { FaUser, FaGraduationCap, FaBook, FaEdit } from "react-icons/fa";

const ProfileDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { studentData, loading, error } = useSelector((state) => state.student);

  useEffect(() => {
    dispatch(fetchStudentDataRequest());
  }, [dispatch]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center h-screen text-xl text-red-500">
        {error}
      </div>
    );
  if (!studentData) return null;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-blue-600 p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-white">Student Profile</h1>
              <button
                onClick={() => navigate("/edit")}
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-2 px-4 rounded-full flex items-center transition duration-300">
                <FaEdit className="mr-2" /> Edit Profile
              </button>
            </div>
          </div>

          <div className="p-4 sm:p-6">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                <FaUser className="mr-2 text-blue-600" /> Personal Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Name</p>
                  <p className="font-semibold text-gray-800">
                    {studentData.name}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Age</p>
                  <p className="font-semibold text-gray-800">
                    {studentData.age}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold text-gray-800">
                    {studentData.email}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Contact Number</p>
                  <p className="font-semibold text-gray-800">
                    {studentData.contactNumber}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                <FaGraduationCap className="mr-2 text-blue-600" /> Educational
                History
              </h2>
              <div className="space-y-4">
                {studentData.educationHistory.map((edu, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-800">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600">{edu.degree}</p>
                    <p className="text-sm text-gray-500">{edu.years}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                <FaBook className="mr-2 text-blue-600" /> Enrolled Courses
              </h2>
              <div className="space-y-4">
                {studentData.enrolledCourses.map((course, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-800">{course.name}</p>
                    <p className="text-gray-600">
                      Instructor: {course.instructor}
                    </p>
                    <p className="text-sm text-gray-500">
                      Duration: {course.duration}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
