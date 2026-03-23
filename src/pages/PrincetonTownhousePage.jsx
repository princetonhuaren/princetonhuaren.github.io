import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon issue with Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const communities = [
  {
    id: "campbell-woods",
    name: "Campbell Woods",
    coords: [40.3784, -74.6543],
    units: "约 50 户",
    built: "1996 年",
    beds: "2–4 卧（部分有地下室）",
    hoa: "$600+/月",
    price: "$85万–$105万",
    school: "Littlebrook Elementary",
    gated: false,
    pool: false,
    highlights: ["华人居民约占一半", "每户有车库和车道", "小区安静私密", "购物需开车去 West Windsor / Montgomery"],
    color: "#2980b9",
  },
  {
    id: "washington-oaks",
    name: "Washington Oaks",
    coords: [40.3275, -74.6879],
    units: "约 300 户",
    built: "1993–2000 年",
    beds: "2–4 卧（Condo / Townhouse / 独栋）",
    hoa: "$250–265/月",
    price: "$40万–$110万+",
    school: "Johnson Park Elementary",
    gated: false,
    pool: false,
    highlights: ["HOA 四个里最低", "户型选择最多", "靠近 Route 1 通勤方便", "学区为 Johnson Park（非 Littlebrook）"],
    color: "#27ae60",
  },
  {
    id: "queenston-common",
    name: "Queenston Common",
    coords: [40.3561, -74.6464],
    units: "约 100 户",
    built: "约 1973 年",
    beds: "2–4 卧，约 2,000 sqft",
    hoa: "$600–760/月",
    price: "$80万–$99万",
    school: "Littlebrook Elementary",
    gated: false,
    pool: true,
    highlights: ["步行可到 Nassau Street 市中心", "有泳池、网球场", "建造年代最早，注意验房", "最适合不想依赖开车的家庭"],
    color: "#8e44ad",
  },
  {
    id: "governors-lane",
    name: "Governors Lane",
    coords: [40.3708, -74.6507],
    units: "约 65 户",
    built: "1989–1997 年",
    beds: "3–5 卧，约 2,300–3,800 sqft",
    hoa: "$1,000+/月",
    price: "$95万–$142万",
    school: "Littlebrook Elementary",
    gated: true,
    pool: false,
    highlights: ["有门禁，20 英亩林地", "户型最大，最私密", "价格和 HOA 均最高", "房源稀缺，市场上不多见"],
    color: "#c0392b",
  },
];

function makeIcon(color) {
  return L.divIcon({
    className: "",
    html: `<div style="
      width:14px;height:14px;border-radius:50%;
      background:${color};border:3px solid white;
      box-shadow:0 1px 4px rgba(0,0,0,0.4);
    "></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });
}

export default function PrincetonTownhousePage() {
  const [selected, setSelected] = useState(null);
  const active = selected ? communities.find((c) => c.id === selected) : null;

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "24px 16px" }}>
      <div style={{ marginBottom: 6, fontSize: "0.85rem", color: "#999" }}>住房</div>
      <h1 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 8, color: "#1a1a1a" }}>普林斯顿四大 Townhouse 小区横评</h1>
      <p style={{ color: "#666", fontSize: "0.95rem", borderLeft: "3px solid #2980b9", paddingLeft: 12, margin: "0 0 24px", lineHeight: 1.6 }}>
        住在 Campbell Woods 的华人居民亲测，对比四个热门小区的价格、HOA、学区与生活便利度。
      </p>

      {/* 图例 */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 12 }}>
        {communities.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelected(selected === c.id ? null : c.id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "5px 14px",
              borderRadius: 20,
              border: `2px solid ${c.color}`,
              background: selected === c.id ? c.color : "#fff",
              color: selected === c.id ? "#fff" : c.color,
              fontWeight: 600,
              fontSize: "0.85rem",
              cursor: "pointer",
            }}
          >
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: selected === c.id ? "#fff" : c.color, display: "inline-block" }} />
            {c.name}
          </button>
        ))}
      </div>

      {/* 地图 */}
      <MapContainer center={[40.358, -74.665]} zoom={13} style={{ height: 380, borderRadius: 10, marginBottom: 24 }} scrollWheelZoom={false}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        {communities.map((c) => (
          <Marker key={c.id} position={c.coords} icon={makeIcon(c.color)} eventHandlers={{ click: () => setSelected(selected === c.id ? null : c.id) }}>
            <Popup>
              <strong>{c.name}</strong>
              <br />
              {c.price}
              <br />
              HOA {c.hoa}
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* 小区详情卡片 */}
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {communities.map((c) => (
          <div
            key={c.id}
            id={c.id}
            style={{
              border: `2px solid ${selected === c.id ? c.color : "#eee"}`,
              borderRadius: 12,
              padding: "20px 24px",
              transition: "border-color 0.2s",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <span style={{ width: 14, height: 14, borderRadius: "50%", background: c.color, flexShrink: 0 }} />
              <h2 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 800 }}>{c.name}</h2>
              <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
                {c.gated && <span style={{ fontSize: "0.75rem", background: "#f0f0f0", padding: "2px 8px", borderRadius: 10 }}>🔒 门禁</span>}
                {c.pool && <span style={{ fontSize: "0.75rem", background: "#e8f4fd", padding: "2px 8px", borderRadius: 10 }}>🏊 泳池</span>}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "8px 16px", marginBottom: 14, fontSize: "0.88rem" }}>
              {[
                ["总户数", c.units],
                ["建造年代", c.built],
                ["户型", c.beds],
                ["HOA/月", c.hoa],
                ["价格区间", c.price],
                ["小学学区", c.school],
              ].map(([label, val]) => (
                <div key={label}>
                  <span style={{ color: "#999", fontSize: "0.78rem" }}>{label}</span>
                  <div style={{ fontWeight: 600, color: "#1a1a1a" }}>{val}</div>
                </div>
              ))}
            </div>

            <ul style={{ margin: 0, paddingLeft: 18, color: "#555", fontSize: "0.88rem", lineHeight: 1.8 }}>
              {c.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 横向对比表 */}
      <h2 style={{ fontSize: "1.1rem", fontWeight: 700, margin: "36px 0 12px" }}>横向对比</h2>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
          <thead>
            <tr style={{ background: "#f4f6f8" }}>
              {["小区", "价格区间", "HOA/月", "泳池", "门禁", "小学"].map((h) => (
                <th key={h} style={{ padding: "9px 12px", textAlign: "left", fontWeight: 600, color: "#555", borderBottom: "2px solid #eee", whiteSpace: "nowrap" }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {communities.map((c, i) => (
              <tr key={c.id} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                <td style={{ padding: "8px 12px", fontWeight: 600 }}>
                  <span style={{ display: "inline-block", width: 10, height: 10, borderRadius: "50%", background: c.color, marginRight: 6 }} />
                  {c.name}
                </td>
                <td style={{ padding: "8px 12px" }}>{c.price}</td>
                <td style={{ padding: "8px 12px" }}>{c.hoa}</td>
                <td style={{ padding: "8px 12px" }}>{c.pool ? "✓" : "✗"}</td>
                <td style={{ padding: "8px 12px" }}>{c.gated ? "✓" : "✗"}</td>
                <td style={{ padding: "8px 12px", fontSize: "0.8rem" }}>{c.school}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 选哪个 */}
      <div style={{ background: "#f8f9fa", borderRadius: 12, padding: "20px 24px", margin: "32px 0" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 700, margin: "0 0 12px" }}>怎么选？</h2>
        <ul style={{ margin: 0, paddingLeft: 18, fontSize: "0.9rem", lineHeight: 2, color: "#444" }}>
          <li>
            <strong>预算有限 + HOA 低</strong>：Washington Oaks（condo 起步 $40 万，HOA 最便宜）
          </li>
          <li>
            <strong>步行生活 + 有泳池</strong>：Queenston Common（位置最好，配套最全）
          </li>
          <li>
            <strong>安静小区 + 华人多 + 性价比</strong>：Campbell Woods（50 户小社区，华人约占一半）
          </li>
          <li>
            <strong>大户型 + 最私密 + 预算充足</strong>：Governors Lane（门禁、林地、最高端）
          </li>
        </ul>
      </div>

      <p style={{ color: "#aaa", fontSize: "0.82rem", textAlign: "center" }}>HOA 费用和价格会随市场变化，购买前请向卖方确认最新数据，并仔细阅读 HOA 文件（含 special assessment 历史记录）。</p>
    </div>
  );
}
