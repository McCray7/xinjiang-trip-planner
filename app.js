const AMAP_KEY = "f2ab236a325dd234cbfa55b782ec5bb8";

const places = {
  Shanghai: { label: "上海", lat: 31.2304, lng: 121.4737 },
  Yining: { label: "伊宁", lat: 43.9168, lng: 81.2773 },
  Huocheng: { label: "霍城", lat: 44.0533, lng: 80.8783 },
  SayramLake: { label: "赛里木湖", lat: 44.5994, lng: 81.2056 },
  Tekes: { label: "特克斯", lat: 43.2194, lng: 81.8363 },
  Kalajun: { label: "喀拉峻", lat: 43.163, lng: 81.901276 },
  Qiongkushitai: { label: "琼库什台", lat: 43.1028, lng: 82.0105 },
  Nalati: { label: "那拉提", lat: 43.4746, lng: 83.1726 },
  Tangbula: { label: "唐布拉", lat: 43.6665, lng: 83.0178 }
};

const plans = {
  planA: {
    id: "planA",
    title: "8天7晚更优",
    range: "2026.06.13 - 2026.06.20",
    intensity: "节奏适中，更从容",
    holidayImpact: "仅尾段撞上假期",
    value: "性价比最佳",
    verdict:
      "这个方案能在假期高峰前走完最核心的风景段，环线更完整，固定成本也能分摊到更有效的游玩天数上。",
    reasons: [
      "只有最后一段与假期高峰重叠。",
      "赛里木湖、喀拉峻、那拉提、霍城、琼库什台都能覆盖，基本不用大砍行程。",
      "整体不赶，更适合情侣自驾。"
    ],
    highlightDay: 3,
    days: [
      { day: 1, date: "6月13日 周六", title: "飞抵伊宁", routeLabel: "上海 -> 伊宁", stay: "伊宁", focus: "休整", notes: "第一天尽量放轻松。", path: ["Shanghai", "Yining"], flightOnly: true },
      { day: 2, date: "6月14日 周日", title: "霍城薰衣草 + 赛里木湖", routeLabel: "伊宁 -> 霍城 -> 赛里木湖", stay: "赛里木湖周边", focus: "花海湖景", notes: "上午看薰衣草，下午进湖区。", path: ["Yining", "Huocheng", "SayramLake"] },
      { day: 3, date: "6月15日 周一", title: "环湖后前往特克斯", routeLabel: "赛里木湖 -> 特克斯", stay: "特克斯", focus: "湖景公路", notes: "重点推荐日。", path: ["SayramLake", "Tekes"] },
      { day: 4, date: "6月16日 周二", title: "喀拉峻完整一日", routeLabel: "特克斯 -> 喀拉峻 -> 特克斯", stay: "特克斯", focus: "草原", notes: "把喀拉峻留足一整天。", path: ["Tekes", "Kalajun", "Tekes"] },
      { day: 5, date: "6月17日 周三", title: "琼库什台慢节奏情侣日", routeLabel: "特克斯 -> 琼库什台", stay: "琼库什台或特克斯", focus: "村落", notes: "木屋、山坡、可选骑马。", path: ["Tekes", "Qiongkushitai"] },
      { day: 6, date: "6月18日 周四", title: "驱车前往那拉提", routeLabel: "琼库什台 -> 那拉提", stay: "那拉提镇", focus: "草原公路", notes: "当天挑一条核心线路即可。", path: ["Qiongkushitai", "Nalati"] },
      { day: 7, date: "6月19日 周五", title: "假期开始，避开最拥挤时段", routeLabel: "那拉提 -> 唐布拉 -> 伊宁", stay: "尼勒克或伊宁", focus: "弹性机动", notes: "唐布拉更适合作为灵活备选。", path: ["Nalati", "Tangbula", "Yining"] },
      { day: 8, date: "6月20日 周六", title: "返程飞回上海", routeLabel: "伊宁 -> 上海", stay: "返程", focus: "返程", notes: "给机场预留充足时间。", path: ["Yining", "Shanghai"], flightOnly: true }
    ]
  },
  planB: {
    id: "planB",
    title: "6天5晚更省请假",
    range: "2026.06.17 - 2026.06.22",
    intensity: "强度适中，但更赶",
    holidayImpact: "核心游玩日撞上假期",
    value: "请假更省",
    verdict:
      "这个版本可以走通，但最好的游玩日会被推到假期高峰。虽然更省请假，但节奏更紧，整体性价比偏弱。",
    reasons: [
      "核心游玩日与假期日期重叠。",
      "真正有效的游玩时间只有约四天。",
      "喀拉峻或琼库什台需要压缩深度。"
    ],
    highlightDay: 2,
    days: [
      { day: 1, date: "6月17日 周三", title: "飞抵伊宁", routeLabel: "上海 -> 伊宁", stay: "伊宁", focus: "休整", notes: "第一天尽量放轻松。", path: ["Shanghai", "Yining"], flightOnly: true },
      { day: 2, date: "6月18日 周四", title: "霍城薰衣草 + 赛里木湖", routeLabel: "伊宁 -> 霍城 -> 赛里木湖", stay: "赛里木湖周边", focus: "花海湖景", notes: "短方案里最顺的一天。", path: ["Yining", "Huocheng", "SayramLake"] },
      { day: 3, date: "6月19日 周五", title: "假期开始后转往特克斯", routeLabel: "赛里木湖 -> 特克斯", stay: "特克斯", focus: "湖景公路", notes: "建议尽早出发。", path: ["SayramLake", "Tekes"] },
      { day: 4, date: "6月20日 周六", title: "喀拉峻一日", routeLabel: "特克斯 -> 喀拉峻 -> 特克斯", stay: "特克斯或新源", focus: "草原", notes: "这一天默认优先喀拉峻。", path: ["Tekes", "Kalajun", "Tekes"] },
      { day: 5, date: "6月21日 周日", title: "那拉提高峰日", routeLabel: "特克斯 -> 那拉提 -> 伊宁", stay: "那拉提镇或伊宁", focus: "核心草原", notes: "车流可能明显上来。", path: ["Tekes", "Nalati", "Yining"] },
      { day: 6, date: "6月22日 周一", title: "返程飞回上海", routeLabel: "伊宁 -> 上海", stay: "返程", focus: "返程", notes: "如有需要可选更早航班。", path: ["Yining", "Shanghai"], flightOnly: true }
    ]
  }
};

const compareRows = [
  ["整体判断", "推荐主方案", "备选方案"],
  ["请假压力", "略高", "略低"],
  ["假期重叠", "仅尾段重叠", "核心日重叠"],
  ["堵车风险", "中等", "更高"],
  ["价格上涨", "中等", "更高"],
  ["覆盖度", "高", "中"],
  ["节奏", "舒适", "偏赶"],
  ["情侣友好度", "高", "中"],
  ["性价比", "更好", "一般"],
  ["最终建议", "优先选择", "仅在请假很紧时考虑"]
];

const checklist = [
  "比较伊宁直飞和中转航班价格与时间。",
  "租车优先选 SUV。",
  "尽早锁定关键住宿点。",
  "出发前再次确认独库和伊昭公路通行状态。",
  "如果只有一人驾驶，优先走更轻松的线路。"
];

const routeCache = new Map();

const state = {
  currentPlanId: "planA",
  activeDay: 3,
  renderToken: 0
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
let activePolyline = null;
let markers = [];

function init() {
  renderCompareGrid();
  renderChecklist();
  loadAmapScript()
    .then(() => {
      initMap();
      render();
    })
    .catch((error) => {
      renderMapUnavailable(`高德地图加载失败：${error.message}`);
      render();
    });

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
    if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

function loadAmapScript() {
  return new Promise((resolve, reject) => {
    if (window.AMap) return resolve();
    const script = document.createElement("script");
    script.src = `https://webapi.amap.com/maps?v=2.0&key=${encodeURIComponent(AMAP_KEY)}`;
    script.async = true;
    script.onload = resolve;
    script.onerror = () => reject(new Error("JS API 加载失败"));
    document.head.appendChild(script);
  });
}

function initMap() {
  if (!window.AMap || !realMapElement) return;
  map = new window.AMap.Map("real-map", {
    zoom: 5,
    center: [84.5, 43.3],
    viewMode: "2D",
    mapStyle: "amap://styles/whitesmoke",
    resizeEnable: true
  });
}

function render() {
  const plan = plans[state.currentPlanId];
  planTitle.textContent = `${plan.title} · ${plan.range}`;
  planSummary.textContent = plan.verdict;
  renderStats(plan);
  renderReasons(plan);
  renderToggleState();
  renderItinerary(plan);
  if (map) renderMap(plan);
}

function renderStats(plan) {
  const stats = [
    ["节奏", plan.intensity],
    ["假期影响", plan.holidayImpact],
    ["性价比", plan.value],
    ["适合人群", "第一次去伊犁的情侣自驾"]
  ];
  planStats.innerHTML = stats.map(([label, value]) => `<div class="stat-card"><div class="stat-label">${label}</div><div class="stat-value">${value}</div></div>`).join("");
}

function renderReasons(plan) {
  planReasons.innerHTML = plan.reasons.map((reason, index) => `<div class="reason-item"><strong>0${index + 1}</strong><span>${reason}</span></div>`).join("");
}

function renderToggleState() {
  toggleButtons.forEach((button) => {
    const active = button.dataset.plan === state.currentPlanId;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
}

function renderItinerary(plan) {
  itineraryList.innerHTML = plan.days.map((item) => {
    const active = item.day === state.activeDay;
    const metrics = getRouteMetrics(item.path, item.flightOnly);
    return `
      <article class="day-card ${active ? "is-active" : ""}">
        <button type="button" data-day="${item.day}" aria-label="查看第 ${item.day} 天路线">
          <div class="day-top">
            <div><div class="day-num">D${item.day}</div></div>
            <span class="tag">${item.focus}</span>
          </div>
          <div class="route-line">${item.title}</div>
          <p class="day-date">${item.date}</p>
          <div class="meta-row">
            <span class="pill">路线：${item.routeLabel}</span>
            <span class="pill">里程：${metrics.distanceText}</span>
            <span class="pill">车程：${metrics.durationText}</span>
            <span class="pill">住宿：${item.stay}</span>
          </div>
          <p class="notes">${item.notes}</p>
        </button>
      </article>
    `;
  }).join("");

  Array.from(itineraryList.querySelectorAll("button")).forEach((button) => {
    button.addEventListener("click", () => {
      state.activeDay = Number(button.dataset.day);
      render();
    });
  });

  const activeDay = plan.days.find((day) => day.day === state.activeDay);
  const metrics = getRouteMetrics(activeDay.path, activeDay.flightOnly);
  mapHint.textContent = `当前已选第 ${state.activeDay} 天：${activeDay.routeLabel} · ${metrics.distanceText} · ${metrics.durationText}`;
}

function renderCompareGrid() {
  compareGrid.innerHTML = compareRows.map(([label, a, b]) => `
    <div class="compare-row">
      <div class="compare-cell key"><div>${label}</div></div>
      <div class="compare-cell"><div class="grid-label">8D7N</div><div>${a}</div></div>
      <div class="compare-cell"><div class="grid-label">6D5N</div><div>${b}</div></div>
    </div>
  `).join("");
}

function renderChecklist() {
  checklistList.innerHTML = checklist.map((item) => `<li>${item}</li>`).join("");
}

async function renderMap(plan) {
  if (!map || !window.AMap) return;
  const token = ++state.renderToken;
  clearMapLayers();
  renderPlaceMarkers(plan);
  const selectedDay = plan.days.find((day) => day.day === state.activeDay);

  try {
    if (!selectedDay.flightOnly && selectedDay.path.length >= 2) {
      const selectedRoute = await getRouteForPath(selectedDay.path);
      if (token !== state.renderToken) return;
      activePolyline = new window.AMap.Polyline({
        path: selectedRoute.lngLats,
        strokeColor: "#679b8a",
        strokeOpacity: 0.95,
        strokeWeight: 7,
        lineJoin: "round",
        lineCap: "round"
      });
      activePolyline.setMap(map);
    }

    const overlays = [...(activePolyline ? [activePolyline] : []), ...markers];
    if (overlays.length) map.setFitView(overlays, false, [36, 36, 36, 36], 14);
    renderItinerary(plan);
  } catch (error) {
    if (token !== state.renderToken) return;
    const quotaExceeded = String(error.message || "").includes("CUQPS_HAS_EXCEEDED_THE_LIMIT");
    mapHint.textContent = quotaExceeded
      ? "路线加载失败：高德配额已超限。页面当前仅保留当天选中路线，请等待配额重置或更换 Key。"
      : `路线加载失败：${error.message}`;
  }
}

function clearMapLayers() {
  if (activePolyline) {
    activePolyline.setMap(null);
    activePolyline = null;
  }
  markers.forEach((item) => item.setMap(null));
  markers = [];
}

function renderPlaceMarkers(plan) {
  const selectedDay = plan.days.find((day) => day.day === state.activeDay);
  const activePlaces = new Set(selectedDay.path);
  const allPlaces = new Set();
  plan.days.forEach((day) => day.path.forEach((placeId) => allPlaces.add(placeId)));

  allPlaces.forEach((placeId) => {
    const place = places[placeId];
    if (!place) return;

    const marker = new window.AMap.Marker({
      position: [place.lng, place.lat],
      offset: new window.AMap.Pixel(-9, -9),
      title: place.label,
      content: `<div class="map-pin ${activePlaces.has(placeId) ? "is-active" : ""}"></div>`
    });
    marker.setMap(map);

    const labelMarker = new window.AMap.Marker({
      position: [place.lng, place.lat],
      offset: new window.AMap.Pixel(12, -10),
      content: `<div class="amap-label">${place.label}</div>`
    });
    labelMarker.setMap(map);

    markers.push(marker, labelMarker);
  });
}

function getRouteMetrics(path, flightOnly) {
  if (flightOnly) return { distanceText: "航程约 4300 公里", durationText: "当天飞行" };
  const cached = routeCache.get(createPathKey(path));
  if (cached?.status === "resolved") {
    return {
      distanceText: formatDistance(cached.data.distanceMeters),
      durationText: formatDuration(cached.data.durationSeconds)
    };
  }
  return { distanceText: "路线加载中...", durationText: "路线加载中..." };
}

function getRouteForPath(path) {
  const cacheKey = createPathKey(path);
  const cached = routeCache.get(cacheKey);
  if (cached?.status === "resolved") return Promise.resolve(cached.data);
  if (cached?.status === "pending") return cached.promise;

  const promise = buildRouteFromLegs(path)
    .then((result) => {
      routeCache.set(cacheKey, { status: "resolved", data: result });
      return result;
    })
    .catch((error) => {
      routeCache.delete(cacheKey);
      throw error;
    });

  routeCache.set(cacheKey, { status: "pending", promise });
  return promise;
}

async function buildRouteFromLegs(path) {
  const legResults = [];
  for (let index = 0; index < path.length - 1; index += 1) {
    legResults.push(await getDrivingLeg(path[index], path[index + 1]));
  }

  const lngLats = [];
  let distanceMeters = 0;
  let durationSeconds = 0;

  legResults.forEach((leg, index) => {
    distanceMeters += leg.distanceMeters;
    durationSeconds += leg.durationSeconds;
    lngLats.push(...(index === 0 ? leg.lngLats : leg.lngLats.slice(1)));
  });

  return { lngLats, distanceMeters, durationSeconds };
}

function getDrivingLeg(startId, endId) {
  const legKey = `leg:${startId}->${endId}`;
  const cached = routeCache.get(legKey);
  if (cached?.status === "resolved") return Promise.resolve(cached.data);
  if (cached?.status === "pending") return cached.promise;

  const start = places[startId];
  const end = places[endId];
  if (!start || !end) return Promise.reject(new Error(`未知地点：${startId} -> ${endId}`));

  const url = new URL("https://restapi.amap.com/v3/direction/driving");
  url.searchParams.set("key", AMAP_KEY);
  url.searchParams.set("origin", `${start.lng},${start.lat}`);
  url.searchParams.set("destination", `${end.lng},${end.lat}`);
  url.searchParams.set("extensions", "all");
  url.searchParams.set("strategy", "0");

  const promise = jsonpRequest(url.toString())
    .then((payload) => {
      if (payload.status !== "1" || !payload.route?.paths?.length) {
        throw new Error(payload.info || "未返回可用路线");
      }

      const bestPath = payload.route.paths[0];
      const lngLats = [];
      (bestPath.steps || []).forEach((step, index) => {
        const points = decodePolyline(step.polyline);
        lngLats.push(...(index === 0 ? points : points.slice(1)));
      });
      if (!lngLats.length) lngLats.push([start.lng, start.lat], [end.lng, end.lat]);

      return {
        lngLats,
        distanceMeters: Number(bestPath.distance || 0),
        durationSeconds: Number(bestPath.duration || 0)
      };
    })
    .then((result) => {
      routeCache.set(legKey, { status: "resolved", data: result });
      return result;
    })
    .catch((error) => {
      routeCache.delete(legKey);
      throw error;
    });

  routeCache.set(legKey, { status: "pending", promise });
  return promise;
}

function jsonpRequest(baseUrl) {
  return new Promise((resolve, reject) => {
    const callbackName = `amap_jsonp_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
    const script = document.createElement("script");
    const timeout = setTimeout(() => {
      cleanup();
      reject(new Error("路线请求超时"));
    }, 12000);

    const cleanup = () => {
      delete window[callbackName];
      script.remove();
      clearTimeout(timeout);
    };

    window[callbackName] = (payload) => {
      cleanup();
      resolve(payload);
    };

    script.onerror = () => {
      cleanup();
      reject(new Error("路线请求失败"));
    };

    script.src = `${baseUrl}&callback=${callbackName}`;
    document.body.appendChild(script);
  });
}

function decodePolyline(polyline) {
  if (!polyline) return [];
  return polyline.split(";").map((pair) => {
    const [lng, lat] = pair.split(",").map(Number);
    return [lng, lat];
  });
}

function formatDistance(distanceMeters) {
  if (!distanceMeters) return "暂无";
  return `${(distanceMeters / 1000).toFixed(distanceMeters >= 100000 ? 0 : 1)} 公里`;
}

function formatDuration(durationSeconds) {
  if (!durationSeconds) return "暂无";
  const hours = Math.floor(durationSeconds / 3600);
  const minutes = Math.round((durationSeconds % 3600) / 60);
  if (hours <= 0) return `${minutes} 分钟`;
  if (minutes === 0) return `${hours} 小时`;
  return `${hours} 小时 ${minutes} 分钟`;
}

function createPathKey(path) {
  return `path:${path.join(">")}`;
}

function renderMapUnavailable(message) {
  if (!realMapElement) return;
  realMapElement.innerHTML = `<div class="map-error">${message}</div>`;
}

init();
