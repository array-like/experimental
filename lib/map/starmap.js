"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.starmap = starmap;

/**
 *
 * Maps a callable object over an array.
 *
 * /!\ currently only supports a (function, array) tuple as argument
 *
 */

function starmap(callable, iterable, out) {

  var i, len;

  len = iterable.length;

  for (i = 0; i < len; ++i) {
    out.push(callable.apply(null, iterable[i]));
  }

  return out;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvc3Rhcm1hcC5qcyJdLCJuYW1lcyI6WyJzdGFybWFwIiwiY2FsbGFibGUiLCJpdGVyYWJsZSIsIm91dCIsImkiLCJsZW4iLCJsZW5ndGgiLCJwdXNoIiwiYXBwbHkiXSwibWFwcGluZ3MiOiI7Ozs7O1FBU2dCQSxPLEdBQUFBLE87O0FBUmhCOzs7Ozs7OztBQVFPLFNBQVNBLE9BQVQsQ0FBbUJDLFFBQW5CLEVBQTZCQyxRQUE3QixFQUF1Q0MsR0FBdkMsRUFBNkM7O0FBRW5ELE1BQUlDLENBQUosRUFBT0MsR0FBUDs7QUFFQUEsUUFBTUgsU0FBU0ksTUFBZjs7QUFFQSxPQUFNRixJQUFJLENBQVYsRUFBY0EsSUFBSUMsR0FBbEIsRUFBd0IsRUFBRUQsQ0FBMUIsRUFBOEI7QUFDN0JELFFBQUlJLElBQUosQ0FBVU4sU0FBU08sS0FBVCxDQUFnQixJQUFoQixFQUFzQk4sU0FBU0UsQ0FBVCxDQUF0QixDQUFWO0FBQ0E7O0FBRUQsU0FBT0QsR0FBUDtBQUVBIiwiZmlsZSI6InN0YXJtYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICpcbiAqIE1hcHMgYSBjYWxsYWJsZSBvYmplY3Qgb3ZlciBhbiBhcnJheS5cbiAqXG4gKiAvIVxcIGN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIGEgKGZ1bmN0aW9uLCBhcnJheSkgdHVwbGUgYXMgYXJndW1lbnRcbiAqXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJtYXAgKCBjYWxsYWJsZSwgaXRlcmFibGUsIG91dCApIHtcblxuXHR2YXIgaSwgbGVuO1xuXG5cdGxlbiA9IGl0ZXJhYmxlLmxlbmd0aDtcblxuXHRmb3IgKCBpID0gMCA7IGkgPCBsZW4gOyArK2kgKSB7XG5cdFx0b3V0LnB1c2goIGNhbGxhYmxlLmFwcGx5KCBudWxsLCBpdGVyYWJsZVtpXSApICk7XG5cdH1cblxuXHRyZXR1cm4gb3V0O1xuXG59XG5cbiJdfQ==