const STORAGE_KEY = "studentData";

const initialData = {
  name: "Jeetendra Singh Rathore",
  age: 20,
  email: "jeetendrasinghrathore1@gmail.com",
  contactNumber: "7878253451",
  educationHistory: [
    {
      institution: "WS Cube Tech",
      degree: "MERN stack developer",
      years: "2023-2024",
    },
  ],
  enrolledCourses: [
    {
      name: "Introduction to WEB rtc",
      instructor: "Shakti",
      duration: "3 Months",
    },
  ],
};

export const fetchStudentData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = localStorage.getItem(STORAGE_KEY);
      resolve(data ? JSON.parse(data) : initialData);
    }, 500);
  });
};

export const updateStudentData = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      resolve(data);
    }, 500);
  });
};
