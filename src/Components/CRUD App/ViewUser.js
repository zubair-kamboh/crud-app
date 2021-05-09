import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const ViewUser = (props) => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(`http://localhost:5000/users/${id}`);
      const data = await res.json();
      setUser({
        name: data.name,
        username: data.username,
        email: data.email,
        website: data.website,
        phone: data.phone,
      });
    };
    getUser();
  }, [id]);

  console.log(user);

  return (
    <div className="container">
      <div className="row my-5">
        <h2 className="text-center">User Id: {id}</h2>

        <div className="card mx-auto my-3" style={{ width: "18rem" }}>
          <div className="card-header">{user.name}</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{user.username}</li>
            <li className="list-group-item">{user.email}</li>
            <li className="list-group-item">{user.phone}</li>
            <li className="list-group-item">{user.website}</li>
          </ul>
          <Link className="btn btn-success my-2" to="/">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
