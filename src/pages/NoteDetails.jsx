import React from "react";
import { useParams } from "react-router-dom";
import { notes } from "../assets/data";

const NoteDetails = () => {
  const { noteId } = useParams();
  const note = notes[noteId - 1];
  //   console.log("note id: ", noteId);
  return (
    <div
      style={{
        padding: "16px 16px",
        lineHeight: "28px",
        whiteSpace: "pre-line",
      }}
    >
      {note.content}
    </div>
  );
};

export default NoteDetails;
