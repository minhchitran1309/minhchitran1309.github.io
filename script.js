document.documentElement.classList.add("js");

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

function setMenuOpen(isOpen) {
  menuButton?.setAttribute("aria-expanded", String(isOpen));
  menuButton?.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  navigation?.classList.toggle("is-open", isOpen);
}

menuButton?.addEventListener("click", () => {
  setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenuOpen(false);
});

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());

const revealItems = document.querySelectorAll("[data-reveal]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealVisibleItems = () => {
    const revealLine = window.innerHeight * 0.9;

    revealItems.forEach((item) => {
      if (item.getBoundingClientRect().top < revealLine) item.classList.add("is-visible");
    });
  };

  let revealFrame = 0;
  const scheduleReveal = () => {
    if (revealFrame) return;

    revealFrame = window.requestAnimationFrame(() => {
      revealVisibleItems();
      revealFrame = 0;
    });
  };

  revealVisibleItems();
  window.addEventListener("scroll", scheduleReveal, { passive: true });
  window.addEventListener("resize", scheduleReveal);
}
