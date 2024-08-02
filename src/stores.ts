import { browser } from '$app/environment';
import { writable } from 'svelte/store';

function storable(name, data) {
	const store = writable(data);
	const { subscribe, set, update } = store;

	if (browser && localStorage.getItem(name)) {
		set(JSON.parse(localStorage.getItem(name)));
	}

	return {
		subscribe,
		set: (newData) => {
			if (browser) localStorage.setItem(name, JSON.stringify(newData));
			set(newData);
		},
		update: (callback) => {
			const newData = callback(get(store));
			if (browser) localStorage.setItem(name, JSON.stringify(newData));
			set(newData);
		}
	};
}

export const mainScrollPos = storable('mainScrollPos', 0);
export const otherScrollPos = storable('otherScrollPos', 0);
export const calligraphyScrollPos = storable('calligraphyScrollPos', 0);
