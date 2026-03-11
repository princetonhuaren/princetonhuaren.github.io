import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { mapGroups, mapCategories, mapPlaces, getCategoryColor, getCategoryName } from "../assets/mapData";

// ── 地图视野自动调整 ───────────────────────────────────────────
function MapController({ places }) {
  const map = useMap();
  useEffect(() => {
    if (places.length === 0) return;
    const bounds = L.latLngBounds(places.map((p) => L.latLng(p.lat, p.lng)));
    map.fitBounds(bounds, { padding: [48, 48], maxZoom: 14 });
  }, [places, map]);
  return null;
}

// ── 图例 ─────────────────────────────────────────────────────
function MapLegend({ visibleCategories }) {
  if (visibleCategories.length === 0) return null;
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
        minWidth: 130,
        pointerEvents: "none",
      }}
    >
      <div style={{ fontWeight: 700, fontSize: "0.75rem", marginBottom: 8, color: "#333" }}>图例</div>
      {visibleCategories.map((c) => (
        <div key={c.id} style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 5 }}>
          <span style={{ display: "inline-block", width: 11, height: 11, borderRadius: "50%", background: c.color, flexShrink: 0 }} />
          <span style={{ fontSize: "0.75rem", color: "#555" }}>{c.name}</span>
        </div>
      ))}
    </div>
  );
}

// ── 按钮样式 ──────────────────────────────────────────────────
function FilterBtn({ active, color, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "6px 15px",
        borderRadius: 20,
        border: "none",
        cursor: "pointer",
        fontSize: "0.83rem",
        fontWeight: 600,
        background: active ? (color || "#1a1a1a") : "#f0f0f0",
        color: active ? "white" : "#555",
        transition: "all 0.15s",
      }}
    >
      {children}
    </button>
  );
}

// ── 主页面 ─────────────────────────────────────────────────────
const UnifiedMapPage = () => {
  const [activeGroup, setActiveGroup] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const subCategories = activeGroup
    ? mapCategories.filter((c) => c.group === activeGroup)
    : [];

  const visiblePlaces = mapPlaces.filter((p) => {
    if (activeCategory) return p.category === activeCategory;
    if (activeGroup) return p.group === activeGroup;
    return true;
  });

  const legendCategories = activeGroup
    ? subCategories.filter((c) => visiblePlaces.some((p) => p.category === c.id))
    : mapGroups.map((g) => {
        const firstCat = mapCategories.find((c) => c.group === g.id);
        return { id: g.id, name: g.name, color: g.color, _isGroup: true };
      });

  const getMarkerColor = (place) => {
    if (activeGroup) return getCategoryColor(place.category);
    return mapGroups.find((g) => g.id === place.group)?.color ?? "#888";
  };

  const handleGroupClick = (groupId) => {
    if (activeGroup === groupId) {
      setActiveGroup(null);
      setActiveCategory(null);
    } else {
      setActiveGroup(groupId);
      setActiveCategory(null);
    }
  };

  const handleCategoryClick = (catId) => {
    setActiveCategory(activeCategory === catId ? null : catId);
  };

  return (
    <div style={{ maxWidth: "920px", margin: "0 auto", padding: "32px 24px" }}>
      {/* 标题 */}
      <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#1a1a1a", marginBottom: 8 }}>
        普林斯顿华人资源地图
      </h1>
      <p style={{ color: "#888", fontSize: "0.92rem", marginBottom: 24, lineHeight: 1.6 }}>
        汇总普林斯顿周边餐饮、遛娃、教育等华人常用资源，点击地图标记查看详情。
      </p>

      {/* ── 顶级分组筛选 ── */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
        <FilterBtn active={!activeGroup} onClick={() => { setActiveGroup(null); setActiveCategory(null); }}>
          全部
        </FilterBtn>
        {mapGroups.map((g) => (
          <FilterBtn
            key={g.id}
            active={activeGroup === g.id}
            color={g.color}
            onClick={() => handleGroupClick(g.id)}
          >
            {g.emoji} {g.name}
          </FilterBtn>
        ))}
      </div>

      {/* ── 子分类筛选 ── */}
      {activeGroup && subCategories.length > 0 && (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14, paddingLeft: 4 }}>
          <FilterBtn active={!activeCategory} onClick={() => setActiveCategory(null)}>
            全部{mapGroups.find((g) => g.id === activeGroup)?.name}
          </FilterBtn>
          {subCategories.map((c) => (
            <FilterBtn
              key={c.id}
              active={activeCategory === c.id}
              color={c.color}
              onClick={() => handleCategoryClick(c.id)}
            >
              {c.name}
            </FilterBtn>
          ))}
        </div>
      )}

      {/* ── 地图 ── */}
      <div style={{ height: 500, borderRadius: 14, overflow: "hidden", border: "1px solid #e8e8e8", position: "relative", marginBottom: 32 }}>
        <MapContainer
          center={[40.335, -74.648]}
          zoom={11}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false}
        >
          <MapController places={visiblePlaces} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {visiblePlaces.map((place) => (
            <CircleMarker
              key={place.id}
              center={[place.lat, place.lng]}
              radius={9}
              pathOptions={{
                color: getMarkerColor(place),
                fillColor: getMarkerColor(place),
                fillOpacity: 0.87,
                weight: 2,
              }}
            >
              <Popup>
                <div style={{ minWidth: 210 }}>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 4 }}>{place.name}</div>
                  <span
                    style={{
                      background: getMarkerColor(place),
                      color: "white",
                      padding: "1px 8px",
                      borderRadius: 10,
                      fontSize: "0.73rem",
                      fontWeight: 600,
                    }}
                  >
                    {getCategoryName(place.category)}
                  </span>
                  {place.desc && (
                    <div style={{ fontSize: "0.82rem", color: "#555", marginTop: 6 }}>{place.desc}</div>
                  )}
                  <div style={{ fontSize: "0.78rem", color: "#888", marginTop: 4 }}>📍 {place.address}</div>
                  {place.hours && (
                    <div style={{ fontSize: "0.78rem", color: "#888", marginTop: 2 }}>🕐 {place.hours}</div>
                  )}
                  {place.phone && (
                    <div style={{ fontSize: "0.78rem", color: "#888", marginTop: 2 }}>📞 {place.phone}</div>
                  )}
                  {place.website && (
                    <div style={{ fontSize: "0.78rem", marginTop: 4 }}>
                      <a href={place.website} target="_blank" rel="noreferrer" style={{ color: getMarkerColor(place) }}>
                        官网 →
                      </a>
                    </div>
                  )}
                  {place.note && (
                    <div style={{ fontSize: "0.8rem", color: "#555", marginTop: 6, borderTop: "1px solid #f0f0f0", paddingTop: 5 }}>
                      {place.note}
                    </div>
                  )}
                </div>
              </Popup>
            </CircleMarker>
          ))}
          <MapLegend visibleCategories={legendCategories} />
        </MapContainer>
      </div>
      <p style={{ fontSize: "0.78rem", color: "#bbb", marginTop: -24, marginBottom: 32 }}>
        注：标记位置为近似坐标，出发前请用 Google Maps 确认地址和营业时间。
      </p>

      {/* ── 地点列表 ── */}
      <div>
        {(activeGroup ? [activeGroup] : mapGroups.map((g) => g.id)).map((groupId) => {
          const group = mapGroups.find((g) => g.id === groupId);
          const groupPlaces = visiblePlaces.filter((p) => p.group === groupId);
          if (groupPlaces.length === 0) return null;

          const catsInGroup = mapCategories.filter(
            (c) => c.group === groupId && groupPlaces.some((p) => p.category === c.id)
          );

          return (
            <div key={groupId} style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.15rem", fontWeight: 800, color: group.color, marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
                <span>{group.emoji}</span> {group.name}
                <span style={{ fontWeight: 400, fontSize: "0.85rem", color: "#aaa" }}>（{groupPlaces.length} 个地点）</span>
              </h2>

              {catsInGroup.map((cat) => {
                const items = groupPlaces.filter((p) => p.category === cat.id);
                if (items.length === 0) return null;
                return (
                  <div key={cat.id} style={{ marginBottom: 24 }}>
                    <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#333", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ display: "inline-block", width: 10, height: 10, borderRadius: "50%", background: cat.color }} />
                      {cat.name}
                    </h3>
                    {items.map((place) => (
                      <div key={place.id} style={{ borderLeft: `3px solid ${cat.color}`, paddingLeft: 14, marginBottom: 18 }}>
                        <div style={{ fontWeight: 700, fontSize: "0.97rem", color: "#1a1a1a", marginBottom: 2 }}>{place.name}</div>
                        <div style={{ fontSize: "0.82rem", color: "#999", marginBottom: 4 }}>
                          {place.desc} · {place.address}
                        </div>
                        {place.hours && <div style={{ fontSize: "0.82rem", color: "#888" }}>🕐 {place.hours}</div>}
                        {place.phone && <div style={{ fontSize: "0.82rem", color: "#888" }}>📞 {place.phone}</div>}
                        {place.website && (
                          <div style={{ fontSize: "0.82rem" }}>
                            <a href={place.website} target="_blank" rel="noreferrer" style={{ color: cat.color }}>
                              {place.website.replace(/https?:\/\/(www\.)?/, "").split("/")[0]}
                            </a>
                          </div>
                        )}
                        {place.note && <div style={{ fontSize: "0.875rem", color: "#555", marginTop: 4 }}>{place.note}</div>}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* 服务占位提示 */}
        {(!activeGroup || activeGroup === "services") && (
          <div style={{ background: "#fafafa", border: "1px dashed #ddd", borderRadius: 10, padding: "20px 24px", color: "#bbb", fontSize: "0.88rem", textAlign: "center", marginTop: 8 }}>
            🔧 服务（装修、车行等）分类正在整理中，欢迎在微信群提供推荐！
          </div>
        )}
      </div>
    </div>
  );
};

export default UnifiedMapPage;
