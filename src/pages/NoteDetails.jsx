import React from "react";
import { useParams } from "react-router-dom";
import { notes } from "../assets/data";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const NoteDetails = () => {
  const { noteId } = useParams();
  const note = notes[noteId - 1];
  //   console.log("note id: ", noteId);
  const navigate = useNavigate();
  return (
    <div
      style={{
        padding: "16px 16px",
        lineHeight: "28px",
        whiteSpace: "pre-line",
        textAlign: "start",
      }}
    >
      <Button onClick={() => navigate("/notes")}>Back</Button>
      <div>{note.content}</div>
    </div>
  );
};

export default NoteDetails;
