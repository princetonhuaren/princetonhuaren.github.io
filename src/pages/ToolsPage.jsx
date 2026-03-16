import React from "react";
import { Link } from "react-router-dom";

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
    category: "🏠 房产",
    items: [
      {
        title: "房贷月供计算器",
        desc: "输入贷款金额和利率，计算 10/15/30 年月供及完整分期明细",
        link: "/tools/mortgage",
        tag: "计算器",
        internal: true,
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
      {
        title: "Princeton 房产税网上缴纳",
        desc: "Princeton 市区居民可在线缴纳房产税，每季度到期日：8/1、11/1、2/1、5/1，有10天宽限期",
        link: "https://www.princetonnj.gov/1357/Tax-Collector",
        tag: "Princeton Borough",
      },
    ],
  },
];

// 电话号码列表（Princeton 市区新居民信息）
const phoneGroups = [
  {
    category: "🚨 紧急 & 非紧急",
    note: "以下号码适用于 Princeton 市区（Borough）",
    phones: [
      { label: "火警 / 救护 / 报警（紧急）", number: "9-1-1" , highlight: true },
      { label: "警察（非紧急）",             number: "609-921-2100" },
      { label: "毒物中心（Poison Center）",  number: "800-222-1222" },
    ],
  },
  {
    category: "🏛️ 市政服务",
    phones: [
      { label: "市政厅 / Municipal Clerk",         number: "609-924-5704" },
      { label: "税务局 / Tax Collector",            number: "609-924-1058" },
      { label: "税款减免咨询（老兵 / 老年人）",       number: "609-924-1084" },
      { label: "市长办公室",                        number: "609-924-5176" },
      { label: "垃圾收运（Garbage Pick-up）",       number: "609-688-2566" },
      { label: "回收（Mercer County Recycling）",   number: "609-278-8086" },
      { label: "Princeton Public Works",            number: "609-497-7639" },
      { label: "动物管理（Animal Control）",         number: "609-924-2728" },
      { label: "SAVE 小动物救援",                   number: "609-921-6122" },
    ],
  },
  {
    category: "💡 水电气",
    phones: [
      { label: "NJ American Water（自来水）",        number: "800-272-1325" },
      { label: "PSE&G（电 / 天然气）",               number: "800-436-7734" },
      { label: "Princeton 下水道",                   number: "609-497-7639" },
      { label: "下水道紧急（After-Hours）",           number: "609-921-2100" },
    ],
  },
  {
    category: "🏥 医疗 & 社区",
    phones: [
      { label: "Princeton Health Care（UMCPP）",    number: "609-497-4000" },
      { label: "Princeton Public Library",           number: "609-924-9529" },
      { label: "Princeton Recreation",               number: "609-921-9480" },
      { label: "卫生局（Health Office）",             number: "609-497-7608" },
      { label: "老年人资源中心",                      number: "609-924-7108" },
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
  "计算器":         { bg: "#eaf4fb", color: "#2980b9" },
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
              const CardWrapper = ({ children }) =>
                item.internal ? (
                  <Link to={item.link} style={{ textDecoration: "none" }}>{children}</Link>
                ) : (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>{children}</a>
                );
              return (
                <CardWrapper key={item.title}>
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
                </CardWrapper>
              );
            })}
          </div>
        </div>
      ))}

      {/* 电话号码区块 */}
      <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1a1a1a", margin: "40px 0 4px" }}>
        📞 实用电话号码
      </h2>
      <p style={{ fontSize: "0.85rem", color: "#999", marginBottom: 24 }}>适用于 Princeton 市区（Borough）居民</p>

      {phoneGroups.map((group) => (
        <div key={group.category} style={{ marginBottom: 28 }}>
          <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#444", marginBottom: 10 }}>
            {group.category}
          </h3>
          <div style={{ border: "1px solid #eee", borderRadius: 10, overflow: "hidden" }}>
            {group.phones.map((p, i) => (
              <div
                key={p.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 16px",
                  background: p.highlight ? "#fff5f5" : i % 2 === 0 ? "#fff" : "#fafafa",
                  borderTop: i === 0 ? "none" : "1px solid #f0f0f0",
                }}
              >
                <span style={{ fontSize: "0.88rem", color: p.highlight ? "#c0392b" : "#333" }}>
                  {p.label}
                </span>
                <a
                  href={`tel:${p.number.replace(/-/g, "")}`}
                  style={{ fontSize: "0.9rem", fontWeight: 700, color: p.highlight ? "#c0392b" : "#2980b9", textDecoration: "none", flexShrink: 0, marginLeft: 12 }}
                >
                  {p.number}
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}

      <p style={{ marginTop: 32, color: "#aaa", fontSize: "0.82rem", textAlign: "center" }}>
        有好用的网站或号码想补充？欢迎加入微信群告诉我们 🙌
      </p>
    </div>
  );
}
