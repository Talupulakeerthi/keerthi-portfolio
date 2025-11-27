/* ===============================
   Announcement Gate
================================= */

const gate = document.getElementById("gate");
const enterBtn = document.getElementById("enter-portfolio");

if (enterBtn) {
  enterBtn.addEventListener("click", () => {
    gate.classList.add("gate-hidden");
  });
}

/* ===============================
   Mobile Navigation Toggle
================================= */

const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("open");
    navLinks.classList.toggle("open");
  });
}

// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

/* ===============================
   Smooth Scrolling
================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").substring(1);
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      e.preventDefault();
      window.scrollTo({
        top: targetEl.offsetTop - 60,
        behavior: "smooth",
      });
    }
  });
});

/* ===============================
   Active Nav Highlight on Scroll
================================= */

const navItems = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section, main");

function highlightNav() {
  let scrollPos = window.scrollY + 120;

  sections.forEach((section) => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navItems.forEach((link) => link.classList.remove("active"));

      const activeLink = document.querySelector(
        `.nav-links a[href="#${section.id}"]`
      );
      if (activeLink) activeLink.classList.add("active");
    }
  });
}

window.addEventListener("scroll", highlightNav);

/* ===============================
   Scroll Reveal
================================= */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((el) => {
    const position = el.getBoundingClientRect().top;

    if (position < windowHeight - 120) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ===============================
   Back to Top Button
================================= */

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

/* ===============================
   Animated Statistics Counter
================================= */

const counters = document.querySelectorAll(".stat-number");
let statsStarted = false;

function startCounters() {
  if (statsStarted) return;

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const increment = target / 60;

    const updateCounter = () => {
      if (count < target) {
        count += increment;
        counter.textContent = Math.floor(count);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  });

  statsStarted = true;
}

window.addEventListener("scroll", () => {
  const statsSection = document.querySelector(".hero-stats");
  if (!statsSection) return;

  const position = statsSection.getBoundingClientRect().top;
  if (position < window.innerHeight - 120) startCounters();
});

/* ===============================
   Auto-Year for Footer
================================= */

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
