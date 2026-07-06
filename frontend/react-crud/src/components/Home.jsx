import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Home = () => {
  const [state, setState] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/data");
      setState(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/data/${id}`);
      alert("Data deleted successfully");

      // Refresh UI without reloading page
      setState(state.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center",  color:"red"}}>USER PROFILES</h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <Link to="/Create">
          <Button variant="success">Add New User</Button>
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {state.map((value) => (
          <Card key={value.id} style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src={`https://api.dicebear.com/10.x/lorelei/svg?seed=${value.username}`}
            />

            <Card.Body>
              <Card.Title>{value.name}</Card.Title>

              <Card.Text>
                <strong>Username:</strong> {value.username}
              </Card.Text>

              <Card.Text>
                <strong>Email:</strong> {value.email}
              </Card.Text>

              <Card.Text>
                <strong>Phone:</strong> {value.phone}
              </Card.Text>

              <Card.Text>
                <strong>Street:</strong> {value.street}
              </Card.Text>

              <Card.Text>
                <strong>City:</strong> {value.city}
              </Card.Text>

              <Card.Text>
                <strong>Zipcode:</strong> {value.zipcode}
              </Card.Text>

              <Card.Text>
                <strong>Company:</strong> {value.company}
              </Card.Text>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Link to={`/edit/${value.id}`}>
                  <Button variant="warning">Edit</Button>
                </Link>

                <Button
                  variant="danger"
                  onClick={() => deleteData(value.id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;