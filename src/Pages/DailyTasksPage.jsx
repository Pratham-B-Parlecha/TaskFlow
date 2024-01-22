import React, { useEffect, useRef, useState } from "react";
import "./DailyTasksPage.scss";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
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
  }, [value]);
  async function submitHandler(event) {
    event.preventDefault();
    await setDoc(doc(db, "dailyTasks", uuid()), {
      id: uuid(),
      tasks: inputRef.current.value,
    });
    inputRef.current.value = "";
  }
  return (
    <div className="dailyTasksPage">
      <form onSubmit={submitHandler} className="dailyTask">
        <input type="text" name="dailytasks" ref={inputRef} />
        <button onClick={submitHandler}>Add</button>
      </form>
      <ul className="daily">
        {value.map((daily) => (
          <li key={daily.id}>{daily.tasks}</li>
        ))}
      </ul>
    </div>
  );
}
