import React from "react";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-badge">Registrar Console</div>
        <h1 className="app-title">Student Management System</h1>
        <p className="app-subtitle">Manage records with a clean, formal interface.</p>
      </header>

      <main className="content-grid">
        <section className="content-col">
          <AddStudent refresh={() => window.location.reload()} />
        </section>
        <section className="content-col">
          <StudentList />
        </section>
      </main>
    </div>
  );
}

export default App;