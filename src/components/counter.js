import { html, mount, signal } from "@hellajs/core";

const { div, button } = html;

const count = signal(0);

const Counter = () => div(
  button({ onclick: () => count.set(count() - 1) }, "-"),
  count(),
  button({ onclick: () => count.set(count() + 1) }, "+"),
);

mount(Counter);