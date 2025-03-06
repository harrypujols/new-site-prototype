export default (APP) => {
  const load = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };

  const save = (key, json) => {
    localStorage.setItem(key, JSON.stringify(json));
  };

  return {
    load,
    save,
  };
};
