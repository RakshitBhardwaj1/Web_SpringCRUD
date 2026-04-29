import React, { useState } from "react";
import { updateStudent } from "../services/api";

function UpdateStudent({ student, refresh, cancel }) {
  const [data, setData] = useState(student);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateStudent(student.id, data);
    refresh();
    cancel();
  };

  return (
    <div className="card card-compact">
      <div className="card-header">
        <h3 className="card-title">Edit Student</h3>
        <button className="btn btn-ghost" type="button" onClick={cancel}>Close</button>
      </div>
      <form onSubmit={handleUpdate} className="form-grid form-grid-compact">
        <label className="field">
          <span className="field-label">Full Name</span>
          <input className="input" name="name" value={data.name} onChange={handleChange} />
        </label>
        <label className="field">
          <span className="field-label">Email</span>
          <input className="input" name="email" value={data.email} onChange={handleChange} />
        </label>
        <label className="field">
          <span className="field-label">Course</span>
          <input className="input" name="course" value={data.course} onChange={handleChange} />
        </label>
        <div className="form-actions">
          <button className="btn btn-primary" type="submit">Update</button>
          <button className="btn btn-ghost" type="button" onClick={cancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateStudent;