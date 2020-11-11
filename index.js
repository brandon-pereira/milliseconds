import { toMs, fromMs } from "./milliseconds";

const formats = [
  "microseconds",
  "milliseconds",
  "seconds",
  "minutes",
  "hours",
  "days",
];
const $inputs = formats.reduce((acc, curr) => {
  const $input = document.querySelector(`input[data-format="${curr}"]`);
  acc[curr] = $input;
  return acc;
}, {});

render(0);
Object.values($inputs).forEach((el) => {
  el.addEventListener("keyup", (e) => {
    const format = e.target.dataset.format;
    const value = parseInt(e.target.value);
    const ms = toMs({ [format]: value });
    render(ms);
  });
  el.addEventListener("focus", (e) => {
    e.target.select();
  });
});

function render(ms = 0) {
  const formatted = fromMs(ms);
  Object.entries($inputs).forEach(([format, $input]) => {
    if (document.activeElement !== $input) {
      $input.value = formatted[format] || 0;
    }
  });
}
