import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  // Fetch User
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`http://localhost:5000/users/${id}`);
      const data = await res.json();
      console.log(data);
      setValues(data);
    };
    fetchUser();
  }, []);

  // OnINputChange Function
  const onInputChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  // On Submiting Form
  const onSubmit = async (e) => {
    e.preventDefault();
    // form validation
    if (
      !values.name ||
      !values.email ||
      !values.phone ||
      !values.website ||
      !values.username
    ) {
      alert("Please fill in the Form");
      return;
    }

    await fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(values),
    });

    setValues({ name: "", email: "", phone: "", username: "", website: "" });

    history.push("/");
  };

  return (
    <div className="container w-50 mx-auto">
      <h1 className="text-secondery text-center my-5">Edit a User</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={onInputChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Name"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={onInputChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Username"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={onInputChange}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Email Address"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="phone"
            value={values.phone}
            onChange={onInputChange}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Phone Number"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="website"
            value={values.website}
            onChange={onInputChange}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Website"
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Edit User
        </button>
      </form>
    </div>
  );
};

export default EditUser;
