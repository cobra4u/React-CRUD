import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");

  async function getData() {
    await axios
      .get("https://64ab046b0c6d844abedf1755.mockapi.io/CRUD")
      .then((res) => {
        setData(res.data);
      });
  }

  async function handleDelete(id) {
    await axios
      .delete(`https://64ab046b0c6d844abedf1755.mockapi.io/CRUD/${id}`)
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, task, notes) => {
    localStorage.setItem("id", id);
    localStorage.setItem("task", task);
    localStorage.setItem("task", notes);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            
            if (tabledark === "table-dark") 
                setTableDark("")
               
            else 
                setTableDark("table-dark")
                
          }}
        />
      </div>
      <div className="d-flex justify-content-between m-2">
        <h2>Read Operation</h2>
        <Link to="/">
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task</th>
            <th scope="col">Notes</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.task}</td>
                  <td>{eachData.notes}</td>
                  <td>
                    <Link to="/update">
                      <button
                      //  className="btn btn-primary" 
                       
                        className="btn btn-info"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.task,
                            eachData.notes
                          )
                        }
                      >
                        Edit{" "}
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-dark"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;