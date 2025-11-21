import React from "react";
import useFetchData from "../hook/useFetchData";

function UserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const { data: users, loading, error } = useFetchData(apiUrl);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserData;
