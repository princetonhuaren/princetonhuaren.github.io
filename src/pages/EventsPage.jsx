import React, { useState } from "react";
import { getUpcomingEvents, getPastEvents } from "../assets/events";

const categoryLabel = { kids: "亲子", food: "美食", community: "社区", culture: "文化" };
const categoryColor = { kids: "#27ae60", food: "#c0392b", community: "#2980b9", culture: "#8e44ad" };
const categoryBg   = { kids: "#eafaf1", food: "#fdf2f2", community: "#eaf4fb", culture: "#f5eefb" };

function EventCard({ event }) {
  const color = categoryColor[event.category] || "#888";
  const bg    = categoryBg[event.category]    || "#f9f9f9";
  const dateStr = event.endDate && event.endDate !== event.date
    ? `${event.date} – ${event.endDate}`
    : event.date;

  return (
    <div style={{
      border: "1px solid #eee",
      borderRadius: 12,
      padding: "16px 20px",
      marginBottom: 16,
      background: "#fff",
      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
        <span style={{ fontSize: "0.75rem", fontWeight: 700, color, background: bg, padding: "2px 10px", borderRadius: 20 }}>
          {categoryLabel[event.category] || event.category}
        </span>
        {event.free === true && (
          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#27ae60", background: "#eafaf1", padding: "2px 10px", borderRadius: 20 }}>
            免费
          </span>
        )}
        <span style={{ fontSize: "0.8rem", color: "#999", marginLeft: "auto" }}>📅 {dateStr}</span>
      </div>

      <div style={{ fontWeight: 700, fontSize: "1rem", color: "#1a1a1a", marginBottom: 4 }}>{event.title}</div>
      <div style={{ fontSize: "0.85rem", color: "#666", marginBottom: 6 }}>📍 {event.location}</div>
      <div style={{ fontSize: "0.88rem", color: "#444", lineHeight: 1.6, marginBottom: event.note ? 6 : 0 }}>{event.desc}</div>
      {event.note && (
        <div style={{ fontSize: "0.82rem", color: "#888", background: "#f9f9f9", borderRadius: 6, padding: "6px 10px", marginBottom: 6 }}>
          💡 {event.note}
        </div>
      )}
      {event.link && (
        <a href={event.link} target="_blank" rel="noopener noreferrer"
          style={{ fontSize: "0.83rem", color: "#2980b9", textDecoration: "none" }}>
          查看详情 →
        </a>
      )}
    </div>
  );
}

const CATEGORIES = [
  { id: null,        label: "全部" },
  { id: "kids",      label: "亲子" },
  { id: "food",      label: "美食" },
  { id: "community", label: "社区" },
  { id: "culture",   label: "文化" },
];

export default function EventsPage() {
  const [filter, setFilter] = useState(null);
  const [showPast, setShowPast] = useState(false);

  const upcoming = getUpcomingEvents().filter((e) => !filter || e.category === filter);
  const past     = getPastEvents().filter((e) => !filter || e.category === filter);

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "24px 16px" }}>
      <div style={{ marginBottom: 6, fontSize: "0.85rem", color: "#999" }}>生活</div>
      <h1 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 8, color: "#1a1a1a" }}>
        普林斯顿社区活动
      </h1>
      <p style={{ color: "#666", fontSize: "0.95rem", borderLeft: "3px solid #27ae60", paddingLeft: 12, margin: "0 0 24px", lineHeight: 1.6 }}>
        整理普林斯顿周边近期活动，包括亲子、社区聚会、节日庆典等。
      </p>

      {/* 分类筛选 */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
        {CATEGORIES.map((c) => (
          <button
            key={String(c.id)}
            onClick={() => setFilter(c.id)}
            style={{
              padding: "5px 14px",
              borderRadius: 20,
              border: "none",
              cursor: "pointer",
              fontSize: "0.83rem",
              fontWeight: 600,
              background: filter === c.id ? "#1a1a1a" : "#f0f0f0",
              color: filter === c.id ? "white" : "#555",
              transition: "all 0.15s",
            }}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* 即将到来 */}
      {upcoming.length > 0 ? (
        upcoming.map((e) => <EventCard key={e.id} event={e} />)
      ) : (
        <div style={{ color: "#aaa", textAlign: "center", padding: "40px 0", fontSize: "0.95rem" }}>
          暂无即将到来的活动，敬请期待 🌱
        </div>
      )}

      {/* 过期活动折叠 */}
      {past.length > 0 && (
        <div style={{ marginTop: 32 }}>
          <button
            onClick={() => setShowPast((v) => !v)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#aaa", fontSize: "0.85rem", padding: 0 }}
          >
            {showPast ? "▲ 隐藏已结束活动" : `▼ 查看已结束活动（${past.length}）`}
          </button>
          {showPast && (
            <div style={{ marginTop: 12, opacity: 0.6 }}>
              {past.map((e) => <EventCard key={e.id} event={e} />)}
            </div>
          )}
        </div>
      )}

      <p style={{ marginTop: 40, color: "#aaa", fontSize: "0.82rem", textAlign: "center" }}>
        有活动想补充？欢迎加入微信群告诉我们 🙌
      </p>
    </div>
  );
}
