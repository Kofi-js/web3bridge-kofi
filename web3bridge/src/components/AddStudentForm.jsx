import React, { useState } from "react";

const AddStudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [graduationYear, setGraduationYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent({ name, class: className, graduationYear: Number(graduationYear) });
    setName("");
    setClassName("");
    setGraduationYear("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Student</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Class"
        value={className}
        onChange={(e) => setClassName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Graduation Year"
        value={graduationYear}
        onChange={(e) => setGraduationYear(e.target.value)}
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudentForm;
