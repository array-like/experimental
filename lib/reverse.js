'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.reverse = reverse;

var _ = require('.');

function reverse(a, i, j) {

	while (i < j) {
		(0, _.swap)(a, i++, --j);
	}
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXZlcnNlLmpzIl0sIm5hbWVzIjpbInJldmVyc2UiLCJhIiwiaSIsImoiXSwibWFwcGluZ3MiOiI7Ozs7O1FBRWdCQSxPLEdBQUFBLE87O0FBRmhCOztBQUVPLFNBQVNBLE9BQVQsQ0FBbUJDLENBQW5CLEVBQXVCQyxDQUF2QixFQUEyQkMsQ0FBM0IsRUFBK0I7O0FBRXJDLFFBQVFELElBQUlDLENBQVo7QUFBZ0IsY0FBTUYsQ0FBTixFQUFVQyxHQUFWLEVBQWdCLEVBQUVDLENBQWxCO0FBQWhCO0FBRUEiLCJmaWxlIjoicmV2ZXJzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN3YXAgfSBmcm9tICcuJyA7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlICggYSAsIGkgLCBqICkge1xuXG5cdHdoaWxlICggaSA8IGogKSBzd2FwKCBhICwgaSsrICwgLS1qICkgO1xuXG59XG5cbiJdfQ==