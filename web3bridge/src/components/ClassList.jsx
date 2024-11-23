import React from "react";

const ClassList = ({ students }) => {
  const classes = Array.from(new Set(students.map((student) => student.class)));

  return (
    <div>
      <h2>Classes</h2>
      {classes.map((className) => (
        <div key={className}>
          <h3>Class: {className}</h3>
          <ul>
            {students
              .filter((student) => student.class === className)
              .map((student, index) => (
                <li key={index}>
                  {student.name} - Graduation Year: {student.graduationYear}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ClassList;
