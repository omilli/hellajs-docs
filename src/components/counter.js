import { html, mount, signal } from "@hellajs/core";

// Ergonomic element proxies
const { div, button, span } = html;

// Create reactive state OUTSIDE component functions
const count = signal(0);

// Update reactive state OUTSIDE component functions
const setCount = (changeBy) => count.set(count() + changeBy);

// Define component functions that use signals
const Counter = () =>
  div(
    button({ onclick: () => setCount(-1) }, "-"),
    span(count()),
    button({ onclick: () => setCount(+1) }, "+"),
  );

// Mount reactive components
mount(Counter, "#app");
