import React from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import Notes from "./pages/Notes";
import NoteDetails from "./pages/NoteDetails";
import { Layout, Menu } from "antd";
import { HomeOutlined, WechatOutlined, SendOutlined } from "@ant-design/icons";

// const footerStyle = {
//   textAlign: "center",
//   color: "#fff",
//   backgroundColor: "#4096ff",
//   marginTop: "auto",
// };

const headerStyle = {
  backgroundColor: "white",
  display: "flex",
};

function App() {
  // const [count, setCount] = useState(0)
  const { Header, Footer, Sider, Content } = Layout;

  const items = [
    {
      label: <a href="/">主页</a>,
      key: "home",
      icon: <HomeOutlined />,
      // href: "/",
    },
    {
      label: <a href="#/notes">信息分享</a>,
      key: "news",
      icon: <WechatOutlined />,
      // href: "/notes",
    },
    {
      label: <a href="#/feedback">用户反馈</a>,
      key: "feedback",
      icon: <SendOutlined />,
      // href: "/notes",
    },
  ];
  return (
    <Layout
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        flexGrow: "1",
      }}
    >
      <Header style={headerStyle}>
        <div
          style={{
            fontSize: "26px",
            fontWeight: "700",
          }}
        >
          Princeton华人
        </div>
        <Menu
          items={items}
          mode="horizontal"
          style={{ marginLeft: "2rem" }}
          // onClick={onClick}
        />
        {/* <div>
          <Link>主页</Link>
          <Link>群信息</Link>
        </div> */}
      </Header>
      <Content>
        <HashRouter basename="/">
          <Routes>
            <Route path="/notes/:noteId" element={<NoteDetails />}></Route>
            <Route path="/notes" element={<Notes />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route exact path="/" element={<Home />} />

            {/* <Route element={<AuthLayout />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Route>

  <Route path="concerts">
    <Route index element={<ConcertsHome />} />
    <Route path=":city" element={<City />} />
    <Route path="trending" element={<Trending />} />
  </Route> */}
          </Routes>
        </HashRouter>
      </Content>
      {/* <Footer style={footerStyle}>This is the footer</Footer> */}
    </Layout>
  );
}

export default App;
