import React, { useState } from "react";
import { MapContainer, TileLayer, Polygon, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { neighborhoods } from "../assets/neighborhoodData";

const CENTER = [40.358, -74.665];
const ZOOM = 13;

export default function NeighborhoodMapPage() {
  const [selected, setSelected] = useState(null);

  const active = selected
    ? neighborhoods.find((n) => n.id === selected)
    : null;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 16px" }}>
      <h1 style={{ fontSize: 22, marginBottom: 4 }}>
        普林斯顿分区地图：住什么区 = 你是什么人？
      </h1>
      <p style={{ color: "#888", fontSize: 13, marginBottom: 16 }}>
        点击地图上的分区查看详情 · 地图及分区参考资料致谢：普林斯顿地产专家{" "}
        <strong>Beatrice Bloom</strong>
      </p>

      <MapContainer
        center={CENTER}
        zoom={ZOOM}
        style={{ height: 480, borderRadius: 8, marginBottom: 24 }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {neighborhoods.map((n) => (
          <Polygon
            key={n.id}
            positions={n.polygon}
            pathOptions={{
              color: n.color,
              fillColor: n.color,
              fillOpacity: selected === n.id ? 0.55 : 0.3,
              weight: selected === n.id ? 3 : 1.5,
            }}
            eventHandlers={{
              click: () => setSelected(selected === n.id ? null : n.id),
            }}
          >
            <Tooltip sticky direction="top" offset={[0, -4]}>
              <strong>{n.name}</strong>
              <br />
              <span style={{ fontSize: 12 }}>{n.tagline}</span>
            </Tooltip>
          </Polygon>
        ))}
      </MapContainer>

      {/* 选中区域详情 */}
      {active && (
        <div
          style={{
            border: `2px solid ${active.color}`,
            borderRadius: 10,
            padding: "16px 20px",
            marginBottom: 24,
            background: "#fafafa",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6 }}>
            <span style={{ fontSize: 24 }}>{active.emoji}</span>
            <h2 style={{ fontSize: 18, margin: 0 }}>
              {active.name}
              <span style={{ fontSize: 13, color: "#888", marginLeft: 8 }}>
                {active.nameEn}
              </span>
            </h2>
            <span
              style={{
                marginLeft: "auto",
                background: active.color,
                color: "#fff",
                borderRadius: 20,
                padding: "2px 10px",
                fontSize: 12,
                whiteSpace: "nowrap",
              }}
            >
              {active.tagline}
            </span>
          </div>
          <p style={{ margin: "8px 0", fontSize: 14, lineHeight: 1.8 }}>
            {active.description}
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 10,
              fontSize: 13,
              color: "#555",
            }}
          >
            <span>💰 房价参考：{active.priceRange}</span>
            <span style={{ color: active.color, fontWeight: 600 }}>
              {active.personality}
            </span>
          </div>
        </div>
      )}

      {/* 全部分区列表 */}
      <h2 style={{ fontSize: 16, marginBottom: 12 }}>所有分区一览</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 12,
        }}
      >
        {neighborhoods.map((n) => (
          <div
            key={n.id}
            onClick={() => setSelected(selected === n.id ? null : n.id)}
            style={{
              border: `1.5px solid ${selected === n.id ? n.color : "#e0e0e0"}`,
              borderRadius: 8,
              padding: "12px 14px",
              cursor: "pointer",
              background: selected === n.id ? `${n.color}10` : "#fff",
              transition: "all 0.15s",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <span style={{ fontSize: 18 }}>{n.emoji}</span>
              <strong style={{ fontSize: 14 }}>{n.name}</strong>
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: 11,
                  color: n.color,
                  fontWeight: 600,
                }}
              >
                {n.tagline}
              </span>
            </div>
            <div style={{ fontSize: 12, color: "#666" }}>{n.personality}</div>
          </div>
        ))}
      </div>

      <p style={{ marginTop: 24, fontSize: 12, color: "#aaa", textAlign: "center" }}>
        分区边界为近似示意，仅供参考。地图数据：OpenStreetMap contributors
      </p>
    </div>
  );
}
