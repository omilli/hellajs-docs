import { html, mount, signal } from "@hellajs/core";

// Ergonomic HTML proxies
const { div, button, span } = html;

// Component
const Counter = function () {
  // Reactive signals
  const count = signal(0);

  // Signal setters
  const setCount = (changeBy) => count.set(count() + changeBy);

  return div(
    button({ onclick: () => setCount(-1) }, "-"),
    span(() => count()), // Functions make nodes reactive
    button({ onclick: () => setCount(+1) }, "+"),
  );
}

// Render to the DOM
// Queries "#app" in your html if no selector is provided
mount(Counter);
