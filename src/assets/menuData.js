// ============================================================
// 家常菜单数据
// 按季节组织，每季多个"菜单方案"
// 每个方案包含若干道菜，附带备注/食材来源提示
// ============================================================

export const seasons = [
  { id: "spring", name: "春", emoji: "🌸", color: "#e91e8c" },
  { id: "summer", name: "夏", emoji: "🌞", color: "#f39c12" },
  { id: "autumn", name: "秋", emoji: "🍂", color: "#e74c3c" },
  { id: "winter", name: "冬", emoji: "❄️", color: "#2980b9" },
];

// 菜单分类标签
export const mealTypes = [
  { id: "quick",   name: "快手菜",  emoji: "⚡", desc: "30分钟搞定" },
  { id: "soup",    name: "汤/粥",   emoji: "🍲", desc: "清爽养生" },
  { id: "lazy",    name: "懒人方案", emoji: "😴", desc: "不想开火" },
  { id: "weekend", name: "周末大餐", emoji: "🎉", desc: "花点时间做" },
];

export const menuData = {
  spring: [
    {
      type: "quick",
      dishes: [
        { name: "韭菜炒鸡蛋", note: "春天韭菜正鲜，H Mart 有卖" },
        { name: "蒜苔炒肉丝" },
        { name: "清炒豌豆苗", note: "99 Ranch 或 H Mart 有豌豆苗" },
        { name: "番茄炒蛋 + 白米饭", note: "永远不会出错的组合" },
      ],
    },
    {
      type: "soup",
      dishes: [
        { name: "春笋排骨汤", note: "春笋当季，H Mart 有新鲜春笋" },
        { name: "菠菜猪肝汤", note: "补铁，适合春季" },
        { name: "银耳莲子羹", note: "提前泡发，电饭锅炖" },
      ],
    },
    {
      type: "lazy",
      dishes: [
        { name: "H Mart 卤味拼盘 + 泡菜 + 白饭" },
        { name: "皮蛋瘦肉粥（电饭锅版）", note: "前一晚备好，早上定时煮" },
        { name: "凉拌豆腐 + 榨菜", note: "老干妈/生抽/香油拌一拌" },
      ],
    },
    {
      type: "weekend",
      dishes: [
        { name: "红烧肉", note: "五花肉 H Mart 有，周末慢炖" },
        { name: "清蒸鱼", note: "99 Ranch 活鱼，生抽姜葱蒸" },
        { name: "糖醋里脊" },
      ],
    },
  ],

  summer: [
    {
      type: "quick",
      dishes: [
        { name: "黄瓜拍蒜", note: "快手凉菜，拌点辣椒油" },
        { name: "西红柿炒蛋 + 白米饭" },
        { name: "清炒空心菜", note: "H Mart 有，大火快炒" },
        { name: "丝瓜炒虾仁" },
      ],
    },
    {
      type: "soup",
      dishes: [
        { name: "冬瓜排骨汤", note: "清热去火，可以提前炖好放冰箱" },
        { name: "绿豆汤", note: "天热必备，煮好冷藏" },
        { name: "丝瓜蛋花汤", note: "10分钟搞定" },
      ],
    },
    {
      type: "lazy",
      dishes: [
        { name: "凉拌面（芝麻酱/辣椒油）+ 荷包蛋", note: "不开大火" },
        { name: "日式冷乌冬", note: "99 Ranch 有乌冬面，冷水过一下" },
        { name: "H Mart 熟食 + 凉拌黄瓜" },
      ],
    },
    {
      type: "weekend",
      dishes: [
        { name: "啤酒鸭", note: "夏天适合，加点姜去腥" },
        { name: "水煮鱼", note: "H Mart 买草鱼，配豆芽" },
        { name: "麻辣香锅", note: "食材随意，夏天吃辣出汗反而凉快" },
      ],
    },
  ],

  autumn: [
    {
      type: "quick",
      dishes: [
        { name: "板栗烧鸡", note: "秋天板栗季，H Mart 或 99 Ranch 有" },
        { name: "青椒炒肉丝" },
        { name: "白菜粉条", note: "简单家常，顶饱" },
      ],
    },
    {
      type: "soup",
      dishes: [
        { name: "莲藕排骨汤", note: "秋天滋补，H Mart 有莲藕" },
        { name: "南瓜粥", note: "加点糯米，甜糯暖胃" },
        { name: "山药枸杞鸡汤" },
      ],
    },
    {
      type: "lazy",
      dishes: [
        { name: "砂锅方便面 + 卤蛋 + 青菜", note: "天凉了吃碗热的" },
        { name: "电饭锅蒸南瓜 + 米饭" },
        { name: "Trader Joe's 冷冻饺子 + 紫菜蛋花汤" },
      ],
    },
    {
      type: "weekend",
      dishes: [
        { name: "红焖羊肉", note: "秋冬进补，H Mart 有羊肉" },
        { name: "扣肉（梅菜扣肉）", note: "梅干菜可网购，周末大菜" },
        { name: "Terhune Orchards 苹果做苹果派", note: "10月去摘苹果顺带做" },
      ],
    },
  ],

  winter: [
    {
      type: "quick",
      dishes: [
        { name: "白菜豆腐 + 粉条", note: "冬天暖身家常菜" },
        { name: "番茄牛腩面", note: "提前炖好牛腩，下班煮面" },
        { name: "韩式泡菜炒饭", note: "H Mart 买泡菜" },
      ],
    },
    {
      type: "soup",
      dishes: [
        { name: "羊肉萝卜汤", note: "冬天暖身首选" },
        { name: "腊八粥", note: "食材网购，提前泡发" },
        { name: "酸菜鱼汤", note: "H Mart 有酸菜，草鱼" },
      ],
    },
    {
      type: "lazy",
      dishes: [
        { name: "火锅（自助版）", note: "H Mart 买火锅底料和食材，围桌吃" },
        { name: "电饭锅炖牛尾汤", note: "早上放好，晚上回来就能喝" },
        { name: "速冻汤圆 + 醪糟" },
      ],
    },
    {
      type: "weekend",
      dishes: [
        { name: "东坡肉", note: "冬天慢炖，香气十足" },
        { name: "剁椒鱼头", note: "剁椒酱网购，鱼头 H Mart 有" },
        { name: "自制饺子", note: "家庭活动，包饺子当乐趣" },
      ],
    },
  ],
};
