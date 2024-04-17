import React, { useState } from "react";
import axios from "axios";
const Cards = () => {
  const [userData, setUserData] = useState([]);
  console.log(userData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setLoading(false);
      setUserData(response?.data);
    } catch (error) {
      setLoading(false);
      setError("Something went wrong...");
    }
  };
  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      <button
        onClick={() => {
          fetchData();
        }}
      >
        View Users
      </button>

      {error && <h3 style={{ color: "red" }}>{error}</h3>}

      <div>
        {userData.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
