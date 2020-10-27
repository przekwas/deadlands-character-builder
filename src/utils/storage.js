export const STORAGE_KEY = 'data';

export const cramItIn = (storage: any) => {
    const data = JSON.stringify(storage);
    localStorage.setItem(STORAGE_KEY, data);
}