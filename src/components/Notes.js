import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";

function Notes() {
  const notes = useSelector((state) => state.notes.notes);
  const filter = useSelector((state) => state.notes.filter);
  const filteredData = notes.filter((item) =>
    item.title.toLowerCase().includes(filter ? filter.toLowerCase() : "")
  );
  return (
    <>
      <div className="row">
        <div className="col-8 offset-2">
          <div className="row mt-3">
            <div className="col redNote">
              <h3>Not 1:</h3>
              <ul>
                {filteredData.map(
                  (note) => note.color === "red" && <Note note={note} />
                )}
              </ul>
            </div>
            <div className="col yellowNote">
              <h3>Not 2:</h3>
              <ul>
                {filteredData.map(
                  (note) => note.color === "yellow" && <Note note={note} />
                )}
              </ul>
            </div>
            <div className="col greenNote">
              <h3>Not 3:</h3>
              <ul>
                {filteredData.map(
                  (note, i) => note.color === "green" && <Note note={note} />
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notes;
