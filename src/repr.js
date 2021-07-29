import {slice} from './slice.js';

export function repr(array, left, right) {
	return JSON.stringify(slice(array, left, right));
}
