import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: JSON.parse(localStorage.getItem("notes")) || [
      { title: "bir not", color: "red", id: 1 },
      { title: "önemli değil", color: "yellow", id: 2 },
      { title: "sarı not", color: "yellow", id: 3 },
      { title: "yaptım yeşili", color: "green", id: 4 },
    ],
    activeColor: "green",
    filter: "",
  },
  reducers: {
    changeActiveColor: (state, action) => {
      state.activeColor = action.payload;
    },
    addNewNote: (state, action) => {
      state.notes.push(action.payload);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    noteFilter: (state, action) => {
      state.filter = action.payload;
    },
    deleteNote: (state, action) => {
      const kalan = state.notes.filter((note) => note.id !== action.payload);
      state.notes = kalan;
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
  },
});

export const { changeActiveColor, addNewNote, noteFilter, deleteNote } =
  notesSlice.actions;
export default notesSlice.reducer;
