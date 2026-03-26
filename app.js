const plans = {
  planA: {
    id: "planA",
    title: "8天7晚更优",
    range: "2026.06.13 - 2026.06.20",
    intensity: "中等偏舒适",
    holidayImpact: "尾段进入端午",
    value: "性价比最高",
    verdict:
      "这套方案把最美的伊犁核心段放在端午高峰前完成，既能避开热门拥堵，也能把机票和租车这类固定成本摊薄得更合理。",
    reasons: [
      "只有最后两天进入 6 月 19 日到 21 日的端午假期高峰。",
      "赛里木湖、喀拉峻、那拉提和霍城都能完整覆盖，不需要大幅删减。",
      "更适合情侣出行，旅行节奏更松弛。"
    ],
    highlightDay: 3,
    routeOrder: ["上海", "伊宁", "霍城", "赛里木湖", "特克斯", "琼库什台", "那拉提", "唐布拉", "伊宁"],
    days: [
      {
        day: 1,
        date: "Jun 13 Sat",
        title: "上海飞伊宁，轻松适应",
        route: "上海 -> 伊宁",
        distance: "飞行约 4300 km",
        drive: "航班 + 市区轻松移动",
        stay: "伊宁市",
        focus: "休整",
        notes: "第一天保持轻松，只安排喀赞其或六星街散步，早点休息。",
        path: ["上海", "伊宁"]
      },
      {
        day: 2,
        date: "Jun 14 Sun",
        title: "霍城薰衣草 + 赛里木湖",
        route: "伊宁 -> 霍城 -> 赛里木湖",
        distance: "约 220 km",
        drive: "约 3.5 到 4.5 小时",
        stay: "赛里木湖周边",
        focus: "花海 + 湖景",
        notes: "上午看霍城薰衣草，下午去赛里木湖，最好住一晚拿下日落和清晨。",
        path: ["伊宁", "霍城", "赛里木湖"]
      },
      {
        day: 3,
        date: "Jun 15 Mon",
        title: "赛里木湖深度环湖后转场特克斯",
        route: "赛里木湖 -> 特克斯",
        distance: "约 300 km",
        drive: "约 4.5 到 5.5 小时",
        stay: "特克斯",
        focus: "环湖",
        notes: "这是整套方案的亮点日，优先把环湖体验做完整，再去特克斯。",
        path: ["赛里木湖", "特克斯"]
      },
      {
        day: 4,
        date: "Jun 16 Tue",
        title: "喀拉峻整天",
        route: "特克斯 -> 喀拉峻 -> 特克斯",
        distance: "往返约 120 km",
        drive: "往返约 2 到 3 小时",
        stay: "特克斯",
        focus: "草原",
        notes: "喀拉峻值得给整天，不建议压缩成匆忙打卡。",
        path: ["特克斯"]
      },
      {
        day: 5,
        date: "Jun 17 Wed",
        title: "琼库什台慢节奏情侣日",
        route: "特克斯 -> 琼库什台",
        distance: "约 90 km",
        drive: "约 2.5 到 3.5 小时",
        stay: "琼库什台或特克斯",
        focus: "村落",
        notes: "适合做木屋、草坡和骑马这类慢节奏安排。",
        path: ["特克斯", "琼库什台"]
      },
      {
        day: 6,
        date: "Jun 18 Thu",
        title: "转到那拉提",
        route: "琼库什台或特克斯 -> 那拉提",
        distance: "约 250 km",
        drive: "约 3.5 到 5 小时",
        stay: "那拉提镇",
        focus: "草原公路",
        notes: "那拉提只选一条核心线，避免太赶。",
        path: ["琼库什台", "那拉提"]
      },
      {
        day: 7,
        date: "Jun 19 Fri",
        title: "端午开始，避开最堵路段",
        route: "那拉提 -> 唐布拉 -> 伊宁",
        distance: "约 280 到 430 km",
        drive: "约 4 到 6 小时",
        stay: "尼勒克或伊宁",
        focus: "弹性安排",
        notes: "不要把独库当刚需，唐布拉更稳，或者直接回伊宁休整。",
        path: ["那拉提", "唐布拉", "伊宁"]
      },
      {
        day: 8,
        date: "Jun 20 Sat",
        title: "返程",
        route: "伊宁 -> 上海",
        distance: "飞行约 4300 km",
        drive: "还车 + 航班返程",
        stay: "返程日",
        focus: "返程",
        notes: "提前预留还车和登机缓冲时间。",
        path: ["伊宁", "上海"]
      }
    ]
  },
  planB: {
    id: "planB",
    title: "6天5晚更省请假",
    range: "2026.06.17 - 2026.06.22",
    intensity: "中等偏赶",
    holidayImpact: "核心段撞端午",
    value: "更省请假",
    verdict:
      "这套方案可以成行，但把最好玩的几天压进了端午高峰。虽然少请假，但节奏更赶，性价比弱一些。",
    reasons: [
      "6 月 19 日到 21 日是端午假期，核心游玩日更容易拥堵。",
      "有效游玩时间只有约 4 天。",
      "需要在喀拉峻和琼库什台之间做减法。"
    ],
    highlightDay: 2,
    routeOrder: ["上海", "伊宁", "霍城", "赛里木湖", "特克斯", "那拉提", "伊宁"],
    days: [
      {
        day: 1,
        date: "Jun 17 Wed",
        title: "飞抵伊宁",
        route: "上海 -> 伊宁",
        distance: "飞行约 4300 km",
        drive: "航班 + 市区轻松移动",
        stay: "伊宁市",
        focus: "休整",
        notes: "第一天只安排简单逛吃，第二天早起出发。",
        path: ["上海", "伊宁"]
      },
      {
        day: 2,
        date: "Jun 18 Thu",
        title: "霍城薰衣草后直奔赛里木湖",
        route: "伊宁 -> 霍城 -> 赛里木湖",
        distance: "约 220 km",
        drive: "约 3.5 到 4.5 小时",
        stay: "赛里木湖周边",
        focus: "花海 + 湖景",
        notes: "这是短线方案里最顺的一天。",
        path: ["伊宁", "霍城", "赛里木湖"]
      },
      {
        day: 3,
        date: "Jun 19 Fri",
        title: "端午开始，环湖后去特克斯",
        route: "赛里木湖 -> 特克斯",
        distance: "约 300 km",
        drive: "约 4.5 到 5.5 小时",
        stay: "特克斯",
        focus: "环湖",
        notes: "建议早起环湖，否则假期车流上来后会更赶。",
        path: ["赛里木湖", "特克斯"]
      },
      {
        day: 4,
        date: "Jun 20 Sat",
        title: "喀拉峻或琼库什台二选一",
        route: "特克斯 -> 喀拉峻 或 琼库什台",
        distance: "约 90 到 120 km",
        drive: "约 2 到 4 小时",
        stay: "特克斯或新源",
        focus: "二选一",
        notes: "想拍照和轻徒步选喀拉峻，想要村落感选琼库什台。",
        path: ["特克斯", "琼库什台"]
      },
      {
        day: 5,
        date: "Jun 21 Sun",
        title: "那拉提高峰日",
        route: "特克斯或新源 -> 那拉提 -> 伊宁",
        distance: "约 150 到 250 km",
        drive: "约 3 到 4.5 小时",
        stay: "那拉提镇或伊宁",
        focus: "核心草原",
        notes: "假期尾声排队风险更明显，次日早班机建议当晚回伊宁。",
        path: ["特克斯", "那拉提", "伊宁"]
      },
      {
        day: 6,
        date: "Jun 22 Mon",
        title: "返程",
        route: "伊宁 -> 上海",
        distance: "飞行约 4300 km",
        drive: "还车 + 航班返程",
        stay: "返程日",
        focus: "返程",
        notes: "如果前一晚没回伊宁，上午会明显更赶。",
        path: ["伊宁", "上海"]
      }
    ]
  }
};

const compareRows = [
  ["总体", "更推荐", "备选"],
  ["请假压力", "略高", "略低"],
  ["假期重叠", "仅尾段进入端午", "核心游玩日重叠"],
  ["拥堵风险", "中等", "更高"],
  ["住宿租车涨价", "中等", "更高"],
  ["覆盖完整度", "高", "中"],
  ["节奏", "舒适", "偏赶"],
  ["情侣友好度", "高", "中"],
  ["性价比", "更好", "一般"],
  ["最终结论", "最佳选择", "只在请假很紧时考虑"]
];

const checklist = [
  "比较上海直飞伊宁和上海经乌鲁木齐转伊宁，优先看总耗时。",
  "租车优先选 SUV，确认不限里程、保险覆盖、取还车规则和违章处理。",
  "赛里木湖、特克斯、那拉提的住宿尽量提前锁定。",
  "出发前 7 天重新确认独库和伊昭是否开放。",
  "如果只有一位司机，把琼库什台替换成更轻松的路线。"
];

const cityCoords = {
  上海: [31.2304, 121.4737],
  伊宁: [43.9168, 81.2773],
  霍城: [44.0533, 80.8783],
  赛里木湖: [44.5994, 81.2056],
  特克斯: [43.2194, 81.8363],
  琼库什台: [43.1028, 82.0105],
  那拉提: [43.4746, 83.1726],
  唐布拉: [43.6665, 83.0178]
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
const mapHint = document.getElementById("map-hint");
const jumpBestDay = document.getElementById("jump-best-day");
const toggleButtons = Array.from(document.querySelectorAll(".toggle-btn"));
const realMapElement = document.getElementById("real-map");

let map = null;
let baseLine = null;
let activeLine = null;
let markers = [];

function init() {
  renderCompareGrid();
  renderChecklist();
  initMap();
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

function initMap() {
  if (!window.L || !realMapElement) {
    renderMapUnavailable();
    return;
  }
  map = window.L.map(realMapElement, {
    zoomControl: true,
    scrollWheelZoom: true
  });

  window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  const refreshMapSize = () => {
    if (!map) return;
    setTimeout(() => map.invalidateSize(), 50);
    setTimeout(() => map.invalidateSize(), 250);
    setTimeout(() => map.invalidateSize(), 800);
  };

  map.whenReady(refreshMapSize);
  window.addEventListener("load", refreshMapSize);
  window.addEventListener("resize", refreshMapSize);
  window.addEventListener("orientationchange", refreshMapSize);
  window.addEventListener("pageshow", refreshMapSize);
}

function render() {
  const plan = plans[state.currentPlanId];
  planTitle.textContent = `${plan.title} · ${plan.range}`;
  planSummary.textContent = plan.verdict;
  renderStats(plan);
  renderReasons(plan);
  renderToggleState();
  renderItinerary(plan);
  renderMap(plan);
}

function renderStats(plan) {
  const stats = [
    ["旅行强度", plan.intensity],
    ["假期影响", plan.holidayImpact],
    ["核心价值", plan.value],
    ["适合人群", "第一次去新疆的情侣"]
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
              <span class="pill">里程：${item.distance}</span>
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

  const activeDay = plan.days.find((day) => day.day === state.activeDay);
  mapHint.textContent = `当前高亮：第 ${state.activeDay} 天 · ${activeDay.route} · ${activeDay.distance} · ${activeDay.drive}`;
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
  if (!map || !window.L) return;

  const activePathNames = plan.days.find((item) => item.day === state.activeDay)?.path || [];
  const baseCoords = plan.routeOrder.map((name) => cityCoords[name]).filter(Boolean);
  const activeCoords = activePathNames.map((name) => cityCoords[name]).filter(Boolean);

  if (baseLine) map.removeLayer(baseLine);
  if (activeLine) map.removeLayer(activeLine);
  markers.forEach((marker) => map.removeLayer(marker));
  markers = [];

  baseLine = window.L.polyline(baseCoords, {
    color: "#b85c38",
    opacity: 0.6,
    weight: 4
  }).addTo(map);

  if (activeCoords.length >= 2) {
    activeLine = window.L.polyline(activeCoords, {
      color: "#679b8a",
      opacity: 0.95,
      weight: 6
    }).addTo(map);
  } else {
    activeLine = null;
  }

  Array.from(new Set(plan.routeOrder)).forEach((name) => {
    const coord = cityCoords[name];
    if (!coord) return;
    const isActive = activePathNames.includes(name);
    const marker = window.L
      .marker(coord, {
        icon: window.L.divIcon({
          className: "",
          html: `<div class="map-pin ${isActive ? "is-active" : ""}"></div>`,
          iconSize: [18, 18],
          iconAnchor: [9, 9]
        })
      })
      .addTo(map)
      .bindTooltip(name, {
        permanent: true,
        direction: "right",
        offset: [10, 0],
        className: "route-label"
      });
    markers.push(marker);
  });

  const group = window.L.featureGroup([
    baseLine,
    ...(activeLine ? [activeLine] : []),
    ...markers
  ]);
  map.fitBounds(group.getBounds(), { padding: [28, 28] });
  setTimeout(() => map.invalidateSize(), 80);
}

function renderMapUnavailable() {
  if (!realMapElement) return;
  realMapElement.innerHTML = `
    <div class="map-error">
      Map failed to load on this device.<br />
      Try reopening in a system browser, or refresh once after the page finishes loading.
    </div>
  `;
}

init();
