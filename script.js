// =====================================
// EDIT YOUR PORTFOLIO HERE
// =====================================
// Change only the values in PORTFOLIO_DATA below.
// Keep placeholder text until you have real information to show.
// Do not add private information that you do not want published.

const PORTFOLIO_DATA = {
  personal: {
    name: "SHAIK SULAIMAN",
    role: "B.Tech Student / Aspiring Software Developer",
    introduction: "I am a B.Tech student interested in software development and building practical technology solutions.",
    aboutDescription: "[ADD YOUR ABOUT ME DESCRIPTION HERE]",
    personalDescription: "[ADD YOUR PERSONAL DESCRIPTION HERE]",
    careerGoal: "To become a skilled software developer.",
    interests: "Coding, AI, web development, and problem solving",
    focus: "[ADD YOUR FOCUS]",
    email: "shaiksulaiman0714@gmail.com",
    phone: "+91 8519996204",
    linkedin: "linkedin.com/in/shaik-sulaiman-59a868409",
    github: "shaiksulaiman0728-max",
    location: "RAYACHOTY, KADAPA DIST",
    contactIntroduction: "[ADD YOUR CONTACT INTRODUCTION HERE]"
  },

  skills: [
    {
      name: "[ADD SKILL]",
      shortName: "SK",
      description: "[ADD A SHORT SKILL DESCRIPTION]",
      level: 0,
      levelLabel: "Placeholder"
    },
    {
      name: "[ADD SKILL]",
      shortName: "SK",
      description: "[ADD A SHORT SKILL DESCRIPTION]",
      level: 0,
      levelLabel: "Placeholder"
    },
    {
      name: "[ADD SKILL]",
      shortName: "SK",
      description: "[ADD A SHORT SKILL DESCRIPTION]",
      level: 0,
      levelLabel: "Placeholder"
    },
    {
      name: "[ADD SKILL]",
      shortName: "SK",
      description: "[ADD A SHORT SKILL DESCRIPTION]",
      level: 0,
      levelLabel: "Placeholder"
    },
    {
      name: "[ADD SKILL]",
      shortName: "SK",
      description: "[ADD A SHORT SKILL DESCRIPTION]",
      level: 0,
      levelLabel: "Placeholder"
    },
    {
      name: "[ADD SKILL]",
      shortName: "SK",
      description: "[ADD A SHORT SKILL DESCRIPTION]",
      level: 0,
      levelLabel: "Placeholder"
    }
  ],

  education: [
    {
      degree: "B.Tech",
      branch: "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
      college: "R.K-COLLEGE OF ENGINEERING",
      startYear: "2025",
      endYear: "2029",
      description: "[ADD A SHORT DESCRIPTION OF YOUR B.TECH JOURNEY]"
    }
  ],

  projects: [
    {
      title: "[ADD YOUR PROJECT]",
      tagline: "Project placeholder",
      description: "[ADD YOUR PROJECT DESCRIPTION]",
      image: "",
      technologies: ["[TECH]", "[TECH]", "[TECH]"],
      githubUrl: "",
      liveUrl: ""
    }
  ],

  certificates: [
    {
      title: "[ADD YOUR CERTIFICATE]",
      issuer: "[ADD ISSUING ORGANIZATION]",
      date: "[ADD DATE]",
      image: "",
      credentialUrl: ""
    }
  ],

  paths: {
    resume: "assets/resume.pdf"
  }
};

// =====================================
// DOM REFERENCES
// =====================================

const body = document.body;
const header = document.getElementById("site-header");
const nav = document.getElementById("site-nav");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = [...document.querySelectorAll(".nav-link")];
const sections = [...document.querySelectorAll("main section[id]")];
const backToTopButton = document.getElementById("back-to-top");
const toast = document.getElementById("toast");

// =====================================
// 1. PORTFOLIO DATA RENDERING
// =====================================

function isPlaceholder(value) {
  return !value || /^\[.*\]$/.test(String(value).trim());
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element && value) element.textContent = value;
}

function renderPersonalData() {
  const { personal } = PORTFOLIO_DATA;

  setText(".brand-name", personal.name);
  const heroTitle = document.getElementById("hero-title");
  if (heroTitle) heroTitle.innerHTML = `${escapeHtml(personal.name)}<span class="title-accent">.</span>`;
  const heroRole = document.querySelector(".hero-role");
  if (heroRole) {
    heroRole.innerHTML = escapeHtml(personal.role).replace(/\s*\/\s*/g, " <span>/</span> ");
  }
  setText(".hero-description", personal.introduction);
  setText("#about p", personal.aboutDescription);
  setText(".about-large", personal.personalDescription);
  setText("[data-placeholder='career-goal']", personal.careerGoal);

  const infoCards = [...document.querySelectorAll(".info-card")];
  if (infoCards.length >= 4) {
    infoCards[0].querySelector("strong").textContent = personal.name;
    infoCards[1].querySelector("strong").textContent = personal.careerGoal;
    infoCards[2].querySelector("strong").textContent = personal.interests;
    infoCards[3].querySelector("strong").textContent = personal.personalDescription;
  }

  setText(".meta-item:nth-child(1) span:last-child", personal.focus);
  setText(".meta-item:nth-child(2) span:last-child", personal.careerGoal);
  setText(".contact-copy > p", personal.contactIntroduction);
  setText("#contact-email", personal.email);
  setText("#contact-phone", personal.phone);
  setText("#contact-linkedin", personal.linkedin);
  setText("#contact-github", personal.github);
  setText("#contact-location", personal.location);

  document.title = `${personal.name} | B.Tech Student & Aspiring Software Developer`;

  const metaAuthor = document.querySelector("meta[name='author']");
  if (metaAuthor) metaAuthor.setAttribute("content", personal.name);
}

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  const meaningfulSkills = PORTFOLIO_DATA.skills.filter((skill) => !isPlaceholder(skill.name));

  const source = meaningfulSkills.length ? PORTFOLIO_DATA.skills : PORTFOLIO_DATA.skills.slice(0, 6);

  grid.innerHTML = source.map((skill, index) => `
    <article class="skill-card panel reveal ${index % 3 === 1 ? "reveal-delay" : index % 3 === 2 ? "reveal-delay-2" : ""}">
      <div class="skill-top">
        <span class="skill-icon" aria-hidden="true">${escapeHtml(skill.shortName || "SK")}</span>
        <span class="skill-level">${escapeHtml(skill.levelLabel || "Placeholder")}</span>
      </div>
      <h3>${escapeHtml(skill.name)}</h3>
      <p>${escapeHtml(skill.description)}</p>
      <div class="progress-track" aria-label="Skill level ${Math.max(0, Math.min(100, Number(skill.level) || 0))}%">
        <div class="progress-bar" data-progress="${Math.max(0, Math.min(100, Number(skill.level) || 0))}"></div>
      </div>
    </article>
  `).join("");

  observeReveals(grid.querySelectorAll(".reveal"));
}

function renderEducation() {
  const timeline = document.getElementById("education-timeline");
  if (!timeline) return;

  if (!PORTFOLIO_DATA.education.length) {
    timeline.innerHTML = createEmptyState("Education timeline", "Add your education details in the source data.");
    return;
  }

  timeline.innerHTML = PORTFOLIO_DATA.education.map((item, index) => `
    <article class="timeline-item reveal ${index % 2 ? "reveal-delay" : ""}">
      <div class="timeline-mark" aria-hidden="true">0${index + 1}</div>
      <div class="timeline-card panel">
        <div class="timeline-head">
          <div>
            <div class="section-kicker">Education</div>
            <h3>${escapeHtml(item.degree)}</h3>
            <p>${escapeHtml(item.branch)} · ${escapeHtml(item.college)}</p>
          </div>
          <span class="timeline-meta">${escapeHtml(item.startYear)} — ${escapeHtml(item.endYear)}</span>
        </div>
        <p class="timeline-description">${escapeHtml(item.description)}</p>
      </div>
    </article>
  `).join("");

  observeReveals(timeline.querySelectorAll(".reveal"));
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  if (!PORTFOLIO_DATA.projects.length) {
    grid.innerHTML = createEmptyState("No projects added yet.", "Add your project data in the source code to showcase your work.");
    return;
  }

  grid.innerHTML = PORTFOLIO_DATA.projects.map((project, index) => {
    const imageMarkup = project.image
      ? `<img src="${escapeAttribute(project.image)}" alt="Project preview: ${escapeAttribute(project.title)}" loading="lazy">`
      : `<div class="project-placeholder-art">Project preview · source image pending</div>`;

    return `
      <article class="project-card panel reveal ${index % 3 === 1 ? "reveal-delay" : index % 3 === 2 ? "reveal-delay-2" : ""}">
        <div class="project-media">${imageMarkup}</div>
        <div class="project-body">
          <span class="project-tagline">${escapeHtml(project.tagline)}</span>
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.description)}</p>
          <div class="tech-tags">
            ${(project.technologies || []).map((tech) => `<span class="tech-tag">${escapeHtml(tech)}</span>`).join("")}
          </div>
          <div class="project-links">
            ${createExternalLink(project.githubUrl, "GitHub ↗")}
            ${createExternalLink(project.liveUrl, "Live Demo ↗")}
          </div>
          <div class="project-status">Links stay inactive until a real URL is added in the source data.</div>
        </div>
      </article>
    `;
  }).join("");

  observeReveals(grid.querySelectorAll(".reveal"));
}

function renderCertificates() {
  const grid = document.getElementById("certificates-grid");
  if (!grid) return;

  if (!PORTFOLIO_DATA.certificates.length) {
    grid.innerHTML = createEmptyState("Your certificates will appear here.", "Add verified certificate data in the source code.");
    return;
  }

  grid.innerHTML = PORTFOLIO_DATA.certificates.map((certificate, index) => {
    const imageMarkup = certificate.image
      ? `<img src="${escapeAttribute(certificate.image)}" alt="Certificate: ${escapeAttribute(certificate.title)}" loading="lazy">`
      : `<div class="certificate-placeholder">Certificate preview · source image pending</div>`;
    const credentialMarkup = createExternalLink(certificate.credentialUrl, "Credential ↗", "credential-link");

    return `
      <article class="certificate-card panel reveal ${index % 3 === 1 ? "reveal-delay" : index % 3 === 2 ? "reveal-delay-2" : ""}">
        <div class="certificate-media">${imageMarkup}</div>
        <div class="certificate-body">
          <h3>${escapeHtml(certificate.title)}</h3>
          <p>${escapeHtml(certificate.issuer)}</p>
          <div class="certificate-meta">
            <span>${escapeHtml(certificate.date)}</span>
            ${credentialMarkup}
          </div>
        </div>
      </article>
    `;
  }).join("");

  observeReveals(grid.querySelectorAll(".reveal"));
}

function createExternalLink(url, label, className = "project-link") {
  const isValidExternalUrl = typeof url === "string" && /^https:\/\//i.test(url.trim());
  return isValidExternalUrl
    ? `<a class="${className}" href="${escapeAttribute(url.trim())}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>`
    : `<span class="pending-link" aria-label="${escapeAttribute(label)} unavailable until a real link is added">${escapeHtml(label.replace(" ↗", ""))} pending</span>`;
}

function createEmptyState(title, description) {
  return `<div class="empty-state panel"><div class="empty-state-icon" aria-hidden="true">◇</div><h3>${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p></div>`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

// =====================================
// 2. NAVIGATION
// =====================================

function closeMenu() {
  nav.classList.remove("open");
  menuToggle.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  body.classList.remove("menu-open");
}

function openMenu() {
  nav.classList.add("open");
  menuToggle.classList.add("open");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Close navigation");
  body.classList.add("menu-open");
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  isOpen ? closeMenu() : openMenu();
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => closeMenu());
});

document.addEventListener("click", (event) => {
  if (!nav.classList.contains("open")) return;
  if (!nav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

function updateActiveNav(activeId) {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
  });
}

const sectionObserver = new IntersectionObserver((entries) => {
  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (visible) updateActiveNav(visible.target.id);
}, {
  rootMargin: "-30% 0px -55% 0px",
  threshold: [0.05, 0.2, 0.5]
});

sections.forEach((section) => sectionObserver.observe(section));

function updateHeaderState() {
  header.classList.toggle("scrolled", window.scrollY > 12);
  backToTopButton.classList.toggle("visible", window.scrollY > 560);
}

window.addEventListener("scroll", updateHeaderState, { passive: true });
updateHeaderState();

// =====================================
// 3. CONTACT FORM
// =====================================

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

function showFieldError(name, message) {
  const field = document.getElementById(name);
  const group = field?.closest(".field-group");
  const error = document.querySelector(`[data-error-for="${name}"]`);
  if (!field || !group || !error) return;
  group.classList.add("invalid");
  error.textContent = message;
}

function clearFieldError(name) {
  const field = document.getElementById(name);
  const group = field?.closest(".field-group");
  const error = document.querySelector(`[data-error-for="${name}"]`);
  if (!field || !group || !error) return;
  group.classList.remove("invalid");
  error.textContent = "";
}

function validateContactForm() {
  const fields = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    message: document.getElementById("message")
  };

  Object.keys(fields).forEach(clearFieldError);
  let valid = true;

  if (!fields.name.value.trim()) {
    showFieldError("name", "Please enter your name.");
    valid = false;
  }

  const emailValue = fields.email.value.trim();
  if (!emailValue) {
    showFieldError("email", "Please enter your email address.");
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    showFieldError("email", "Please enter a valid email address.");
    valid = false;
  }

  if (!fields.message.value.trim()) {
    showFieldError("message", "Please enter a message.");
    valid = false;
  }

  return valid;
}

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.className = "form-status";
  formStatus.textContent = "";

  if (!validateContactForm()) {
    formStatus.textContent = "Please check the highlighted fields.";
    formStatus.classList.add("warning");
    return;
  }

  // This static demo intentionally does not claim to deliver messages.
  formStatus.textContent = "Message validated. Connect Formspree or EmailJS in this file to enable real delivery.";
  formStatus.classList.add("success");
  showToast("Form validated — connect an email service for delivery.");
  contactForm.reset();
});

["name", "email", "message"].forEach((id) => {
  document.getElementById(id)?.addEventListener("input", () => clearFieldError(id));
});

// =====================================
// 4. SCROLL REVEAL
// =====================================

let revealObserver;

function observeReveals(elements = document.querySelectorAll(".reveal")) {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
  }

  elements.forEach((element) => revealObserver.observe(element));
}

// =====================================
// 5. SKILL PROGRESS ANIMATION
// =====================================

function observeProgressBars() {
  const bars = document.querySelectorAll(".progress-bar");
  const progressObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const progress = Number(entry.target.dataset.progress) || 0;
      requestAnimationFrame(() => {
        entry.target.style.width = `${progress}%`;
      });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.35 });

  bars.forEach((bar) => progressObserver.observe(bar));
}

// =====================================
// 6. RESUME FILE HANDLING
// =====================================

const resumeLink = document.getElementById("resume-link");

resumeLink?.addEventListener("click", async (event) => {
  const resumePath = PORTFOLIO_DATA.paths.resume;

  // A missing file should never be presented as though it exists.
  // For a local file opened with file://, browser security can block fetch checks,
  // so the expected path is still allowed to open normally.
  if (window.location.protocol === "file:") {
    showToast(`Resume path: ${resumePath}. Replace it with your own PDF.`);
    return;
  }

  event.preventDefault();

  try {
    const response = await fetch(`${resumePath}?check=${Date.now()}`, { method: "HEAD", cache: "no-store" });
    if (!response.ok) throw new Error("Resume not found");
    window.location.href = resumePath;
  } catch {
    showToast("Resume file not added yet. Place your PDF inside assets/resume.pdf.");
  }
});

// =====================================
// 7. BACK TO TOP
// =====================================

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// =====================================
// 8. ACCESSIBILITY / UTILITY FUNCTIONS
// =====================================

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => toast.classList.remove("show"), 3600);
}

function handleProfileImageFallback() {
  const image = document.getElementById("profile-image");
  const fallback = document.getElementById("profile-fallback");
  if (!image || !fallback) return;

  image.addEventListener("error", () => {
    image.style.display = "none";
    fallback.style.display = "grid";
    fallback.setAttribute("aria-hidden", "false");
  });
}

function setupLazyImageFallbacks() {
  document.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
      const wrapper = image.parentElement;
      if (!wrapper || wrapper.classList.contains("profile-image-wrap")) return;
      image.remove();
    }, { once: true });
  });
}

function initialize() {
  renderPersonalData();
  renderSkills();
  renderEducation();
  renderProjects();
  renderCertificates();
  observeReveals();
  observeProgressBars();
  handleProfileImageFallback();
  setupLazyImageFallbacks();

  const yearElement = document.getElementById("current-year");
  if (yearElement) yearElement.textContent = String(new Date().getFullYear());
}

initialize();
