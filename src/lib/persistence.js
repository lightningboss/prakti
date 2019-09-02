const id = 'LOG_STATE';
export function persistData(data) {
    // don't block UI
    window.requestAnimationFrame(() => {
        localStorage.setItem(id, JSON.stringify(data));
    });
}

// this function should only be used to get the state after page refresh
// use a cache to speed up multiple function calls
let cache = null;
export function getInitialData() {
    if (cache) {
        return cache;
    }

    const result = JSON.parse(localStorage.getItem(id)) || [];
    cache = result;
    return result;
}

export function clearPersistedData() {
    localStorage.removeItem(id);
}
