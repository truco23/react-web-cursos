class LocalStorage {

    constructor() {
        this.key = 'login:reactjs';
    }

    set(name) {
        window.localStorage.setItem(this.key, name);
    }

    get() {
        return window.localStorage.getItem(this.key);
    }
}

export default LocalStorage