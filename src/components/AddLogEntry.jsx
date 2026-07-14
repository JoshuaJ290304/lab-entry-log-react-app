import { useState } from "react";
import axios from "axios";

const AddLogEntry = () => {
  const [formData, setFormData] = useState({
    name: "",
    dept: "",
    sem: "",
    course: "",
    systemNo: "",
    login: "",
    logout: "",
    date: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/add-log-entry",
        formData
      );

      setMessage(response.data.message || "Log Entry Added Successfully");

      setFormData({
        name: "",
        dept: "",
        sem: "",
        course: "",
        systemNo: "",
        login: "",
        logout: "",
        date: "",
      });

    } catch (error) {
      console.log(error);
      setMessage("Failed to Add Log Entry");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      dept: "",
      sem: "",
      course: "",
      systemNo: "",
      login: "",
      logout: "",
      date: "",
    });

    setMessage("");
  };

  return (
    <div className="container mt-4">

      <div className="card shadow">

        <div className="card-header bg-primary text-white">
          <h3 className="text-center">Add Lab Log Entry</h3>
        </div>

        <div className="card-body">

          {message && (
            <div className="alert alert-info text-center">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label">Student Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Department</label>
                <input
                  type="text"
                  className="form-control"
                  name="dept"
                  value={formData.dept}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Semester</label>
                <input
                  type="text"
                  className="form-control"
                  name="sem"
                  value={formData.sem}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Course</label>
                <input
                  type="text"
                  className="form-control"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">System Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="systemNo"
                  value={formData.systemNo}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Login Time</label>
                <input
                  type="time"
                  className="form-control"
                  name="login"
                  value={formData.login}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Logout Time</label>
                <input
                  type="time"
                  className="form-control"
                  name="logout"
                  value={formData.logout}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="text-center">

              <button
                type="submit"
                className="btn btn-primary me-3"
              >
                Save Entry
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleReset}
              >
                Reset
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
};

export default AddLogEntry;