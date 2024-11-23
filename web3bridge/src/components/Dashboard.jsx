import React from "react";

const Dashboard = ({ students }) => {
  const currentYear = new Date().getFullYear();
  const graduates = students.filter(
    (student) => student.graduationYear < currentYear
  );
  const currentStudents = students.filter(
    (student) => student.graduationYear >= currentYear
  );

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Students: {students.length}</p>
      <p>Graduates: {graduates.length}</p>
      <p>Current Students: {currentStudents.length}</p>
    </div>
  );
};

export default Dashboard;
