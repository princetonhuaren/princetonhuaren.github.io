import React from "react";
import { Image } from "antd";

const Home = () => {
  return (
    <div style={{ padding: "16px 16px" }}>
      <Image
        src={"princeton-school-zone.jpg"}
        fallback={
          "https://tapinto-production.s3.amazonaws.com/uploads/articles/12/best_crop_8209fda018108e5c4a72_12-7-24_Princeton_Future-Housing-Map.jpg?id=5628518"
        }
        preview={false}
      />
      <p style={{ fontSize: "16px", lineHeight: "24px", padding: "16px" }}>
        这个网站是一个专为普林斯顿学区华人社区提供信息分享的平台。我们致力于为广大华人家庭提供最新的学区资讯、教育资源、社区活动等相关信息，帮助大家更好地融入和了解当地的生活与文化。无论是关于学校政策、课外活动，还是学区的各种实用信息，我们都力求为您提供准确、及时的内容。此外，网站还为社区成员提供了一个交流互动的空间，让大家能够分享经验、解答疑问、互相支持。
      </p>
    </div>
  );
};

export default Home;
