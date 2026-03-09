import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { notes } from "../assets/data";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { ArrowLeftOutlined, TeamOutlined } from "@ant-design/icons";

const NoteDetails = () => {
  const { noteId } = useParams();
  const note = notes[noteId - 1];
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: "760px", margin: "0 auto", padding: "32px 24px" }}>
      {/* Back */}
      <div
        onClick={() => navigate("/notes")}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          color: "#888",
          fontSize: "0.875rem",
          cursor: "pointer",
          marginBottom: "24px",
        }}
      >
        <ArrowLeftOutlined />
        全部资料
      </div>

      {/* Title block */}
      <div
        style={{
          borderLeft: "4px solid #c0392b",
          paddingLeft: "16px",
          marginBottom: "24px",
        }}
      >
        <h1 style={{ fontSize: "1.5rem", fontWeight: "800", margin: "0 0 8px", color: "#1a1a1a" }}>
          {note.title}
        </h1>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "0.78rem",
            color: "#888",
            background: "#fafafa",
            border: "1px solid #f0f0f0",
            borderRadius: "20px",
            padding: "3px 10px",
          }}
        >
          <TeamOutlined />
          来自社区推荐，请自行甄别
        </div>
      </div>

      {/* Content */}
      <div className="note-content">
        <ReactMarkdown remarkPlugins={[remarkBreaks]}>{note.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default NoteDetails;
