const content = window.siteContent;

function qs(selector) {
  return document.querySelector(selector);
}

function qsa(selector) {
  return Array.from(document.querySelectorAll(selector));
}

function iconMarkup(type) {
  const icons = {
    scan: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8V5a1 1 0 0 1 1-1h3"/><path d="M16 4h3a1 1 0 0 1 1 1v3"/><path d="M20 16v3a1 1 0 0 1-1 1h-3"/><path d="M8 20H5a1 1 0 0 1-1-1v-3"/><path d="M7 12h10"/><path d="M9 9h6"/><path d="M9 15h4"/></svg>',
    chip: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M4 10h3"/><path d="M4 14h3"/><path d="M17 10h3"/><path d="M17 14h3"/><path d="M10 4v3"/><path d="M14 4v3"/><path d="M10 17v3"/><path d="M14 17v3"/></svg>',
    line: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 18V6"/><path d="M4 18h16"/><path d="M7 14l3-3 3 2 5-6"/><path d="M18 7h2v2"/></svg>',
    lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><path d="M12 14v2"/></svg>',
    factory: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 20h18"/><path d="M5 20V9l5 3V9l5 3V7h4v13"/><path d="M8 16h1"/><path d="M12 16h1"/><path d="M16 16h1"/></svg>',
    tool: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.7 6.3a4 4 0 0 0 3 5.8l-7.6 7.6a2 2 0 0 1-2.8-2.8l7.6-7.6a4 4 0 0 0-.2-3Z"/><path d="M5 8l3-3"/><path d="M6 4l2 2"/></svg>',
  };
  return icons[type] || icons.scan;
}

function listMarkup(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function tagMarkup(items) {
  return items.map((item) => `<span>${item}</span>`).join("");
}

function renderHeader() {
  qs("#site-nav").innerHTML = content.nav.map((item) => `<a href="${item.href}">${item.label}</a>`).join("");
}

function renderHero() {
  qs("#hero-eyebrow").textContent = content.hero.eyebrow;
  qs("#hero-title").textContent = content.hero.title;
  qs("#hero-subtitle").textContent = content.hero.subtitle;
  qs("#primary-cta").textContent = content.hero.primaryCta;
  qs("#secondary-cta").textContent = content.hero.secondaryCta;
  qs("#hero-badges").innerHTML = tagMarkup(content.hero.badges);
}

function renderTrust() {
  qs("#trust-headline").textContent = content.trust.headline;
  qs("#trust-description").textContent = content.trust.description;
  qs("#trust-stats").innerHTML = content.trust.stats
    .map(
      (stat) => `
        <article class="stat-cell">
          <strong>${stat.value}</strong>
          <span>${stat.label}</span>
        </article>
      `
    )
    .join("");
}

function renderPainPoints() {
  const icons = ["scan", "tool", "line"];
  qs("#pain-grid").innerHTML = content.painPoints
    .map(
      (pain, index) => `
        <article class="pain-card">
          <div class="icon-box">${iconMarkup(icons[index])}</div>
          <h3>${pain.title}</h3>
          <p>${pain.description}</p>
          <ul>${listMarkup(pain.items)}</ul>
        </article>
      `
    )
    .join("");
}

function renderSolutions() {
  const icons = ["scan", "chip", "line"];
  qs("#solution-grid").innerHTML = content.solutions
    .map(
      (solution, index) => `
        <article class="solution-card">
          <div class="solution-topline">
            <div class="icon-box">${iconMarkup(icons[index])}</div>
            <span>${solution.eyebrow}</span>
          </div>
          <h3>${solution.title}</h3>
          <p>${solution.description}</p>
          <div class="mini-label">적용 대상</div>
          <div class="tag-row">${tagMarkup(solution.targets)}</div>
          <div class="mini-label">고객 가치</div>
          <ul>${listMarkup(solution.values)}</ul>
          <button type="button" class="text-link" aria-label="${solution.title} 자세히 보기">적용 방식 보기</button>
        </article>
      `
    )
    .join("");
}

function renderProjects() {
  qs("#project-grid").innerHTML = content.projects
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-status">${project.status}</div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-columns">
            <div>
              <div class="mini-label">주요 기술</div>
              <ul>${listMarkup(project.tech)}</ul>
            </div>
            <div>
              <div class="mini-label">목표 KPI</div>
              <ul>${listMarkup(project.kpis)}</ul>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderIndustries() {
  const icons = ["factory", "tool", "lock"];
  qs("#industry-grid").innerHTML = content.industries
    .map(
      (industry, index) => `
        <article class="industry-card">
          <div class="icon-box">${iconMarkup(icons[index])}</div>
          <h3>${industry.title}</h3>
          <p>${industry.description}</p>
          <div class="tag-row">${tagMarkup(industry.items)}</div>
        </article>
      `
    )
    .join("");
}

function renderProcess() {
  qs("#process-grid").innerHTML = content.process
    .map(
      (step, index) => `
        <article class="process-card">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <h3>${step.title}</h3>
          <p>${step.description}</p>
        </article>
      `
    )
    .join("");
}

function renderWhy() {
  qs("#why-grid").innerHTML = content.why
    .map(
      (item) => `
        <article class="why-card">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");
}

function renderContact() {
  qs("#contact-title").textContent = content.contact.title;
  qs("#contact-description").textContent = content.contact.description;
  qs("#contact-email").textContent = content.company.email;
  qs("#footer-email").textContent = content.company.email;
  qs("#footer-year").textContent = new Date().getFullYear();

  const form = qs("#contact-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    console.log("PETA inquiry", payload);
    form.reset();
    qs("#form-status").textContent = "문의 내용이 임시로 기록되었습니다. 실제 발송 기능은 연결 전입니다.";
  });
}

function wireScrollProgress() {
  const progress = qs("#scroll-progress");
  window.addEventListener(
    "scroll",
    () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      progress.style.transform = `scaleX(${ratio})`;
    },
    { passive: true }
  );
}

function wireHeroCarousel() {
  const slides = qsa("[data-slide]");
  const controls = qsa("[data-slide-target]");
  if (!slides.length || !controls.length) return;

  let activeIndex = 0;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function showSlide(nextIndex) {
    activeIndex = nextIndex;
    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === activeIndex);
      slide.setAttribute("aria-hidden", String(index !== activeIndex));
    });
    controls.forEach((control, index) => {
      control.classList.toggle("is-active", index === activeIndex);
      control.setAttribute("aria-pressed", String(index === activeIndex));
    });
  }

  controls.forEach((control, index) => {
    control.addEventListener("click", () => showSlide(index));
  });

  showSlide(0);

  if (!reduceMotion) {
    window.setInterval(() => {
      showSlide((activeIndex + 1) % slides.length);
    }, 4500);
  }
}

renderHeader();
renderHero();
renderTrust();
renderPainPoints();
renderSolutions();
renderProjects();
renderIndustries();
renderProcess();
renderWhy();
renderContact();
wireHeroCarousel();
wireScrollProgress();
