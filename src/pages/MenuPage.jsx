import React, { useState } from "react";
import { seasons, mealTypes, menuData } from "../assets/menuData";

const styles = {
  page: { maxWidth: 800, margin: "0 auto", padding: "24px 16px" },
  title: { fontSize: 22, fontWeight: 700, marginBottom: 4 },
  subtitle: { color: "#888", fontSize: 14, marginBottom: 24 },
  seasonBar: { display: "flex", gap: 10, marginBottom: 28, flexWrap: "wrap" },
  seasonBtn: (active, color) => ({
    padding: "8px 22px",
    borderRadius: 24,
    border: `2px solid ${color}`,
    background: active ? color : "#fff",
    color: active ? "#fff" : color,
    fontWeight: 600,
    fontSize: 16,
    cursor: "pointer",
    transition: "all 0.15s",
  }),
  typeBar: { display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" },
  typeBtn: (active) => ({
    padding: "5px 14px",
    borderRadius: 16,
    border: "1.5px solid #ddd",
    background: active ? "#333" : "#fafafa",
    color: active ? "#fff" : "#555",
    fontSize: 13,
    cursor: "pointer",
    transition: "all 0.15s",
  }),
  section: {
    marginBottom: 24,
    borderRadius: 10,
    border: "1px solid #eee",
    overflow: "hidden",
  },
  sectionHeader: (color) => ({
    background: color + "18",
    borderBottom: "1px solid #eee",
    padding: "10px 16px",
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontWeight: 600,
    fontSize: 15,
  }),
  sectionDesc: { color: "#999", fontSize: 12, fontWeight: 400 },
  dishList: { padding: "12px 16px", display: "flex", flexDirection: "column", gap: 10 },
  dish: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
  },
  dishDot: {
    width: 7, height: 7, borderRadius: "50%",
    background: "#ccc", marginTop: 7, flexShrink: 0,
  },
  dishName: { fontWeight: 500, fontSize: 15 },
  dishNote: { fontSize: 12, color: "#999", marginTop: 2 },
};

// 当前季节检测
function getCurrentSeason() {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) return "spring";
  if (month >= 6 && month <= 8) return "summer";
  if (month >= 9 && month <= 11) return "autumn";
  return "winter";
}

export default function MenuPage() {
  const [activeSeason, setActiveSeason] = useState(getCurrentSeason());
  const [activeType, setActiveType] = useState(null);

  const seasonInfo = seasons.find((s) => s.id === activeSeason);
  const sections = menuData[activeSeason] || [];
  const visible = activeType ? sections.filter((s) => s.type === activeType) : sections;

  return (
    <div style={styles.page}>
      <div style={styles.title}>今天吃什么？🍳</div>
      <div style={styles.subtitle}>按季节整理的家常菜单，适合在美华人家庭</div>

      {/* 季节切换 */}
      <div style={styles.seasonBar}>
        {seasons.map((s) => (
          <button
            key={s.id}
            style={styles.seasonBtn(activeSeason === s.id, s.color)}
            onClick={() => { setActiveSeason(s.id); setActiveType(null); }}
          >
            {s.emoji} {s.name}
          </button>
        ))}
      </div>

      {/* 分类筛选 */}
      <div style={styles.typeBar}>
        <button
          style={styles.typeBtn(!activeType)}
          onClick={() => setActiveType(null)}
        >
          全部
        </button>
        {mealTypes.map((t) => (
          <button
            key={t.id}
            style={styles.typeBtn(activeType === t.id)}
            onClick={() => setActiveType(activeType === t.id ? null : t.id)}
          >
            {t.emoji} {t.name}
          </button>
        ))}
      </div>

      {/* 菜单列表 */}
      {visible.map((section) => {
        const typeInfo = mealTypes.find((t) => t.id === section.type);
        return (
          <div key={section.type} style={styles.section}>
            <div style={styles.sectionHeader(seasonInfo.color)}>
              <span>{typeInfo?.emoji}</span>
              <span>{typeInfo?.name}</span>
              <span style={styles.sectionDesc}>{typeInfo?.desc}</span>
            </div>
            <div style={styles.dishList}>
              {section.dishes.map((dish, i) => (
                <div key={i} style={styles.dish}>
                  <div style={{ ...styles.dishDot, background: seasonInfo.color }} />
                  <div>
                    <div style={styles.dishName}>{dish.name}</div>
                    {dish.note && <div style={styles.dishNote}>💡 {dish.note}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <div style={{ color: "#bbb", fontSize: 12, textAlign: "center", marginTop: 16 }}>
        菜单持续更新中，欢迎补充推荐
      </div>
    </div>
  );
}
