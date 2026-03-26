const plans = {
  planA: {
    id: "planA",
    badge: "推荐",
    title: "8天7晚更优",
    range: "2026.06.13 - 2026.06.20",
    intensity: "中等偏舒适",
    vacation: "尾段进入端午",
    value: "性价比最高",
    verdict:
      "把最美的伊犁核心段放在端午高峰前完成，既能避开热门拥堵，又能把机票和租车这些固定成本摊薄得更合理。",
    reasons: [
      "端午假期是 6 月 19 日到 21 日，这套方案只有最后两天进入高峰。",
      "赛里木湖、喀拉峻、那拉提、霍城都能完整覆盖，不需要做大幅删减。",
      "更适合情侣出行，旅行节奏松弛，不会一直处在赶路状态。"
    ],
    highlightDay: 3,
    routeOrder: ["上海", "伊宁", "霍城", "赛里木湖", "特克斯", "琼库什台", "那拉提", "唐布拉", "伊宁"],
    days: [
      {
        day: 1,
        date: "6月13日 周六",
        title: "上海飞伊宁，轻松适应",
        route: "上海 -> 伊宁",
        drive: "机场取车，市区轻松移动",
        stay: "伊宁市",
        focus: "休整",
        notes: "只安排喀赞其、六星街或伊犁河边散步，早点休息，给第二天长距离出发留体力。",
        path: ["上海", "伊宁"]
      },
      {
        day: 2,
        date: "6月14日 周日",
        title: "霍城薰衣草 + 果子沟 + 赛里木湖",
        route: "伊宁 -> 霍城 -> 赛里木湖",
        drive: "约 3.5 - 4.5 小时",
        stay: "赛里木湖周边",
        focus: "花海 + 湖景",
        notes: "上午看霍城薰衣草，下午走果子沟去赛湖，建议住湖边或东门外，争取把日落和第二天早晨都拿下。",
        path: ["伊宁", "霍城", "赛里木湖"]
      },
      {
        day: 3,
        date: "6月15日 周一",
        title: "赛里木湖深度环湖后转场特克斯",
        route: "赛里木湖 -> 特克斯",
        drive: "约 4.5 - 5.5 小时",
        stay: "特克斯",
        focus: "环湖",
        notes: "这天是整套方案的亮点日，早起环湖比赶景点更重要。下午去特克斯，晚上逛八卦城即可。",
        path: ["赛里木湖", "特克斯"]
      },
      {
        day: 4,
        date: "6月16日 周二",
        title: "喀拉峻给足整天",
        route: "特克斯 -> 喀拉峻 -> 特克斯",
        drive: "往返约 2 - 3 小时",
        stay: "特克斯",
        focus: "草原",
        notes: "喀拉峻值得整天安排，不建议压成半天。晚上回特克斯住，控制驾驶疲劳。",
        path: ["特克斯", "特克斯"]
      },
      {
        day: 5,
        date: "6月17日 周三",
        title: "琼库什台慢节奏情侣日",
        route: "特克斯 -> 琼库什台",
        drive: "约 2.5 - 3.5 小时",
        stay: "琼库什台或特克斯",
        focus: "村落",
        notes: "适合做木屋、草坡、骑马二选一的慢节奏安排。如果只一位司机，可改成巩留或新源方向的轻松线。",
        path: ["特克斯", "琼库什台"]
      },
      {
        day: 6,
        date: "6月18日 周四",
        title: "转到那拉提，只玩一条核心线",
        route: "琼库什台/特克斯 -> 那拉提",
        drive: "约 3.5 - 5 小时",
        stay: "那拉提镇",
        focus: "草原公路",
        notes: "下午进入那拉提后只选河谷草原或空中草原其中一条，避免贪多导致疲劳。",
        path: ["琼库什台", "那拉提"]
      },
      {
        day: 7,
        date: "6月19日 周五",
        title: "端午开始，避开最堵段",
        route: "那拉提 -> 唐布拉/尼勒克 或 那拉提 -> 伊宁",
        drive: "约 4 - 6 小时",
        stay: "尼勒克或伊宁",
        focus: "弹性安排",
        notes: "这天开始进入假期，不建议把独库写成刚需。更稳妥的是唐布拉风景线，或者直接回伊宁吃喝休整。",
        path: ["那拉提", "唐布拉", "伊宁"]
      },
      {
        day: 8,
        date: "6月20日 周六",
        title: "返程",
        route: "伊宁 -> 上海",
        drive: "还车返程",
        stay: "返程日",
        focus: "返程",
        notes: "如果前一晚住尼勒克，需要预留回伊宁和机场还车时间。返程日不要再塞景点。",
        path: ["伊宁", "上海"]
      }
    ]
  },
  planB: {
    id: "planB",
    badge: "备选",
    title: "6天5晚更省请假",
    range: "2026.06.17 - 2026.06.22",
    intensity: "中等偏赶",
    vacation: "核心段撞端午",
    value: "请假更省",
    verdict:
      "可以成行，但最可惜的是把真正好玩的几天压进了端午高峰。整体看，花的钱未必少很多，节奏却明显更赶。",
    reasons: [
      "6 月 19 日到 21 日正好是端午假期，热门景区和路段会更容易拥堵。",
      "有效游玩时间只有 4 天左右，大交通在整趟旅行中的占比偏高。",
      "需要在喀拉峻和琼库什台之间做减法，行程完整度会下降。"
    ],
    highlightDay: 2,
    routeOrder: ["上海", "伊宁", "霍城", "赛里木湖", "特克斯", "那拉提", "伊宁"],
    days: [
      {
        day: 1,
        date: "6月17日 周三",
        title: "飞抵伊宁，快速进入状态",
        route: "上海 -> 伊宁",
        drive: "机场取车，市区轻松移动",
        stay: "伊宁市",
        focus: "休整",
        notes: "晚上只安排简单逛吃，不建议第一天就赶景点。",
        path: ["上海", "伊宁"]
      },
      {
        day: 2,
        date: "6月18日 周四",
        title: "霍城薰衣草后直奔赛里木湖",
        route: "伊宁 -> 霍城 -> 赛里木湖",
        drive: "约 3.5 - 4.5 小时",
        stay: "赛里木湖周边",
        focus: "花海 + 湖景",
        notes: "这一天节奏最完整，适合白天看花海，傍晚抵达赛湖。",
        path: ["伊宁", "霍城", "赛里木湖"]
      },
      {
        day: 3,
        date: "6月19日 周五",
        title: "端午开始，环湖后去特克斯",
        route: "赛里木湖 -> 特克斯",
        drive: "约 4.5 - 5.5 小时",
        stay: "特克斯",
        focus: "环湖",
        notes: "这天开始进入端午高峰。建议早起环湖，否则下午转场会更赶。",
        path: ["赛里木湖", "特克斯"]
      },
      {
        day: 4,
        date: "6月20日 周六",
        title: "喀拉峻或琼库什台二选一",
        route: "特克斯 -> 喀拉峻 或 琼库什台",
        drive: "约 2 - 4 小时",
        stay: "特克斯或新源",
        focus: "二选一",
        notes: "如果更想拍照和轻徒步，优先喀拉峻；如果想要村落感和童话感，优先琼库什台。",
        path: ["特克斯", "琼库什台"]
      },
      {
        day: 5,
        date: "6月21日 周日",
        title: "那拉提高峰日",
        route: "特克斯/新源 -> 那拉提",
        drive: "约 3 - 4.5 小时",
        stay: "那拉提镇或伊宁",
        focus: "核心草原",
        notes: "假期尾声，热门景区排队风险更明显。如果第二天早班机，建议晚间回伊宁。",
        path: ["特克斯", "那拉提", "伊宁"]
      },
      {
        day: 6,
        date: "6月22日 周一",
        title: "返程",
        route: "伊宁 -> 上海",
        drive: "还车返程",
        stay: "返程日",
        focus: "返程",
        notes: "如果前一晚没回伊宁，上午会明显更赶。",
        path: ["伊宁", "上海"]
      }
    ]
  }
};

const compareRows = [
  ["总体推荐", "更推荐", "可行但次选"],
  ["请假压力", "略高", "略低"],
  ["假期重叠", "仅尾段进入端午", "核心游玩日正撞端午"],
  ["拥堵风险", "中等", "较高"],
  ["住宿/租车涨价风险", "中等", "较高"],
  ["景色覆盖完整度", "高", "中"],
  ["节奏", "舒适", "偏赶"],
  ["适合情侣程度", "高", "中"],
  ["固定成本摊薄", "更好", "一般"],
  ["最终判断", "最佳选择", "时间不够时的备选"]
];

const checklist = [
  "先比价上海直飞伊宁和上海经乌鲁木齐转伊宁，优先看总时长，不只看裸价。",
  "租车优先选 SUV，确认不限里程、保险覆盖、取还车网点和违章处理规则。",
  "尽快锁定赛里木湖、特克斯、那拉提三段住宿，这三段更容易涨价。",
  "出发前 7 天再确认独库公路和伊昭公路是否实际开放，不把它们写成刚性主线。",
  "如果只有一位司机，把琼库什台改成更轻松的路线，降低连续山路驾驶疲劳。"
];

const mapPoints = {
  上海: { x: 344, y: 372, labelX: 306, labelY: 400 },
  伊宁: { x: 86, y: 94, labelX: 30, labelY: 82 },
  霍城: { x: 124, y: 82, labelX: 126, labelY: 58 },
  赛里木湖: { x: 160, y: 112, labelX: 170, labelY: 92 },
  特克斯: { x: 176, y: 192, labelX: 182, labelY: 218 },
  琼库什台: { x: 196, y: 225, labelX: 208, labelY: 246 },
  那拉提: { x: 235, y: 184, labelX: 246, labelY: 164 },
  唐布拉: { x: 210, y: 144, labelX: 222, labelY: 128 }
};

const state = {
  currentPlanId: "planA",
  activeDay: 3
};

const planTitle = document.getElementById("plan-title");
const planStats = document.getElementById("plan-stats");
const planSummary = document.getElementById("plan-summary");
const planReasons = document.getElementById("plan-reasons");
const itineraryList = document.getElementById("itinerary-list");
const compareGrid = document.getElementById("compare-grid");
const checklistList = document.getElementById("checklist");
const routeMap = document.getElementById("route-map");
const mapHint = document.getElementById("map-hint");
const mapModeNote = document.getElementById("map-mode-note");
const jumpBestDay = document.getElementById("jump-best-day");
const toggleButtons = Array.from(document.querySelectorAll(".toggle-btn"));

function init() {
  renderCompareGrid();
  renderChecklist();
  render();

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextPlanId = button.dataset.plan;
      if (!nextPlanId || nextPlanId === state.currentPlanId) return;
      state.currentPlanId = nextPlanId;
      state.activeDay = plans[nextPlanId].highlightDay;
      render();
    });
  });

  jumpBestDay.addEventListener("click", () => {
    const target = document.querySelector(`[data-day="${plans[state.currentPlanId].highlightDay}"]`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      target.focus({ preventScroll: true });
    }
  });
}

function renderStats(plan) {
  const stats = [
    ["旅行强度", plan.intensity],
    ["假期影响", plan.vacation],
    ["核心价值", plan.value],
    ["适合人群", "首次去新疆的情侣"]
  ];

  planStats.innerHTML = stats
    .map(
      ([label, value]) => `
        <div class="stat-card">
          <div class="stat-label">${label}</div>
          <div class="stat-value">${value}</div>
        </div>
      `
    )
    .join("");
}

function renderReasons(plan) {
  planReasons.innerHTML = plan.reasons
    .map(
      (reason, index) => `
        <div class="reason-item">
          <strong>0${index + 1}</strong>
          <span>${reason}</span>
        </div>
      `
    )
    .join("");
}

function renderToggleState() {
  toggleButtons.forEach((button) => {
    const active = button.dataset.plan === state.currentPlanId;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
}

function renderItinerary(plan) {
  itineraryList.innerHTML = plan.days
    .map((item) => {
      const active = item.day === state.activeDay;
      return `
        <article class="day-card ${active ? "is-active" : ""}">
          <button type="button" data-day="${item.day}" aria-label="查看第${item.day}天路线">
            <div class="day-top">
              <div>
                <div class="day-num">D${item.day}</div>
              </div>
              <span class="tag">${item.focus}</span>
            </div>
            <div class="route-line">${item.title}</div>
            <p class="day-date">${item.date}</p>
            <div class="meta-row">
              <span class="pill">路线：${item.route}</span>
              <span class="pill">驾驶：${item.drive}</span>
              <span class="pill">住宿：${item.stay}</span>
            </div>
            <p class="notes">${item.notes}</p>
          </button>
        </article>
      `;
    })
    .join("");

  Array.from(itineraryList.querySelectorAll("button")).forEach((button) => {
    button.addEventListener("click", () => {
      state.activeDay = Number(button.dataset.day);
      render();
    });
  });

  mapHint.textContent = `当前高亮：第 ${state.activeDay} 天 · ${plan.days.find((day) => day.day === state.activeDay)?.route}`;
}

function renderCompareGrid() {
  compareGrid.innerHTML = compareRows
    .map(
      ([label, a, b]) => `
        <div class="compare-row">
          <div class="compare-cell key">
            <div>${label}</div>
          </div>
          <div class="compare-cell">
            <div class="grid-label">8天7晚</div>
            <div>${a}</div>
          </div>
          <div class="compare-cell">
            <div class="grid-label">6天5晚</div>
            <div>${b}</div>
          </div>
        </div>
      `
    )
    .join("");
}

function renderChecklist() {
  checklistList.innerHTML = checklist.map((item) => `<li>${item}</li>`).join("");
}

function renderMap(plan) {
  const activePath = plan.days.find((item) => item.day === state.activeDay)?.path || [];
  const basePath = buildPath(plan.routeOrder);
  const highlightPath = buildPath(activePath);
  const nodeNames = Array.from(new Set(plan.routeOrder));

  routeMap.innerHTML = `
    <rect x="8" y="8" width="374" height="414" rx="22" class="map-bg"></rect>
    ${renderGridLines()}
    <path d="${basePath}" class="route-base"></path>
    <path d="${highlightPath}" class="route-highlight"></path>
    ${nodeNames.map((name) => renderNode(name, activePath.includes(name))).join("")}
    ${renderCaption(plan)}
  `;
}

function render() {
  const plan = plans[state.currentPlanId];
  planTitle.textContent = `${plan.title} · ${plan.range}`;
  planSummary.textContent = plan.verdict;
  mapModeNote.textContent = "当前为静态路线总览图，适合手机快速查看整体走向与每日落点。";
  renderStats(plan);
  renderReasons(plan);
  renderToggleState();
  renderItinerary(plan);
  renderMap(plan);
}

function renderGridLines() {
  const verticals = [54, 108, 162, 216, 270, 324].map(
    (x) => `<line x1="${x}" y1="26" x2="${x}" y2="404" class="map-grid"></line>`
  );
  const horizontals = [70, 124, 178, 232, 286, 340].map(
    (y) => `<line x1="26" y1="${y}" x2="364" y2="${y}" class="map-grid"></line>`
  );
  return [...verticals, ...horizontals].join("");
}

function buildPath(points) {
  const valid = points.filter((point) => mapPoints[point]);
  if (!valid.length) return "";
  return valid
    .map((point, index) => {
      const { x, y } = mapPoints[point];
      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");
}

function renderNode(name, isActive) {
  const point = mapPoints[name];
  if (!point) return "";
  return `
    <g>
      <circle cx="${point.x}" cy="${point.y}" r="10" class="node ${isActive ? "active" : ""}"></circle>
      <rect x="${point.labelX - 10}" y="${point.labelY - 18}" width="${Math.max(name.length * 14, 54)}" height="26" rx="13" class="map-chip"></rect>
      <text x="${point.labelX}" y="${point.labelY}" class="node-label">${name}</text>
    </g>
  `;
}

function renderCaption(plan) {
  return `
    <text x="28" y="34" class="route-caption">${plan.range}</text>
    <text x="28" y="52" class="route-caption">${plan.badge}方案 · ${plan.intensity}</text>
  `;
}

init();
