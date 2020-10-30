export const STORAGE_KEY = 'data';
export const VERSION_KEY = 'vkey';
export const VERSION = 1.7;

export const cramItIn = (stateStorage, versionStorage) => {
	const data = JSON.stringify(stateStorage);
	localStorage.setItem(STORAGE_KEY, data);
	localStorage.setItem(VERSION_KEY, versionStorage);
};
