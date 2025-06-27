import { signal } from "@hellajs/core";
import { mount } from "@hellajs/dom";


// Component
const Counter = function () {
  // Reactive signals
  const count = signal(0);

  // Derived state
  const countClass = () => count() % 2 === 0 ? "even" : "odd";

  return (
    <div class={countClass}>
      <button onClick={() => count(count() - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => count(count() + 1)}>+</button>
    </div>
  );
}

// Render to the DOM
mount(Counter);
