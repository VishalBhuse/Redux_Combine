import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import styles from "./all.module.css";

const Todo = () => {
  const [check, setcheck] = useState(false);
  const { id } = useParams();
  const [data, setdata] = useState([]);
  const ref = useRef();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/todosdb/${id}`)
        .then((r) => r.json())
        .then((r) => setdata(r));
    }
  }, [id]);

  const handlecheck = () => {
    setcheck(!check);
  };

  const handleedit = () => {
    setcheck(!check);

    fetch(`http://localhost:8080/todosdb/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        value: ref.current.value,
      }),
    })
      .then((r) => r.json())
      .then((r) => setdata(r));
  };
  // console.log(data.value)

  return (
    <div>
      <h1 hidden={check === false ? false : true}>Todo: {data.value}</h1>

      <div className={styles.inputbox}>
        <input
          className={styles.input}
          ref={ref}
          placeholder="todo here..."
          type="text"
          hidden={check === true ? false : true}
        />

        <button
          className={styles.edit}
          onClick={() => {
            check === false ? handlecheck() : handleedit(data.id);
          }}
        >
          {check === false ? "Edit" : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default Todo;
