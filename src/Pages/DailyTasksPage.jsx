import React, { useEffect, useRef, useState } from "react";
import "./DailyTasksPage.scss";
import {
  doc,
  setDoc,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../Firebase";
import { v4 as uuid } from "uuid";


export default function DailyTasksPage() {
  const inputRef = useRef();
  const [value, setValue] = useState([]);
  useEffect(() => {
    async function getData() {
      const sp = await getDocs(collection(db, "dailyTasks"));

      const dmc = sp.docs.map((doc) => doc.data());
      setValue(dmc);
      
    }
    getData();
  }, []);
  async function getData() {
    const sp = await getDocs(collection(db, "dailyTasks"));

    const dmc = sp.docs.map((doc) => doc.data())
    setValue(dmc);
  }
  async function submitHandler(event) {
    event.preventDefault();
    const id = uuid();
    if(inputRef.current.value === ""){
      return;
    }
    await setDoc(doc(db, "dailyTasks", id), {
      id: id,
      tasks: inputRef.current.value,
    });
    getData();
    
    inputRef.current.value = "";
  }
  async function deleteHandler(id) {
    await deleteDoc(doc(db, "dailyTasks", id));
    getData();
  }
  return (
    <div className="dailyTasksPage">
      <form onSubmit={submitHandler} className="dailyTask">
        <input type="text" name="dailytasks" ref={inputRef} />
        <button type="button" onClick={submitHandler}>
          Add
        </button>
      </form>
      <ul className="daily">
        {value.map((daily) => (
          <li key={daily.id}>
            <span>{daily.tasks}</span>
            <button onClick={() => deleteHandler(daily.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
