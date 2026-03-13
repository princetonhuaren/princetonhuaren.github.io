import React from "react";
import { DiscordOutlined, WechatOutlined } from "@ant-design/icons";

const About = () => {
  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "40px 24px", lineHeight: "1.8" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "24px" }}>关于本站</h1>

      <p style={{ marginBottom: "16px", color: "#444" }}>
        PrincetonHuaren 是一个由普林斯顿学区华人居民自发创建的本地信息分享平台。
        网站的灵感来源于微信群里大量有用却难以检索的本地生活信息——理发推荐、餐厅点评、医生介绍……
        这些信息散落在各个群聊中，新来的居民往往很难找到。
      </p>

      <p style={{ marginBottom: "16px", color: "#444" }}>
        我们希望把这些零散的信息整理成一个可搜索、可浏览的网站，
        让每一个刚来到普林斯顿的华人家庭都能快速找到需要的信息。
      </p>

      <p style={{ marginBottom: "32px", color: "#444" }}>
        网站由社区成员维护，内容基于真实的社区推荐，持续更新。
        如果你有任何建议或想分享信息，欢迎通过以下方式联系我们。
      </p>

      <h2 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "16px" }}>联系方式</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <a
          href="https://discord.gg/D6zDx8UTMK"
          target="_blank"
          rel="noopener noreferrer"
          className="home-discord-link"
          style={{ alignSelf: "flex-start" }}
        >
          <DiscordOutlined />
          <span>Discord 社区</span>
        </a>
        <a href="/feedback" style={{ color: "#c0392b", fontWeight: "600" }}>
          💬 留言反馈
        </a>
      </div>

      <div style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid #f0f0f0", color: "#999", fontSize: "0.85rem" }}>
        <p>免责声明：本站信息由社区成员提供，仅供参考，不构成专业建议。请在使用相关服务前自行核实信息的准确性。</p>
      </div>
    </div>
  );
};

export default About;
