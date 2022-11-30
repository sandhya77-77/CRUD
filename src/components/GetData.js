import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
function GetData() {
  const navigate = useNavigate();
  const Id = localStorage.getItem("userId");
  console.log(Id);
  const [UserData, setUserData] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:8000/api/getuserdata").then((res) => {
      setUserData(res.data);
    });
  }, []);
  const DeleteUser = (Id) => {
    console.log(Id);
    Axios.post("http://localhost:8000/api/DeleteUser", { Id: Id })
      .then((res) => {
        if (res.data.isSucess) {
          alert("delete sucessfully");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const EditUser = (id) => {
    localStorage.setItem("userId", id);
    navigate("/edit");
  };
  return (
    <div>
      <table class="table">
        <thead>
          <tr className="tab">
            <th scope="col">S.NO</th>
            <th scope="col">USERNAME </th>
            <th scope="col">EMAIL</th>
            <th scope="col">MOBILENUMBER</th>
            <th scope="col">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {UserData.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phonenumber}</td>
                <td>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="blue"
                    className="bi bi-pen"
                    viewBox="0 0 16 16"
                    onClick={() => EditUser(user.id)}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                  </svg>
                  {/* </td>
        <td> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="red"
                    className="bi bi-trash3 mx-4"
                    viewBox="0 0 16 16"
                    onClick={() => DeleteUser(user.id)}
                  >
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                  </svg>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default GetData;
