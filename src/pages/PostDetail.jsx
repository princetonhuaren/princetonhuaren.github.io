import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
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
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <h1 className="post-title">
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
        <ReactMarkdown remarkPlugins={[remarkBreaks, remarkGfm]} rehypePlugins={[rehypeSlug, rehypeRaw]}>{content}</ReactMarkdown>
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
      <div className="post-adjacent">
        <div className="post-adjacent-prev">
          {prev && (
            <div
              onClick={() => navigate(`/${prev.category}/${prev.id}`)}
              style={{ cursor: "pointer" }}
            >
              <div style={{ fontSize: "0.78rem", color: "#aaa", marginBottom: "4px" }}>← 上一篇</div>
              <div style={{ fontWeight: "600", color: "#333", fontSize: "0.9rem" }}>{prev.title}</div>
            </div>
          )}
        </div>
        <div className="post-adjacent-next">
          {next && (
            <div
              onClick={() => navigate(`/${next.category}/${next.id}`)}
              style={{ cursor: "pointer" }}
            >
              <div style={{ fontSize: "0.78rem", color: "#aaa", marginBottom: "4px" }}>下一篇 →</div>
              <div style={{ fontWeight: "600", color: "#333", fontSize: "0.9rem" }}>{next.title}</div>
            </div>
          )}
        </div>
      </div>

      {/* 返回顶部按钮 */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: 32,
            right: 32,
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "#1a1a1a",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "18px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
            zIndex: 999,
          }}
          title="返回顶部"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default PostDetail;
