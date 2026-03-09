import React from "react";
import { WechatOutlined, DiscordOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import qrGeneral from "../assets/wechat-general.jpg";
import qrParents from "../assets/wechat-parents.jpg";
import qrHousing from "../assets/wechat-housing.jpg";

const communityItems = [
  { emoji: "🛋️", name: "二手交易", desc: "家具、电器、婴儿用品等" },
  { emoji: "🌱", name: "种苗交换", desc: "春季种苗、蔬菜秧苗分享" },
  { emoji: "📅", name: "社区活动", desc: "聚餐、球赛、节日活动" },
  { emoji: "💬", name: "微信群", desc: "加入本地华人群组" },
];

const Community = () => {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "24px" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "8px" }}>社区</h1>
      <p style={{ color: "#666", marginBottom: "32px", fontSize: "0.9rem" }}>连接普林斯顿华人社区，共同分享资源与信息</p>

      {/* Community Items */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px", marginBottom: "40px" }}>
        {communityItems.map((item) => (
          <div
            key={item.name}
            style={{
              background: "#fafafa",
              border: "1px solid #f0f0f0",
              borderRadius: "12px",
              padding: "20px",
              display: "flex",
              gap: "12px",
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontSize: "28px" }}>{item.emoji}</span>
            <div>
              <div style={{ fontWeight: "600", marginBottom: "4px" }}>{item.name}</div>
              <div style={{ fontSize: "0.85rem", color: "#666" }}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* WeChat Groups */}
      <h2 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px" }}>加入微信群</h2>
      <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "20px" }}>
        扫描二维码加入微信群。若二维码失效，请添加微信 <strong>coolcloudz</strong> 并备注"普林斯顿"，管理员会邀请你入群。
      </p>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "32px" }}>
        {[
          { img: qrGeneral, name: "综合交流" },
          { img: qrParents, name: "家长圈" },
          { img: qrHousing, name: "家居服务" },
        ].map((group) => (
          <div
            key={group.name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <img src={group.img} alt={`普林斯顿华人·${group.name} 微信群二维码`} style={{ width: "200px", height: "200px", borderRadius: "12px", objectFit: "cover", border: "1px solid #f0f0f0" }} />
            <div style={{ fontSize: "0.8rem", fontWeight: "600", color: "#333" }}>
              <WechatOutlined style={{ color: "#07c160", marginRight: "4px" }} />
              {group.name}
            </div>
          </div>
        ))}
      </div>

      {/* Discord */}
      <h2 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "12px" }}>Discord 社区</h2>
      <a href='https://discord.gg/D6zDx8UTMK' target='_blank' rel='noopener noreferrer' className='home-discord-link'>
        <DiscordOutlined />
        <span>加入 Discord 社区</span>
      </a>
    </div>
  );
};

export default Community;
