"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;

/**
 *
 * Maps a callable object over an array.
 *
 * /!\ currently only supports a (function, array) tuple as argument
 *
 */

function map(callable, iterable, out) {

  var i, len;

  len = iterable.length;

  for (i = 0; i < len; ++i) {
    out.push(callable(iterable[i]));
  }

  return out;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvbWFwLmpzIl0sIm5hbWVzIjpbIm1hcCIsImNhbGxhYmxlIiwiaXRlcmFibGUiLCJvdXQiLCJpIiwibGVuIiwibGVuZ3RoIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFTZ0JBLEcsR0FBQUEsRzs7QUFSaEI7Ozs7Ozs7O0FBUU8sU0FBU0EsR0FBVCxDQUFlQyxRQUFmLEVBQXlCQyxRQUF6QixFQUFtQ0MsR0FBbkMsRUFBeUM7O0FBRS9DLE1BQUlDLENBQUosRUFBT0MsR0FBUDs7QUFFQUEsUUFBTUgsU0FBU0ksTUFBZjs7QUFFQSxPQUFNRixJQUFJLENBQVYsRUFBY0EsSUFBSUMsR0FBbEIsRUFBd0IsRUFBRUQsQ0FBMUIsRUFBOEI7QUFDN0JELFFBQUlJLElBQUosQ0FBVU4sU0FBVUMsU0FBU0UsQ0FBVCxDQUFWLENBQVY7QUFDQTs7QUFFRCxTQUFPRCxHQUFQO0FBRUEiLCJmaWxlIjoibWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqXG4gKiBNYXBzIGEgY2FsbGFibGUgb2JqZWN0IG92ZXIgYW4gYXJyYXkuXG4gKlxuICogLyFcXCBjdXJyZW50bHkgb25seSBzdXBwb3J0cyBhIChmdW5jdGlvbiwgYXJyYXkpIHR1cGxlIGFzIGFyZ3VtZW50XG4gKlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXAgKCBjYWxsYWJsZSwgaXRlcmFibGUsIG91dCApIHtcblxuXHR2YXIgaSwgbGVuO1xuXG5cdGxlbiA9IGl0ZXJhYmxlLmxlbmd0aDtcblxuXHRmb3IgKCBpID0gMCA7IGkgPCBsZW4gOyArK2kgKSB7XG5cdFx0b3V0LnB1c2goIGNhbGxhYmxlKCBpdGVyYWJsZVtpXSApICk7XG5cdH1cblxuXHRyZXR1cm4gb3V0O1xuXG59XG5cbiJdfQ==