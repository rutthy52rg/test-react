const Storage = {
  setStorage(key, value) {
    localStorage.setItem(key, value);
  },
  getStorage(key) {
    return localStorage.getItem(key);
  },
  removeStorage(key) {
    localStorage.removeItem(key);
  },
  clearStorage() {
    localStorage.clear();
  },
};

export default Storage;
