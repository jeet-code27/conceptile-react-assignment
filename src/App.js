import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfileDetails from "./components/ProfileDetails";
import ProfileEdit from "./components/ProfileEdit";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<ProfileDetails />} />
          <Route path="/edit" element={<ProfileEdit />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
