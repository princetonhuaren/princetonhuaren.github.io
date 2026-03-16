import React from "react";

const tools = [
  {
    category: "🏫 学校",
    items: [
      {
        title: "Princeton Public Schools 校历",
        desc: "Princeton 公立学区（PPS）官方校历，含假期、放学早、家长会日程",
        link: "https://www.princetonk12.org/district/calendar/all-calendars",
        tag: "Princeton K-12",
      },
      {
        title: "WW-P 学区校历",
        desc: "West Windsor-Plainsboro 学区官方校历，含所有学校假期安排",
        link: "https://www.west-windsor-plainsboro.k12.nj.us/c_a_l_e_n_d_a_r_s/academic_calendars",
        tag: "WW-P",
      },
    ],
  },
  {
    category: "🗑️ 垃圾回收",
    items: [
      {
        title: "West Windsor 垃圾回收时间表",
        desc: "West Windsor Township 官方垃圾与回收日历，含节假日调整",
        link: "https://www.westwindsortwp.gov/departments/public_works/garbage/index.php",
        tag: "West Windsor",
      },
      {
        title: "Plainsboro 垃圾回收",
        desc: "Plainsboro Township 垃圾与回收安排",
        link: "https://www.plainsboronj.com/225/Public-Works",
        tag: "Plainsboro",
      },
      {
        title: "Princeton 市区垃圾回收",
        desc: "Princeton 市区垃圾收运时间表及大件物品处理",
        link: "https://www.princetonnj.gov/1359/Trash-Collection",
        tag: "Princeton Borough",
      },
    ],
  },
  {
    category: "📚 图书馆 & 社区",
    items: [
      {
        title: "Princeton Public Library",
        desc: "图书馆活动、借书、自习室预约，新泽西访问量最高的市立图书馆",
        link: "https://princetonlibrary.org/",
        tag: "图书馆",
      },
      {
        title: "Princeton Recreation 课程报名",
        desc: "游泳班、运动课、暑期活动等 Princeton 市民课程报名",
        link: "https://www.princetonnj.gov/433/Programs-Activities",
        tag: "Princeton",
      },
      {
        title: "West Windsor Farmers Market",
        desc: "每周六 9am–1pm，Princeton Junction 火车站旁，5月至11月",
        link: "https://www.westwindsorfarmersmarket.org/",
        tag: "集市",
      },
    ],
  },
  {
    category: "🚗 政府服务",
    items: [
      {
        title: "NJ MVC（DMV）预约",
        desc: "预约驾照考试、换证、车辆登记等 MVC 业务",
        link: "https://telegov.njportal.com/njmvc/AppointmentWizard",
        tag: "MVC",
      },
    ],
  },
];

const tagColor = {
  "Princeton K-12": { bg: "#eaf4fb", color: "#2980b9" },
  "WW-P":           { bg: "#eafaf1", color: "#27ae60" },
  "West Windsor":   { bg: "#fdf2f2", color: "#c0392b" },
  "Plainsboro":     { bg: "#f5eefb", color: "#8e44ad" },
  "Princeton Borough": { bg: "#fef9e7", color: "#f39c12" },
  "图书馆":          { bg: "#eaf4fb", color: "#2980b9" },
  "Princeton":      { bg: "#fdf2f2", color: "#c0392b" },
  "集市":           { bg: "#eafaf1", color: "#27ae60" },
  "MVC":            { bg: "#f0f0f0", color: "#555" },
};

export default function ToolsPage() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "24px 16px" }}>
      <div style={{ marginBottom: 6, fontSize: "0.85rem", color: "#999" }}>生活</div>
      <h1 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 8, color: "#1a1a1a" }}>
        普林斯顿生活工具
      </h1>
      <p style={{ color: "#666", fontSize: "0.95rem", borderLeft: "3px solid #2980b9", paddingLeft: 12, margin: "0 0 32px", lineHeight: 1.6 }}>
        整理普林斯顿公立学区范围内常用网站，含学校校历、垃圾回收、图书馆和政府服务。
      </p>

      {tools.map((group) => (
        <div key={group.category} style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#1a1a1a", marginBottom: 12 }}>
            {group.category}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {group.items.map((item) => {
              const t = tagColor[item.tag] || { bg: "#f0f0f0", color: "#555" };
              return (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <div style={{
                    border: "1px solid #eee",
                    borderRadius: 10,
                    padding: "14px 18px",
                    background: "#fff",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    transition: "box-shadow 0.15s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.12)"}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.05)"}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                        <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "#1a1a1a" }}>{item.title}</span>
                        <span style={{ fontSize: "0.72rem", fontWeight: 700, color: t.color, background: t.bg, padding: "1px 8px", borderRadius: 20 }}>
                          {item.tag}
                        </span>
                      </div>
                      <div style={{ fontSize: "0.85rem", color: "#666", lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                    <span style={{ color: "#bbb", fontSize: "1rem", flexShrink: 0 }}>→</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      ))}

      <p style={{ marginTop: 32, color: "#aaa", fontSize: "0.82rem", textAlign: "center" }}>
        有好用的网站想补充？欢迎加入微信群告诉我们 🙌
      </p>
    </div>
  );
}
