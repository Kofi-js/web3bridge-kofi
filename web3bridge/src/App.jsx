import React, { useState } from "react";
import StudentList from "./components/StudentList";
import ClassList from "./components/ClassList";
import Filter from "./components/Filter";
import AddStudentForm from "./components/AddStudentForm";
import Dashboard from "./components/Dashboard";

function App() {
  const [students, setStudents] = useState([]);
  const [filterYear, setFilterYear] = useState("");

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="App">
      <h1>School Database</h1>
      <AddStudentForm onAddStudent={addStudent} />
      <Filter onFilterChange={setFilterYear} />
      <StudentList students={students} filterYear={filterYear} />
      <ClassList students={students} />
      <Dashboard students={students} />
    </div>
  );
}

export default App;
