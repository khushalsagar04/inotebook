import React, { useContext } from "react";
import NoteContext from "../context/NoteContext";

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNoteModal } = props;
  return (
    <div className="col-md-3">
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i
            className="fa-solid fa-trash-can mx-2"
            onClick={() => {
              deleteNote(note._id);
            }}
          ></i>
          <i
            className="fa-solid fa-pen-to-square mx-2"
            onClick={() => {
              updateNoteModal(note);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;