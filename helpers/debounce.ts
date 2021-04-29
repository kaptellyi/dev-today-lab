export function debounce(func, delay) {
  let timer;
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const context = this;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
