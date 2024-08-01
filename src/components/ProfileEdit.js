import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateStudentDataRequest } from "../store/studentSlice";
import {
  FaUser,
  FaGraduationCap,
  FaBook,
  FaPlus,
  FaTrash,
  FaSave,
  FaTimes,
} from "react-icons/fa";

const ProfileEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { studentData, loading, error } = useSelector((state) => state.student);
  const [formData, setFormData] = useState(studentData);

  useEffect(() => {
    if (studentData) {
      setFormData(studentData);
    }
  }, [studentData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEducationChange = (index, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      educationHistory: prevData.educationHistory.map((edu, i) =>
        i === index ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  const handleCourseChange = (index, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      enrolledCourses: prevData.enrolledCourses.map((course, i) =>
        i === index ? { ...course, [field]: value } : course
      ),
    }));
  };

  const addEducation = () => {
    setFormData((prevData) => ({
      ...prevData,
      educationHistory: [
        ...prevData.educationHistory,
        { institution: "", degree: "", years: "" },
      ],
    }));
  };

  const removeEducation = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      educationHistory: prevData.educationHistory.filter((_, i) => i !== index),
    }));
  };

  const addCourse = () => {
    setFormData((prevData) => ({
      ...prevData,
      enrolledCourses: [
        ...prevData.enrolledCourses,
        { name: "", instructor: "", duration: "" },
      ],
    }));
  };

  const removeCourse = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      enrolledCourses: prevData.enrolledCourses.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateStudentDataRequest(formData));
    navigate("/");
  };

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
  if (!formData) return null;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-blue-600 p-4 sm:p-6">
            <h1 className="text-3xl font-bold text-white">
              Edit Student Profile
            </h1>
          </div>

          <div className="p-4 sm:p-6 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                <FaUser className="mr-2 text-blue-600" /> Personal Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                <FaGraduationCap className="mr-2 text-blue-600" /> Educational
                History
              </h2>
              {formData.educationHistory.map((edu, index) => (
                <div key={index} className="mb-4 p-4 border rounded bg-gray-50">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Institution
                      </label>
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) =>
                          handleEducationChange(
                            index,
                            "institution",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Degree
                      </label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) =>
                          handleEducationChange(index, "degree", e.target.value)
                        }
                        className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Years
                      </label>
                      <input
                        type="text"
                        value={edu.years}
                        onChange={(e) =>
                          handleEducationChange(index, "years", e.target.value)
                        }
                        className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeEducation(index)}
                    className="mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded flex items-center transition duration-300">
                    <FaTrash className="mr-2" /> Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addEducation}
                className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded flex items-center transition duration-300">
                <FaPlus className="mr-2" /> Add Education
              </button>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                <FaBook className="mr-2 text-blue-600" /> Enrolled Courses
              </h2>
              {formData.enrolledCourses.map((course, index) => (
                <div key={index} className="mb-4 p-4 border rounded bg-gray-50">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Course Name
                      </label>
                      <input
                        type="text"
                        value={course.name}
                        onChange={(e) =>
                          handleCourseChange(index, "name", e.target.value)
                        }
                        className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Instructor
                      </label>
                      <input
                        type="text"
                        value={course.instructor}
                        onChange={(e) =>
                          handleCourseChange(
                            index,
                            "instructor",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Duration
                      </label>
                      <input
                        type="text"
                        value={course.duration}
                        onChange={(e) =>
                          handleCourseChange(index, "duration", e.target.value)
                        }
                        className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeCourse(index)}
                    className="mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded flex items-center transition duration-300">
                    <FaTrash className="mr-2" /> Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addCourse}
                className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded flex items-center transition duration-300">
                <FaPlus className="mr-2" /> Add Course
              </button>
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="submit"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
              <FaSave className="mr-2" /> Save Changes
            </button>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              <FaTimes className="mr-2" /> Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  
};

export default ProfileEdit;
