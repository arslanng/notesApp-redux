import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { noteFilter } from "../redux/notes/notesSlice";

function Header() {
  const [filter, setFilter] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(noteFilter(filter));
  }, [filter, dispatch]);
  return (
    <>
      <div className="row">
        <div className="col-6 offset-3 header mt-3">
          <h1>Notes-App</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-4 offset-4">
          <input
            className="form-control px-3 mt-2"
            type="text"
            placeholder="Search..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
