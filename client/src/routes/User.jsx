import React, { useEffect, useState } from "react";
import { getToken, useAuth } from "./utils";

export default function User() {
  useAuth();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const token = getToken();
        const response = await fetch("http://localhost:3333/user", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        if (!response.ok) {
          throw new Error("Couldn't load data from the server");
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>User Data</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userData ? (
            <div>
              <p>{userData}</p>
            </div>
          ) : (
            <p>No data available</p>
          )}
        </>
      )}
    </div>
  );
}
