import React from "react";
import { useDispatch } from "react-redux";
import { deleteNote } from "../redux/notes/notesSlice";

function Note(props) {
  const dispatch = useDispatch();
  return (
    <>
      <li key={props.note.id}>
        <span className="d-flex justify-content-between">
          {props.note.title}{" "}
          <button
            className={`${props.note.color}X`}
            onClick={() => dispatch(deleteNote(props.note.id))}
          >
            X
          </button>
        </span>
      </li>
    </>
  );
}

export default Note;
