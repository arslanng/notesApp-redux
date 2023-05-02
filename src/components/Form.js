import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeActiveColor, addNewNote } from "../redux/notes/notesSlice";
import { nanoid } from "@reduxjs/toolkit";

function Form() {
  const activeColor = useSelector((state) => state.notes.activeColor);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      return;
    }
    dispatch(addNewNote({ id: nanoid(), title: title, color: activeColor }));
    setTitle("");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="col-4 offset-4 mt-4 form">
          <textarea
            name="message"
            id=""
            cols="100"
            rows="2"
            className="w-100 border-0"
            placeholder="Message"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></textarea>
          <div className="row">
            <div className="col-6">
              <button
                className={`rounded-circle me-1 red ${
                  activeColor === "red" && "active"
                }`}
                onClick={() => dispatch(changeActiveColor("red"))}
              >
                {" ✓ "}{" "}
              </button>
              <button
                className={`rounded-circle me-1 yellow ${
                  activeColor === "yellow" && "active"
                }`}
                onClick={() => dispatch(changeActiveColor("yellow"))}
              >
                {" ✓ "}
              </button>
              <button
                className={`rounded-circle me-1 green ${
                  activeColor === "green" && "active"
                }`}
                onClick={() => dispatch(changeActiveColor("green"))}
              >
                {" ✓ "}
              </button>
            </div>
            <div className="col-6 d-flex">
              <button
                type="submit"
                className="btn btn-success rounded-pill ms-auto"
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
