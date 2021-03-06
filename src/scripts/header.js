import * as engine from "./particles";

let animationNo = undefined;
const header = document.getElementById("header");
let grid;

(function () {
  const c = engine.canvas();
  window.addEventListener("resize", resizeCanvas, false);
  function resizeCanvas() {
    c.width = window.innerWidth - getScrollbarWidth() - 1;
    c.height = document.getElementById("header").offsetHeight;
    drawStuff();
  }
  resizeCanvas();

  function drawStuff() {
    if (animationNo != null) {
      engine.setVelocity(engine.BASE_VELOCITY);
      cancelAnimationFrame(animationNo);
    }
    const c = engine.canvas();
    const ctx = canvas.getContext("2d");
    ctx.translate(c.width / 2, c.height / 2);
    grid = engine.grid3d(c);
    loop(ctx, c);

    window.addEventListener("mousemove", function mouseMove(e) {
      const c = engine.canvas();
      const ctx = canvas.getContext("2d");
      const x = c.width / 2 - e.clientX * 0.045;
      const y = c.height / 2 - e.clientY * 0.045;
      ctx.setTransform(1, 0, 0, 1, x, y);
    });
  }
})();

function loop(ctx, c) {
  ctx.clearRect(-c.width * 0.5, -c.height * 0.5, c.width * 2, c.height * 2);
  grid.forEach((particle) => {
    particle.update(c, ctx);
  });

  animationNo = requestAnimationFrame(() => loop(ctx, c));
}

function getScrollbarWidth() {
  // Creating invisible container
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll"; // forcing scrollbar to appear
  outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement("div");
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
}

// source = https://stackoverflow.com/questions/22593286/detect-measure-scroll-speed
var checkScrollSpeed = (function (settings) {
  settings = settings || {};

  var lastPos,
    newPos,
    timer,
    delta,
    delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

  function clear() {
    lastPos = null;
    delta = 0;
  }

  clear();

  return function () {
    newPos = window.scrollY;
    if (lastPos != null) {
      // && newPos < maxScroll
      delta = newPos - lastPos;
    }
    lastPos = newPos;
    clearTimeout(timer);
    timer = setTimeout(clear, delay);
    return delta;
  };
})();


// listen to "scroll" event
const MAX_SPEED = engine.BASE_VELOCITY * 3;
window.onscroll = function () {
  const parallax = window.scrollY * 0.22;
  header.style.transform = `translateY(${parallax}px)`;
  var speed = checkScrollSpeed() * 0.15;
  if (speed < -MAX_SPEED) {
    speed = -MAX_SPEED;
  }
  if (speed > MAX_SPEED) {
    speed = MAX_SPEED;
  }
  if (speed == 0) {
    speed = engine.BASE_VELOCITY;
  }

  engine.setVelocity(speed);

  const threshold = document.getElementById('contact').offsetTop;
  // const scroll = h.clientHeight + parallax;
  if (window.scrollY >=  threshold && animationNo != null) {
    cancelAnimationFrame(animationNo);
    animationNo = null;
  }
  if (window.scrollY <  threshold && animationNo == null) {
    const c = engine.canvas();
    const ctx = c.getContext('2d');
    loop(ctx, c);
  }

};
