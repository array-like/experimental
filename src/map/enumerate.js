import {range} from '../utils/range.js';

import {zip} from './zip.js';

export function enumerate(iterable, out) {
	zip([range(0, iterable.length, 1, []), iterable], out);

	return out;
}
