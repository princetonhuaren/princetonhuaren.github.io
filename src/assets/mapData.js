// ============================================================
// 普林斯顿华人资源地图 — 统一数据
//
// 添加新地点：
//   1. 在 mapPlaces 数组末尾追加 object
//   2. group  = 顶级分类 id（food / kids / education / medical / services）
//   3. category = 子分类 id（见 mapCategories）
// ============================================================

// ── 顶级分组 ──────────────────────────────────────────────────
export const mapGroups = [
  { id: "food",      name: "餐饮",  emoji: "🍜", color: "#c0392b" },
  { id: "kids",      name: "遛娃",  emoji: "🎠", color: "#27ae60" },
  { id: "education", name: "教育",  emoji: "📚", color: "#2980b9" },
  { id: "medical",   name: "医疗",  emoji: "🏥", color: "#e74c3c" },
  { id: "services",  name: "服务",  emoji: "🔧", color: "#8e44ad" },
];

// ── 子分类 ────────────────────────────────────────────────────
export const mapCategories = [
  // 餐饮
  { id: "chinese",      group: "food",      name: "中餐馆",    color: "#c0392b" },
  { id: "noodles",      group: "food",      name: "面食/小吃", color: "#27ae60" },
  { id: "hotpot",       group: "food",      name: "火锅",      color: "#e67e22" },
  { id: "supermarket",  group: "food",      name: "亚洲超市", color: "#2980b9" },
  // 遛娃
  { id: "outdoor",      group: "kids",      name: "室外公园",  color: "#27ae60" },
  { id: "indoor",       group: "kids",      name: "室内游乐",  color: "#e67e22" },
  { id: "farm",         group: "kids",      name: "农场/自然", color: "#8e44ad" },
  // 教育
  { id: "daycare",       group: "education", name: "Daycare",   color: "#e74c3c" },
  { id: "chinese-school",group: "education", name: "中文学校",  color: "#2980b9" },
  // 医疗（待完善）
  { id: "doctor",       group: "medical",   name: "家庭医生",  color: "#e74c3c" },
  { id: "dentist",      group: "medical",   name: "牙医",      color: "#c0392b" },
  { id: "pediatrics",   group: "medical",   name: "儿科",      color: "#e67e22" },
  // 服务（待完善）
  { id: "auto",         group: "services",  name: "车行/维修", color: "#8e44ad" },
  { id: "renovation",   group: "services",  name: "装修",      color: "#6c3483" },
];

// ── 地点数据 ──────────────────────────────────────────────────
export const mapPlaces = [

  // ══ 餐饮 ══════════════════════════════════════════════════

  {
    id: "shanghai-bun",
    name: "Shanghai Bun 六禾园",
    group: "food", category: "noodles",
    desc: "上海菜 / 手工面 / 点心",
    address: "Southfield Shopping Center, West Windsor, NJ 08550",
    lat: 40.3181, lng: -74.6189,
    note: "汤包，面条，炒菜。$20–$30/人，适合家庭聚餐。",
    website: "https://www.shanghaibun08550.com/",
  },
  {
    id: "asian-bistro",
    name: "Asian Bistro",
    group: "food", category: "chinese",
    desc: "亚洲融合",
    address: "31 Station Dr, Princeton Junction, NJ 08550",
    lat: 40.3183, lng: -74.6217,
    note: "火车站旁，BYOB，休闲风格。",
  },
  {
    id: "lotus-garden",
    name: "莲园 Lotus Garden",
    group: "food", category: "chinese",
    desc: "中餐馆",
    address: "10 Schalks Crossing Rd, Plainsboro Township, NJ 08536",
    lat: 40.3371, lng: -74.596,
    note: "味道不错，撑过疫情的餐馆，$20–$30/人。",
  },
  {
    id: "sc-house",
    name: "锦里 SC House",
    group: "food", category: "chinese",
    desc: "正宗川菜",
    address: "238 Nassau St, Princeton, NJ 08542",
    lat: 40.3521, lng: -74.6521,
    note: "正宗四川口味，辣度可调，$20–$30/人。",
  },
  {
    id: "pf-changs",
    name: "P.F. Chang's",
    group: "food", category: "chinese",
    desc: "美式中餐 / 泛亚融合",
    address: "3545 US Route 1 S, Princeton, NJ 08540",
    lat: 40.3153, lng: -74.6585,
    note: "连锁，Quakerbridge Mall 旁，适合聚会，$20–$30/人。",
    phone: "(609) 799-5163",
  },
  {
    id: "liuyishou",
    name: "刘一手 Liuyishou Hotpot",
    group: "food", category: "hotpot",
    desc: "川渝火锅",
    address: "3349 Brunswick Pike #68, Lawrence Township, NJ 08648",
    lat: 40.2959, lng: -74.6828,
    note: "口味偏川渝，适合喜欢辣的朋友。距普林斯顿约20分钟，建议提前预约。$30–$50/人。",
    phone: "6092507167",
  },
  {
    id: "nan-xiang",
    name: "Nan Xiang Express",
    group: "food", category: "noodles",
    desc: "小笼包",
    address: "3349 Brunswick Pike #70, Lawrence Township, NJ 08648",
    lat: 40.296, lng: -74.6829,
    note: "小笼包口味正宗，距普林斯顿约20分钟。$20–$30/人。",
    phone: "6092695272",
  },
  {
    id: "kpot",
    name: "KPOT Korean BBQ & Hot Pot",
    group: "food", category: "hotpot",
    desc: "烤肉 / 火锅自助",
    address: "3320 US-1 Unit 171, Lawrence Township, NJ 08648",
    lat: 40.292, lng: -74.6813,
    note: "烤肉火锅自助，$20–$30/人。",
    phone: "+16092281244",
  },

  // 亚洲超市
  {
    id: "woori-mart",
    name: "Woori Mart 우리마트",
    group: "food", category: "supermarket",
    desc: "韩国 / 亚洲超市",
    address: "64 Princeton Hightstown Rd, Princeton Junction, NJ 08550",
    lat: 40.3129, lng: -74.6207,
    note: "普林斯顿最近的亚洲超市，有熟食、寿司吧、新鲜鱼肉蔬菜，8am–9pm。",
    phone: "(609) 750-8888",
    hours: "每天 8:00am–9:00pm",
  },
  {
    id: "meidong",
    name: "美东 Asian Food Market",
    group: "food", category: "supermarket",
    desc: "中国 / 亚洲超市",
    address: "10 Schalks Crossing Rd Suite 1, Plainsboro Township, NJ 08536",
    lat: 40.3368, lng: -74.594,
    note: "普林斯顿最大中国超市，烤鸭、烧鸡、叉烧、熟食、蛋糕、面包、盒饭。里面还有葛师傅、麟家小厨等中餐馆。",
    phone: "+16097991828",
    hours: "每天 9:00am–8:00pm",
  },
  {
    id: "hmart",
    name: "H Mart（Edison 店）",
    group: "food", category: "supermarket",
    desc: "韩国 / 亚洲大型超市",
    address: "1761 NJ-27, Edison, NJ 08817",
    lat: 40.5135, lng: -74.4078,
    note: "品类齐全，韩国食材为主，有熟食区。距普林斯顿约 25–30 分钟。",
  },
  {
    id: "99ranch",
    name: "99 Ranch Market（Edison 店）",
    group: "food", category: "supermarket",
    desc: "中式 / 全亚洲超市",
    address: "561 US-1 Unit 102, Edison, NJ 08817",
    lat: 40.5069, lng: -74.3974,
    note: "美国最大亚洲超市连锁，中国进口食材丰富。距普林斯顿约 30 分钟。",
  },

  // ══ 遛娃 ══════════════════════════════════════════════════

  {
    id: "hilltop-park",
    name: "Hilltop Park Playground",
    group: "kids", category: "outdoor",
    desc: "综合游乐场",
    address: "Bunn Dr, Princeton, NJ 08540",
    lat: 40.3763, lng: -74.6528,
    note: "大型综合游乐区，有滑梯、秋千、攀爬架，草坪开阔，停车方便，适合各年龄段。",
    hours: "日出至日落",
  },
  {
    id: "marquand-park",
    name: "Marquand Park",
    group: "kids", category: "outdoor",
    desc: "公园 / 植物园",
    address: "Eland Rd & Lovers Ln, Princeton, NJ 08540",
    lat: 40.3413, lng: -74.6709,
    note: "普林斯顿市区内老牌公园，有百年大树、开阔草坪和小型游乐设施，适合野餐遛娃。秋天落叶极美。",
    hours: "全天开放",
    website: "https://www.marquandpark.org/",
  },
  {
    id: "plainsboro-community-park",
    name: "Plainsboro Community Park",
    group: "kids", category: "outdoor",
    desc: "综合公园",
    address: "Park Dr, East Windsor, NJ 08512",
    lat: 40.3433, lng: -74.5622,
    note: "有大型游乐场、篮球场、网球场和足球场，设施新，草坪大，遛娃运动都方便。",
    hours: "日出至日落",
  },
  {
    id: "community-park-north",
    name: "Community Park North",
    group: "kids", category: "outdoor",
    desc: "综合游乐场",
    address: "Mountain Ave & Route 206, Princeton, NJ 08540",
    lat: 40.3604, lng: -74.6707,
    note: "露天剧场、野餐桌、洗手间、步行道。",
    hours: "日出至日落",
  },
  {
    id: "pettoranello",
    name: "Pettoranello Gardens",
    group: "kids", category: "outdoor",
    desc: "公园 / 游乐场",
    address: "20 Mountain Ave, Princeton, NJ 08540",
    lat: 40.3585, lng: -74.67,
    note: "社区公园，环境安静，适合带小宝宝散步。",
    hours: "全天开放",
  },
  {
    id: "wheezone",
    name: "Whee Zone",
    group: "kids", category: "indoor",
    desc: "室内充气堡乐园",
    address: "3562 NJ-27 STE #126–129, Kendall Park, NJ 08824",
    lat: 40.4207, lng: -74.5773,
    note: "大型室内充气堡，有各种充气滑梯和跳跳床，适合 2–12 岁。$15/孩子。雨天首选！",
    phone: "+17322025060",
    hours: "周二–五 11am–8pm，周六日 9am–9pm",
    website: "https://wheezone.com/",
  },
  {
    id: "chuck-e-cheese",
    name: "Chuck E. Cheese",
    group: "kids", category: "indoor",
    desc: "游乐餐厅",
    address: "520 Nassau Park Blvd, Princeton, NJ 08540",
    lat: 40.3062, lng: -74.6788,
    note: "游戏机 + 披萨 + 生日派对，孩子超喜欢。适合 3–10 岁，含代币购买套餐。",
    phone: "+16095140908",
    hours: "周一–四 11am–9pm，周五 11am–10pm，周末 10am–10pm",
    website: "https://www.chuckecheese.com/princeton-nj/",
  },
  {
    id: "prinfac",
    name: "Princeton Family Adventure Center",
    group: "kids", category: "indoor",
    desc: "室内综合游乐",
    address: "301 N Harrison St Unit 215, Princeton, NJ 08540",
    lat: 40.3636, lng: -74.6508,
    note: "室内攀岩、蹦床、游乐区合一，适合各年龄，含生日派对场地。",
    hours: "周一–四 12pm–9pm，周五–日 9am–9pm",
    website: "https://www.prinfac.com/",
  },
  {
    id: "terhune-orchards",
    name: "Terhune Orchards",
    group: "kids", category: "farm",
    desc: "农场 / 果园",
    address: "330 Cold Soil Rd, Princeton, NJ 08540",
    lat: 40.332, lng: -74.7256,
    note: "普林斯顿本地农场，春夏秋可摘草莓、蓝莓、苹果，有农场动物，孩子超喜欢。$5–$10/人入场。",
    phone: "(609) 924-2310",
    hours: "每天 9am–6pm（季节性，建议提前查官网）",
    website: "https://www.terhuneorchards.com/",
  },

  // ══ 教育 ══════════════════════════════════════════════════

  {
    id: "goddard-school",
    name: "Goddard School Princeton",
    group: "education", category: "daycare",
    desc: "Daycare / 早教日托",
    address: "29 Emmons Drive, Princeton, NJ 08540",
    lat: 40.3312, lng: -74.6501,
    note: "6周–小学，周一至五 7am–6:30pm。全日班约 $1,700–$1,800/月，兄弟姐妹折扣约 $85/月。暑期夏令营含游泳课和外出活动。",
    phone: "609-734-0909",
    hours: "周一–五 7:00am–6:30pm",
    website: "https://www.goddardschool.com/schools/nj/princeton/princeton",
  },
  {
    id: "huaxia-plainsboro",
    name: "华夏普兰斯堡中文学校",
    group: "education", category: "chinese-school",
    desc: "中文学校（周日）",
    address: "Mercer County Community College, 1200 Old Trenton Rd, West Windsor, NJ 08550",
    lat: 40.2534, lng: -74.6519,
    note: "约800名学生，华夏系统最大分校。课外活动丰富（功夫、围棋、民族舞等）。学前班–9年级+高级中文班。每周日 1:30–5:00 PM。",
    website: "https://www.hxpcs.org/",
  },
  {
    id: "huaxia-montgomery",
    name: "华夏蒙哥马利中文学校",
    group: "education", category: "chinese-school",
    desc: "中文学校（周六）",
    address: "Montgomery Upper Middle School, 375 Burnt Hill Rd, Skillman, NJ 08558",
    lat: 40.4274, lng: -74.6725,
    note: "华夏系统 Montgomery 分校，每周六 3:15–4:50 PM。适合住 Montgomery、Skillman、Hillsborough 一带的家庭。",
    website: "http://www.hxcsmg.org/",
  },
  {
    id: "yinghua",
    name: "英华中文学校",
    group: "education", category: "chinese-school",
    desc: "中文学校（周日）",
    address: "Chapin School, 4101 Princeton Pike, Princeton, NJ 08540",
    lat: 40.3113, lng: -74.6934,
    note: "全美首批 MSA 认证社区中文学校。马立平直接认字法，CHL/CSL/CBL 三轨分班。学费 $690/年（公开透明）。每周日两场可选。",
    website: "https://www.yinghua.org/",
  },
];

// ── 工具函数 ──────────────────────────────────────────────────
export const getCategoryColor = (categoryId) =>
  mapCategories.find((c) => c.id === categoryId)?.color ?? "#888";

export const getCategoryName = (categoryId) =>
  mapCategories.find((c) => c.id === categoryId)?.name ?? categoryId;

export const getGroupColor = (groupId) =>
  mapGroups.find((g) => g.id === groupId)?.color ?? "#888";
