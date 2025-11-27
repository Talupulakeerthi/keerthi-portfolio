// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    window.scrollTo({
      top: target.offsetTop - 70,
      behavior: "smooth",
    });
  });
});

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Announcement / intro screen
const gate = document.getElementById("gate");
const enterBtn = document.getElementById("enter-portfolio");
const hasVisited = sessionStorage.getItem("kt_portfolio_visited");

if (gate && enterBtn) {
  if (hasVisited) {
    gate.classList.add("gate-hidden");
  }

  enterBtn.addEventListener("click", () => {
    gate.classList.add("gate-hidden");
    sessionStorage.setItem("kt_portfolio_visited", "1");
  });
}

// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    navToggle.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.classList.remove("open");
    });
  });
}

// Reveal on scroll
const revealElements = document.querySelectorAll(
  ".section, .project-card, .boarding-pass"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealElements.forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});
