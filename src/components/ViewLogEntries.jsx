import { useState } from "react";

const ViewLogEntries = () => {
  const [logs] = useState([]);

  return (
    <div className="container mt-4">

      <div className="card shadow">

        <div className="card-header bg-success text-white">
          <h3 className="text-center">
            View Lab Log Entries
          </h3>
        </div>

        <div className="card-body">

          {logs.length === 0 ? (
            <div className="alert alert-warning text-center">
              No Log Entries Available
            </div>
          ) : (
            <div className="table-responsive">

              <table className="table table-bordered table-striped table-hover">

                <thead className="table-dark">

                  <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Semester</th>
                    <th>Course</th>
                    <th>System No</th>
                    <th>Login</th>
                    <th>Logout</th>
                    <th>Date</th>
                  </tr>

                </thead>

                <tbody>

                  {logs.map((log, index) => (

                    <tr key={index}>

                      <td>{log.name}</td>
                      <td>{log.dept}</td>
                      <td>{log.sem}</td>
                      <td>{log.course}</td>
                      <td>{log.systemNo}</td>
                      <td>{log.login}</td>
                      <td>{log.logout}</td>
                      <td>{log.date}</td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default ViewLogEntries;