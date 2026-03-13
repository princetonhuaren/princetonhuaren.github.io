import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Tag } from "antd";
import { ArrowLeftOutlined, CalendarOutlined, UserOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { getPostById, getAdjacentPosts } from "../assets/posts";
import { categoryColors } from "../assets/categories";

// ── 分类 ──────────────────────────────────────────────────────
const categories = [
  { id: "outdoor", name: "室外公园", color: "#27ae60" },
  { id: "indoor", name: "室内游乐", color: "#e67e22" },
  { id: "farm", name: "农场/自然", color: "#8e44ad" },
];

// ── 地点数据 ──────────────────────────────────────────────────
const places = [
  // ── 室外公园 ──
  {
    name: "Hilltop Park Playground",
    category: "outdoor",
    type: "综合游乐场",
    address: "Bunn Dr, 3500 n of Harrison St, Princeton, NJ 08540",
    lat: 40.3763,
    lng: -74.6528,
    note: "大型综合游乐区，有滑梯、秋千、攀爬架，草坪开阔，停车方便，适合各年龄段",
    hours: "日出至日落",
  },
  {
    name: "Marquand Park",
    category: "outdoor",
    type: "公园 / 植物园",
    address: "eland Rd & Lovers Ln, Princeton, NJ 08540",
    lat: 40.3413,
    lng: -74.6709,
    note: "普林斯顿市区内的老牌公园，有百年大树、开阔草坪和小型游乐设施，适合野餐遛娃。秋天落叶极美",
    hours: "全天开放",
    website: "https://www.marquandpark.org/",
  },
  {
    name: "Plainsboro Community Park",
    category: "outdoor",
    type: "综合公园",
    address: "Park Dr, East Windsor, NJ 08512",
    lat: 40.3433,
    lng: -74.5622,
    note: "有大型游乐场、篮球场、网球场和足球场，设施新，草坪大，遛娃运动都方便",
    hours: "日出至日落",
  },
  {
    name: "Community Park North",
    category: "outdoor",
    type: "综合游乐场",
    address: "Mountain Avenue & Route 206, Mountain Ave, Princeton, NJ 08540",
    lat: 40.3604,
    lng: -74.6707,
    note: "露天剧场停车场、野餐桌、洗手间、步行道",
    hours: "日出至日落",
  },
  {
    name: "Pettoranello Gardens",
    category: "outdoor",
    type: "公园 / 游乐场",
    address: "20 Mountain Ave, Princeton, NJ 08540",
    lat: 40.3585,
    lng: -74.67,
    note: "社区公园，环境安静，适合带小宝宝散步",
    hours: "全天开放",
  },

  // ── 室内游乐 ──
  {
    name: "Whee Zone",
    category: "indoor",
    type: "室内游乐场",
    address: "3562 NJ-27 STE # 126-129, Kendall Park, NJ 08824",
    lat: 40.4207,
    lng: -74.5773,
    note: "大型室内充气堡乐园，有各种充气滑梯和跳跳床，适合 2–12 岁。$15/孩子。雨天首选！",
    phone: "+17322025060",
    hours: "Monday- CLOSED (see special hours below), Tuesday- Friday: 11:00 AM- 8:00 PM, Saturday- Sunday: 9:00 AM- 9:00 PM",
    website: "https://wheezone.com/",
  },
  {
    name: "Chuck E. Cheese",
    category: "indoor",
    type: "游乐餐厅",
    address: "520 Nassau Park Blvd, Princeton, NJ 08540",
    lat: 40.3062,
    lng: -74.6788,
    note: "游戏机 + 披萨 + 生日派对，孩子超喜欢。适合 3–10 岁，含代币购买套餐",
    phone: "+16095140908",
    hours: "周一–四 11am–9pm，周五 11am–10pm，周六 10am–10pm， 周日 11am-9pm",
    website: "https://www.chuckecheese.com/princeton-nj/",
  },
  {
    name: "Princeton Family Adventure Center",
    category: "indoor",
    type: "室内综合游乐",
    address: "301 N Harrison St unit 215, Princeton, NJ 08540",
    lat: 40.3636,
    lng: -74.6508,
    note: "室内攀岩、蹦床、游乐区合一，适合各年龄，含生日派对场地预订",
    hours: "周一-周四 12pm - 9pm， 周五-周日 09am - 09pm",
    website: "https://www.prinfac.com/",
  },
  {
    name: "Barnes & Noble – Market Fair",
    category: "indoor",
    type: "书店 / Story Time",
    address: "3535 US-1, Princeton, NJ 08540",
    lat: 40.3155,
    lng: -74.6599,
    note: "大型书店，儿童区宽敞。每周六上午有免费 Story Time，适合 2–6 岁小朋友，建议提前查官网确认时间。",
    hours: "周一–周六 9am–10pm，周日 10am–9pm",
    website: "https://stores.barnesandnoble.com/store/2288",
  },
  // {
  //   name: "Scene 75 Entertainment Center",
  //   category: "indoor",
  //   type: "大型娱乐中心",
  //   address: "488 US-130, East Windsor, NJ 08520",
  //   lat: 40.2785,
  //   lng: -74.5388,
  //   note: "超大型室内娱乐中心，有卡丁车、迷你高尔夫、游戏厅、保龄球，适合全家出游。距普林斯顿约 20 分钟",
  //   hours: "周一–四 11am–10pm，周五 11am–12am，周末 10am–12am",
  // },
  // {
  //   name: "Bounce! Trampoline Sports",
  //   category: "indoor",
  //   type: "蹦床乐园",
  //   address: "612 Corporate Way, Valley Cottage, NY 10989",
  //   lat: 40.2624,
  //   lng: -74.2978,
  //   note: "大型蹦床公园，有自由跳区、泡沫坑、篮球弹跳，适合 5 岁以上。距普林斯顿约 35 分钟",
  //   hours: "周一–四 3pm–8pm，周末 10am–8pm",
  // },

  // ── 农场 / 自然 ──
  {
    name: "Terhune Orchards",
    category: "farm",
    type: "农场 / 果园",
    address: "330 Cold Soil Rd, Princeton, NJ 08540",
    lat: 40.332,
    lng: -74.7256,
    note: "普林斯顿本地农场，春夏秋不同时节可摘草莓、蓝莓、苹果，有农场动物，孩子超喜欢。$5–$10/人入场",
    phone: "(609) 924-2310",
    hours: "每天 9am–6pm（季节性，建议提前查官网）",
    website: "https://www.terhuneorchards.com/",
  },
  // {
  //   name: "Howell Living History Farm",
  //   category: "farm",
  //   type: "历史农场",
  //   address: "101 Hunter Rd, Titusville, NJ 08560",
  //   lat: 40.3021,
  //   lng: -74.8312,
  //   note: "19 世纪风格运作的活历史农场，可看耕作演示、喂动物，免费入场。适合 4 岁以上",
  //   phone: "(609) 737-3299",
  //   hours: "周二–周六 10am–4pm（4月–11月）",
  // },
];

// ── 地图视野控制 ──────────────────────────────────────────────
function MapController({ visiblePlaces }) {
  const map = useMap();
  useEffect(() => {
    const points = visiblePlaces.map((p) => L.latLng(p.lat, p.lng));
    if (points.length === 0) return;
    const bounds = L.latLngBounds(points);
    map.fitBounds(bounds, { padding: [48, 48], maxZoom: 14 });
  }, [visiblePlaces, map]);
  return null;
}

// ── 图例 ─────────────────────────────────────────────────────
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
        minWidth: 140,
        pointerEvents: "none",
      }}
    >
      <div style={{ fontWeight: 700, fontSize: "0.78rem", marginBottom: 8, color: "#333" }}>图例</div>
      {categories.map((c) => (
        <div key={c.id} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
          <span
            style={{
              display: "inline-block",
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: c.color,
              flexShrink: 0,
            }}
          />
          <span style={{ fontSize: "0.78rem", color: "#555" }}>{c.name}</span>
        </div>
      ))}
    </div>
  );
}

// ── 主页面 ─────────────────────────────────────────────────────
const PrincetonKidsPage = () => {
  const navigate = useNavigate();
  const post = getPostById("princeton-kids-places");
  const { prev, next } = post ? getAdjacentPosts("princeton-kids-places") : { prev: null, next: null };
  const [activeCategory, setActiveCategory] = useState(null);

  const { color: catColor, bg: catBg } = categoryColors?.life || { color: "#fa8c16", bg: "#fff7e6" };

  const visiblePlaces = activeCategory ? places.filter((p) => p.category === activeCategory) : places;

  const getCatColor = (id) => categories.find((c) => c.id === id)?.color || "#888";
  const getCatName = (id) => categories.find((c) => c.id === id)?.name || id;

  return (
    <div style={{ maxWidth: "820px", margin: "0 auto", padding: "32px 24px" }}>
      {/* 返回 */}
      <div onClick={() => navigate("/life")} style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#888", fontSize: "0.875rem", cursor: "pointer", marginBottom: 20 }}>
        <ArrowLeftOutlined /> 生活
      </div>

      {/* 分类标签 */}
      <div style={{ marginBottom: 12 }}>
        <span style={{ background: catBg, color: catColor, fontWeight: 600, fontSize: "0.78rem", padding: "3px 10px", borderRadius: 12, cursor: "pointer" }} onClick={() => navigate("/life")}>
          生活
        </span>
      </div>

      {/* 标题 */}
      <h1 style={{ fontSize: "1.8rem", fontWeight: 800, lineHeight: 1.3, marginBottom: 16, color: "#1a1a1a" }}>普林斯顿遛娃地图：室内外亲子场所全整理</h1>

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
          {post.updated && post.updated !== post.published && (
            <span style={{ color: "#bbb" }}>最后更新：{post.updated}</span>
          )}
          <span>
            <ClockCircleOutlined style={{ marginRight: 4 }} />
            {post.readingTime} 分钟阅读
          </span>
        </div>
      )}

      {/* 摘要 */}
      <p style={{ color: "#666", fontSize: "0.95rem", borderLeft: "3px solid #27ae60", paddingLeft: 12, margin: "20px 0 28px", lineHeight: 1.6 }}>
        整理普林斯顿周边室内外亲子好去处。天气好去公园草坪，下雨天冲室内游乐场，周末想换口味去农场摘果子——总有一款适合今天的心情。
      </p>

      {/* 快速导航卡片 */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 32 }}>
        {[
          { id: "outdoor", emoji: "🌳", desc: "公园、草坪、步道" },
          { id: "indoor", emoji: "🎠", desc: "游乐场、蹦床、游戏" },
          { id: "farm", emoji: "🍓", desc: "农场、摘果、动物" },
        ].map((item) => {
          const cat = categories.find((c) => c.id === item.id);
          return (
            <div
              key={item.id}
              onClick={() => setActiveCategory(activeCategory === item.id ? null : item.id)}
              style={{
                padding: "14px 12px",
                borderRadius: 12,
                border: `2px solid ${activeCategory === item.id ? cat.color : "#e8e8e8"}`,
                background: activeCategory === item.id ? `${cat.color}12` : "white",
                cursor: "pointer",
                textAlign: "center",
                transition: "all 0.15s",
              }}
            >
              <div style={{ fontSize: "1.6rem", marginBottom: 4 }}>{item.emoji}</div>
              <div style={{ fontWeight: 700, fontSize: "0.85rem", color: cat.color }}>{cat.name}</div>
              <div style={{ fontSize: "0.75rem", color: "#999", marginTop: 2 }}>{item.desc}</div>
            </div>
          );
        })}
      </div>

      {/* ── 地图 ── */}
      <div style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>位置地图</h2>

        {/* 筛选按钮 */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
          <button
            onClick={() => setActiveCategory(null)}
            style={{
              padding: "5px 14px",
              borderRadius: 20,
              border: "none",
              cursor: "pointer",
              fontSize: "0.82rem",
              fontWeight: 600,
              background: !activeCategory ? "#1a1a1a" : "#f0f0f0",
              color: !activeCategory ? "white" : "#555",
            }}
          >
            全部
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(activeCategory === c.id ? null : c.id)}
              style={{
                padding: "5px 14px",
                borderRadius: 20,
                border: "none",
                cursor: "pointer",
                fontSize: "0.82rem",
                fontWeight: 600,
                background: activeCategory === c.id ? c.color : "#f0f0f0",
                color: activeCategory === c.id ? "white" : "#555",
              }}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* 地图容器 */}
        <div style={{ height: 460, borderRadius: 12, overflow: "hidden", border: "1px solid #e8e8e8", position: "relative" }}>
          <MapContainer center={[40.335, -74.648]} zoom={11} style={{ height: "100%", width: "100%" }} scrollWheelZoom={false}>
            <MapController visiblePlaces={visiblePlaces} />
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            {visiblePlaces.map((place) => (
              <CircleMarker
                key={place.name}
                center={[place.lat, place.lng]}
                radius={9}
                pathOptions={{
                  color: getCatColor(place.category),
                  fillColor: getCatColor(place.category),
                  fillOpacity: 0.85,
                  weight: 2,
                }}
              >
                <Popup>
                  <div style={{ minWidth: 200 }}>
                    <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 4 }}>{place.name}</div>
                    <span style={{ background: getCatColor(place.category), color: "white", padding: "1px 7px", borderRadius: 10, fontSize: "0.75rem", fontWeight: 600 }}>
                      {getCatName(place.category)}
                    </span>
                    <div style={{ fontSize: "0.82rem", color: "#555", marginTop: 6 }}>{place.type}</div>
                    <div style={{ fontSize: "0.78rem", color: "#888", marginTop: 3 }}>{place.address}</div>
                    {place.hours && <div style={{ fontSize: "0.78rem", color: "#888", marginTop: 2 }}>🕐 {place.hours}</div>}
                    {place.phone && <div style={{ fontSize: "0.78rem", color: "#888", marginTop: 2 }}>📞 {place.phone}</div>}
                    {place.note && <div style={{ fontSize: "0.8rem", color: "#555", marginTop: 6, borderTop: "1px solid #f0f0f0", paddingTop: 4 }}>{place.note}</div>}
                  </div>
                </Popup>
              </CircleMarker>
            ))}
            <MapLegend />
          </MapContainer>
        </div>
        <p style={{ fontSize: "0.78rem", color: "#aaa", marginTop: 8 }}>注：标记位置为近似坐标，出发前请用 Google Maps 确认地址和营业时间。</p>
      </div>

      {/* ── 地点列表 ── */}
      <div className='note-content'>
        {categories.map((cat) => {
          const items = visiblePlaces.filter((p) => p.category === cat.id);
          if (items.length === 0) return null;
          return (
            <div key={cat.id} style={{ marginBottom: 32 }}>
              <h2 style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ display: "inline-block", width: 12, height: 12, borderRadius: "50%", background: cat.color }} />
                {cat.name}
              </h2>
              {items.map((place) => (
                <div key={place.name} style={{ borderLeft: `3px solid ${cat.color}`, paddingLeft: 14, marginBottom: 20 }}>
                  <div style={{ fontWeight: 700, fontSize: "1rem", color: "#1a1a1a", marginBottom: 2 }}>{place.name}</div>
                  <div style={{ fontSize: "0.82rem", color: "#888", marginBottom: 4 }}>
                    {place.type} · {place.address}
                  </div>
                  {place.hours && <div style={{ fontSize: "0.82rem", color: "#888" }}>🕐 {place.hours}</div>}
                  {place.phone && <div style={{ fontSize: "0.82rem", color: "#888" }}>📞 {place.phone}</div>}
                  {place.note && <div style={{ fontSize: "0.875rem", color: "#555", marginTop: 4 }}>{place.note}</div>}
                </div>
              ))}
            </div>
          );
        })}

        <p style={{ background: "#f6f6f6", padding: "12px 16px", borderRadius: 8, color: "#888", fontSize: "0.875rem" }}>
          以上信息来自社区成员经验及网络整理，营业时间和价格随时可能变化，出发前建议用 Google Maps 确认。欢迎在微信群补充更多遛娃好去处！
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

export default PrincetonKidsPage;
