import React from "react";
import Giscus from "@giscus/react";

const Feedback = () => {
  return (
    <div>
      <p>
        欢迎留言！ 请先登录您的 GitHub
        账号，即可在本频道留言。如果您有任何意见或建议，欢迎随时提出，我会尽快查看并更新内容
      </p>
      <Giscus
        repo="princetonhuaren/princetonhuaren.github.io"
        repoId="R_kgDOOMiq3w"
        category="General"
        categoryId="DIC_kwDOOMiq384CoW5R"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="1"
        theme="light"
        inputPosition="top"
        loading="lazy"
        lang={"en"}
      />
      {/* <script
        src="https://giscus.app/client.js"
        data-repo="princetonhuaren/princetonhuaren.github.io"
        data-repo-id="R_kgDOOMiq3w"
        data-category="General"
        data-category-id="DIC_kwDOOMiq384CoW5R"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="light"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async
      ></script> */}
    </div>
  );
};

export default Feedback;
