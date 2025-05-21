import { html, mount, signal } from "@hellajs/core";

// Ergonomic HTML proxies
const { div, button, span } = html;

// Component
const Counter = function () {
  // Reactive signals
  const count = signal(0);
  // Derived state
  const countClass = () => count() % 2 === 0 ? "even" : "odd";

  // Modify state
  const setCount = (change) => {
    count.set(count() + change);
  };

  // Functions make nodes reactive
  return div({ class: countClass },
    button({ onclick: () => setCount(-1) }, "-"),
    span(count),
    button({ onclick: () => setCount(+1) }, "+"),
  );
}

// Render to the DOM
// Queries "#app" in your html if no selector is provided
mount(Counter);
