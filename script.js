// 15 новых и разнообразных вопросов по географии Африки
const questions = [
  {
    category: "ПУСТЫНИ И КЛИМАТ",
    question: "Какая пустыня на юге Африки славится красными песками и засушливыми равнинами Калахари?",
    options: ["Пустыня Калахари", "Пустыня Атакама", "Пустыня Тар", "Большая пустыня Виктория"],
    answer: 0,
    note: "Калахари расположена на юге Африки и охватывает части Ботсваны, Намибии и ЮАР."
  },
  {
    category: "РЕЛЬЕФ И ПРИРОДА",
    question: "Какая точка в Эфиопии (впадина Данакиль) является одной из самых низких и жарких на материке?",
    options: ["Озеро Чад", "Котловина Афар (Данакиль)", "Плато Джос", "Горы Ахаггар"],
    answer: 1,
    note: "Впадина Афар (Данакиль) лежит ниже уровня моря и отличается экстремальной жарой."
  },
  {
    category: "РЕКИ И ОЗЁРА",
    question: "Какое крупное водохранилище было создано на реке Нил после строительства Асуанской плотины?",
    options: ["Водохранилище Кариба", "Озеро Насер", "Озеро Вольта", "Озеро Туркана"],
    answer: 1,
    note: "Озеро Насер находится на юге Египта и севере Судана на реке Нил."
  },
  {
    category: "СТРАНЫ И КРАЙНИЕ ТОЧКИ",
    question: "Через территорию какого из этих африканских государств проходит экватор?",
    options: ["Марокко", "Габон", "Алжир", "Тунис"],
    answer: 1,
    note: "Экватор пересекает Габон, Республику Конго, ДР Конго, Уганду, Кению и Сомали."
  },
  {
    category: "ПУСТЫНИ И КЛИМАТ",
    question: "Какой тип климата характерен для крайнего севера (побережье Средиземного моря) и крайнего юго-запада Африки?",
    options: ["Экваториальный", "Средиземноморский", "Субарктический", "Муссонный"],
    answer: 1,
    note: "Средиземноморский климат отличает сухое жаркое лето и влажная мягкая зима."
  },
  {
    category: "ПРИРОДНЫЕ ЗОНЫ",
    question: "Какое дерево Африки способно накапливать большие запасы воды в толстом стволе?",
    options: ["Баобаб", "Секвойя", "Лиственница", "Берёза"],
    answer: 0,
    note: "Баобаб — символ африканских саванн, известный своим мощным стволом."
  },
  {
    category: "РЕКИ И ОЗЁРА",
    question: "В какой океан впадает река Нигер?",
    options: ["Индийский океан", "Атлантический океан", "Северный Ледовитый океан", "Тихий океан"],
    answer: 1,
    note: "Река Нигер впадает в Гвинейский залив Атлантического океана."
  },
  {
    category: "РЕЛЬЕФ И ПРИРОДА",
    question: "Какие горы тянутся на северо-западе Африки через Марокко, Алжир и Тунис?",
    options: ["Атласские горы", "Капские горы", "Уральские горы", "Анды"],
    answer: 0,
    note: "Атласские горы отделяют побережье Средиземного моря от Сахары."
  },
  {
    category: "СТРАНЫ И КРАЙНИЕ ТОЧКИ",
    question: "Какой пролив отделяет Африку от Европы на крайнем северо-западе?",
    options: ["Берингов пролив", "Гибралтарский пролив", "Магелланов пролив", "Босфор"],
    answer: 1,
    note: "Гибралтарский пролив соединяет Атлантический океан и Средиземное море."
  },
  {
    category: "ПРИРОДНЫЕ ЗОНЫ",
    question: "Как называется переходная полоса между пустыней Сахара и саваннами южнее её?",
    options: ["Сахель", "Пампа", "Тундра", "Степь"],
    answer: 0,
    note: "Сахель — полузасушливый регион, протянувшийся с запада на восток южнее Сахары."
  },
  {
    category: "РЕКИ И ОЗЁРА",
    question: "Какое озеро в центральной части Африки сильно уменьшилось в размерах за последние десятилетия?",
    options: ["Озеро Чад", "Озеро Ньяса", "Озеро Тана", "Озеро Киву"],
    answer: 0,
    note: "Площадь озера Чад значительно сократилась из-за засух и забора воды."
  },
  {
    category: "СТРАНЫ И КРАЙНИЕ ТОЧКИ",
    question: "Какая страна на северо-востоке Африки омывается и Красным, и Средиземным морем?",
    options: ["Египет", "Нигер", "Чад", "Мали"],
    answer: 0,
    note: "Египет имеет выход к Средиземному морю на севере и Красному морю на востоке."
  },
  {
    category: "ПУСТЫНИ И КЛИМАТ",
    question: "Какое холодное океаническое течение проходит вдоль юго-западного побережья Африки?",
    options: ["Гольфстрим", "Бенгельское течение", "Куросио", "Лабрадорское течение"],
    answer: 1,
    note: "Холодное Бенгельское течение охлаждает прибрежный воздух и способствует сухости."
  },
  {
    category: "РЕЛЬЕФ И ПРИРОДА",
    question: "В какой стране находится вершина горы Кения — вторая по высоте в Африке?",
    options: ["Кения", "Египет", "Марокко", "Гана"],
    answer: 0,
    note: "Гора Кения (5199 м) расположена в Кении неподалёку от экватора."
  },
  {
    category: "СТРАНЫ И КРАЙНИЕ ТОЧКИ",
    question: "Какой полуостров образует «Африканский Рог» на востоке материка?",
    options: ["Синайский полуостров", "Сомалийский полуостров", "Пиренейский полуостров", "Лабрадор"],
    answer: 1,
    note: "Сомалийский полуостров выступает далеко на восток в Индийский океан."
  }
];

// Секторы колеса 1..12
const WHEEL_NUMBERS = [8, 7, 6, 5, 4, 3, 2, 1, 12, 11, 10, 9];
const WHEEL_COLORS = [
  "#9eff94",
  "#f47264",
  "#3366d6",
  "#d99be0",
  "#f2d8a7",
  "#9eff94",
  "#f47264",
  "#3366d6",
  "#f2d8a7",
  "#9eff94",
  "#d99be0",
  "#f2d8a7"
];

// Слайды для карусели
const carouselSlides = [
  {
    icon: "🏜️",
    title: "Сахара и пояс Сахель",
    text: "Крупнейшая жаркая пустыня мира и переходная зона Сахель, меняющая облик в зависимости от сезона дождей.",
    gradient: "linear-gradient(120deg, rgba(146, 64, 14, 0.55), rgba(39, 36, 32, 0.92))"
  },
  {
    icon: "🌋",
    title: "Килиманджаро и Великий рифт",
    text: "Вулкан высотой 5895 м и зона тектонических разломов, где формируются глубокие озёра и высокие горы.",
    gradient: "linear-gradient(120deg, rgba(180, 83, 9, 0.45), rgba(30, 41, 59, 0.92))"
  },
  {
    icon: "🌊",
    title: "Нил, Конго и водопад Виктория",
    text: "Самая длинная река континента, самая полноводная река и грандиозный водопад на реке Замбези.",
    gradient: "linear-gradient(120deg, rgba(6, 95, 70, 0.45), rgba(39, 36, 32, 0.92))"
  },
  {
    icon: "🌳",
    title: "Саванны и баобабы",
    text: "Просторы саванн занимают около 40% площади Африки и поражают разнообразием растений и животных.",
    gradient: "linear-gradient(120deg, rgba(120, 53, 15, 0.55), rgba(39, 36, 32, 0.92))"
  }
];

// Статьи для справочника
const articles = [
  {
    category: "Пустыни и климат",
    readTime: "2 МИН ЧТЕНИЯ",
    title: "Сахара, Калахари и климат материка",
    text: "Африка — самый жаркий материк Земли. На севере простирается Сахара, южнее — пояс Сахель, а на юге — пустыня Калахари. На крайнем севере и юго-западе встречается средиземноморский климат, а вдоль юго-западного берега проходит холодное Бенгельское течение.",
    tags: ["Сахара и Сахель", "Калахари на юге", "Бенгельское течение"]
  },
  {
    category: "Реки и озёра",
    readTime: "2 МИН ЧТЕНИЯ",
    title: "Нил, Конго, Нигер и озеро Чад",
    text: "Нил — самая длинная река материка, на которой создано водохранилище Насер. Конго — самая полноводная река, а Нигер несёт воды в Атлантический океан. В центральной части находится озеро Чад, площадь которого заметно менялась.",
    tags: ["Нил и озеро Насер", "Конго — самая полноводная", "Нигер и озеро Чад"]
  },
  {
    category: "Рельеф и природа",
    readTime: "2 МИН ЧТЕНИЯ",
    title: "Килиманджаро, гора Кения и Атлас",
    text: "Самая высокая вершина Африки — вулкан Килиманджаро (5895 м), за ней следует гора Кения (5199 м). На северо-западе тянутся Атласские горы, а на востоке в впадине Данакиль (Афар) находятся одни из самых жарких мест планеты.",
    tags: ["Килиманджаро — 5895 м", "Гора Кения — 5199 м", "Атлас и Данакиль"]
  },
  {
    category: "Природные зоны",
    readTime: "1 МИН ЧТЕНИЯ",
    title: "Саванны и дерево баобаб",
    text: "Около 40% территории Африки занимают саванны — обширные пространства с высокой травой, акациями и баобабами, способными запасать воду в толстом стволе.",
    tags: ["Саванны — ~40% площади", "Баобабы и акации", "Животный мир саванн"]
  },
  {
    category: "Страны и крайние точки",
    readTime: "2 МИН ЧТЕНИЯ",
    title: "Экватор, Египет и Сомалийский полуостров",
    text: "Экватор пересекает центральную часть материка (например, Габон и Кению). Египет омывается Средиземным и Красным морями, Гибралтарский пролив отделяет Африку от Европы, а Сомалийский полуостров выдаётся на восток.",
    tags: ["Экватор через Габон и Кению", "Египет у двух морей", "Сомалийский полуостров"]
  }
];

const QUESTION_TIME = 20;
const RECORD_KEY = "africa_quiz_record_v4";
const LETTERS = ["A.", "B.", "C.", "D."];

let currentIndex = 0;
let score = 0;
let answered = false;
let fiftyUsed = false;
let timeLeft = QUESTION_TIME;
let timerInterval = null;

// Состояние колеса
let wheelRotation = 0;
let isSpinning = false;
let selectedWheelNumber = null;

let activeSlide = 0;
let activeGuideCategory = "all";
let searchQuery = "";

// DOM элементы
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

const homeScreen = document.getElementById("home-screen");
const gameScreen = document.getElementById("game-screen");
const resultScreen = document.getElementById("result-screen");

const recordValue = document.getElementById("record-value");
const startGameBtn = document.getElementById("start-game-btn");
const openWheelBtn = document.getElementById("open-wheel-btn");
const openGuideBtn = document.getElementById("open-guide-btn");
const quitBtn = document.getElementById("quit-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const backHomeBtn = document.getElementById("back-home-btn");

const wheelCanvas = document.getElementById("wheel-canvas");
const wheelCtx = wheelCanvas.getContext("2d");
const spinWheelBtn = document.getElementById("spin-wheel-btn");
const playWheelQBtn = document.getElementById("play-wheel-q-btn");
const wheelResultNum = document.getElementById("wheel-result-num");
const wheelResultTopic = document.getElementById("wheel-result-topic");

const carouselTrack = document.getElementById("carousel-track");
const carouselDots = document.getElementById("carousel-dots");
const prevSlideBtn = document.getElementById("prev-slide-btn");
const nextSlideBtn = document.getElementById("next-slide-btn");

const qCounter = document.getElementById("q-counter");
const scorePill = document.getElementById("score-pill");
const progressFill = document.getElementById("progress-fill");
const timerCircle = document.getElementById("timer-circle");
const fiftyBtn = document.getElementById("fifty-btn");
const qCategory = document.getElementById("q-category");
const qText = document.getElementById("q-text");
const optionsGrid = document.getElementById("options-grid");
const feedbackMsg = document.getElementById("feedback-msg");

const finalScoreText = document.getElementById("final-score-text");
const resultDesc = document.getElementById("result-desc");

const searchInput = document.getElementById("search-input");
const filterChips = document.querySelectorAll(".chip-btn");
const articlesList = document.getElementById("articles-list");

// Отрисовка колеса фортуны (12 секторов)
function drawWheel(rotationRad) {
  const size = wheelCanvas.width;
  const cx = size / 2;
  const cy = size / 2;
  const radius = size / 2 - 6;
  const sliceCount = WHEEL_NUMBERS.length;
  const arc = (Math.PI * 2) / sliceCount;

  wheelCtx.clearRect(0, 0, size, size);

  for (let i = 0; i < sliceCount; i++) {
    const startAngle = rotationRad + i * arc - arc / 2;
    const endAngle = startAngle + arc;

    wheelCtx.beginPath();
    wheelCtx.moveTo(cx, cy);
    wheelCtx.arc(cx, cy, radius, startAngle, endAngle);
    wheelCtx.closePath();
    wheelCtx.fillStyle = WHEEL_COLORS[i];
    wheelCtx.fill();
    wheelCtx.lineWidth = 1.5;
    wheelCtx.strokeStyle = "rgba(30, 30, 30, 0.35)";
    wheelCtx.stroke();

    wheelCtx.save();
    const midAngle = startAngle + arc / 2;
    wheelCtx.translate(cx + Math.cos(midAngle) * (radius * 0.72), cy + Math.sin(midAngle) * (radius * 0.72));
    wheelCtx.rotate(midAngle + Math.PI / 2);
    wheelCtx.fillStyle = "#111111";
    wheelCtx.font = "700 24px 'Segoe UI', system-ui, sans-serif";
    wheelCtx.textAlign = "center";
    wheelCtx.textBaseline = "middle";
    wheelCtx.fillText(String(WHEEL_NUMBERS[i]), 0, 0);
    wheelCtx.restore();
  }

  wheelCtx.beginPath();
  wheelCtx.arc(cx, cy, radius, 0, Math.PI * 2);
  wheelCtx.lineWidth = 3;
  wheelCtx.strokeStyle = "#333333";
  wheelCtx.stroke();

  wheelCtx.beginPath();
  wheelCtx.arc(cx, cy, 18, 0, Math.PI * 2);
  wheelCtx.fillStyle = "#ffffff";
  wheelCtx.fill();
  wheelCtx.lineWidth = 2;
  wheelCtx.strokeStyle = "#999999";
  wheelCtx.stroke();
}

function getNumberAtPointer(rotationRad) {
  const sliceCount = WHEEL_NUMBERS.length;
  const arc = (Math.PI * 2) / sliceCount;
  let relAngle = (-rotationRad) % (Math.PI * 2);
  if (relAngle < 0) relAngle += Math.PI * 2;
  const idx = Math.floor((relAngle + arc / 2) / arc) % sliceCount;
  return WHEEL_NUMBERS[idx];
}

spinWheelBtn.addEventListener("click", () => {
  if (isSpinning) return;
  isSpinning = true;
  spinWheelBtn.disabled = true;
  playWheelQBtn.disabled = true;

  const extraSpins = 5 + Math.floor(Math.random() * 4);
  const randomOffset = Math.random() * Math.PI * 2;
  const startRot = wheelRotation;
  const targetRot = startRot + extraSpins * Math.PI * 2 + randomOffset;
  const duration = 2600;
  const startTime = performance.now();

  function animate(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    wheelRotation = startRot + (targetRot - startRot) * eased;
    drawWheel(wheelRotation);

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      wheelRotation = targetRot % (Math.PI * 2);
      drawWheel(wheelRotation);

      const num = getNumberAtPointer(wheelRotation);
      selectedWheelNumber = num;
      const qObj = questions[num - 1];

      wheelResultNum.textContent = String(num);
      wheelResultTopic.textContent = `Вопрос №${num} (${qObj.category}): ${qObj.question}`;
      playWheelQBtn.textContent = `ОТВЕТИТЬ НА ВОПРОС №${num}`;
      playWheelQBtn.disabled = false;
      spinWheelBtn.disabled = false;
      isSpinning = false;
    }
  }

  requestAnimationFrame(animate);
});

playWheelQBtn.addEventListener("click", () => {
  if (!selectedWheelNumber) return;
  switchTab("quiz-tab");
  startGameAt(selectedWheelNumber - 1);
});

// Карусель
function renderCarousel() {
  carouselTrack.innerHTML = carouselSlides
    .map(
      (slide) => `
      <div class="carousel-slide" style="background: ${slide.gradient};">
        <div class="slide-icon">${slide.icon}</div>
        <div class="slide-content">
          <h3>${slide.title}</h3>
          <p>${slide.text}</p>
        </div>
      </div>
    `
    )
    .join("");

  carouselDots.innerHTML = carouselSlides
    .map(
      (_, idx) => `
      <button
        class="carousel-dot ${idx === activeSlide ? "active" : ""}"
        data-slide="${idx}"
        aria-label="Слайд ${idx + 1}"
      ></button>
    `
    )
    .join("");

  updateCarouselPosition();

  carouselDots.querySelectorAll(".carousel-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      goToSlide(Number(dot.dataset.slide));
    });
  });
}

function updateCarouselPosition() {
  carouselTrack.style.transform = `translateX(-${activeSlide * 100}%)`;
  carouselDots.querySelectorAll(".carousel-dot").forEach((dot, idx) => {
    dot.classList.toggle("active", idx === activeSlide);
  });
}

function goToSlide(index) {
  const total = carouselSlides.length;
  activeSlide = (index + total) % total;
  updateCarouselPosition();
}

prevSlideBtn.addEventListener("click", () => goToSlide(activeSlide - 1));
nextSlideBtn.addEventListener("click", () => goToSlide(activeSlide + 1));

// Рекорд
function loadRecord() {
  const saved = Number(localStorage.getItem(RECORD_KEY) || 0);
  recordValue.textContent = saved;
  return saved;
}

function saveRecord(newScore) {
  if (newScore > loadRecord()) {
    localStorage.setItem(RECORD_KEY, String(newScore));
    recordValue.textContent = newScore;
  }
}

// Вкладки
function switchTab(tabId) {
  clearInterval(timerInterval);
  tabButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });
  tabPanels.forEach((panel) => {
    const show = panel.id === tabId;
    panel.classList.toggle("active", show);
    panel.classList.toggle("hidden", !show);
  });
}

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => switchTab(btn.dataset.tab));
});

openWheelBtn.addEventListener("click", () => switchTab("wheel-tab"));
openGuideBtn.addEventListener("click", () => switchTab("guide-tab"));

// Таймер
function startTimer() {
  clearInterval(timerInterval);
  timeLeft = QUESTION_TIME;
  timerCircle.textContent = timeLeft;
  timerCircle.classList.remove("danger");

  timerInterval = setInterval(() => {
    timeLeft -= 1;
    timerCircle.textContent = timeLeft;

    if (timeLeft <= 5) {
      timerCircle.classList.add("danger");
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      onTimeUp();
    }
  }, 1000);
}

function onTimeUp() {
  if (answered) return;
  answered = true;
  fiftyBtn.disabled = true;

  const current = questions[currentIndex];
  const buttons = optionsGrid.querySelectorAll(".option-btn");
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === current.answer) {
      btn.classList.add("correct");
    }
  });

  feedbackMsg.textContent = `Время вышло! ${current.note}`;
  nextBtn.classList.remove("hidden");
}

// Подсказка 50/50
fiftyBtn.addEventListener("click", () => {
  if (fiftyUsed || answered) return;
  fiftyUsed = true;
  fiftyBtn.disabled = true;

  const current = questions[currentIndex];
  const wrongIndices = [0, 1, 2, 3].filter((i) => i !== current.answer);
  wrongIndices.sort(() => Math.random() - 0.5);
  const toHide = wrongIndices.slice(0, 2);

  const buttons = optionsGrid.querySelectorAll(".option-btn");
  toHide.forEach((idx) => {
    buttons[idx].classList.add("eliminated");
    buttons[idx].disabled = true;
  });
});

// Игра
function startGameAt(startIdx = 0) {
  currentIndex = startIdx;
  score = 0;
  fiftyUsed = false;
  fiftyBtn.disabled = false;

  homeScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  renderQuestion();
}

function startGame() {
  startGameAt(0);
}

function showHome() {
  clearInterval(timerInterval);
  gameScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
  loadRecord();
}

function renderQuestion() {
  answered = false;
  nextBtn.classList.add("hidden");
  feedbackMsg.textContent = "";
  fiftyBtn.disabled = fiftyUsed;

  const current = questions[currentIndex];
  qCounter.textContent = `Вопрос ${currentIndex + 1} из ${questions.length}`;
  scorePill.textContent = `Очки: ${score}`;
  progressFill.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;

  qCategory.textContent = current.category;
  qText.textContent = current.question;
  optionsGrid.innerHTML = "";

  current.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `<span class="option-letter">${LETTERS[idx]}</span><span>${opt}</span>`;
    btn.addEventListener("click", () => selectOption(idx, btn));
    optionsGrid.appendChild(btn);
  });

  nextBtn.textContent =
    currentIndex === questions.length - 1 ? "Показать результат" : "Следующий вопрос";

  startTimer();
}

function selectOption(selectedIdx, clickedBtn) {
  if (answered) return;
  answered = true;
  clearInterval(timerInterval);
  fiftyBtn.disabled = true;

  const current = questions[currentIndex];
  const buttons = optionsGrid.querySelectorAll(".option-btn");

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === current.answer) {
      btn.classList.add("correct");
    }
  });

  if (selectedIdx === current.answer) {
    score += 1;
    scorePill.textContent = `Очки: ${score}`;
    feedbackMsg.textContent = `Верно! ${current.note}`;
  } else {
    clickedBtn.classList.add("wrong");
    feedbackMsg.textContent = `Неверно. ${current.note}`;
  }

  nextBtn.classList.remove("hidden");
}

function showResult() {
  clearInterval(timerInterval);
  gameScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  saveRecord(score);
  finalScoreText.textContent = `${score} / ${questions.length}`;

  if (score === questions.length) {
    resultDesc.textContent = "Идеальный результат! Вы знаете все тайны и рекорды Африки.";
  } else if (score >= 10) {
    resultDesc.textContent = "Отличный результат! Попробуйте пройти ещё раз на 15 из 15.";
  } else {
    resultDesc.textContent = "Почитайте «Справочник (Чтение)» и попробуйте улучшить свой рекорд!";
  }
}

startGameBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);
quitBtn.addEventListener("click", showHome);
backHomeBtn.addEventListener("click", showHome);

nextBtn.addEventListener("click", () => {
  currentIndex += 1;
  if (currentIndex < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
});

// Справочник: поиск и фильтрация
function renderArticles() {
  const q = searchQuery.trim().toLowerCase();

  const filtered = articles.filter((item) => {
    const matchCat = activeGuideCategory === "all" || item.category === activeGuideCategory;
    const matchText =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.text.toLowerCase().includes(q) ||
      item.tags.some((t) => t.toLowerCase().includes(q));
    return matchCat && matchText;
  });

  if (filtered.length === 0) {
    articlesList.innerHTML = `<div class="article-card"><p>По вашему запросу ничего не найдено.</p></div>`;
    return;
  }

  articlesList.innerHTML = filtered
    .map(
      (item) => `
      <article class="article-card">
        <div class="article-top">
          <span>${item.category}</span>
          <span>${item.readTime}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <div class="article-tags">
          ${item.tags.map((tag) => `<span class="fact-tag">✓ ${tag}</span>`).join("")}
        </div>
      </article>
    `
    )
    .join("");
}

searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderArticles();
});

filterChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    filterChips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    activeGuideCategory = chip.dataset.cat;
    renderArticles();
  });
});

loadRecord();
drawWheel(wheelRotation);
renderCarousel();
renderArticles();