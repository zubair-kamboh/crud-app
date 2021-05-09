import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Home = () => {
  // user array
  const [users, setUsers] = useState([]);

  // Load User on component load
  useEffect(() => {
    getUsers();
  }, []);

  // Get Users
  const getUsers = async () => {
    const res = await fetch("http://localhost:5000/users");

    const data = await res.json();

    setUsers(data.reverse());
  };

  // Delete User
  const deleteUser = async (id) => {
    await fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    });

    // delete from the UI
    const matchUser = users.filter((user) => {
      return user.id !== id;
    });

    setUsers(matchUser);
  };

  return (
    <div className="container">
      <h1 className="text-center text-secondery my-5">Home Page</h1>

      <div className="container mt-3">
        {users.length > 0 ? (
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr className="table-light" key={user.id}>
                    <th scope="row">{index + 1}</th>
                    <td style={{ width: "30%" }}>{user.name}</td>
                    <td style={{ width: "30%" }}>{user.email}</td>
                    <td style={{ width: "30%" }}>
                      <Link
                        className="btn btn-outline-primary me-3"
                        to={`/users/${user.id}`}
                      >
                        View
                      </Link>
                      <Link
                        className="btn btn-primary me-3"
                        to={`/users/edit/${user.id}`}
                      >
                        Edit
                      </Link>
                      <Link
                        className="btn btn-danger me-3"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h2>No Users to show</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
