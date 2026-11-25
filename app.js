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

function phraseMarkup(phrases, fallbackText) {
  const phraseList = Array.isArray(phrases) && phrases.length ? phrases : [fallbackText];
  return phraseList.map((phrase) => `<span class="keep-phrase">${phrase}</span>`).join(" ");
}

function renderHeader() {
  qs("#site-nav").innerHTML = content.nav.map((item) => `<a href="${item.href}">${item.label}</a>`).join("");
}

function renderHero() {
  qs("#hero-eyebrow").textContent = content.hero.eyebrow;
  qs("#hero-title").innerHTML = phraseMarkup(content.hero.titlePhrases, content.hero.title);
  qs("#hero-subtitle").innerHTML = phraseMarkup(content.hero.subtitlePhrases, content.hero.subtitle);
  qs("#primary-cta").textContent = content.hero.primaryCta;
  qs("#secondary-cta").textContent = content.hero.secondaryCta;
  qs("#hero-badges").innerHTML = tagMarkup(content.hero.badges);
  qs(".button-primary").setAttribute("href", content.hero.primaryHref || "#contact");
  qs(".button-secondary").setAttribute("href", content.hero.secondaryHref || "#solutions");
}

function renderTrust() {
  qs("#trust-headline").innerHTML = phraseMarkup(content.trust.headlinePhrases, content.trust.headline);
  qs("#trust-description").innerHTML = phraseMarkup(content.trust.descriptionPhrases, content.trust.description);
  qs("#trust-action").textContent = content.trust.cta;
  qs("#trust-action").setAttribute("href", content.trust.href || "#projects");
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
          <p class="solution-summary">${solution.summary}</p>
          <div class="solution-block solution-target-block">
            <div class="mini-label">적용 대상</div>
            <div class="tag-row solution-target-tags">${tagMarkup(solution.target)}</div>
          </div>
          <div class="solution-block">
            <div class="mini-label">기대 효과</div>
            <ul>${listMarkup(solution.value)}</ul>
          </div>
          <div class="solution-block">
            <div class="mini-label">구축 방식</div>
            <ul>${listMarkup(solution.implementation)}</ul>
          </div>
          <div class="solution-sectors">
            <div class="mini-label">적용 산업</div>
            <p>${solution.sectors}</p>
          </div>
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
          <div class="project-category">${project.category}</div>
          <div class="project-status">${project.status}</div>
          <h3>${project.title}</h3>
          <p>${project.problem}</p>
          <p class="project-role">${project.role}</p>
          <div class="project-columns">
            <div>
              <div class="mini-label">주요 기술</div>
              <ul>${listMarkup(project.technologies)}</ul>
            </div>
            <div>
              <div class="mini-label">${project.kpiLabel || "목표 KPI"}</div>
              <ul>${listMarkup(project.kpis)}</ul>
            </div>
          </div>
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
          <div class="process-output">
            <strong>산출물</strong>
            <small>${step.output}</small>
          </div>
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
  qs("#contact-microcopy").textContent = content.contact.microcopy;
  qs("#contact-privacy").textContent = content.contact.privacy;
  qs("#diagnostic-list").innerHTML = listMarkup(content.contact.diagnostics);
  qs("#interest-select").innerHTML = content.contact.interests.map((item) => `<option>${item}</option>`).join("");
  qs("#material-options").innerHTML = content.contact.materials
    .map(
      (item) => `
        <label class="checkbox-item">
          <input type="checkbox" name="materials" value="${item}" />
          <span>${item}</span>
        </label>
      `
    )
    .join("");
  qs("#contact-email").textContent = content.company.email;
  qs("#contact-email").setAttribute("href", `mailto:${content.company.email}`);
  qs("#footer-email").textContent = content.company.email;
  qs("#footer-email").setAttribute("href", `mailto:${content.company.email}`);
  qs("#footer-year").textContent = new Date().getFullYear();

  const form = qs("#contact-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    payload.materials = formData.getAll("materials");
    const subject = `[PETA 초기 진단 문의] ${payload.company || ""} ${payload.name || ""}`.trim();
    const body = [
      "PETA 초기 진단 문의",
      "",
      `이름: ${payload.name || ""}`,
      `회사명: ${payload.company || ""}`,
      `부서/직책: ${payload.role || ""}`,
      `연락처 또는 이메일: ${payload.contact || ""}`,
      `관심 분야: ${payload.interest || ""}`,
      `보유 자료: ${payload.materials.length ? payload.materials.join(", ") : "없음/추후 확인"}`,
      "",
      "현재 반복되는 문제:",
      payload.message || "",
    ].join("\n");
    window.location.href = `mailto:${content.company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    qs("#form-status").textContent = `이메일 작성 창이 열립니다. 내용을 확인해 직접 발송하면 문의가 전달됩니다. 창이 열리지 않으면 ${content.company.email}로 보내주세요.`;
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
renderProcess();
renderWhy();
renderContact();
wireHeroCarousel();
wireScrollProgress();
