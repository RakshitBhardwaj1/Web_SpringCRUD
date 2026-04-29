import React, { useState } from "react";
import { addStudent } from "../services/api";

function AddStudent({ refresh }) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudent(student);
    refresh();
    setStudent({ name: "", email: "", course: "" });
  };

  return (
    <div className="card">
      <h2 className="card-title">Add Student</h2>
      <p className="card-subtitle">Create a new record with official details.</p>
      <form onSubmit={handleSubmit} className="form-grid">
        <label className="field">
          <span className="field-label">Full Name</span>
          <input
            className="input"
            name="name"
            placeholder="e.g., Priya Sharma"
            value={student.name}
            onChange={handleChange}
          />
        </label>
        <label className="field">
          <span className="field-label">Email</span>
          <input
            className="input"
            name="email"
            placeholder="name@university.edu"
            value={student.email}
            onChange={handleChange}
          />
        </label>
        <label className="field">
          <span className="field-label">Course</span>
          <input
            className="input"
            name="course"
            placeholder="BSc Computer Science"
            value={student.course}
            onChange={handleChange}
          />
        </label>
        <div className="form-actions">
          <button className="btn btn-primary" type="submit">Add Student</button>
        </div>
      </form>
    </div>
  );
}

export default AddStudent;