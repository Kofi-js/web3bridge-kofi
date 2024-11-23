import React from "react";

const StudentList = ({ students, filterYear }) => {
  const filteredStudents = filterYear
    ? students.filter((student) => student.graduationYear === filterYear)
    : students;

  return (
    <div>
      <h2>Students</h2>
      <ul>
        {filteredStudents.map((student, index) => (
          <li key={index}>
            {student.name} - Class: {student.class} - Graduation Year:{" "}
            {student.graduationYear}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
