/** Extremely simple cache system for my client side requests. Lots of things are missing such as: custom revalidation times, action system for invalidating the data... */
class GlobalClientCache {
  constructor() {
    this._cache = {}; /** @note We could have an init from disk to restore the last thing that the user was seeing (like twitter does). This system has a lot of potential */
    this._removalTimeouts = {};
  }

  get(key) {
    return this._cache[key];
  }

  set(key, value) {
    this._cache[key] = value;

    if(this._removalTimeouts[key]) {
      clearTimeout(this._removalTimeouts[key]);
    }

    this._removalTimeouts[key] = setTimeout(() => {
      this.remove(key);
      delete this._removalTimeouts[key];
    }, 1000 * 60 * 5); 
  }

  update(key, value) {
    if(this._cache[key]) {
      this._cache[key] = value;
    }
  }

  remove(key) {
    delete this._cache[key];
  }

  clear() {
    this._cache = {};
  }
}

export const globalClientCache = new GlobalClientCache();