// Progressive enhancement only: highlight the nav link for the section that is
// currently centred in the viewport. The site is fully usable without this.

const links = [...document.querySelectorAll("nav a[data-spy]")];
const linkById = new Map(
  links.map((a) => [a.getAttribute("href").slice(1), a]),
);

function setActive(id) {
  for (const a of links) a.removeAttribute("aria-current");
  linkById.get(id)?.setAttribute("aria-current", "true");
}

const sections = [...document.querySelectorAll("main section[id]")];

// A zero-height band across the vertical middle of the viewport: a section is
// "active" the moment its midpoint crosses the centre line.
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) setActive(entry.target.id);
    }
  },
  { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
);

sections.forEach((section) => observer.observe(section));

// Keep the footer year current.
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
