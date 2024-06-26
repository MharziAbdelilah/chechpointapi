import React, { useEffect, useState } from "react";
import axios from "axios";
import './UserList.css'; 

function UserList() {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://jsonplaceholder.typicode.com/users";
        const response = await axios.get(url);
        setListOfUser(response.data);
      } catch (error) {
        console.error("There was an error making the request!", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="user-list">
      {listOfUser.map((user) => (
        <div key={user.id} className="card">
          <h2>{user.name}</h2>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;
