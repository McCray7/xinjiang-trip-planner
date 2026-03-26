const plans = {
  planA: {
    id: "planA",
    title: "8D7N is better",
    range: "2026.06.13 - 2026.06.20",
    intensity: "moderate and relaxed",
    holidayImpact: "holiday only at the end",
    value: "best value",
    verdict:
      "This plan finishes the most scenic Yili stretch before the Dragon Boat holiday peak. It gives you a fuller route and spreads fixed costs like flights and car rental across more useful days.",
    reasons: [
      "Only the final two days overlap with the June 19 to June 21 holiday window.",
      "It covers Sayram Lake, Kalajun, Nalati, and Huocheng without major cuts.",
      "It is more suitable for a couple because the pace is less rushed."
    ],
    highlightDay: 3,
    routeOrder: ["Shanghai", "Yining", "Huocheng", "Sayram Lake", "Tekes", "Qiongkushitai", "Nalati", "Tangbula", "Yining"],
    days: [
      {
        day: 1,
        date: "Jun 13 Sat",
        title: "Fly from Shanghai to Yining",
        route: "Shanghai -> Yining",
        distance: "flight about 4300 km",
        drive: "flight plus light city transfer",
        stay: "Yining",
        focus: "rest",
        notes: "Keep day one light. Walk around Kazanqi or Liuxing Street and sleep early.",
        path: ["Shanghai", "Yining"]
      },
      {
        day: 2,
        date: "Jun 14 Sun",
        title: "Huocheng lavender and Sayram Lake",
        route: "Yining -> Huocheng -> Sayram Lake",
        distance: "about 220 km",
        drive: "about 3.5 to 4.5 h",
        stay: "Sayram Lake area",
        focus: "flowers and lake",
        notes: "Visit lavender in the morning, then head to Sayram Lake for sunset and the next morning.",
        path: ["Yining", "Huocheng", "Sayram Lake"]
      },
      {
        day: 3,
        date: "Jun 15 Mon",
        title: "Deep Sayram Lake day, then Tekes",
        route: "Sayram Lake -> Tekes",
        distance: "about 300 km",
        drive: "about 4.5 to 5.5 h",
        stay: "Tekes",
        focus: "lake loop",
        notes: "This is the highlight day. Prioritize the lake loop in the morning, then drive to Tekes.",
        path: ["Sayram Lake", "Tekes"]
      },
      {
        day: 4,
        date: "Jun 16 Tue",
        title: "Full Kalajun day",
        route: "Tekes -> Kalajun -> Tekes",
        distance: "about 120 km round trip",
        drive: "about 2 to 3 h",
        stay: "Tekes",
        focus: "grassland",
        notes: "Give Kalajun a full day. Do not compress it into a quick half-day stop.",
        path: ["Tekes"]
      },
      {
        day: 5,
        date: "Jun 17 Wed",
        title: "Slow couple day in Qiongkushitai",
        route: "Tekes -> Qiongkushitai",
        distance: "about 90 km",
        drive: "about 2.5 to 3.5 h",
        stay: "Qiongkushitai or Tekes",
        focus: "village",
        notes: "Best for a slow day with cabins, slopes, and optional horse riding.",
        path: ["Tekes", "Qiongkushitai"]
      },
      {
        day: 6,
        date: "Jun 18 Thu",
        title: "Drive to Nalati",
        route: "Qiongkushitai or Tekes -> Nalati",
        distance: "about 250 km",
        drive: "about 3.5 to 5 h",
        stay: "Nalati town",
        focus: "grassland road",
        notes: "Pick one core Nalati line only so the day stays comfortable.",
        path: ["Qiongkushitai", "Nalati"]
      },
      {
        day: 7,
        date: "Jun 19 Fri",
        title: "Holiday starts, avoid the most crowded stretch",
        route: "Nalati -> Tangbula -> Yining",
        distance: "about 280 to 430 km",
        drive: "about 4 to 6 h",
        stay: "Nilka or Yining",
        focus: "flex day",
        notes: "Do not make Duku Highway a must. Tangbula is safer, or go back to Yining and rest.",
        path: ["Nalati", "Tangbula", "Yining"]
      },
      {
        day: 8,
        date: "Jun 20 Sat",
        title: "Fly back",
        route: "Yining -> Shanghai",
        distance: "flight about 4300 km",
        drive: "return car plus flight",
        stay: "travel day",
        focus: "return",
        notes: "Leave enough buffer for airport car return and the flight.",
        path: ["Yining", "Shanghai"]
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
      "This version is workable, but it pushes the best sightseeing days directly into the holiday peak. It saves leave days, but the pace is tighter and the value is weaker.",
    reasons: [
      "June 19 to June 21 are holiday dates, so the core days are more crowded.",
      "Effective sightseeing time is only about four days.",
      "You need to cut either Kalajun depth or Qiongkushitai depth."
    ],
    highlightDay: 2,
    routeOrder: ["Shanghai", "Yining", "Huocheng", "Sayram Lake", "Tekes", "Nalati", "Yining"],
    days: [
      {
        day: 1,
        date: "Jun 17 Wed",
        title: "Fly to Yining",
        route: "Shanghai -> Yining",
        distance: "flight about 4300 km",
        drive: "flight plus light city transfer",
        stay: "Yining",
        focus: "rest",
        notes: "Keep day one light so you can start early next day.",
        path: ["Shanghai", "Yining"]
      },
      {
        day: 2,
        date: "Jun 18 Thu",
        title: "Huocheng lavender and Sayram Lake",
        route: "Yining -> Huocheng -> Sayram Lake",
        distance: "about 220 km",
        drive: "about 3.5 to 4.5 h",
        stay: "Sayram Lake area",
        focus: "flowers and lake",
        notes: "This is the smoothest day in the shorter plan.",
        path: ["Yining", "Huocheng", "Sayram Lake"]
      },
      {
        day: 3,
        date: "Jun 19 Fri",
        title: "Holiday starts, then Tekes",
        route: "Sayram Lake -> Tekes",
        distance: "about 300 km",
        drive: "about 4.5 to 5.5 h",
        stay: "Tekes",
        focus: "lake loop",
        notes: "Start early. Once the holiday traffic builds up, the transfer feels much longer.",
        path: ["Sayram Lake", "Tekes"]
      },
      {
        day: 4,
        date: "Jun 20 Sat",
        title: "Kalajun or Qiongkushitai",
        route: "Tekes -> Kalajun or Qiongkushitai",
        distance: "about 90 to 120 km",
        drive: "about 2 to 4 h",
        stay: "Tekes or Xinyuan",
        focus: "choose one",
        notes: "Choose Kalajun for photography and walking, or Qiongkushitai for village atmosphere.",
        path: ["Tekes", "Qiongkushitai"]
      },
      {
        day: 5,
        date: "Jun 21 Sun",
        title: "Nalati peak day",
        route: "Tekes or Xinyuan -> Nalati -> Yining",
        distance: "about 150 to 250 km",
        drive: "about 3 to 4.5 h",
        stay: "Nalati town or Yining",
        focus: "core grassland",
        notes: "Holiday tail traffic may be obvious. If the return flight is early next day, go back to Yining at night.",
        path: ["Tekes", "Nalati", "Yining"]
      },
      {
        day: 6,
        date: "Jun 22 Mon",
        title: "Fly back",
        route: "Yining -> Shanghai",
        distance: "flight about 4300 km",
        drive: "return car plus flight",
        stay: "travel day",
        focus: "return",
        notes: "If you did not return to Yining the night before, the morning will be tight.",
        path: ["Yining", "Shanghai"]
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
  "If only one person drives, replace Qiongkushitai with an easier day to reduce fatigue."
];

const cityCoords = {
  Shanghai: [31.2304, 121.4737],
  Yining: [43.9168, 81.2773],
  Huocheng: [44.0533, 80.8783],
  "Sayram Lake": [44.5994, 81.2056],
  Tekes: [43.2194, 81.8363],
  Qiongkushitai: [43.1028, 82.0105],
  Nalati: [43.4746, 83.1726],
  Tangbula: [43.6665, 83.0178]
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
              <span class="pill">route: ${item.route}</span>
              <span class="pill">distance: ${item.distance}</span>
              <span class="pill">drive: ${item.drive}</span>
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
  mapHint.textContent = `Selected: day ${state.activeDay} · ${activeDay.route} · ${activeDay.distance} · ${activeDay.drive}`;
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
