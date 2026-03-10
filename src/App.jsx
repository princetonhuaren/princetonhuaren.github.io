import React, { useState, useEffect } from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import Notes from "./pages/Notes";
import NoteDetails from "./pages/NoteDetails";
import Community from "./pages/Community";
import About from "./pages/About";
import CategoryPage from "./pages/CategoryPage";
import PostDetail from "./pages/PostDetail";
import PrincetonSchoolsPage from "./pages/PrincetonSchoolsPage";
import PrincetonFoodPage from "./pages/PrincetonFoodPage";
import PrincetonKidsPage from "./pages/PrincetonKidsPage";
import PrincetonChineseSchoolPage from "./pages/PrincetonChineseSchoolPage";
import { Layout } from "antd";

const navItems = [
  { label: "首页",    key: "home",      href: "/"           },
  { label: "生活",    key: "life",      href: "#/life"      },
  { label: "教育",    key: "education", href: "#/education" },
  { label: "住房",    key: "housing",   href: "#/housing"   },
  { label: "服务",    key: "services",  href: "#/services"  },
  { label: "社区",    key: "community", href: "#/community" },
  { label: "社区笔记", key: "notes",    href: "#/notes"     },
  { label: "关于",    key: "about",     href: "#/about"     },
];

function getActiveKey() {
  const hash = window.location.hash.replace("#/", "").split("/")[0];
  if (!hash) return "home";
  return hash;
}

function App() {
  const { Content } = Layout;
  const [activeKey, setActiveKey] = useState(getActiveKey);

  useEffect(() => {
    const onHashChange = () => setActiveKey(getActiveKey());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <header className="app-header">
        <a href="/" className="app-logo">
          <span className="app-logo-en">PrincetonHuaren</span>
          <span className="app-logo-cn">普林斯顿华人</span>
        </a>
        <nav className="app-nav">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className={`app-nav-item${activeKey === item.key ? " active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <Content style={{ flex: 1 }}>
        <HashRouter basename="/">
          <Routes>
            <Route path="/"              element={<Home />} />
            <Route path="/life"          element={<CategoryPage category="life"      title="生活" />} />
            <Route path="/education"     element={<CategoryPage category="education" title="教育" />} />
            <Route path="/housing"       element={<CategoryPage category="housing"   title="住房" />} />
            <Route path="/services"      element={<CategoryPage category="services"  title="服务" />} />
            <Route path="/community"     element={<Community />} />
            <Route path="/about"         element={<About />} />
            <Route path="/notes"         element={<Notes />} />
            <Route path="/notes/:noteId" element={<NoteDetails />} />
            <Route path="/feedback"      element={<Feedback />} />
            <Route path="/education/princeton-school-guide" element={<PrincetonSchoolsPage />} />
            <Route path="/life/princeton-chinese-restaurant" element={<PrincetonFoodPage />} />
            <Route path="/life/princeton-kids-places" element={<PrincetonKidsPage />} />
            <Route path="/education/princeton-chinese-school" element={<PrincetonChineseSchoolPage />} />
            <Route path="/:category/:postId" element={<PostDetail />} />
          </Routes>
        </HashRouter>
      </Content>

      <footer className="app-footer">
        <div className="app-footer-content">
          <div className="app-footer-brand">PrincetonHuaren</div>
          <div className="app-footer-desc">Princeton 华人生活信息分享网站</div>
          <div className="app-footer-links">
            <a href="#/about">关于本站</a>
            <a href="#/feedback">联系我们</a>
          </div>
          <div className="app-footer-copy">© 2025 PrincetonHuaren · 内容基于社区成员推荐，仅供参考</div>
        </div>
      </footer>
    </Layout>
  );
}

export default App;
