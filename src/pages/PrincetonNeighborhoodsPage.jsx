import React, { useState, useMemo } from "react";
import { MapContainer, TileLayer, Polygon, Polyline, Tooltip, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function centroid(pts) {
  const lat = pts.reduce((s, p) => s + p[0], 0) / pts.length;
  const lng = pts.reduce((s, p) => s + p[1], 0) / pts.length;
  return [lat, lng];
}

function makeLabelIcon(name, color) {
  return L.divIcon({
    className: "",
    html: `<div style="font-size:10px;font-weight:700;color:${color};text-shadow:0 0 3px #fff,0 0 3px #fff,0 0 3px #fff;white-space:nowrap;pointer-events:none;text-align:center">${name}</div>`,
    iconSize: [0, 0],
    iconAnchor: [0, 0],
  });
}
import { neighborhoods } from "../assets/neighborhoodData";
import { getPostById } from "../assets/posts";
import { CalendarOutlined, UserOutlined, ClockCircleOutlined } from "@ant-design/icons";
// Princeton 市界，GeoJSON LineString [lng,lat] 转换为 Leaflet [lat,lng]
const PRINCETON_BOUNDARY = [
  [-74.722179,40.375216],[-74.684243,40.30496],[-74.679354,40.308206],
  [-74.677026,40.309689],[-74.674143,40.313054],[-74.672093,40.315623],
  [-74.670252,40.316948],[-74.667403,40.318431],[-74.663095,40.320656],
  [-74.661636,40.32161],[-74.660316,40.322775],[-74.657675,40.324841],
  [-74.655973,40.326165],[-74.654861,40.327278],[-74.652534,40.331542],
  [-74.649928,40.336203],[-74.648186,40.338563],[-74.646484,40.33994],
  [-74.644503,40.341264],[-74.6436,40.341528],[-74.63283,40.342455],
  [-74.630885,40.342905],[-74.630468,40.343964],[-74.628106,40.347354],
  [-74.623381,40.368638],[-74.621157,40.37155],[-74.620826,40.372998],
  [-74.620019,40.374101],[-74.619296,40.37516],[-74.617515,40.377449],
  [-74.617598,40.378467],[-74.618099,40.379823],[-74.621494,40.383702],
  [-74.622793,40.384507],[-74.654241,40.390836],[-74.669259,40.386394],
  [-74.671661,40.385697],[-74.672499,40.384971],[-74.673681,40.384478],
  [-74.679285,40.383607],[-74.68302,40.383258],[-74.685689,40.382794],
  [-74.689615,40.382242],[-74.692245,40.381661],[-74.696514,40.380964],
  [-74.701088,40.380645],[-74.706006,40.379396],[-74.707073,40.379338],
  [-74.707645,40.379455],[-74.708712,40.379106],[-74.711037,40.378206],
  [-74.712067,40.378119],[-74.713363,40.377828],[-74.714392,40.37748],
  [-74.717518,40.376986],[-74.718204,40.376783],[-74.722206,40.375244],
].map(([lng, lat]) => [lat, lng]);

const CENTER = [40.362, -74.666];
const ZOOM = 13;

const SECTIONS = [
  {
    id: "western-section",
    heading: "🌳 西区（Western Section）",
    extra: "从 Princeton Battle Monument 向西和向北延伸，以 Bayard Lane 和 Elm Road 为边界。这里有大量历史悠久的老宅，坐落在精心打理的绿草如茵的大院里，步行即可抵达镇中心——这让这片区域成为许多人心目中普林斯顿最令人向往、最有格调的地方。宅子的风格涵盖 19–20 世纪的各类经典样式：Colonial、Tudor、Victorian、Gothic 以及各种现代演绎。这些老宅沿着优雅弯曲的街道排列，Library Place、Hodge Road、Lafayette Road、Cleveland Lane……其中 Cleveland Lane 曾是美国第 28 届总统伍德罗·威尔逊的居所。",
  },
  {
    id: "institute-area",
    heading: "🔬 高研院与 Hun 区（Institute & Hun Area）",
    extra: "位于 Elm Road 以西以南。这里有很多豪华住宅，虽然比西区的老宅年轻一些，但同样宏大精美。周边点缀着属于普林斯顿镇和大学的公园与开放空间，以及 Springdale 高尔夫球场，让整个片区显得开阔优雅，又不脱离镇中心。普林斯顿神学院让这里的日常多了几分形而上的气质；高等研究院（IAS）和爱因斯坦的居所则为世俗路人带来一丝灵感。州长官邸 Drumthwacket 和 Hun School 各自为所在街区增添了独特的分量。",
  },
  {
    id: "rosedale",
    heading: "🌿 Rosedale 区",
    extra: "沿 Rosedale Road 向西延伸，许多大宅背靠 Stony Brook、Johnson Estates、Jasna Polana 乡村俱乐部或保护地，地块比镇中心附近更大。起伏的山丘、保护林地、新建运动公园，以及 Johnson Park 小学。往西是 Fairview 和 Brookstone 两个子社区（1950 年代建造，是普林斯顿少见的价格相对亲民的区域）。Rosedale Road 以南的 Lambert Drive 一带，房子背靠 Jasna Polana 高尔夫球场的树林，也颇受欢迎。",
  },
  {
    id: "ettl-farm",
    heading: "🦌 Ettl Farm",
    extra: "紧邻 Rosedale 区以西，是普林斯顿最大的开发项目之一，80 多栋房子。入口处是宽阔的草坪缓坡，弯曲的小路两侧房子排列较为紧凑，这种密度反而造就了真正的邻里感，同时在房屋背后留出大片公共绿地（通常是树林）。房子风格「传统现代」，砖砌或灰泥外墙配木瓦侧面，整个社区坐落在一片缓丘上，房子的朝向有意促进居民之间的互动。",
  },
  {
    id: "pretty-brook",
    heading: "🏰 Pretty Brook 区",
    extra: "这里的新建豪宅和门禁庄园是整个普林斯顿最令人瞩目的存在。地形起伏剧烈，溪流和水塘点缀在低地之间，林木茂密，静谧深远，让人感觉远离尘嚣。隐私是这里的第一优先级。大多数房子坐落在 cul-de-sac（尽头路）里，长长的私人车道，与邻居之间隔着树林和山丘。Pretty Brook 网球俱乐部、Princeton Day School 和 Farm View Field 都在附近。",
  },
  {
    id: "princeton-ridge",
    heading: "🏡 Princeton Ridge",
    extra: "与 Pretty Brook 共享同样戏剧性的地形和大片树林，但密度稍高，风格更多样。半英亩到一英亩地块，三车位车库常见。Davies Drive、Balcort Drive、Arreton Road 一带多见砖墙木瓦的较新住宅；Stuart Road 和 Bouvant 附近则有大量现代风格大宅，毗邻 Stuart Country Day School（知名女子私立）。",
  },
  {
    id: "battlefield",
    heading: "⚔️ Battlefield 区",
    extra: "Mercer Road 两侧是著名的普林斯顿战场遗址，婚纱摄影和野餐家庭常年光顾。北临 Route 206，西靠 Lower Province Line Road。这里的房子形态各异，有些嵌在老地产的深处。居民最大的福利是可以随时步行进入 Institute Woods——普林斯顿最美的自然步道之一，冬天甚至可以在这里越野滑雪。",
  },
  {
    id: "princeton-center",
    heading: "🏙️ 普镇中心区（Princeton Center）",
    extra: "镇中心及周边，散落着大量 19–20 世纪初的大型家庭住宅，很多是大学教职人员的家。步行或骑车即可抵达镇中心、大学校园或 Westminster 唱诗班学院。这里的居民彼此认识，邻里感浓厚。许多老宅在保持外观原貌的同时完成了内部改造。除了便利的生活圈，这里靠近高中、初中、Charter School 和 Princeton Shopping Center。",
  },
  {
    id: "town-country",
    heading: "🎾 Town & Country",
    extra: "从普镇中心开车 5 分钟，步行约 20 分钟。以老式传统住宅为主，也有少量新建现代住宅，甚至还有 Terhune Road 上的 Mansgrove 等历史老宅。居民之间彼此认识，公共公园、运动场、网球场、社区游泳池、Westminster 唱诗班学院、Princeton Shopping Center、Mountain Lakes 自然保护区、Herrontown Woods 等配套设施一应俱全。",
  },
  {
    id: "riverside",
    heading: "🌊 Riverside & Littlebrook 区",
    extra: "以卡内基湖为南界和东界，沿 Route 27（Nassau Street）两侧分布。这里有两所公立小学：Riverside 和 Littlebrook。新建豪宅散布其中，最引人注目的是湖边那几栋。卡内基运河蜿蜒曲折，夕阳映照下颇有「唯见长江天际流」之美。这里是普林斯顿教授的传统聚居区，也是华人家庭最密集的区域。值得特别一提：这两所小学的 Special Needs Program 在全美首屈一指，无数家庭从全国各地慕名迁来。",
  },
];

const COMPARISON = [
  { need: "步行生活圈", areas: "普镇中心、西区" },
  { need: "华人邻居多", areas: "Riverside & Littlebrook" },
  { need: "顶级豪宅私密", areas: "Pretty Brook、高研院区" },
  { need: "自然环境好", areas: "Rosedale、Battlefield" },
  { need: "生活配套全", areas: "Town & Country" },
  { need: "社区感强", areas: "Ettl Farm、普镇中心" },
  { need: "孩子特教资源", areas: "Riverside & Littlebrook" },
  { need: "性价比", areas: "Rosedale (Fairview)、Town & Country" },
];

export default function PrincetonNeighborhoodsPage() {
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);
  const active = selected ? neighborhoods.find((n) => n.id === selected) : null;
  const post = getPostById("princeton-neighborhoods");

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "24px 16px" }}>
      <h1 style={{ fontSize: 22, marginBottom: 4 }}>
        普林斯顿各区长什么样？分区地图 + 详细介绍
      </h1>
      {post && (
        <div style={{ display: "flex", gap: 16, color: "#999", fontSize: "0.85rem", marginBottom: 16, flexWrap: "wrap", alignItems: "center" }}>
          <span><UserOutlined style={{ marginRight: 4 }} />{post.author}</span>
          <span><CalendarOutlined style={{ marginRight: 4 }} />{post.published}</span>
          {post.updated && post.updated !== post.published && (
            <span style={{ color: "#bbb" }}>最后更新：{post.updated}</span>
          )}
          <span><ClockCircleOutlined style={{ marginRight: 4 }} />{post.readingTime} 分钟阅读</span>
        </div>
      )}
      <p style={{ color: "#888", fontSize: 13, marginBottom: 20 }}>
        普林小镇常住居民 3 万出头，普林斯顿大学师生占居民总数约 30%。从镇中心向四周辐射，各分区风格迥异。
        点击地图上的分区查看简介。感谢普林斯顿地产专家{" "}
        <a
          href="https://www.realestate-princeton.com/about-princeton/neighborhoods-communities/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Beatrice Bloom
        </a>{" "}
        提供的分区参考资料。
      </p>

      {/* 地图 */}
      <MapContainer
        center={CENTER}
        zoom={ZOOM}
        style={{ height: 500, borderRadius: 8, marginBottom: 20 }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline
          positions={PRINCETON_BOUNDARY}
          pathOptions={{ color: "#333", weight: 2.5, dashArray: "6 4", opacity: 0.7 }}
        />
        {neighborhoods.map((n) => {
          const isSelected = selected === n.id;
          const isHovered = hovered === n.id;
          const center = centroid(n.polygon);
          const labelIcon = makeLabelIcon(n.name, n.color);
          return (
            <React.Fragment key={n.id}>
              <Polygon
                positions={n.polygon}
                pathOptions={{
                  color: n.color,
                  fillColor: n.color,
                  fillOpacity: isSelected ? 0.7 : isHovered ? 0.6 : 0.3,
                  weight: isSelected ? 3 : isHovered ? 2.5 : 1.5,
                }}
                eventHandlers={{
                  click: () => setSelected(selected === n.id ? null : n.id),
                  mouseover: (e) => { e.target.bringToFront(); setHovered(n.id); },
                  mouseout: () => setHovered(null),
                }}
              >
                <Tooltip sticky direction="top" offset={[0, -8]}>
                  <strong>{n.name}</strong>
                  {n.priceRange && (
                    <>
                      <br />
                      <span style={{ fontSize: 12 }}>{n.priceRange}</span>
                    </>
                  )}
                </Tooltip>
              </Polygon>
              <Marker position={center} icon={labelIcon} interactive={false} />
            </React.Fragment>
          );
        })}
      </MapContainer>

      {/* 点击弹出简介 */}
      {active && (
        <div
          style={{
            border: `2px solid ${active.color}`,
            borderRadius: 8,
            padding: "14px 18px",
            marginBottom: 24,
            background: "#fafafa",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6 }}>
            <strong style={{ fontSize: 16 }}>{active.name}</strong>
            <span style={{ color: "#888", fontSize: 13 }}>{active.nameEn}</span>
            <span style={{ marginLeft: "auto", fontSize: 13, color: active.color }}>
              {active.priceRange}
            </span>
          </div>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.8 }}>{active.description}</p>
        </div>
      )}

      {/* 分隔线 */}
      <hr style={{ margin: "28px 0", borderColor: "#eee" }} />

      {/* 文字详述 */}
      {SECTIONS.map((s) => {
        const n = neighborhoods.find((x) => x.id === s.id);
        return (
          <div key={s.id} style={{ marginBottom: 28 }}>
            <h2
              style={{
                fontSize: 17,
                borderLeft: `4px solid ${n?.color ?? "#ccc"}`,
                paddingLeft: 10,
                marginBottom: 8,
              }}
            >
              {s.heading}
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.9, color: "#333", margin: 0 }}>
              {s.extra}
            </p>
            {n?.priceRange && (
              <p style={{ fontSize: 13, color: "#888", marginTop: 6 }}>
                💰 房价参考：{n.priceRange}
              </p>
            )}
          </div>
        );
      })}

      {/* 选区对照表 */}
      <hr style={{ margin: "28px 0", borderColor: "#eee" }} />
      <h2 style={{ fontSize: 17, marginBottom: 12 }}>怎么选？</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ background: "#f5f5f5" }}>
            <th style={{ padding: "8px 12px", textAlign: "left", borderBottom: "1px solid #ddd" }}>
              你最在意的
            </th>
            <th style={{ padding: "8px 12px", textAlign: "left", borderBottom: "1px solid #ddd" }}>
              推荐分区
            </th>
          </tr>
        </thead>
        <tbody>
          {COMPARISON.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid #eee" }}>{row.need}</td>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid #eee", color: "#555" }}>
                {row.areas}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ marginTop: 28, fontSize: 12, color: "#aaa" }}>
        内容根据英文原始资料翻译整理，加入社区经验注释。房价为参考区间，以实际市场为准。
        分区边界为近似示意。地图数据：OpenStreetMap contributors。
        感谢地产专家{" "}
        <a
          href="https://www.realestate-princeton.com/about-princeton/neighborhoods-communities/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#aaa" }}
        >
          Beatrice Bloom
        </a>{" "}
        提供原始分区资料。
      </p>
    </div>
  );
}
