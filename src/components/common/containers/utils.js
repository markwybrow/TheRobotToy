export const getMeasurement = (m, suffix) => {
  const isPrefixed = m.toString().indexOf('%') != -1;
  const parsed = Number.parseInt(m);
  const result = Number.isNaN(parsed) || isPrefixed ? m : parsed + suffix;
  return result;
};

export const getCleanedGridOptions = (styles) => {
  const json = JSON.stringify(styles);
  return !!Object.keys(styles) && Object.keys(styles).length > 0 ? json.replace(/["']/g, '') : {};
};

export const getCleanedOption = (value) => {
  return value.replace(/["']/g, '');
};
