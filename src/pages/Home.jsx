import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { WechatOutlined, DiscordOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { getLatestPosts, getFeaturedPosts } from "../assets/posts";
import { categoryLabels, categoryColors } from "../assets/categories";
import qrGeneral from "../assets/wechat-general.jpg";
import qrParents from "../assets/wechat-parents.jpg";
import qrHousing from "../assets/wechat-housing.jpg";

const quickLinks = [
  { name: "Daycare",  emoji: "🧒", href: "/education" },
  { name: "餐馆",    emoji: "🍜", href: "/life"      },
  { name: "租房",    emoji: "🏠", href: "/housing"   },
  { name: "医生",    emoji: "🏥", href: "/services"  },
  { name: "公园",    emoji: "🌿", href: "/life"      },
  { name: "微信群",  emoji: "💬", href: "/community" },
];

const Home = () => {
  const navigate = useNavigate();
  const latestPosts = getLatestPosts(5);
  const featuredPosts = getFeaturedPosts().slice(0, 6);

  return (
    <div>
      {/* ── Hero ── */}
      <div className="home-hero">
        <h1 className="home-hero-title">Princeton 华人生活指南</h1>
        <p className="home-hero-subtitle">
          分享普林斯顿地区的生活信息<br />
          衣食住行、教育医疗、社区资源
        </p>
        <Link to="/life" className="home-hero-btn">浏览最新文章 →</Link>
      </div>

      {/* ── Quick Links ── */}
      <div className="home-section">
        <h2 className="home-section-title">快速入口</h2>
        <div className="home-quick-grid">
          {quickLinks.map((link) => (
            <div
              key={link.name}
              className="home-quick-card"
              onClick={() => navigate(link.href)}
            >
              <span className="home-quick-emoji">{link.emoji}</span>
              <span className="home-quick-name">{link.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Latest Posts + Popular Guides ── */}
      <div className="home-content-row">
        {/* Latest Posts */}
        <div className="home-posts-col">
          <div className="home-col-header">
            <h2 className="home-section-title" style={{ margin: 0 }}>最新文章</h2>
            <Link to="/life" className="home-view-all">查看全部 →</Link>
          </div>
          <div className="home-posts-list">
            {latestPosts.map((post) => {
              const { color, bg } = categoryColors[post.category] || {};
              return (
                <div
                  key={post.id}
                  className="home-post-item"
                  onClick={() => navigate(`/${post.category}/${post.id}`)}
                >
                  <span className="home-post-tag" style={{ color, background: bg }}>
                    {categoryLabels[post.category]}
                  </span>
                  <div className="home-post-title">{post.title}</div>
                  <div className="home-post-footer">
                    <span className="home-post-excerpt">{post.summary}</span>
                    <span className="home-post-date">{post.updated && post.updated !== post.published ? `更新 ${post.updated}` : post.published}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Popular Guides */}
        <div className="home-guides-col">
          <h2 className="home-section-title">热门指南</h2>
          <div className="home-guides-list">
            {featuredPosts.map((post) => {
              const { color, bg } = categoryColors[post.category] || {};
              return (
                <div
                  key={post.id}
                  className="home-guide-item"
                  onClick={() => navigate(`/${post.category}/${post.id}`)}
                >
                  <span className="home-guide-tag" style={{ color, background: bg }}>
                    {categoryLabels[post.category]}
                  </span>
                  <span className="home-guide-title">{post.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Community ── */}
      <div className="home-community-wrapper">
        <div className="home-section">
          <h2 className="home-section-title">社区</h2>
          <div className="home-community-grid">
            {[
              { emoji: "🛋️", name: "二手交易",   desc: "家具、电器、婴儿用品",   coming: true  },
              { emoji: "🌱", name: "种苗交换",   desc: "春季种苗、蔬菜秧苗分享", coming: true  },
              { emoji: "📅", name: "社区活动",   desc: "聚餐、球赛、节日活动",   coming: true  },
              { emoji: "💬", name: "加入社区",   desc: "扫码进微信群", onClick: () => navigate("/community") },
            ].map((item) => (
              <Tooltip key={item.name} title={item.coming ? "即将上线，敬请期待" : null}>
                <div
                  className="home-community-item"
                  onClick={item.onClick}
                  style={{ cursor: item.onClick ? "pointer" : "not-allowed", opacity: item.coming ? 0.55 : 1 }}
                >
                  <span className="home-community-emoji">{item.emoji}</span>
                  <div>
                    <div className="home-community-name">{item.name}</div>
                    <div className="home-community-desc">{item.desc}</div>
                  </div>
                </div>
              </Tooltip>
            ))}
          </div>

          <div className="home-qr-grid" style={{ marginTop: "24px" }}>
            {[
              { img: qrGeneral, name: "综合交流" },
              { img: qrParents, name: "家长圈" },
              { img: qrHousing, name: "家居服务" },
            ].map((group) => (
              <div key={group.name} className="home-qr-card">
                <img src={group.img} alt={group.name} style={{ width: "120px", height: "120px", borderRadius: "8px", objectFit: "cover" }} />
                <div className="home-qr-label">
                  <WechatOutlined style={{ color: "#07c160", marginRight: "4px" }} />
                  {group.name}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "24px" }}>
            <a
              href="https://discord.gg/D6zDx8UTMK"
              target="_blank"
              rel="noopener noreferrer"
              className="home-discord-link"
            >
              <DiscordOutlined />
              <span>加入 Discord 社区</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
