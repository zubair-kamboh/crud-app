import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
const AddUser = () => {
  let history = useHistory();
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

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

    await fetch("http://localhost:5000/users", {
      method: "POST",
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
      <h1 className="text-info text-center my-5">Add a User</h1>
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

        <Button type="submit" variant="contained" color="primary">
          Add User
        </Button>
      </form>
    </div>
  );
};

export default AddUser;
