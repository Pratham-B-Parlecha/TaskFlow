import React, { useEffect, useRef, useState } from "react";
import "./ProjectPage.scss";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { db } from "../Firebase";

export default function ProjectPage() {
  const [value, setValue] = useState([]);
  const inputRef = useRef();
  useEffect(() => {
    async function getData() {
      const sp = await getDocs(collection(db, "projects"));

      const dmc = sp.docs.map((doc) => doc.data());
      setValue(dmc);
    }
    getData();
  }, [value]);
  async function submitHandler(event) {
    event.preventDefault();
    await setDoc(doc(db, "projects", uuid()), {
      id: uuid(),
      tasks: inputRef.current.value,
    });
    inputRef.current.value = "";
  }

  return (
    <div className="projectPage">
      <form onSubmit={submitHandler} className="project">
        <input type="text" name="project" ref={inputRef} />
        <button onClick={submitHandler}>Add</button>
      </form>
      <ul className="projectList">
        {value.map((daily) => (
          <li key={daily.id}>{daily.tasks}</li>
        ))}
      </ul>
    </div>
  );
}
