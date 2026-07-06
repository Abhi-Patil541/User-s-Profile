import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/data/${id}`)
      .then((res) => {
        const data = res.data;

        setUserName(data.username);
        setName(data.name);
        setEmail(data.email);
        setPhone(data.phone);
        setStreet(data.street);
        setCity(data.city);
        setZipcode(data.zipcode);
        setCompany(data.company);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      username,
      name,
      email,
      phone,
      street,
      city,
      zipcode,
      company,
    };

    axios
      .put(`http://localhost:8080/data/${id}`, payload)
      .then(() => {
        alert("User Updated Successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          border: "2px solid black",
          padding: "25px",
          borderRadius: "10px",
          width: "400px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Edit User</h2>

        <table>
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
              <td colSpan="2" style={{ textAlign: "center", paddingTop: "15px" }}>
                <button type="submit">Update</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Edit;