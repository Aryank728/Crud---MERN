import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null); // State to store error

  useEffect(() => {
    axios.get("http://localhost:3001") 
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => {
        setError(err.message); 
      });
  }, []);

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res => {console.log(res)
            window.location.reload()
        })
        .catch(errr => console.log(errr))
    }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">
          Add +
        </Link>
        {error ? ( // Display an error message if there's an error
          <div className="alert alert-danger mt-3">{error}</div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <Link to={`/update/${user._id}`} className="btn btn-success">
                      Update
                    </Link>
                    <button className="btn btn-danger" onClick={(e) => handleDelete(user._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Users;
