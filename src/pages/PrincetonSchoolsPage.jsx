import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Tag } from "antd";
import {
  ClockCircleOutlined,
  CalendarOutlined,
  UserOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { getPostById, getAdjacentPosts } from "../assets/posts";
import { categoryColors } from "../assets/categories";

// ── 学区与学校数据 ────────────────────────────────────────────
const districts = [
  {
    id: "wwp",
    name: "West Windsor-Plainsboro (WW-P)",
    shortName: "WW-P 学区",
    color: "#2980b9",
    schools: [
      // 高中
      { name: "WW-P High School South", type: "高中", grades: "9-12", lat: 40.3058, lng: -74.6185, address: "346 Clarksville Road, West Windsor, NJ 08550", zone: "West Windsor（Grover Middle 升入）" },
      { name: "WW-P High School North", type: "高中", grades: "9-12", lat: 40.3224, lng: -74.6003, address: "90 Grovers Mill Road, Plainsboro, NJ 08536", zone: "Plainsboro（Community Middle 升入）" },
      // 初中
      { name: "Thomas R. Grover Middle School", type: "初中", grades: "6-8", lat: 40.2725, lng: -74.5930, address: "10 Southfield Road, West Windsor, NJ 08550", zone: "West Windsor → High School South" },
      { name: "Community Middle School", type: "初中", grades: "6-8", lat: 40.3247, lng: -74.5984, address: "95 Grovers Mill Road, Plainsboro, NJ 08536", zone: "Plainsboro → High School North" },
      // 高段小学（4-5年级）
      { name: "Village School (grades 4-5)", type: "小学", grades: "4-5", lat: 40.2726, lng: -74.5994, address: "601 New Village Road, West Windsor, NJ 08550", zone: "West Windsor 中区（升 Grover→HS South）" },
      { name: "Millstone River School (grades 3-5)", type: "小学", grades: "3-5", lat: 40.3247, lng: -74.5963, address: "75 Grovers Mill Road, Plainsboro, NJ 08536", zone: "Plainsboro（升 Community→HS North）" },
      // 低段小学（K-3年级）
      { name: "Dutch Neck Elementary (K-3)", type: "小学", grades: "K-3", lat: 40.2817, lng: -74.6097, address: "392 Village Road East, West Windsor, NJ 08550", zone: "West Windsor 南区" },
      { name: "Maurice Hawk Elementary (PreK-3)", type: "小学", grades: "PreK-3", lat: 40.3068, lng: -74.6263, address: "303-305 Clarksville Road, West Windsor, NJ 08550", zone: "West Windsor 北区" },
      { name: "Town Center Elementary (K-2)", type: "小学", grades: "K-2", lat: 40.3338, lng: -74.5823, address: "700 Wyndhurst Drive, Plainsboro, NJ 08536", zone: "Plainsboro 南区" },
      { name: "J.V.B. Wicoff Elementary (K-3)", type: "小学", grades: "K-3", lat: 40.3329, lng: -74.5939, address: "510 Plainsboro Road, Plainsboro, NJ 08536", zone: "Plainsboro 中区" },
    ],
  },
  {
    id: "princeton",
    name: "Princeton Public Schools",
    shortName: "Princeton 学区",
    color: "#27ae60",
    schools: [
      // 高中
      { name: "Princeton High School", type: "高中", grades: "9-12", lat: 40.3587, lng: -74.6560, address: "151 Moore Street, Princeton, NJ 08540" },
      // 初中
      { name: "Princeton Middle School", type: "初中", grades: "6-8", lat: 40.3607, lng: -74.6545, address: "217 Walnut Lane, Princeton, NJ 08540" },
      // 小学
      { name: "Community Park School", type: "小学", grades: "K-5", lat: 40.3584, lng: -74.6645, address: "372 Witherspoon Street, Princeton, NJ 08540", zone: "普林斯顿北区" },
      { name: "Johnson Park School", type: "小学", grades: "K-5", lat: 40.3487, lng: -74.6850, address: "285 Rosedale Road, Princeton, NJ 08540", zone: "普林斯顿西区" },
      { name: "Riverside School", type: "小学", grades: "K-5", lat: 40.3546, lng: -74.6377, address: "58 Riverside Drive, Princeton, NJ 08540", zone: "普林斯顿东区" },
      { name: "Littlebrook School", type: "小学", grades: "K-5", lat: 40.3640, lng: -74.6378, address: "39 Magnolia Lane, Princeton, NJ 08540", zone: "普林斯顿东北区" },
    ],
  },
  {
    id: "montgomery",
    name: "Montgomery Township",
    shortName: "Montgomery 学区",
    color: "#e67e22",
    schools: [
      // 高中
      { name: "Montgomery High School", type: "高中", grades: "9-12", lat: 40.4175, lng: -74.7065, address: "1016 Route 601, Skillman, NJ 08558" },
      // 初中
      { name: "Montgomery Upper Middle School (grades 7-8)", type: "初中", grades: "7-8", lat: 40.4285, lng: -74.6723, address: "375 Burnt Hill Road, Skillman, NJ 08558" },
      { name: "Montgomery Lower Middle School (grades 5-6)", type: "初中", grades: "5-6", lat: 40.4249, lng: -74.6686, address: "373 Burnt Hill Road, Skillman, NJ 08558" },
      // 小学
      { name: "Village Elementary School (grades 3-4)", type: "小学", grades: "3-4", lat: 40.4166, lng: -74.6871, address: "100 Main Boulevard, Skillman, NJ 08558" },
      { name: "Orchard Hill Elementary (PreK-2)", type: "小学", grades: "PreK-2", lat: 40.4202, lng: -74.6744, address: "244 Orchard Road, Skillman, NJ 08558" },
    ],
  },
  {
    id: "hopewell",
    name: "Hopewell Valley Regional",
    shortName: "Hopewell 学区",
    color: "#8e44ad",
    schools: [
      // 高中
      { name: "Hopewell Valley Central High School", type: "高中", grades: "9-12", lat: 40.3280, lng: -74.8030, address: "259 Pennington Titusville Rd, Pennington, NJ 08534" },
      // 初中
      { name: "Timberlane Middle School", type: "初中", grades: "6-8", lat: 40.3279, lng: -74.8083, address: "51 S. Timberlane Drive, Pennington, NJ 08534" },
      // 小学
      { name: "Bear Tavern Elementary (PreK-5)", type: "小学", grades: "PreK-5", lat: 40.3041, lng: -74.8464, address: "1162 Bear Tavern Road, Titusville, NJ 08560" },
      { name: "Hopewell Elementary (PreK-5)", type: "小学", grades: "PreK-5", lat: 40.3874, lng: -74.7581, address: "35 Princeton Avenue, Hopewell, NJ 08525" },
      { name: "Stony Brook Elementary (PreK-5)", type: "小学", grades: "PreK-5", lat: 40.3054, lng: -74.7591, address: "20 Stephenson Road, Pennington, NJ 08534" },
      { name: "Toll Gate Grammar School (PreK-5)", type: "小学", grades: "PreK-5", lat: 40.3210, lng: -74.7887, address: "275 South Main Street, Pennington, NJ 08534" },
    ],
  },
];

const typeRadius = { 高中: 10, 初中: 7, 小学: 5 };

// ── 自动调整视野：根据可见学校 fitBounds ──────────────────────
function MapController({ filteredDistricts }) {
  const map = useMap();
  useEffect(() => {
    const points = filteredDistricts.flatMap((d) =>
      d.schools.map((s) => L.latLng(s.lat, s.lng))
    );
    if (points.length === 0) return;
    const bounds = L.latLngBounds(points);
    map.fitBounds(bounds, { padding: [48, 48], maxZoom: 15 });
  }, [filteredDistricts, map]);
  return null;
}

// ── 地图图例组件 ───────────────────────────────────────────────
function MapLegend() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 24,
        right: 8,
        zIndex: 1000,
        background: "white",
        borderRadius: 10,
        boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
        padding: "12px 14px",
        minWidth: 180,
        pointerEvents: "none",
      }}
    >
      <div style={{ fontWeight: 700, fontSize: "0.78rem", marginBottom: 8, color: "#333" }}>
        学区图例
      </div>
      {districts.map((d) => (
        <div key={d.id} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
          <span
            style={{
              display: "inline-block",
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: d.color,
              flexShrink: 0,
            }}
          />
          <span style={{ fontSize: "0.78rem", color: "#555" }}>{d.shortName}</span>
        </div>
      ))}
      <div style={{ borderTop: "1px solid #eee", marginTop: 8, paddingTop: 8 }}>
        <div style={{ fontSize: "0.72rem", color: "#999", marginBottom: 4 }}>圆圈大小</div>
        {[["大", "高中"], ["中", "初中"], ["小", "小学"]].map(([size, label]) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
            <span style={{ fontSize: "0.72rem", color: "#777", width: 16, textAlign: "center" }}>{size}</span>
            <span style={{ fontSize: "0.72rem", color: "#777" }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── 主页面 ─────────────────────────────────────────────────────
const PrincetonSchoolsPage = () => {
  const navigate = useNavigate();
  const post = getPostById("princeton-school-guide");
  const { prev, next } = post ? getAdjacentPosts("princeton-school-guide") : { prev: null, next: null };
  const [activeDistrict, setActiveDistrict] = useState(null);

  const { color: catColor, bg: catBg } = categoryColors?.education || { color: "#1677ff", bg: "#e6f4ff" };

  const filteredDistricts = activeDistrict
    ? districts.filter((d) => d.id === activeDistrict)
    : districts;

  return (
    <div style={{ maxWidth: "820px", margin: "0 auto", padding: "32px 24px" }}>
      {/* 返回 */}
      <div
        onClick={() => navigate("/education")}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          color: "#888",
          fontSize: "0.875rem",
          cursor: "pointer",
          marginBottom: 20,
        }}
      >
        <ArrowLeftOutlined /> 教育
      </div>

      {/* 分类标签 */}
      <div style={{ marginBottom: 12 }}>
        <span
          style={{
            background: catBg,
            color: catColor,
            fontWeight: 600,
            fontSize: "0.78rem",
            padding: "3px 10px",
            borderRadius: 12,
            cursor: "pointer",
          }}
          onClick={() => navigate("/education")}
        >
          教育
        </span>
      </div>

      {/* 标题 */}
      <h1 style={{ fontSize: "1.8rem", fontWeight: 800, lineHeight: 1.3, marginBottom: 16, color: "#1a1a1a" }}>
        普林斯顿学区全指南：学校一览与学区地图
      </h1>

      {/* 元数据 */}
      {post && (
        <div style={{ display: "flex", gap: 16, color: "#999", fontSize: "0.85rem", marginBottom: 8, flexWrap: "wrap", alignItems: "center" }}>
          <span><UserOutlined style={{ marginRight: 4 }} />{post.author}</span>
          <span><CalendarOutlined style={{ marginRight: 4 }} />{post.published}</span>
          <span><ClockCircleOutlined style={{ marginRight: 4 }} />15 分钟阅读</span>
        </div>
      )}

      {/* 摘要 */}
      <p style={{ color: "#666", fontSize: "0.95rem", borderLeft: "3px solid #c0392b", paddingLeft: 12, margin: "20px 0 28px", lineHeight: 1.6 }}>
        普林斯顿周边有哪些公立学校？孩子住在哪个小区能上哪所学校？本文汇总 WW-P、Princeton Public Schools、Montgomery 等主要学区的所有学校，并提供交互地图帮助你直观了解学校分布。
      </p>

      {/* ── 交互地图 ── */}
      <div style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 12, color: "#1a1a1a" }}>
          学区学校分布地图
        </h2>
        <p style={{ color: "#666", fontSize: "0.875rem", marginBottom: 12 }}>
          点击地图上的圆点可查看学校信息。点击下方按钮可筛选学区。
        </p>

        {/* 学区筛选按钮 */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
          <button
            onClick={() => setActiveDistrict(null)}
            style={{
              padding: "5px 14px",
              borderRadius: 20,
              border: "none",
              background: !activeDistrict ? "#1a1a1a" : "#f0f0f0",
              color: !activeDistrict ? "white" : "#555",
              cursor: "pointer",
              fontSize: "0.82rem",
              fontWeight: 600,
            }}
          >
            全部学区
          </button>
          {districts.map((d) => (
            <button
              key={d.id}
              onClick={() => setActiveDistrict(activeDistrict === d.id ? null : d.id)}
              style={{
                padding: "5px 14px",
                borderRadius: 20,
                border: "none",
                background: activeDistrict === d.id ? d.color : "#f0f0f0",
                color: activeDistrict === d.id ? "white" : "#555",
                cursor: "pointer",
                fontSize: "0.82rem",
                fontWeight: 600,
              }}
            >
              {d.shortName}
            </button>
          ))}
        </div>

        {/* 地图容器 */}
        <div style={{ height: 460, borderRadius: 12, overflow: "hidden", border: "1px solid #e8e8e8", position: "relative" }}>
          <MapContainer
            center={[40.335, -74.648]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
            scrollWheelZoom={false}
          >
            <MapController filteredDistricts={filteredDistricts} />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {filteredDistricts.map((district) =>
              district.schools.map((school) => (
                <CircleMarker
                  key={`${district.id}-${school.name}`}
                  center={[school.lat, school.lng]}
                  radius={typeRadius[school.type] || 7}
                  pathOptions={{
                    color: district.color,
                    fillColor: district.color,
                    fillOpacity: 0.85,
                    weight: 2,
                  }}
                >
                  <Popup>
                    <div style={{ minWidth: 200 }}>
                      <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 4 }}>{school.name}</div>
                      <div style={{ fontSize: "0.82rem", color: "#555", marginBottom: 2 }}>
                        <span
                          style={{
                            background: district.color,
                            color: "white",
                            padding: "1px 7px",
                            borderRadius: 10,
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            marginRight: 6,
                          }}
                        >
                          {school.type}
                        </span>
                        {school.grades} 年级
                      </div>
                      <div style={{ fontSize: "0.82rem", color: "#777", marginTop: 4 }}>{district.name}</div>
                      {school.address && (
                        <div style={{ fontSize: "0.76rem", color: "#888", marginTop: 3 }}>{school.address}</div>
                      )}
                      {school.zone && (
                        <div style={{ fontSize: "0.78rem", color: "#999", marginTop: 2 }}>覆盖区域：{school.zone}</div>
                      )}
                    </div>
                  </Popup>
                </CircleMarker>
              ))
            )}
            <MapLegend />
          </MapContainer>
        </div>
        <p style={{ fontSize: "0.78rem", color: "#aaa", marginTop: 8 }}>
          注：学校位置为近似坐标，仅供参考。确切地址及学区范围请以各学区官网为准。
        </p>
      </div>

      {/* ── 文章正文 ── */}
      <div className="note-content">

        <h2>一、普林斯顿地区有哪些公立学区？</h2>
        <p>
          普林斯顿周边共有多个公立学区，华人家庭最关注的主要是以下四个：
        </p>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 24 }}>
          <thead>
            <tr style={{ background: "#f8f8f8" }}>
              {["学区", "覆盖区域", "华人聚居度", "GreatSchools 评分"].map((h) => (
                <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #e8e8e8", fontSize: "0.88rem" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["West Windsor-Plainsboro (WW-P)", "West Windsor + Plainsboro", "★★★★★", "8–10 / 10"],
              ["Princeton Public Schools", "Princeton Borough / Township", "★★★★", "8–9 / 10"],
              ["Montgomery Township", "Montgomery Township", "★★★☆", "7–9 / 10"],
              ["Hopewell Valley Regional", "Hopewell Township 等", "★★☆", "7–8 / 10"],
            ].map(([a, b, c, d], i) => (
              <tr key={i} style={{ borderBottom: "1px solid #f0f0f0" }}>
                {[a, b, c, d].map((cell, j) => (
                  <td key={j} style={{ padding: "10px 14px", fontSize: "0.88rem", color: "#444" }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <hr />

        <h2>二、West Windsor-Plainsboro (WW-P) 学区详解</h2>
        <p>
          这是大普林斯顿地区华人最集中的学区，华裔学生比例约 35–40%，全国排名靠前。学区跨越 <strong>West Windsor Township</strong>（Mercer County）和 <strong>Plainsboro Township</strong>（Middlesex County）两个镇，共 10 所学校。
        </p>

        <h3>小学（Elementary）——学制分两段</h3>
        <p>WW-P 的小学分为"低段"（K/PreK–3 年级）和"高段"（3–5 或 4–5 年级）共 <strong>6 所</strong>，就读学校由住址决定：</p>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 20 }}>
          <thead>
            <tr style={{ background: "#eaf4fb" }}>
              {["学校名称", "年级", "地址", "所在区域"].map((h) => (
                <th key={h} style={{ padding: "9px 12px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #d0e8f8", fontSize: "0.85rem" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Dutch Neck Elementary", "K–3", "392 Village Road East, West Windsor", "West Windsor 南区"],
              ["Maurice Hawk Elementary", "PreK–3", "303-305 Clarksville Road, West Windsor", "West Windsor 北区"],
              ["Town Center Elementary", "K–2", "700 Wyndhurst Drive, Plainsboro", "Plainsboro 南区"],
              ["J.V.B. Wicoff Elementary", "K–3", "510 Plainsboro Road, Plainsboro", "Plainsboro 中区"],
              ["Village School", "4–5", "601 New Village Road, West Windsor", "West Windsor（高段小学）"],
              ["Millstone River School", "3–5", "75 Grovers Mill Road, Plainsboro", "Plainsboro（高段小学）"],
            ].map(([a, b, c, d], i) => (
              <tr key={i} style={{ borderBottom: "1px solid #f0f0f0" }}>
                <td style={{ padding: "9px 12px", fontSize: "0.85rem", fontWeight: 600, color: "#2980b9" }}>{a}</td>
                <td style={{ padding: "9px 12px", fontSize: "0.85rem", color: "#444" }}>{b}</td>
                <td style={{ padding: "9px 12px", fontSize: "0.85rem", color: "#555" }}>{c}</td>
                <td style={{ padding: "9px 12px", fontSize: "0.85rem", color: "#444" }}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p style={{ background: "#fff8e1", padding: "12px 16px", borderRadius: 8, borderLeft: "4px solid #f1c40f", color: "#555" }}>
          <strong>重要提示：</strong>同一小镇不同街道可能属于不同小学学区。买房前务必用学区官网的 <a href="https://www.west-windsor-plainsboro.k12.nj.us/about_us/Transportation/what_school_" target="_blank" rel="noopener noreferrer">"What School?"工具</a> 或 <a href="https://www.greatschools.org" target="_blank" rel="noopener noreferrer">GreatSchools.org</a> 用具体地址查询。
        </p>

        <h3>初中（Middle School，6–8 年级）</h3>
        <p>根据小学就读学校，学生升入对应的初中：</p>
        <ul>
          <li><strong>Thomas R. Grover Middle School</strong>（10 Southfield Road, West Windsor）：Dutch Neck、Maurice Hawk 小学区域的学生，以及 Village School（4–5年级）的学生升入</li>
          <li><strong>Community Middle School</strong>（95 Grovers Mill Road, Plainsboro）：Wicoff、Town Center 小学区域的学生，以及 Millstone River School（3–5年级）的学生升入</li>
        </ul>

        <h3>高中（High School，9–12 年级）</h3>
        <p>WW-P 有两所高中，均提供丰富的 AP 课程、竞赛团队和大学升学辅导：</p>
        <ul>
          <li><strong>WW-P High School South</strong>（346 Clarksville Road, West Windsor）：Grover Middle School 的学生升入</li>
          <li><strong>WW-P High School North</strong>（90 Grovers Mill Road, Plainsboro）：Community Middle School 的学生升入</li>
        </ul>
        <p>两所高中教学质量相当，近年来 AP 和 SAT 成绩均名列新泽西前列。</p>

        <h3>WW-P 学区买房参考小区</h3>
        <ul>
          <li><strong>West Windsor 热门小区：</strong>Princeton Oaks、Wyndhurst、Brandon Farms、Nassau Park 周边、Windsor Village</li>
          <li><strong>Plainsboro 热门小区：</strong>Plainsboro Village、Somerset Run、Clearview Estates、Canal Pointe（研究生公寓区）</li>
        </ul>

        <hr />

        <h2>三、Princeton Public Schools 详解</h2>
        <p>
          普林斯顿市公立学校体系，覆盖 Princeton Borough 和 Princeton Township。学区多元化程度高，与普林斯顿大学关系密切，部分活动和资源有大学背景。
        </p>

        <h3>小学（K–5）</h3>
        <p>Princeton 共有 <strong>4 所小学</strong>，按住址划分就读学校：</p>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 20 }}>
          <thead>
            <tr style={{ background: "#eafaf1" }}>
              {["学校名称", "地址", "覆盖区域"].map((h) => (
                <th key={h} style={{ padding: "9px 12px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #a9dfbf", fontSize: "0.85rem" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Community Park School", "372 Witherspoon Street", "普林斯顿北区"],
              ["Johnson Park School",   "285 Rosedale Road",      "普林斯顿西区"],
              ["Riverside School",      "58 Riverside Drive",     "普林斯顿东区"],
              ["Littlebrook School",    "39 Magnolia Lane",       "普林斯顿东北区"],
            ].map(([a, b, c], i) => (
              <tr key={i} style={{ borderBottom: "1px solid #f0f0f0" }}>
                <td style={{ padding: "9px 12px", fontSize: "0.85rem", fontWeight: 600, color: "#27ae60" }}>{a}</td>
                <td style={{ padding: "9px 12px", fontSize: "0.85rem", color: "#555" }}>{b}</td>
                <td style={{ padding: "9px 12px", fontSize: "0.85rem", color: "#444" }}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>初中（6–8）</h3>
        <p>
          <strong>Princeton Middle School</strong>（217 Walnut Lane）— 全市唯一一所公立初中，四所小学的学生均升入此校。
          <br /><span style={{ color: "#888", fontSize: "0.85rem" }}>原名 John Witherspoon Middle School，2021 年更名。</span>
        </p>

        <h3>高中（9–12）</h3>
        <p>
          <strong>Princeton High School</strong>（151 Moore Street）— 历史悠久，升学率高。多元化氛围浓厚，艺术和人文类资源丰富，与普林斯顿大学联系紧密。Princeton 市内房价普遍较高。
        </p>

        <hr />

        <h2>四、Montgomery Township 学区</h2>
        <p>
          位于普林斯顿北部（Somerset County），整体学区质量优秀，华裔家庭逐渐增多。房价相比 Princeton 市区和 WW-P 相对实惠，适合追求性价比的家庭。学区共 5 所学校，全部位于 Skillman，NJ 08558。
        </p>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 20 }}>
          <thead>
            <tr style={{ background: "#fef3e7" }}>
              {["学校名称", "年级", "地址"].map((h) => (
                <th key={h} style={{ padding: "9px 12px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #f5d8b0", fontSize: "0.85rem" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Orchard Hill Elementary", "PreK–2", "244 Orchard Road, Skillman"],
              ["Village Elementary School", "3–4", "100 Main Boulevard, Skillman"],
              ["Montgomery Lower Middle School", "5–6", "373 Burnt Hill Road, Skillman"],
              ["Montgomery Upper Middle School", "7–8", "375 Burnt Hill Road, Skillman"],
              ["Montgomery High School", "9–12", "1016 Route 601, Skillman"],
            ].map(([a, b, c], i) => (
              <tr key={i} style={{ borderBottom: "1px solid #f0f0f0" }}>
                <td style={{ padding: "9px 12px", fontSize: "0.85rem", fontWeight: 600, color: "#e67e22" }}>{a}</td>
                <td style={{ padding: "9px 12px", fontSize: "0.85rem", color: "#444" }}>{b}</td>
                <td style={{ padding: "9px 12px", fontSize: "0.85rem", color: "#555" }}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Montgomery High School 全国排名靠前（US News 2025 年新泽西排名 #26），AP 课程完善。</p>

        <hr />

        <h2>五、Hopewell Valley Regional 学区</h2>
        <p>
          覆盖 Hopewell Borough、Hopewell Township 和 Pennington Borough（均属 Mercer County），位于普林斯顿西北方向。风景优美，适合喜欢郊区环境的家庭，通勤去普林斯顿约 15–20 分钟。学区共 6 所学校。
        </p>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 20 }}>
          <thead>
            <tr style={{ background: "#f5eefb" }}>
              {["学校名称", "年级", "地址"].map((h) => (
                <th key={h} style={{ padding: "9px 12px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #d9b3f5", fontSize: "0.85rem" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Bear Tavern Elementary", "PreK–5", "1162 Bear Tavern Road, Titusville, NJ 08560"],
              ["Hopewell Elementary", "PreK–5", "35 Princeton Avenue, Hopewell, NJ 08525"],
              ["Stony Brook Elementary", "PreK–5", "20 Stephenson Road, Pennington, NJ 08534"],
              ["Toll Gate Grammar School", "PreK–5", "275 South Main Street, Pennington, NJ 08534"],
              ["Timberlane Middle School", "6–8", "51 S. Timberlane Drive, Pennington, NJ 08534"],
              ["Hopewell Valley Central High School", "9–12", "259 Pennington Titusville Rd, Pennington, NJ 08534"],
            ].map(([a, b, c], i) => (
              <tr key={i} style={{ borderBottom: "1px solid #f0f0f0" }}>
                <td style={{ padding: "9px 12px", fontSize: "0.85rem", fontWeight: 600, color: "#8e44ad" }}>{a}</td>
                <td style={{ padding: "9px 12px", fontSize: "0.85rem", color: "#444" }}>{b}</td>
                <td style={{ padding: "9px 12px", fontSize: "0.85rem", color: "#555" }}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>学区总部：425 S. Main St., Pennington, NJ 08534。官网：<a href="https://www.hvrsd.org" target="_blank" rel="noopener noreferrer">hvrsd.org</a></p>

        <hr />

        <h2>六、如何查询你家的学区归属</h2>
        <p>在普林斯顿地区买房租房，一定要先查好地址对应的学区和具体学校：</p>
        <ol>
          <li>
            <strong>WW-P 学区官网</strong>（最准确）：<br />
            进入 <a href="https://www.west-windsor-plainsboro.k12.nj.us/about_us/Transportation/what_school_" target="_blank" rel="noopener noreferrer">west-windsor-plainsboro.k12.nj.us</a>，找"What School?"工具，输入地址即可查询对应的小学、初中、高中。
          </li>
          <li>
            <strong>GreatSchools.org</strong>：<br />
            在 <a href="https://www.greatschools.org" target="_blank" rel="noopener noreferrer">greatschools.org</a> 输入地址，可查学区归属 + 学校评分 + 考试数据。
          </li>
          <li>
            <strong>Zillow / Redfin 房源页面</strong>：<br />
            每个房源页面通常直接显示所属学区和学校评分，看房时可作初步参考。
          </li>
          <li>
            <strong>直接联系学区办公室</strong>：<br />
            如有疑问，可直接联系对应学区的教务处，提供地址确认就读学校。
          </li>
        </ol>

        <hr />

        <h2>七、华人家长常见问题</h2>

        <h3>WW-P 还是 Princeton，哪个更好？</h3>
        <p>
          这是最常见的问题，答案取决于你的优先级：
        </p>
        <ul>
          <li><strong>WW-P</strong>：学术竞争更激烈，华裔比例高（利弊并存），AP 课和理工类资源强，房价相对 Princeton 市区便宜。</li>
          <li><strong>Princeton</strong>：多元化更好，艺术/人文资源丰富，学校规模较小，与普林斯顿大学的联系更紧密，但房价高。</li>
        </ul>
        <p>两个学区升学率都很高，最终取决于孩子的性格和家庭的生活需求。</p>

        <h3>同一学区内选哪所小学更好？</h3>
        <p>
          WW-P 五所小学的 GreatSchools 评分都在 8–9 分，差距不大。更重要的是具体小区的通勤距离、邻居社群氛围，以及孩子未来对应的初中升高中路径。
        </p>

        <h3>学区划分会变吗？</h3>
        <p>
          偶尔会因学生人数变化调整。历史上 WW-P 曾多次调整小学就读区划，买房前最好确认最新划分，不要完全依赖几年前的信息。
        </p>

        <hr />

        <h2>八、实用资源链接</h2>
        <ul>
          <li><a href="https://www.west-windsor-plainsboro.k12.nj.us" target="_blank" rel="noopener noreferrer">WW-P 学区官网</a> — 最权威的学区信息来源</li>
          <li><a href="https://www.princetonk12.org" target="_blank" rel="noopener noreferrer">Princeton Public Schools 官网</a></li>
          <li><a href="https://www.mtsd.k12.nj.us" target="_blank" rel="noopener noreferrer">Montgomery Township School District</a></li>
          <li><a href="https://www.hvrsd.org" target="_blank" rel="noopener noreferrer">Hopewell Valley Regional School District</a></li>
          <li><a href="https://www.greatschools.org/new-jersey/" target="_blank" rel="noopener noreferrer">GreatSchools — 新泽西学校搜索</a></li>
          <li><a href="https://rc.doe.state.nj.us" target="_blank" rel="noopener noreferrer">NJ DOE 学校报告卡</a> — 官方考试数据</li>
        </ul>

        <p style={{ background: "#f6f6f6", padding: "12px 16px", borderRadius: 8, color: "#888", fontSize: "0.875rem" }}>
          以上信息基于社区成员经验汇总，学区划分和学校情况每年可能有调整，请以各学区官方网站发布的最新信息为准。
        </p>

      </div>

      {/* 标签 */}
      {post?.tags?.length > 0 && (
        <div style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid #f0f0f0", display: "flex", gap: 8, flexWrap: "wrap" }}>
          {post.tags.map((tag) => (
            <Tag key={tag} style={{ borderRadius: 12 }}>{tag}</Tag>
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

export default PrincetonSchoolsPage;
