const AMAP_WEB_SERVICE_KEY = "f2ab236a325dd234cbfa55b782ec5bb8";

const places = {
  Shanghai: { label: "Shanghai", lat: 31.2304, lng: 121.4737 },
  Yining: { label: "Yining", lat: 43.9168, lng: 81.2773 },
  Huocheng: { label: "Huocheng", lat: 44.0533, lng: 80.8783 },
  SayramLake: { label: "Sayram Lake", lat: 44.5994, lng: 81.2056 },
  Tekes: { label: "Tekes", lat: 43.2194, lng: 81.8363 },
  Kalajun: { label: "Kalajun", lat: 43.163, lng: 81.901276 },
  Qiongkushitai: { label: "Qiongkushitai", lat: 43.1028, lng: 82.0105 },
  Nalati: { label: "Nalati", lat: 43.4746, lng: 83.1726 },
  Tangbula: { label: "Tangbula", lat: 43.6665, lng: 83.0178 }
};

const plans = {
  planA: {
    id: "planA",
    title: "8D7N is better",
    range: "2026.06.13 - 2026.06.20",
    intensity: "moderate and relaxed",
    holidayImpact: "holiday only at the end",
    value: "best value",
    verdict:
      "This plan finishes the strongest scenic stretch before the holiday peak, gives you a fuller loop, and spreads fixed costs over more useful days.",
    reasons: [
      "Only the final part overlaps with the Dragon Boat holiday peak.",
      "It covers Sayram Lake, Kalajun, Nalati, Huocheng, and Qiongkushitai without major cuts.",
      "It is more couple-friendly because the pace is less rushed."
    ],
    highlightDay: 3,
    days: [
      {
        day: 1,
        date: "Jun 13 Sat",
        title: "Fly to Yining",
        routeLabel: "Shanghai -> Yining",
        stay: "Yining",
        focus: "rest",
        notes: "Keep day one light. Walk around Kazanqi or Liuxing Street and sleep early.",
        path: ["Shanghai", "Yining"]
      },
      {
        day: 2,
        date: "Jun 14 Sun",
        title: "Huocheng lavender and Sayram Lake",
        routeLabel: "Yining -> Huocheng -> Sayram Lake",
        stay: "Sayram Lake area",
        focus: "flowers and lake",
        notes: "Visit lavender in the morning, then head to Sayram Lake for sunset and the next morning.",
        path: ["Yining", "Huocheng", "SayramLake"]
      },
      {
        day: 3,
        date: "Jun 15 Mon",
        title: "Sayram Lake loop then Tekes",
        routeLabel: "Sayram Lake -> Tekes",
        stay: "Tekes",
        focus: "lake loop",
        notes: "This is the highlight day. Prioritize the lake loop, then drive to Tekes.",
        path: ["SayramLake", "Tekes"]
      },
      {
        day: 4,
        date: "Jun 16 Tue",
        title: "Full Kalajun day",
        routeLabel: "Tekes -> Kalajun -> Tekes",
        stay: "Tekes",
        focus: "grassland",
        notes: "Give Kalajun a full day. Do not compress it into a quick stop.",
        path: ["Tekes", "Kalajun", "Tekes"]
      },
      {
        day: 5,
        date: "Jun 17 Wed",
        title: "Slow couple day in Qiongkushitai",
        routeLabel: "Tekes -> Qiongkushitai",
        stay: "Qiongkushitai or Tekes",
        focus: "village",
        notes: "Great for cabins, slopes, and optional horse riding.",
        path: ["Tekes", "Qiongkushitai"]
      },
      {
        day: 6,
        date: "Jun 18 Thu",
        title: "Drive to Nalati",
        routeLabel: "Qiongkushitai -> Nalati",
        stay: "Nalati town",
        focus: "grassland road",
        notes: "Pick one core Nalati line only so the day stays comfortable.",
        path: ["Qiongkushitai", "Nalati"]
      },
      {
        day: 7,
        date: "Jun 19 Fri",
        title: "Holiday starts, avoid the worst crowd",
        routeLabel: "Nalati -> Tangbula -> Yining",
        stay: "Nilka or Yining",
        focus: "flex day",
        notes: "Do not make Duku Highway mandatory. Tangbula is the safer flexible option.",
        path: ["Nalati", "Tangbula", "Yining"]
      },
      {
        day: 8,
        date: "Jun 20 Sat",
        title: "Fly back",
        routeLabel: "Yining -> Shanghai",
        stay: "travel day",
        focus: "return",
        notes: "Leave enough buffer for airport car return and the flight.",
        path: ["Yining", "Shanghai"],
        flightOnly: true
      }
    ]
  },
  planB: {
    id: "planB",
    title: "6D5N saves leave days",
    range: "2026.06.17 - 2026.06.22",
    intensity: "moderate and rushed",
    holidayImpact: "core days hit the holiday",
    value: "fewer leave days",
    verdict:
      "This version is workable, but it pushes the best sightseeing days into the holiday peak. It saves leave days, but the pace is tighter and the value is weaker.",
    reasons: [
      "Core sightseeing days overlap with the holiday dates.",
      "Effective sightseeing time is only about four days.",
      "You need to cut depth from Kalajun or Qiongkushitai."
    ],
    highlightDay: 2,
    days: [
      {
        day: 1,
        date: "Jun 17 Wed",
        title: "Fly to Yining",
        routeLabel: "Shanghai -> Yining",
        stay: "Yining",
        focus: "rest",
        notes: "Keep day one light so you can start early next day.",
        path: ["Shanghai", "Yining"]
      },
      {
        day: 2,
        date: "Jun 18 Thu",
        title: "Huocheng lavender and Sayram Lake",
        routeLabel: "Yining -> Huocheng -> Sayram Lake",
        stay: "Sayram Lake area",
        focus: "flowers and lake",
        notes: "This is the smoothest day in the shorter plan.",
        path: ["Yining", "Huocheng", "SayramLake"]
      },
      {
        day: 3,
        date: "Jun 19 Fri",
        title: "Holiday starts, then Tekes",
        routeLabel: "Sayram Lake -> Tekes",
        stay: "Tekes",
        focus: "lake loop",
        notes: "Start early. Once holiday traffic builds up, the transfer feels much longer.",
        path: ["SayramLake", "Tekes"]
      },
      {
        day: 4,
        date: "Jun 20 Sat",
        title: "Kalajun day",
        routeLabel: "Tekes -> Kalajun -> Tekes",
        stay: "Tekes or Xinyuan",
        focus: "choose one",
        notes: "This route uses Kalajun as the default real-road example for the day.",
        path: ["Tekes", "Kalajun", "Tekes"]
      },
      {
        day: 5,
        date: "Jun 21 Sun",
        title: "Nalati peak day",
        routeLabel: "Tekes -> Nalati -> Yining",
        stay: "Nalati town or Yining",
        focus: "core grassland",
        notes: "Holiday tail traffic may be obvious. If the return flight is early next day, go back to Yining at night.",
        path: ["Tekes", "Nalati", "Yining"]
      },
      {
        day: 6,
        date: "Jun 22 Mon",
        title: "Fly back",
        routeLabel: "Yining -> Shanghai",
        stay: "travel day",
        focus: "return",
        notes: "If you did not return to Yining the night before, the morning will be tight.",
        path: ["Yining", "Shanghai"],
        flightOnly: true
      }
    ]
  }
};

const compareRows = [
  ["overall", "recommended", "backup option"],
  ["leave pressure", "slightly higher", "slightly lower"],
  ["holiday overlap", "only at the end", "core days overlap"],
  ["traffic risk", "medium", "higher"],
  ["hotel and rental surge", "medium", "higher"],
  ["coverage", "high", "medium"],
  ["pace", "comfortable", "rushed"],
  ["couple friendly", "high", "medium"],
  ["cost efficiency", "better", "average"],
  ["final call", "best choice", "only if leave is tight"]
];

const checklist = [
  "Compare Shanghai to Yining direct flights against Shanghai to Urumqi to Yining connections. Prioritize total time over headline fare.",
  "Choose an SUV first. Confirm unlimited mileage, insurance coverage, pickup and dropoff rules, and violation handling.",
  "Lock Sayram Lake, Tekes, and Nalati hotels early. Those stops are more likely to surge.",
  "Recheck Duku Highway and Yizhao Highway opening status about seven days before departure.",
  "If only one person drives, replace the harder mountain day with an easier option."
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
let planPolylines = [];
let activePolyline = null;
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
    }
  });
}

function initMap() {
  if (!window.L || !realMapElement) {
    renderMapUnavailable("Map failed to load.");
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
    ["pace", plan.intensity],
    ["holiday", plan.holidayImpact],
    ["value", plan.value],
    ["fit", "first-time couple trip"]
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
      const metrics = getRouteMetrics(item.path, item.flightOnly);

      return `
        <article class="day-card ${active ? "is-active" : ""}">
          <button type="button" data-day="${item.day}" aria-label="Show route for day ${item.day}">
            <div class="day-top">
              <div>
                <div class="day-num">D${item.day}</div>
              </div>
              <span class="tag">${item.focus}</span>
            </div>
            <div class="route-line">${item.title}</div>
            <p class="day-date">${item.date}</p>
            <div class="meta-row">
              <span class="pill">route: ${item.routeLabel}</span>
              <span class="pill">distance: ${metrics.distanceText}</span>
              <span class="pill">drive: ${metrics.durationText}</span>
              <span class="pill">stay: ${item.stay}</span>
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
  const metrics = getRouteMetrics(activeDay.path, activeDay.flightOnly);
  mapHint.textContent = `Selected: day ${state.activeDay} · ${activeDay.routeLabel} · ${metrics.distanceText} · ${metrics.durationText}`;
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
            <div class="grid-label">8D7N</div>
            <div>${a}</div>
          </div>
          <div class="compare-cell">
            <div class="grid-label">6D5N</div>
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

async function renderMap(plan) {
  if (!map || !window.L) return;

  const token = ++state.renderToken;
  clearMapLayers();
  renderPlaceMarkers(plan);

  const routeDays = plan.days.filter((day) => !day.flightOnly && day.path.length >= 2);
  const selectedDay = plan.days.find((day) => day.day === state.activeDay);

  try {
    const dayRoutes = await Promise.all(routeDays.map((day) => getRouteForPath(day.path)));
    if (token !== state.renderToken) return;

    dayRoutes.forEach((routeResult) => {
      const polyline = window.L.polyline(routeResult.latLngs, {
        color: "#b85c38",
        opacity: 0.48,
        weight: 4
      }).addTo(map);
      planPolylines.push(polyline);
    });

    if (!selectedDay.flightOnly && selectedDay.path.length >= 2) {
      const selectedRoute = await getRouteForPath(selectedDay.path);
      if (token !== state.renderToken) return;
      activePolyline = window.L.polyline(selectedRoute.latLngs, {
        color: "#679b8a",
        opacity: 0.95,
        weight: 6
      }).addTo(map);
    }

    const layers = [...planPolylines, ...(activePolyline ? [activePolyline] : []), ...markers];
    if (layers.length) {
      map.fitBounds(window.L.featureGroup(layers).getBounds(), { padding: [28, 28] });
    }

    renderItinerary(plan);
  } catch (error) {
    if (token !== state.renderToken) return;
    mapHint.textContent = `Route loading failed: ${error.message}`;
  }
}

function clearMapLayers() {
  planPolylines.forEach((layer) => map.removeLayer(layer));
  planPolylines = [];

  if (activePolyline) {
    map.removeLayer(activePolyline);
    activePolyline = null;
  }

  markers.forEach((marker) => map.removeLayer(marker));
  markers = [];
}

function renderPlaceMarkers(plan) {
  const selectedDay = plan.days.find((day) => day.day === state.activeDay);
  const activePlaceIds = new Set(selectedDay.path);

  const allPlaceIds = new Set();
  plan.days.forEach((day) => day.path.forEach((placeId) => allPlaceIds.add(placeId)));

  allPlaceIds.forEach((placeId) => {
    const place = places[placeId];
    if (!place) return;

    const marker = window.L
      .marker([place.lat, place.lng], {
        icon: window.L.divIcon({
          className: "",
          html: `<div class="map-pin ${activePlaceIds.has(placeId) ? "is-active" : ""}"></div>`,
          iconSize: [18, 18],
          iconAnchor: [9, 9]
        })
      })
      .addTo(map)
      .bindTooltip(place.label, {
        permanent: true,
        direction: "right",
        offset: [10, 0],
        className: "route-label"
      });

    markers.push(marker);
  });
}

function getRouteMetrics(path, flightOnly) {
  if (flightOnly) {
    return {
      distanceText: "flight about 4300 km",
      durationText: "flight day"
    };
  }

  const cacheKey = createPathKey(path);
  const cached = routeCache.get(cacheKey);

  if (cached?.status === "resolved") {
    return {
      distanceText: formatDistance(cached.data.distanceMeters),
      durationText: formatDuration(cached.data.durationSeconds)
    };
  }

  return {
    distanceText: "loading route...",
    durationText: "loading route..."
  };
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
    const startId = path[index];
    const endId = path[index + 1];
    legResults.push(await getDrivingLeg(startId, endId));
  }

  const latLngs = [];
  let distanceMeters = 0;
  let durationSeconds = 0;

  legResults.forEach((leg, index) => {
    distanceMeters += leg.distanceMeters;
    durationSeconds += leg.durationSeconds;
    latLngs.push(...(index === 0 ? leg.latLngs : leg.latLngs.slice(1)));
  });

  return {
    distanceMeters,
    durationSeconds,
    latLngs
  };
}

function getDrivingLeg(startId, endId) {
  const legKey = `leg:${startId}->${endId}`;
  const cached = routeCache.get(legKey);

  if (cached?.status === "resolved") return Promise.resolve(cached.data);
  if (cached?.status === "pending") return cached.promise;

  const start = places[startId];
  const end = places[endId];

  if (!start || !end) {
    return Promise.reject(new Error(`Unknown place in route: ${startId} -> ${endId}`));
  }

  const url = new URL("https://restapi.amap.com/v3/direction/driving");
  url.searchParams.set("key", AMAP_WEB_SERVICE_KEY);
  url.searchParams.set("origin", `${start.lng},${start.lat}`);
  url.searchParams.set("destination", `${end.lng},${end.lat}`);
  url.searchParams.set("extensions", "all");
  url.searchParams.set("strategy", "0");

  const promise = jsonpRequest(url.toString())
    .then((payload) => {
      if (payload.status !== "1" || !payload.route || !payload.route.paths || !payload.route.paths.length) {
        throw new Error(payload.info || "AMap route service returned no path");
      }

      const bestPath = payload.route.paths[0];
      const steps = bestPath.steps || [];
      const latLngs = [];

      steps.forEach((step, index) => {
        const points = decodePolyline(step.polyline);
        latLngs.push(...(index === 0 ? points : points.slice(1)));
      });

      if (!latLngs.length) {
        const fallback = [
          [start.lat, start.lng],
          [end.lat, end.lng]
        ];
        latLngs.push(...fallback);
      }

      return {
        distanceMeters: Number(bestPath.distance || 0),
        durationSeconds: Number(bestPath.duration || 0),
        latLngs
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
    const cleanup = () => {
      delete window[callbackName];
      script.remove();
      clearTimeout(timeout);
    };

    window[callbackName] = (payload) => {
      cleanup();
      resolve(payload);
    };

    const timeout = setTimeout(() => {
      cleanup();
      reject(new Error("AMap route request timed out"));
    }, 12000);

    script.onerror = () => {
      cleanup();
      reject(new Error("Failed to load AMap route data"));
    };

    script.src = `${baseUrl}&callback=${callbackName}`;
    document.body.appendChild(script);
  });
}

function decodePolyline(polyline) {
  if (!polyline) return [];
  return polyline.split(";").map((pair) => {
    const [lng, lat] = pair.split(",").map(Number);
    return [lat, lng];
  });
}

function formatDistance(distanceMeters) {
  if (!distanceMeters) return "n/a";
  return `${(distanceMeters / 1000).toFixed(distanceMeters >= 100000 ? 0 : 1)} km`;
}

function formatDuration(durationSeconds) {
  if (!durationSeconds) return "n/a";
  const hours = Math.floor(durationSeconds / 3600);
  const minutes = Math.round((durationSeconds % 3600) / 60);
  if (hours <= 0) return `${minutes} min`;
  if (minutes === 0) return `${hours} h`;
  return `${hours} h ${minutes} min`;
}

function createPathKey(path) {
  return `path:${path.join(">")}`;
}

function renderMapUnavailable(message) {
  if (!realMapElement) return;
  realMapElement.innerHTML = `<div class="map-error">${message}</div>`;
}

init();
