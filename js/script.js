const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursorRing");
let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;

const canUseCursor = cursor && ring && window.matchMedia("(pointer: fine)").matches;

if (canUseCursor) {
  document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });

  const animateRing = () => {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(animateRing);
  };

  animateRing();

  document.querySelectorAll("button, a, .product-card, .menu-card, .booking-card").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1.8)";
      ring.style.transform = "translate(-50%, -50%) scale(1.4)";
      ring.style.opacity = "1";
    });

    element.addEventListener("mouseleave", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
      ring.style.transform = "translate(-50%, -50%) scale(1)";
      ring.style.opacity = "0.6";
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".menu-card, .product-card, .booking-card, .testimonial-card").forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(22px)";
  element.style.transition = "opacity 0.7s ease, transform 0.7s ease";
  observer.observe(element);
});
