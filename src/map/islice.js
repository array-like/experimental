import {range} from '../utils/range.js';
import {pick} from '../utils/pick.js';

export function islice(iterable, start, stop, step, out) {
	return pick(iterable, range(start, stop, step, []), out);
}
