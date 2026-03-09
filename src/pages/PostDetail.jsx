import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { Tag } from "antd";
import {
  ClockCircleOutlined,
  CalendarOutlined,
  UserOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { getPostById, getAdjacentPosts, getPostContent } from "../assets/posts";
import { categoryLabels, categoryColors } from "../assets/categories";

const PostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = getPostById(postId);

  if (!post) {
    return (
      <div style={{ padding: "60px 24px", textAlign: "center" }}>
        <div style={{ fontSize: "3rem", marginBottom: "16px" }}>404</div>
        <div style={{ color: "#666", marginBottom: "24px" }}>文章未找到</div>
        <button
          onClick={() => navigate("/")}
          style={{
            background: "#c0392b",
            color: "white",
            border: "none",
            padding: "8px 20px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          返回首页
        </button>
      </div>
    );
  }

  const { prev, next } = getAdjacentPosts(post.id);
  const content = getPostContent(post.id);
  const { color, bg } = categoryColors[post.category] || {};

  return (
    <div style={{ maxWidth: "760px", margin: "0 auto", padding: "32px 24px" }}>
      {/* Back */}
      <div
        onClick={() => navigate(`/${post.category}`)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          color: "#888",
          fontSize: "0.875rem",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        <ArrowLeftOutlined />
        {categoryLabels[post.category]}
      </div>

      {/* Category tag */}
      <div style={{ marginBottom: "12px" }}>
        <span
          style={{
            background: bg,
            color,
            fontWeight: 600,
            fontSize: "0.78rem",
            padding: "3px 10px",
            borderRadius: "12px",
            cursor: "pointer",
          }}
          onClick={() => navigate(`/${post.category}`)}
        >
          {categoryLabels[post.category]}
        </span>
      </div>

      {/* Title */}
      <h1
        style={{
          fontSize: "1.8rem",
          fontWeight: "800",
          lineHeight: "1.3",
          marginBottom: "16px",
          color: "#1a1a1a",
        }}
      >
        {post.title}
      </h1>

      {/* Meta */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          color: "#999",
          fontSize: "0.85rem",
          marginBottom: "8px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <span>
          <UserOutlined style={{ marginRight: "4px" }} />
          {post.author}
        </span>
        <span>
          <CalendarOutlined style={{ marginRight: "4px" }} />
          {post.published}
        </span>
        {post.updated !== post.published && (
          <span style={{ color: "#bbb" }}>最后更新：{post.updated}</span>
        )}
        {post.readingTime && (
          <span>
            <ClockCircleOutlined style={{ marginRight: "4px" }} />
            {post.readingTime} 分钟阅读
          </span>
        )}
      </div>

      {/* Summary */}
      <p
        style={{
          color: "#666",
          fontSize: "0.95rem",
          borderLeft: "3px solid #c0392b",
          paddingLeft: "12px",
          margin: "20px 0 32px",
          lineHeight: "1.6",
        }}
      >
        {post.summary}
      </p>

      {/* Content */}
      <div className="note-content">
        <ReactMarkdown remarkPlugins={[remarkBreaks]}>{content}</ReactMarkdown>
      </div>

      {/* Tags */}
      {post.tags?.length > 0 && (
        <div
          style={{
            marginTop: "32px",
            paddingTop: "20px",
            borderTop: "1px solid #f0f0f0",
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          {post.tags.map((tag) => (
            <Tag key={tag} style={{ borderRadius: "12px" }}>
              {tag}
            </Tag>
          ))}
        </div>
      )}

      {/* Prev / Next */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
          marginTop: "32px",
          paddingTop: "24px",
          borderTop: "1px solid #f0f0f0",
        }}
      >
        <div style={{ flex: 1 }}>
          {prev && (
            <div
              onClick={() => navigate(`/${prev.category}/${prev.id}`)}
              style={{ cursor: "pointer" }}
            >
              <div style={{ fontSize: "0.78rem", color: "#aaa", marginBottom: "4px" }}>
                ← 上一篇
              </div>
              <div style={{ fontWeight: "600", color: "#333", fontSize: "0.9rem" }}>
                {prev.title}
              </div>
            </div>
          )}
        </div>
        <div style={{ flex: 1, textAlign: "right" }}>
          {next && (
            <div
              onClick={() => navigate(`/${next.category}/${next.id}`)}
              style={{ cursor: "pointer" }}
            >
              <div style={{ fontSize: "0.78rem", color: "#aaa", marginBottom: "4px" }}>
                下一篇 →
              </div>
              <div style={{ fontWeight: "600", color: "#333", fontSize: "0.9rem" }}>
                {next.title}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
