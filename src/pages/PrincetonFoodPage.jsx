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
  { id: "chinese", name: "中餐馆", color: "#c0392b" },
  { id: "noodles", name: "面食/小吃", color: "#27ae60" },
  { id: "hotpot", name: "火锅", color: "#e67e22" },
  { id: "supermarket", name: "亚洲超市", color: "#2980b9" },
];

// ── 地点数据 ──────────────────────────────────────────────────
const places = [
  // ── 中餐馆 ──
  // {
  //   name: "First Wok 中餐馆",
  //   category: "chinese",
  //   cuisine: "粤菜 / 川菜 / 普通话菜",
  //   address: "295 Princeton Hightstown Rd, West Windsor, NJ 08550",
  //   lat: 40.2984,
  //   lng: -74.6149,
  //   note: "20年老店，菜量大，性价比高，堂食外卖均可",
  //   phone: "(609) 716-8323",
  //   hours: "Mon–Wed 11:30am–9pm",
  // },
  {
    name: "Shanghai Bun 六禾园",
    category: "noodles",
    cuisine: "上海菜 / 手工面 / 点心",
    address: "Southfield Shopping Center, West Windsor, NJ 08550",
    lat: 40.3181,
    lng: -74.6189,
    note: "汤包，面条，炒菜。$20-$30/人，适合家庭聚餐。 https://www.shanghaibun08550.com/",
  },
  {
    name: "Asian Bistro",
    category: "chinese",
    cuisine: "亚洲融合",
    address: "31 Station Dr, Princeton Junction, NJ 08550",
    lat: 40.3183,
    lng: -74.6217,
    note: "火车站旁边，BYOB，休闲风格",
  },
  // {
  //   name: "Hunan Chinese Restaurant",
  //   category: "chinese",
  //   cuisine: "湘菜",
  //   address: "1225 Route 206, Princeton, NJ 08540",
  //   lat: 40.3278,
  //   lng: -74.6748,
  //   note: "菜单丰富，老牌湘菜",
  //   phone: "(609) 921-0995",
  // },
  {
    name: "莲园Lotus Garden",
    category: "chinese",
    cuisine: "中餐馆",
    address: "10 Schalks Crossing Rd, Plainsboro Township, NJ 08536",
    lat: 40.3371,
    lng: -74.596,
    note: "味道不错，撑过疫情的餐馆, $20-$30/人",
  },
  {
    name: "锦里 SC house",
    category: "chinese",
    cuisine: "正宗川菜",
    address: "238 Nassau St, Princeton, NJ 08542",
    lat: 40.3521,
    lng: -74.6521,
    note: "正宗四川口味，辣度可调, $20-$30/人",
  },
  {
    name: "P.F. Chang's",
    category: "chinese",
    cuisine: "美式中餐 / 泛亚融合",
    address: "3545 US Route 1 S, Princeton, NJ 08540",
    lat: 40.3153,
    lng: -74.6585,
    note: "连锁，Quakerbridge Mall 旁，适合聚会。$20-$30/人",
    phone: "(609) 799-5163",
  },
  {
    name: "刘一手Liuyishou Hotpot(Princeton)",
    category: "chinese",
    cuisine: "火锅",
    address: "3349 Brunswick Pike #68, Lawrence Township, NJ 08648",
    lat: 40.2959,
    lng: -74.6828,
    note: "火锅店，口味偏川渝，适合喜欢吃辣的朋友。距离普林斯顿约20分钟车程，建议提前预约。$30-$50/人",
    phone: "6092507167",
  },
  {
    name: "Nan Xiang Express",
    category: "chinese",
    cuisine: "小笼包",
    address: "3349 Brunswick Pike #70, Lawrence Township, NJ 08648",
    lat: 40.296,
    lng: -74.6829,
    note: "小笼包店，口味正宗，距离普林斯顿约20分钟车程，建议提前预约。$20-$30/人",
    phone: "6092695272",
  },
  {
    name: "KPOT Korean BBQ & Hot Pot",
    category: "chinese",
    cuisine: "烤肉，火锅",
    address: "3320 US-1 Unit 171, Lawrence Township, NJ 08648",
    lat: 40.292,
    lng: -74.6813,
    note: "烤肉火锅自助$20-$30/人",
    phone: "+16092281244",
  },

  // ── 亚洲超市 ──
  {
    name: "Woori Mart 우리마트",
    category: "supermarket",
    cuisine: "韩国 / 亚洲超市",
    address: "64 Princeton Hightstown Rd, Princeton Junction, NJ 08550",
    lat: 40.3129,
    lng: -74.6207,
    note: "普林斯顿最近的亚洲超市，有熟食、寿司吧、新鲜鱼肉蔬菜，8am–9pm",
    phone: "(609) 750-8888",
    hours: "每天 8:00am–9:00pm",
  },
  {
    name: "美东Asian Food Market Plainsboro",
    category: "supermarket",
    cuisine: "中国 / 亚洲超市",
    address: "10 Schalks Crossing Rd Suite 1, Plainsboro Township, NJ 08536",
    lat: 40.3368,
    lng: -74.594,
    note: "普林斯顿最大的中国超市，有熟食，（烤鸭，烧鸡，叉烧),蛋糕，面包，盒饭，新鲜鱼肉蔬菜。里面的小广场还有很多家中餐馆。葛师傅，麟家小厨",
    phone: "+16097991828",
    hours: "每天 9:00am–8:00pm",
  },
  {
    name: "H Mart（Edison 店）",
    category: "supermarket",
    cuisine: "韩国 / 亚洲大型超市",
    address: "Lincoln Highway, 1761 NJ-27, Edison, NJ 08817（距普林斯顿约 25–30 分钟）",
    lat: 40.5135,
    lng: -74.4078,
    note: "品类齐全，韩国食材为主，有熟食区",
  },
  {
    name: "99 Ranch Market（Edison 店）",
    category: "supermarket",
    cuisine: "中式 / 全亚洲超市",
    address: "561 US-1 Unit 102, Edison, NJ 08817（距普林斯顿约 30 分钟）",
    lat: 40.5069,
    lng: -74.3974,
    note: "美国最大亚洲超市连锁，中国进口食材丰富",
  },
];

// ── 地图视野控制 ──────────────────────────────────────────────
function MapController({ visiblePlaces }) {
  const map = useMap();
  useEffect(() => {
    const points = visiblePlaces.map((p) => L.latLng(p.lat, p.lng));
    if (points.length === 0) return;
    const bounds = L.latLngBounds(points);
    map.fitBounds(bounds, { padding: [48, 48], maxZoom: 15 });
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
const PrincetonFoodPage = () => {
  const navigate = useNavigate();
  const post = getPostById("princeton-chinese-restaurant");
  const { prev, next } = post ? getAdjacentPosts("princeton-chinese-restaurant") : { prev: null, next: null };
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
      <h1 style={{ fontSize: "1.8rem", fontWeight: 800, lineHeight: 1.3, marginBottom: 16, color: "#1a1a1a" }}>普林斯顿中餐馆 & 亚洲超市地图</h1>

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
      <p style={{ color: "#666", fontSize: "0.95rem", borderLeft: "3px solid #c0392b", paddingLeft: 12, margin: "20px 0 28px", lineHeight: 1.6 }}>
        汇总普林斯顿周边中餐馆和亚洲超市，含地址、口碑和实用提示。标记位置为近似坐标，建议出发前用 Google Maps 确认。
      </p>

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
          <MapContainer center={[40.335, -74.648]} zoom={12} style={{ height: "100%", width: "100%" }} scrollWheelZoom={false}>
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
                    <div style={{ fontSize: "0.82rem", color: "#555", marginTop: 6 }}>{place.cuisine}</div>
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
        <p style={{ fontSize: "0.78rem", color: "#aaa", marginTop: 8 }}>注：标记位置为近似坐标，出发前请用 Google Maps 确认地址。</p>
      </div>

      {/* ── 餐馆列表 ── */}
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
                    {place.cuisine} · {place.address}
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
          以上信息来自网络搜索及社区成员经验，餐馆营业状况随时可能变化，建议出发前用 Google Maps 确认。欢迎在微信群补充推荐！
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

export default PrincetonFoodPage;
