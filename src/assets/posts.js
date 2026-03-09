// ============================================================
// 文章元数据 - 每篇文章一个 object
// 文章内容存放在 src/content/posts/<id>/index.md
//
// 添加新文章：
//   1. 在 src/content/posts/ 下新建文件夹，命名与 id 相同
//   2. 在文件夹里创建 index.md，写入 Markdown 内容
//   3. 在下方数组顶部添加元数据 object
// ============================================================

// 批量加载所有文章的 Markdown 内容（Vite 构建时处理）
const markdownModules = import.meta.glob(
  "../content/posts/**/index.md",
  { as: "raw", eager: true }
);

// 将文件路径转换为 post id 的内容映射
// 路径格式：../content/posts/<id>/index.md
const contentMap = Object.fromEntries(
  Object.entries(markdownModules).map(([path, content]) => {
    const id = path.split("/").at(-2);
    return [id, content];
  })
);

// ── 元数据列表（按发布时间倒序排列）──────────────────────────
export const posts = [
  {
    id: "bmw-water-damage-warning",
    title: "三天拖车两次：BMW 后备箱进水烧控制单元，X1/X3/X5 车主注意",
    summary: "后备箱撒了一两加仑水，以为擦干了没事，结果油箱控制单元烧毁，维修费 $2,800。这是 BMW X1/X3/X5 的已知通病。",
    category: "life",
    tags: ["汽车", "BMW", "维修", "踩坑", "经验"],
    location: "Princeton NJ",
    author: "Andrew",
    published: "2025-11-20",
    updated: "2025-11-20",
    featured: false,
    readingTime: 4,
  },
  {
    id: "nj-car-inspection",
    title: "新泽西车辆年检（DMV Inspection）全攻略",
    summary: "两年一次，无需预约，带好驾照+注册证+保险卡直接去。亲测仪表盘亮 4 个 Warning 灯照样过检。",
    category: "services",
    tags: ["年检", "DMV", "汽车", "新泽西", "MVC"],
    location: "Princeton NJ",
    author: "Andrew",
    published: "2025-09-21",
    updated: "2025-09-21",
    featured: false,
    readingTime: 2,
  },
  {
    id: "nj-real-estate-license-renew",
    title: "新泽西地产经纪证书续期：CE 要求、费用与新人豁免",
    summary: "每两年续证一次：12 小时 CE 课程（4/30 截止）+ 问卷 + $100 续证费，新人可能免除 CE，课程费用可等优惠价。",
    category: "services",
    tags: ["地产", "续证", "CE", "新泽西", "经纪人"],
    location: "New Jersey",
    author: "Andrew",
    published: "2025-04-11",
    updated: "2025-04-11",
    featured: false,
    readingTime: 2,
  },
  {
    id: "nj-pa-real-estate-dual-license",
    title: "NJ + PA 地产经纪双证：三种途径与是否值得考的建议",
    summary: "已持有 NJ 证想拿 PA 证？三种方法对比，以及为什么新手经纪人可以先不急着考双证。",
    category: "services",
    tags: ["地产", "双证", "宾州", "新泽西", "经纪人", "职业"],
    location: "New Jersey / Pennsylvania",
    author: "Andrew",
    published: "2024-09-20",
    updated: "2024-09-20",
    featured: false,
    readingTime: 3,
  },
  {
    id: "nj-real-estate-exam-guide",
    title: "新泽西地产经纪考试全攻略：课程、州考、打指纹、选 Broker",
    summary: "亲历 2024 年 7 月考试的详细记录：课程选择踩坑、PSI 州考当天遭遇微软蓝屏事件、指纹预约到选 Broker 全流程。",
    category: "services",
    tags: ["地产", "考试", "新泽西", "职业", "经纪人", "PSI"],
    location: "New Jersey",
    author: "Andrew",
    published: "2024-08-06",
    updated: "2024-08-06",
    featured: false,
    readingTime: 5,
  },
  {
    id: "nj-real-estate-license",
    title: "新泽西地产经纪证书：6周拿证时间线与完整费用",
    summary: "从注册课程到收到证书的实测时间线，一次性费用约 $546，加上地产协会、MLS 等持续费用全部列清楚。",
    category: "services",
    tags: ["地产", "资格证", "新泽西", "职业", "经纪人"],
    location: "New Jersey",
    author: "Andrew",
    published: "2024-08-29",
    updated: "2024-08-29",
    featured: true,
    readingTime: 3,
  },
  {
    id: "princeton-short-term-housing",
    title: "普林斯顿短租攻略：实习/过渡期住房怎么找",
    summary: "主流平台踩坑总结 + 三个实用方案：Extended Stay America、华人社群转租、人脉网络，短期居住必读。",
    category: "housing",
    tags: ["短租", "实习", "过渡期", "Extended Stay", "找房"],
    location: "Princeton NJ",
    author: "Andrew",
    published: "2025-05-12",
    updated: "2025-05-12",
    featured: false,
    readingTime: 3,
  },
  {
    id: "princeton-off-campus-housing",
    title: "普林斯顿大学学生校外租房平台推荐",
    summary: "两个实用找房渠道：学校官方 Off-Campus Housing 平台（支持 PU Net ID 登录）和邻里平台 Nextdoor。",
    category: "housing",
    tags: ["租房", "校外住房", "学生", "OCH", "Nextdoor"],
    location: "Princeton NJ",
    author: "Andrew",
    published: "2025-05-24",
    updated: "2025-05-24",
    featured: false,
    readingTime: 2,
  },
  {
    id: "canal-pointe-housing",
    title: "Canal Pointe 小区租房体验｜骑车通勤到普林斯顿大学",
    summary: "住了三年多的亲身体验：房型价格、水电网费用、手机运营商推荐，研究生/博士通勤首选。",
    category: "housing",
    tags: ["租房", "Canal Pointe", "研究生", "通勤", "公寓"],
    location: "Princeton NJ",
    author: "Andrew",
    published: "2025-05-12",
    updated: "2025-05-12",
    featured: true,
    readingTime: 4,
  },
  {
    id: "princeton-chinese-restaurant",
    title: "普林斯顿中餐馆推荐",
    summary: "来自社区成员的中餐馆推荐，涵盖各类菜系，持续更新。",
    category: "life",
    tags: ["餐厅", "美食", "中餐"],
    location: "Princeton NJ",
    author: "Andrew",
    published: "2026-03-05",
    updated: "2026-03-05",
    featured: true,
    readingTime: 5,
  },
  {
    id: "princeton-summer-camp",
    title: "孩子暑期夏令营完整指南",
    summary: "汇总普林斯顿地区各类夏令营项目，含费用、报名时间和社区经验。",
    category: "education",
    tags: ["夏令营", "孩子", "暑假"],
    location: "Princeton NJ",
    author: "Andrew",
    published: "2026-02-20",
    updated: "2026-02-20",
    featured: true,
    readingTime: 8,
  },
  {
    id: "princeton-medical-guide",
    title: "新移民必读：普林斯顿医疗资源",
    summary: "家庭医生、儿科、专科医生推荐，含保险注意事项。",
    category: "services",
    tags: ["医疗", "医生", "保险", "新移民"],
    location: "Princeton NJ",
    author: "Andrew",
    published: "2026-02-15",
    updated: "2026-02-15",
    featured: true,
    readingTime: 6,
  },
  {
    id: "princeton-school-guide",
    title: "普林斯顿学区学校选择指南",
    summary: "West Windsor-Plainsboro 学区各学校介绍、学区房和择校建议。",
    category: "education",
    tags: ["学校", "学区", "择校"],
    location: "Princeton NJ",
    author: "Andrew",
    published: "2026-02-01",
    updated: "2026-02-01",
    featured: true,
    readingTime: 7,
  },
  {
    id: "princeton-newcomer-guide",
    title: "搬来普林斯顿必知：生活全攻略",
    summary: "刚搬来普林斯顿？这份指南帮你快速了解本地生活的方方面面。",
    category: "life",
    tags: ["新移民", "生活", "攻略"],
    location: "Princeton NJ",
    author: "Andrew",
    published: "2026-01-20",
    updated: "2026-01-20",
    featured: false,
    readingTime: 10,
  },
];

// ── 工具函数 ────────────────────────────────────────────────

export const getPostContent = (id) => contentMap[id] ?? "";

export const getLatestPosts = (n = 5) =>
  [...posts]
    .sort((a, b) => new Date(b.published) - new Date(a.published))
    .slice(0, n);

export const getFeaturedPosts = () =>
  posts.filter((p) => p.featured);

export const getPostsByCategory = (category) =>
  [...posts]
    .filter((p) => p.category === category)
    .sort((a, b) => new Date(b.published) - new Date(a.published));

export const getPostById = (id) =>
  posts.find((p) => p.id === id);

export const getAdjacentPosts = (id) => {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.published) - new Date(a.published)
  );
  const idx = sorted.findIndex((p) => p.id === id);
  return {
    prev: idx > 0 ? sorted[idx - 1] : null,
    next: idx < sorted.length - 1 ? sorted[idx + 1] : null,
  };
};
