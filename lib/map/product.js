"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.product = product;
function product(iterables, repeat, out) {

	// product(['ABCD', 'xy'], 1) --> Ax Ay Bx By Cx Cy Dx Dy
	// product([range(0, 2, 1)], 3) --> 000 001 010 011 100 101 110 111

	var a, b, i, j, k, m, n, iterable, c, len;

	a = [[]];

	// repeat k times

	for (k = 0; k < repeat; ++k) {

		// for each iterable
		// concatenate existing combinaisons
		// with every element of this iterable

		for (i = 0, m = iterables.length; i < m; ++i) {

			// b will contain the newly created combinaisons

			b = [];

			// cache the current iterable

			iterable = iterables[i];

			// for each existing combinaison

			for (j = 0, n = a.length; j < n; ++j) {

				// for each element of the current iterable

				for (c = 0, len = iterable.length; c < len; ++c) {

					// concatenate existing combinaison with
					// current element of the iterable

					b.push(a[j].concat(iterable[c]));
				}
			}

			// update a for next round

			a = b;
		}
	}

	// report output

	for (j = 0, n = a.length; j < n; ++j) {
		out.push(a[j]);
	}

	return out;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0IiwiaXRlcmFibGVzIiwicmVwZWF0Iiwib3V0IiwiYSIsImIiLCJpIiwiaiIsImsiLCJtIiwibiIsIml0ZXJhYmxlIiwiYyIsImxlbiIsImxlbmd0aCIsInB1c2giLCJjb25jYXQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBRWdCQSxPLEdBQUFBLE87QUFBVCxTQUFTQSxPQUFULENBQW1CQyxTQUFuQixFQUE4QkMsTUFBOUIsRUFBc0NDLEdBQXRDLEVBQTRDOztBQUVsRDtBQUNBOztBQUVBLEtBQUlDLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CQyxDQUFuQixFQUFzQkMsQ0FBdEIsRUFBeUJDLFFBQXpCLEVBQW1DQyxDQUFuQyxFQUFzQ0MsR0FBdEM7O0FBRUFULEtBQUksQ0FBQyxFQUFELENBQUo7O0FBRUE7O0FBRUEsTUFBTUksSUFBSSxDQUFWLEVBQWNBLElBQUlOLE1BQWxCLEVBQTJCLEVBQUVNLENBQTdCLEVBQWlDOztBQUVoQztBQUNBO0FBQ0E7O0FBRUEsT0FBTUYsSUFBSSxDQUFKLEVBQU9HLElBQUlSLFVBQVVhLE1BQTNCLEVBQW9DUixJQUFJRyxDQUF4QyxFQUE0QyxFQUFFSCxDQUE5QyxFQUFrRDs7QUFFakQ7O0FBRUFELE9BQUksRUFBSjs7QUFFQTs7QUFFQU0sY0FBV1YsVUFBVUssQ0FBVixDQUFYOztBQUdBOztBQUVBLFFBQU1DLElBQUksQ0FBSixFQUFPRyxJQUFJTixFQUFFVSxNQUFuQixFQUE0QlAsSUFBSUcsQ0FBaEMsRUFBb0MsRUFBRUgsQ0FBdEMsRUFBMEM7O0FBRXpDOztBQUVBLFNBQU1LLElBQUksQ0FBSixFQUFPQyxNQUFNRixTQUFTRyxNQUE1QixFQUFxQ0YsSUFBSUMsR0FBekMsRUFBK0MsRUFBRUQsQ0FBakQsRUFBcUQ7O0FBRXBEO0FBQ0E7O0FBRUFQLE9BQUVVLElBQUYsQ0FBUVgsRUFBRUcsQ0FBRixFQUFLUyxNQUFMLENBQWFMLFNBQVNDLENBQVQsQ0FBYixDQUFSO0FBRUE7QUFFRDs7QUFFRDs7QUFFQVIsT0FBSUMsQ0FBSjtBQUNBO0FBRUQ7O0FBRUQ7O0FBRUEsTUFBTUUsSUFBSSxDQUFKLEVBQU9HLElBQUlOLEVBQUVVLE1BQW5CLEVBQTRCUCxJQUFJRyxDQUFoQyxFQUFvQyxFQUFFSCxDQUF0QyxFQUEwQztBQUN6Q0osTUFBSVksSUFBSixDQUFTWCxFQUFFRyxDQUFGLENBQVQ7QUFDQTs7QUFFRCxRQUFPSixHQUFQO0FBQ0EiLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZnVuY3Rpb24gcHJvZHVjdCAoIGl0ZXJhYmxlcywgcmVwZWF0LCBvdXQgKSB7XG5cblx0Ly8gcHJvZHVjdChbJ0FCQ0QnLCAneHknXSwgMSkgLS0+IEF4IEF5IEJ4IEJ5IEN4IEN5IER4IER5XG5cdC8vIHByb2R1Y3QoW3JhbmdlKDAsIDIsIDEpXSwgMykgLS0+IDAwMCAwMDEgMDEwIDAxMSAxMDAgMTAxIDExMCAxMTFcblxuXHR2YXIgYSwgYiwgaSwgaiwgaywgbSwgbiwgaXRlcmFibGUsIGMsIGxlbjtcblxuXHRhID0gW1tdXTtcblxuXHQvLyByZXBlYXQgayB0aW1lc1xuXG5cdGZvciAoIGsgPSAwIDsgayA8IHJlcGVhdCA7ICsrayApIHtcblxuXHRcdC8vIGZvciBlYWNoIGl0ZXJhYmxlXG5cdFx0Ly8gY29uY2F0ZW5hdGUgZXhpc3RpbmcgY29tYmluYWlzb25zXG5cdFx0Ly8gd2l0aCBldmVyeSBlbGVtZW50IG9mIHRoaXMgaXRlcmFibGVcblxuXHRcdGZvciAoIGkgPSAwLCBtID0gaXRlcmFibGVzLmxlbmd0aCA7IGkgPCBtIDsgKytpICkge1xuXG5cdFx0XHQvLyBiIHdpbGwgY29udGFpbiB0aGUgbmV3bHkgY3JlYXRlZCBjb21iaW5haXNvbnNcblxuXHRcdFx0YiA9IFtdO1xuXG5cdFx0XHQvLyBjYWNoZSB0aGUgY3VycmVudCBpdGVyYWJsZVxuXG5cdFx0XHRpdGVyYWJsZSA9IGl0ZXJhYmxlc1tpXTtcblxuXG5cdFx0XHQvLyBmb3IgZWFjaCBleGlzdGluZyBjb21iaW5haXNvblxuXG5cdFx0XHRmb3IgKCBqID0gMCwgbiA9IGEubGVuZ3RoIDsgaiA8IG4gOyArK2ogKSB7XG5cblx0XHRcdFx0Ly8gZm9yIGVhY2ggZWxlbWVudCBvZiB0aGUgY3VycmVudCBpdGVyYWJsZVxuXG5cdFx0XHRcdGZvciAoIGMgPSAwLCBsZW4gPSBpdGVyYWJsZS5sZW5ndGggOyBjIDwgbGVuIDsgKytjICkge1xuXG5cdFx0XHRcdFx0Ly8gY29uY2F0ZW5hdGUgZXhpc3RpbmcgY29tYmluYWlzb24gd2l0aFxuXHRcdFx0XHRcdC8vIGN1cnJlbnQgZWxlbWVudCBvZiB0aGUgaXRlcmFibGVcblxuXHRcdFx0XHRcdGIucHVzaCggYVtqXS5jb25jYXQoIGl0ZXJhYmxlW2NdICkgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0Ly8gdXBkYXRlIGEgZm9yIG5leHQgcm91bmRcblxuXHRcdFx0YSA9IGI7XG5cdFx0fVxuXG5cdH1cblxuXHQvLyByZXBvcnQgb3V0cHV0XG5cblx0Zm9yICggaiA9IDAsIG4gPSBhLmxlbmd0aCA7IGogPCBuIDsgKytqICkge1xuXHRcdG91dC5wdXNoKGFbal0pO1xuXHR9XG5cblx0cmV0dXJuIG91dDtcbn1cblxuIl19