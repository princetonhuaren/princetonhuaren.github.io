import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { getPostsByCategory } from "../assets/posts";
import { categoryColors, categoryMap } from "../assets/categories";
import { notes as allNotes } from "../assets/data";
import { ClockCircleOutlined, CalendarOutlined, ArrowRightOutlined } from "@ant-design/icons";

const cleanPreview = (content) => {
  const cleaned = content.replace(/\s+/g, " ").trim();
  return cleaned.length > 60 ? cleaned.substring(0, 60) + "…" : cleaned;
};

const CategoryPage = ({ category, title }) => {
  const navigate = useNavigate();
  const posts = getPostsByCategory(category);
  const { color, bg } = categoryColors[category] || {};

  // 旧版社区资料（来自 data.js）
  const noteIds = categoryMap[category] || [];
  const refNotes = noteIds.map((id) => allNotes[id - 1]).filter(Boolean);

  const totalCount = posts.length + refNotes.length;

  return (
    <div style={{ maxWidth: "860px", margin: "0 auto", padding: "32px 24px" }}>
      {/* Header */}
      <div style={{ marginBottom: "32px" }}>
        <span
          style={{
            background: bg,
            color,
            fontWeight: 700,
            fontSize: "0.78rem",
            padding: "3px 10px",
            borderRadius: "12px",
            marginBottom: "12px",
            display: "inline-block",
          }}
        >
          {title}
        </span>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "800", margin: "8px 0 4px" }}>
          {title}
        </h1>
        <p style={{ color: "#888", fontSize: "0.9rem", margin: 0 }}>
          共 {totalCount} 项内容
        </p>
      </div>

      {/* ── 生活专属工具入口 ── */}
      {category === "life" && (
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#aaa", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 12 }}>
            实用工具
          </div>
          <Link to="/life/menu" style={{ textDecoration: "none" }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 16,
              padding: "16px 20px", borderRadius: 12,
              border: "1.5px solid #f39c1233", background: "#fffbf4",
              cursor: "pointer", transition: "box-shadow 0.15s",
            }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 2px 12px #f39c1220"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
            >
              <span style={{ fontSize: 32 }}>🍳</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: "#1a1a1a", marginBottom: 2 }}>今天吃什么？</div>
                <div style={{ fontSize: 13, color: "#888" }}>按季节整理的家常菜单，快手菜 / 汤粥 / 懒人方案 / 周末大餐</div>
              </div>
              <ArrowRightOutlined style={{ marginLeft: "auto", color: "#f39c12" }} />
            </div>
          </Link>
        </div>
      )}

      {/* ── 文章（posts.js）── */}
      {posts.length > 0 && (
        <div style={{ marginBottom: "40px" }}>
          <div
            style={{
              fontSize: "0.8rem",
              fontWeight: "700",
              color: "#aaa",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              marginBottom: "4px",
            }}
          >
            文章
          </div>
          <div>
            {posts.map((post) => (
              <div
                key={post.id}
                onClick={() => navigate(`/${post.category}/${post.id}`)}
                style={{ padding: "20px 0", borderBottom: "1px solid #f0f0f0", cursor: "pointer" }}
                className="category-post-item"
              >
                <h2
                  style={{ fontSize: "1.05rem", fontWeight: "700", margin: "0 0 6px", color: "#1a1a1a" }}
                  className="category-post-title"
                >
                  {post.title}
                </h2>
                <p style={{ color: "#666", fontSize: "0.875rem", margin: "0 0 10px", lineHeight: "1.5" }}>
                  {post.summary}
                </p>
                <div style={{ display: "flex", gap: "12px", color: "#bbb", fontSize: "0.8rem", alignItems: "center" }}>
                  <span>
                    <CalendarOutlined style={{ marginRight: "4px" }} />
                    {post.updated && post.updated !== post.published ? `更新 ${post.updated}` : post.published}
                  </span>
                  {post.readingTime && (
                    <span>
                      <ClockCircleOutlined style={{ marginRight: "4px" }} />
                      {post.readingTime} 分钟阅读
                    </span>
                  )}
                  {post.featured && (
                    <span style={{ color: "#fa8c16", fontWeight: 600 }}>⭐ 热门</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── 社区资料（data.js 旧内容）── */}
      {refNotes.length > 0 && (
        <div>
          <div
            style={{
              fontSize: "0.8rem",
              fontWeight: "700",
              color: "#aaa",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            社区资料
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "12px",
            }}
          >
            {refNotes.map((note) => (
              <div
                key={note.id}
                onClick={() => navigate(`/notes/${note.slug}`)}
                className="ref-note-card"
                style={{ borderLeft: `3px solid ${color || "#e0e0e0"}` }}
              >
                <div className="ref-note-title">{note.title}</div>
                <div className="ref-note-preview">{cleanPreview(note.content)}</div>
                <div className="ref-note-link">
                  查看详情 <ArrowRightOutlined style={{ fontSize: "11px" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {totalCount === 0 && (
        <div style={{ color: "#999", padding: "40px 0", textAlign: "center" }}>
          暂无内容，敬请期待
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
