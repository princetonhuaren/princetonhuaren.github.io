// ============================================================
// 社区活动数据
// 添加新活动：在 events 数组末尾追加 object
// 字段说明：
//   id        - 唯一标识（英文小写横线）
//   title     - 活动名称
//   date      - 开始日期 "YYYY-MM-DD"
//   endDate   - 结束日期（可选，多天活动）
//   category  - kids / food / community / culture
//   location  - 地点名称
//   address   - 具体地址（可选）
//   desc      - 简介
//   note      - 补充说明（可选）
//   link      - 外部链接（可选）
//   free      - true = 免费，false = 收费，undefined = 不确定
// ============================================================

export const events = [
  {
    id: "pasa-spring-break-camp-2026",
    title: "Spring Break Camp 2026 — 创意·运动·领导力",
    date: "2026-03-30",
    endDate: "2026-04-03",
    category: "kids",
    location: "PASA Academy",
    address: "99 Clarksville Rd, West Windsor, NJ",
    desc: "K–6年级春假营，涵盖创意艺术、体育运动、STEM探索、舞蹈表演、领导力和团队挑战。全天 9am–4pm，延伸托管至 6pm。全周 $495，单日 $99，名额有限。",
    note: "3/30–4/3（周一至周五）。可扫海报二维码或访问 pasaacademy.org 报名。",
    link: "https://pasaacademy.org",
    free: false,
  },
  {
    id: "marketfair-easter-bunny-2026",
    title: "MarketFair 复活节兔子拍照",
    date: "2026-03-13",
    endDate: "2026-04-04",
    category: "kids",
    location: "MarketFair Princeton",
    address: "3535 US-1, Princeton, NJ 08540",
    desc: "免费与复活节兔子合影，专业摄影师拍照可购买。活动期间还有多场特别活动。",
    note: "无需预约，直接前往即可。",
    link: "https://www.marketfairshoppes.com/events",
    free: true,
  },
  {
    id: "marketfair-super-bunny-bash-2026",
    title: "Super Bunny Bash 欢迎派对",
    date: "2026-03-14",
    category: "kids",
    location: "MarketFair Princeton",
    address: "3535 US-1, Princeton, NJ 08540",
    desc: "47 英尺超级马里奥主题障碍课、彩绘兔子手工、DJ Mario 儿童音乐表演、脸部彩绘和零食，全部免费！",
    note: "3/14 周六 10:30am–1pm，无需预约。",
    link: "https://www.eventbrite.com/e/super-bunny-bash-welcome-party-tickets-1983978885253",
    free: true,
  },
  {
    id: "marketfair-sensory-bunny-2026",
    title: "Sensory Friendly 复活节兔子体验",
    date: "2026-03-22",
    category: "kids",
    location: "MarketFair Princeton",
    address: "3535 US-1, Princeton, NJ 08540",
    desc: "专为感觉敏感的孩子设计：灯光调暗、音量降低、节奏放慢，让孩子更舒适地与复活节兔子合影。",
    note: "3/22 周日 9:00–10:30am。",
    link: "https://www.marketfairshoppes.com/events",
    free: true,
  },
  {
    id: "marketfair-pet-photos-2026",
    title: "宠物与复活节兔子合影",
    date: "2026-03-16",
    endDate: "2026-03-30",
    category: "community",
    location: "MarketFair Princeton",
    address: "3535 US-1, Princeton, NJ 08540",
    desc: "每周一 4–7pm 带宠物来与复活节兔子拍照，宠物还可获赠春季领巾和零食。",
    note: "每周一 4–7pm，3/16、3/23、3/30。",
    link: "https://www.marketfairshoppes.com/events",
    free: true,
  },
  {
    id: "windsor-chapel-egg-hunt-2026",
    title: "Windsor Chapel 复活节寻蛋",
    date: "2026-03-29",
    category: "kids",
    location: "Windsor Chapel",
    address: "401 Village Road East, Princeton Junction",
    desc: "户外复活节寻蛋活动，适合 2–9 岁儿童。请自带篮子。无需提前报名。",
    note: "3/29 周日 3:00pm 准时开始。",
    link: "https://www.windsorchapel.org",
    free: true,
  },
  {
    id: "ymca-aquatic-egg-hunt-2026",
    title: "YMCA 水中寻蛋",
    date: "2026-04-04",
    category: "kids",
    location: "Greater Somerset County YMCA（Princeton 分部）",
    desc: "独特的水中寻蛋活动！孩子穿游泳衣在泳池里捡彩蛋，换取礼品袋。4–6岁 2:00pm，7–12岁 2:40pm。4岁以下和不会游泳的孩子需家长下水陪同。",
    note: "会员免费，非会员 $15。自带泳衣、毛巾和水桶。",
    link: "https://www.gscymca.org",
    free: false,
  },
  {
    id: "mccarter-spring-break-camp-2026",
    title: "McCarter Theatre 春假戏剧营",
    date: "2026-03-30",
    endDate: "2026-04-03",
    category: "kids",
    location: "McCarter Theatre Center",
    address: "91 University Place, Princeton, NJ",
    desc: "五天戏剧艺术体验营，涵盖场景创作、音乐即兴、肢体律动等创意活动，每天 9am–3pm。",
    note: "全周费用 $700。",
    link: "https://www.mccarter.org",
    free: false,
  },
  {
    id: "terhune-bunny-trail-2026",
    title: "Terhune Orchards Bunny Trail 春季节",
    date: "2026-04-04",
    endDate: "2026-04-05",
    category: "kids",
    location: "Terhune Orchards",
    address: "330 Cold Soil Rd, Princeton, NJ 08540",
    desc: "穿越农场的寻宝游戏，终点有奖励和手工活动。另有小马骑乘、鸭子赛跑、苹果酒甜甜圈等。",
    note: "需提前在线购票，当日票价更贵。",
    link: "https://terhuneorchards.ticketspice.com/bunny-trail",
    free: false,
  },
  {
    id: "francofest-2026",
    title: "FrancoFest 法语文化节",
    date: "2026-04-11",
    category: "culture",
    location: "Hinds Plaza & Princeton Public Library",
    address: "Princeton, NJ",
    desc: "第二届法语文化节，户外音乐、美食、手工艺品、书展及法语国家作家见面会。来自法国、加拿大、刚果、突尼斯等地的作家参与，活动全程免费，老少皆宜。",
    note: "1pm–6pm，无需报名。",
    link: "https://princetonlibrary.libnet.info/event/13202250",
    free: true,
  },
  {
    id: "spring-into-science-2026",
    title: "普林斯顿大学 Spring Into Science 开放日",
    date: "2026-04-18",
    category: "kids",
    location: "Princeton University（Frick Chemistry Lab）",
    address: "Princeton University Campus, NJ",
    desc: "普林斯顿大学科学开放日，4–10年级学生及家长可参观实验室、参与天文、化学、神经科学等互动演示，与科学家面对面交流。",
    note: "10am–1pm，需提前在线预约。",
    link: "https://scienceoutreach.princeton.edu",
    free: true,
  },
  {
    id: "earth-day-morven-2026",
    title: "Earth Day 地球日庆典",
    date: "2026-04-19",
    category: "community",
    location: "Morven Museum & Garden",
    address: "55 Stockton Street, Princeton, NJ",
    desc: "户外地球日庆典，有瑜伽、舞蹈表演、DJ音乐、书籍拼图置换、旧衣回收及创意 Trashion Show（用废品制作时装）。免费入场。",
    note: "12pm–4pm，雨天照常举行。",
    link: "https://www.sustainableprinceton.org/event/earth-day-celebration-2026/",
    free: true,
  },
  {
    id: "ecclesia-egg-hunt-2026",
    title: "Ecclesia 复活节寻蛋（第四届）",
    date: "2026-04-19",
    category: "kids",
    location: "Community Park South",
    address: "Princeton, NJ（Race Street 停车）",
    desc: "社区复活节寻蛋活动，按年龄分区，公平有趣。错过复活节当天的家庭的好选择。",
    note: "4:00pm 开始，免费，无需预约。",
    link: "https://www.ecclesianj.com/princeton-egg-hunt",
    free: true,
  },
  {
    id: "porchfest-2026",
    title: "Princeton Porchfest 门廊音乐节（第五届）",
    date: "2026-04-25",
    category: "culture",
    location: "Princeton 各街区（多个门廊舞台）",
    desc: "普林斯顿最受欢迎的步行音乐节！全镇数十个门廊轮番举办现场演出，边散步边听音乐，顺便逛逛本地咖啡馆和小店。各类风格音乐，全程免费。",
    note: "12pm–6pm，雨天照常。普林斯顿大学艺术博物馆也设有表演舞台。",
    link: "https://artscouncilofprinceton.org/exhibits-and-events/porchfest/",
    free: true,
  },
];

// 判断活动是否已过期（结束日期或开始日期 + 1天）
const today = () => new Date().toISOString().slice(0, 10);

export const getUpcomingEvents = () =>
  events
    .filter((e) => (e.endDate || e.date) >= today())
    .sort((a, b) => a.date.localeCompare(b.date));

export const getPastEvents = () =>
  events
    .filter((e) => (e.endDate || e.date) < today())
    .sort((a, b) => b.date.localeCompare(a.date));
