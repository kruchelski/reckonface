const setItem = (key, value) => {
  if (typeof value === 'object') value = JSON.stringify(value);
  localStorage.setItem(key, value);
};

const getItem = (key) => {
  return localStorage.getItem(key);
};

const clearStorage = () => {
  localStorage.clear();
};

export { setItem, getItem, clearStorage };
