import React, { useEffect, useRef, useState } from "react";
import "./WeeklyTasksPage.scss";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { db } from "../Firebase";

export default function WeeklyTasksPage() {
  const inputRef = useRef();
  const [value, setValue] = useState([]);

  useEffect(() => {
    async function getData() {
      const sp = await getDocs(collection(db, "weeklyTasks"));

      const dmc = sp.docs.map((doc) => doc.data());
      setValue(dmc);
    }
    getData()
  }, [value]);
  async function submitHandler(event) {
    event.preventDefault();
    await setDoc(doc(db, "weeklyTasks", uuid()), {
      id: uuid(),
      tasks: inputRef.current.value,
    });
    inputRef.current.value = "";
  }
  return (
    <div className="weeklyTasksPage">
      <form onSubmit={submitHandler} className="weeklyTask">
        <input type="text" name="weeklytasks" ref={inputRef} />
        <button type="button" onClick={submitHandler}>Add</button>
      </form>
      <ul className="weekly">
        {value.map((daily) => (
          <li key={daily.id}>{daily.tasks}</li>
        ))}
      </ul>
    </div>
  );
}
