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
    id: "terhune-bunny-trail-2026",
    title: "Terhune Orchards Bunny Trail 春季节",
    date: "2026-04-04",
    endDate: "2026-04-05",
    category: "kids",
    location: "Terhune Orchards",
    address: "330 Cold Soil Rd, Princeton, NJ 08540",
    desc: "穿越农场的寻宝游戏，终点有奖励和手工活动。另有小马骑乘、鸭子赛跑、苹果酒甜甜圈等。",
    note: "需提前在线购票。",
    link: "https://terhuneorchards.ticketspice.com/bunny-trail",
    free: false,
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
