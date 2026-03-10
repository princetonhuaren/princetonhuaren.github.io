import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Tag } from "antd";
import { ArrowLeftOutlined, CalendarOutlined, UserOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { getPostById, getAdjacentPosts } from "../assets/posts";
import { categoryColors } from "../assets/categories";

// ── 学校数据 ──────────────────────────────────────────────────
const schools = [
  {
    name: "华夏普兰斯堡中文学校",
    nameEn: "Huaxia Chinese School at Plainsboro",
    color: "#c0392b",
    address: "Mercer County Community College, 1200 Old Trenton Rd, West Windsor, NJ 08550",
    lat: 40.2534,
    lng: -74.6519,
    schedule: "每周日 1:30–5:00 PM",
    website: "https://www.hxpcs.org/",
    note: "约800名学生，华夏系统最大分校。课外活动丰富，含功夫、围棋、民族舞等。学前班–9年级+高级中文班。",
  },
  {
    name: "华夏蒙哥马利中文学校",
    nameEn: "Huaxia Chinese School at Montgomery",
    color: "#e67e22",
    address: "Montgomery Upper Middle School, 375 Burnt Hill Rd, Skillman, NJ 08558",
    lat: 40.4274,
    lng: -74.6725,
    schedule: "每周六 3:15–4:50 PM",
    website: "http://www.hxcsmg.org/",
    note: "华夏系统 Montgomery 分校，周六上课。适合住在 Montgomery、Skillman、Hillsborough 一带的家庭。",
  },
  {
    name: "英华中文学校",
    nameEn: "YingHua Chinese School",
    color: "#2980b9",
    address: "Chapin School, 4101 Princeton Pike, Princeton, NJ 08540",
    lat: 40.3113,
    lng: -74.6934,
    schedule: "每周日 1:35–3:20 PM 或 3:30–5:20 PM",
    website: "https://www.yinghua.org/",
    note: "全美首批 MSA 认证社区中文学校。马立平直接认字法，CHL/CSL/CBL 三轨分班。学费 $690/年（公开透明）。幼儿园–成人+AP班。",
  },
];

// ── 地图视野控制 ──────────────────────────────────────────────
function MapController({ places }) {
  const map = useMap();
  useEffect(() => {
    const points = places.map((p) => L.latLng(p.lat, p.lng));
    if (points.length === 0) return;
    const bounds = L.latLngBounds(points);
    map.fitBounds(bounds, { padding: [60, 60], maxZoom: 13 });
  }, [places, map]);
  return null;
}

// ── 主页面 ─────────────────────────────────────────────────────
const PrincetonChineseSchoolPage = () => {
  const navigate = useNavigate();
  const post = getPostById("princeton-chinese-school");
  const { prev, next } = post ? getAdjacentPosts("princeton-chinese-school") : { prev: null, next: null };

  const { color: catColor, bg: catBg } = categoryColors?.education || { color: "#1890ff", bg: "#e6f7ff" };

  return (
    <div style={{ maxWidth: "820px", margin: "0 auto", padding: "32px 24px" }}>
      {/* 返回 */}
      <div onClick={() => navigate("/education")} style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#888", fontSize: "0.875rem", cursor: "pointer", marginBottom: 20 }}>
        <ArrowLeftOutlined /> 教育
      </div>

      {/* 分类标签 */}
      <div style={{ marginBottom: 12 }}>
        <span style={{ background: catBg, color: catColor, fontWeight: 600, fontSize: "0.78rem", padding: "3px 10px", borderRadius: 12, cursor: "pointer" }} onClick={() => navigate("/education")}>
          教育
        </span>
      </div>

      {/* 标题 */}
      <h1 style={{ fontSize: "1.8rem", fontWeight: 800, lineHeight: 1.3, marginBottom: 16, color: "#1a1a1a" }}>普林斯顿中文学校指南：华夏普兰斯堡、华夏蒙哥马利、英华</h1>

      {/* 元数据 */}
      {post && (
        <div style={{ display: "flex", gap: 16, color: "#999", fontSize: "0.85rem", marginBottom: 8, flexWrap: "wrap", alignItems: "center" }}>
          <span>
            <UserOutlined style={{ marginRight: 4 }} />
            {post.author}
          </span>
          <span>
            <CalendarOutlined style={{ marginRight: 4 }} />
            {post.published}
          </span>
          <span>
            <ClockCircleOutlined style={{ marginRight: 4 }} />
            {post.readingTime} 分钟阅读
          </span>
        </div>
      )}

      {/* 摘要 */}
      <p style={{ color: "#666", fontSize: "0.95rem", borderLeft: "3px solid #1890ff", paddingLeft: 12, margin: "20px 0 28px", lineHeight: 1.6 }}>
        普林斯顿周边三所中文学校信息汇总，含地址、上课时间、教材和选校建议。地图可直观查看各校位置与你家的距离。
      </p>

      {/* ── 地图 ── */}
      <div style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>学校位置地图</h2>

        {/* 图例 */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
          {schools.map((s) => (
            <div key={s.name} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.82rem", color: "#555" }}>
              <span style={{ display: "inline-block", width: 12, height: 12, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
              {s.name}
            </div>
          ))}
        </div>

        <div style={{ height: 400, borderRadius: 12, overflow: "hidden", border: "1px solid #e8e8e8" }}>
          <MapContainer center={[40.35, -74.66]} zoom={11} style={{ height: "100%", width: "100%" }} scrollWheelZoom={false}>
            <MapController places={schools} />
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            {schools.map((s) => (
              <CircleMarker key={s.name} center={[s.lat, s.lng]} radius={11} pathOptions={{ color: s.color, fillColor: s.color, fillOpacity: 0.85, weight: 2 }}>
                <Popup>
                  <div style={{ minWidth: 210 }}>
                    <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 4 }}>{s.name}</div>
                    <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: 6 }}>{s.nameEn}</div>
                    <div style={{ fontSize: "0.78rem", color: "#888" }}>📍 {s.address}</div>
                    <div style={{ fontSize: "0.78rem", color: "#888", marginTop: 3 }}>🕐 {s.schedule}</div>
                    {s.website && (
                      <div style={{ fontSize: "0.78rem", marginTop: 3 }}>
                        <a href={s.website} target='_blank' rel='noreferrer' style={{ color: s.color }}>
                          {s.website.replace(/https?:\/\/(www\.)?/, "")}
                        </a>
                      </div>
                    )}
                    {s.note && <div style={{ fontSize: "0.8rem", color: "#555", marginTop: 6, borderTop: "1px solid #f0f0f0", paddingTop: 4 }}>{s.note}</div>}
                  </div>
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        </div>
        <p style={{ fontSize: "0.78rem", color: "#aaa", marginTop: 8 }}>注：标记位置为近似坐标，出发前请用 Google Maps 确认地址。</p>
      </div>

      {/* ── 文章内容 ── */}
      <div className='note-content'>
        {schools.map((s) => (
          <div key={s.name} style={{ marginBottom: 36 }}>
            <h2 style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ display: "inline-block", width: 12, height: 12, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
              {s.name}（{s.nameEn}）
            </h2>
            <p style={{ margin: "4px 0 12px", fontSize: "0.85rem" }}>
              <a href={s.website} target='_blank' rel='noreferrer'>
                {s.website}
              </a>
            </p>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <td style={{ padding: "6px 12px 6px 0", color: "#888", whiteSpace: "nowrap", width: 90 }}>上课地点</td>
                  <td style={{ padding: "6px 0" }}>{s.address}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <td style={{ padding: "6px 12px 6px 0", color: "#888" }}>上课时间</td>
                  <td style={{ padding: "6px 0" }}>{s.schedule}</td>
                </tr>
              </tbody>
            </table>
            <p style={{ marginTop: 10, fontSize: "0.875rem", color: "#555", lineHeight: 1.7 }}>{s.note}</p>
          </div>
        ))}

        <h2>三校对比</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
            <thead>
              <tr style={{ background: "#f8f8f8" }}>
                <th style={{ padding: "8px 12px", textAlign: "left", borderBottom: "2px solid #e8e8e8" }}>对比项</th>
                <th style={{ padding: "8px 12px", textAlign: "left", borderBottom: "2px solid #e8e8e8", color: "#c0392b" }}>华夏普兰斯堡</th>
                <th style={{ padding: "8px 12px", textAlign: "left", borderBottom: "2px solid #e8e8e8", color: "#e67e22" }}>华夏蒙哥马利</th>
                <th style={{ padding: "8px 12px", textAlign: "left", borderBottom: "2px solid #e8e8e8", color: "#2980b9" }}>英华</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["上课日", "周日", "周六", "周日"],
                ["地点", "West Windsor（MCCC）", "Skillman（Montgomery UMS）", "Princeton（Chapin School）"],
                ["上课时长", "3.5 小时", "约 1.5 小时", "约 2 小时"],
                ["教材", "华夏系统（未公开）", "华夏系统教材", "马立平 / QTalk / 双双"],
                ["学费", "登录后可见", "联系学校", "$690/年（公开透明）"],
                ["夏令营", "有，内容丰富", "未知", "有，中文强化为主"],
              ].map(([label, a, b, c]) => (
                <tr key={label} style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <td style={{ padding: "7px 12px 7px 0", color: "#888", whiteSpace: "nowrap" }}>{label}</td>
                  <td style={{ padding: "7px 12px" }}>{a}</td>
                  <td style={{ padding: "7px 12px" }}>{b}</td>
                  <td style={{ padding: "7px 12px" }}>{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>选校建议</h2>
        <p>
          <strong>选华夏普兰斯堡</strong>：规模最大，活动最丰富（武术、围棋、舞蹈等），适合想让孩子融入华人社区、同时参与课外活动的家庭。住 West Windsor / Plainsboro 一带最方便。
        </p>
        <p>
          <strong>选华夏蒙哥马利</strong>：住在 Montgomery、Skillman、Hillsborough 一带首选，周六上课，通勤距离近。
        </p>
        <p>
          <strong>选英华</strong>：在家坚持说中文、对中文教学质量有较高要求的家庭首选。马立平教法口碑好，学费信息透明。
        </p>

        <p style={{ background: "#f6f6f6", padding: "12px 16px", borderRadius: 8, color: "#888", fontSize: "0.875rem", marginTop: 24 }}>
          信息整理于 2026 年，具体学费、时间表以各校官网当年公告为准。欢迎在微信群补充最新信息！
        </p>
      </div>

      {/* 标签 */}
      {post?.tags?.length > 0 && (
        <div style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid #f0f0f0", display: "flex", gap: 8, flexWrap: "wrap" }}>
          {post.tags.map((tag) => (
            <Tag key={tag} style={{ borderRadius: 12 }}>
              {tag}
            </Tag>
          ))}
        </div>
      )}

      {/* 上一篇 / 下一篇 */}
      {post && (
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, marginTop: 32, paddingTop: 24, borderTop: "1px solid #f0f0f0" }}>
          <div style={{ flex: 1 }}>
            {prev && (
              <div onClick={() => navigate(`/${prev.category}/${prev.id}`)} style={{ cursor: "pointer" }}>
                <div style={{ fontSize: "0.78rem", color: "#aaa", marginBottom: 4 }}>← 上一篇</div>
                <div style={{ fontWeight: 600, color: "#333", fontSize: "0.9rem" }}>{prev.title}</div>
              </div>
            )}
          </div>
          <div style={{ flex: 1, textAlign: "right" }}>
            {next && (
              <div onClick={() => navigate(`/${next.category}/${next.id}`)} style={{ cursor: "pointer" }}>
                <div style={{ fontSize: "0.78rem", color: "#aaa", marginBottom: 4 }}>下一篇 →</div>
                <div style={{ fontWeight: 600, color: "#333", fontSize: "0.9rem" }}>{next.title}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PrincetonChineseSchoolPage;
