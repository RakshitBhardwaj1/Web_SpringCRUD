import React, { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../services/api";
import UpdateStudent from "./UpdateStudent";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetchStudents = async () => {
    const res = await getStudents();
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <div>
          <h2 className="card-title">Student List</h2>
          <p className="card-subtitle">Review and update enrolled students.</p>
        </div>
        <span className="pill">{students.length} records</span>
      </div>

      {editing && (
        <div className="inline-edit">
          <UpdateStudent student={editing} refresh={fetchStudents} cancel={() => setEditing(null)} />
        </div>
      )}

      <div className="list-table">
        <div className="list-row list-header">
          <div className="list-cell">Name</div>
          <div className="list-cell">Email</div>
          <div className="list-cell">Course</div>
          <div className="list-cell">Actions</div>
        </div>

        {students.length === 0 && (
          <div className="list-empty">No students available yet.</div>
        )}

        {students.map((s) => (
          <div className="list-row" key={s.id}>
            <div className="list-cell">
              <div className="name-cell">{s.name}</div>
            </div>
            <div className="list-cell">
              <div className="muted">{s.email}</div>
            </div>
            <div className="list-cell">
              <div className="course-pill">{s.course}</div>
            </div>
            <div className="list-cell actions">
              <button className="btn btn-ghost" onClick={() => setEditing(s)}>Edit</button>
              <button className="btn btn-danger" onClick={() => deleteStudent(s.id).then(fetchStudents)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentList;