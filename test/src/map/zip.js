import test from 'ava';

import * as array from '#module';

test('zip', (t) => {
	const one = function (iterables, out) {
		const msg = 'zip ' + JSON.stringify(iterables);

		t.deepEqual(array.zip(iterables, []), out, msg);

		const strip = (iterables, out) => {
			const len = iterables.length;

			if (len === 0) {
				return out;
			}

			let n = iterables[0].length;

			for (let i = 1; i < len; ++i) {
				const tmp = iterables[i].length;

				if (tmp < n) {
					n = tmp;
				}
			}

			for (let i = 0; i < len; ++i) {
				out.push(iterables[i].slice(0, n));
			}

			return out;
		};

		const unzipped = strip(iterables, []);

		t.deepEqual(array.zip(out, []), unzipped, 'un' + msg);
	};

	one([], []);
	one([[1]], [[1]]);
	one([[1, 2, 3]], [[1], [2], [3]]);
	one(
		[
			[1, 2, 3],
			[4, 5, 6],
		],
		[
			[1, 4],
			[2, 5],
			[3, 6],
		],
	);
	one(
		[
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		],
		[
			[1, 4, 7],
			[2, 5, 8],
			[3, 6, 9],
		],
	);
	one(
		[
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9, 10],
		],
		[
			[1, 4, 7],
			[2, 5, 8],
			[3, 6, 9],
		],
	);
	one(
		[
			[1, 2, 3, 4],
			[4, 5, 6],
			[7, 8, 9],
		],
		[
			[1, 4, 7],
			[2, 5, 8],
			[3, 6, 9],
		],
	);
});
