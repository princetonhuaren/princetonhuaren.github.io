import React, { useState } from "react";
import { Input } from "antd";
import { notes as rawData } from "../assets/data";
import { useNavigate } from "react-router-dom";
import { SearchOutlined, ArrowRightOutlined } from "@ant-design/icons";

const cleanPreview = (content) => {
  const cleaned = content.replace(/\s+/g, " ").trim();
  return cleaned.length > 80 ? cleaned.substring(0, 80) + "…" : cleaned;
};

const Notes = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState(rawData);
  const [searchTerm, setSearchTerm] = useState("");

  const onSearch = (val) => {
    const q = val ?? searchTerm;
    setNotes(q.trim() ? rawData.filter((n) => n.title?.includes(q)) : rawData);
  };

  const onClear = () => {
    setNotes(rawData);
    setSearchTerm("");
  };

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px" }}>
      {/* Header */}
      <h1 style={{ fontSize: "1.5rem", fontWeight: "800", marginBottom: "4px" }}>
        全部资料
      </h1>
      <p style={{ color: "#888", fontSize: "0.9rem", marginBottom: "24px" }}>
        共 {rawData.length} 个分类 · 来自普林斯顿华人社区
      </p>

      {/* Search */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "32px", maxWidth: "400px" }}>
        <Input
          placeholder="搜索资料名称..."
          prefix={<SearchOutlined style={{ color: "#ccc" }} />}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onPressEnter={() => onSearch()}
          allowClear
          onClear={onClear}
        />
        <button
          onClick={() => onSearch()}
          style={{
            background: "#c0392b",
            color: "white",
            border: "none",
            borderRadius: "6px",
            padding: "0 16px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "0.875rem",
            whiteSpace: "nowrap",
          }}
        >
          搜索
        </button>
      </div>

      {/* Results count when searching */}
      {searchTerm && (
        <div style={{ color: "#888", fontSize: "0.875rem", marginBottom: "16px" }}>
          找到 {notes.length} 条结果
          <span
            onClick={onClear}
            style={{ color: "#c0392b", cursor: "pointer", marginLeft: "12px" }}
          >
            清除
          </span>
        </div>
      )}

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "14px",
        }}
      >
        {notes.map((note) => (
          <div
            key={note.id}
            onClick={() => navigate(`/notes/${note.id}`)}
            className="ref-note-card"
            style={{ borderLeft: "3px solid #e0e0e0" }}
          >
            <div className="ref-note-title">{note.title}</div>
            <div className="ref-note-preview">{cleanPreview(note.content)}</div>
            <div className="ref-note-link">
              查看详情 <ArrowRightOutlined style={{ fontSize: "11px" }} />
            </div>
          </div>
        ))}
      </div>

      {notes.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px 0", color: "#aaa" }}>
          没有找到相关内容
        </div>
      )}
    </div>
  );
};

export default Notes;
