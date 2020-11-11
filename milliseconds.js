const converters = {
  days: (value) => value * 864e5,
  hours: (value) => value * 36e5,
  minutes: (value) => value * 6e4,
  seconds: (value) => value * 1e3,
  milliseconds: (value) => value,
  microseconds: (value) => value / 1e3,
};

export const toMs = (object) =>
  Object.entries(object).reduce((milliseconds, [key, value]) => {
    return milliseconds + converters[key](value);

    // return acc;
  }, 0);

export const fromMs = (ms) => ({
  days: ms / 864e5,
  hours: ms / 36e5,
  minutes: ms / 6e4,
  seconds: ms / 1e3,
  milliseconds: ms,
  microseconds: ms * 1e3,
});
