import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      username,
      name,
      email,
      phone,
      address : {
        street,
        city,
        zipcode,
        company,
      },
    };

    axios
      .post("http://localhost:8080/data", payload)
      .then(() => {
        alert("User Added Successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to Add User");
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f2f2f2",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "420px",
          padding: "25px",
          border: "2px solid #000",
          borderRadius: "10px",
          backgroundColor: "#fff",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Add New User
        </h2>

        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td>Username</td>
              <td>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td>Email</td>
              <td>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td>Phone</td>
              <td>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td>Street</td>
              <td>
                <input
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td>City</td>
              <td>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td>Zipcode</td>
              <td>
                <input
                  type="text"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td>Company</td>
              <td>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td colSpan="2" style={{ paddingTop: "20px" }}>
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#0d6efd",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Create;