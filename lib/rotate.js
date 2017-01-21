'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotate = rotate;

var _ = require('.');

/**
 * In place O(n).
 *
 * Rotate right version.
 * See http://prakhar.me/articles/the-string-rotation-problem/.
 */

function rotate(a, i, j, n) {

  (0, _.reverse)(a, i, j);
  (0, _.reverse)(a, i, i + n);
  (0, _.reverse)(a, i + n, j);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yb3RhdGUuanMiXSwibmFtZXMiOlsicm90YXRlIiwiYSIsImkiLCJqIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFTZ0JBLE0sR0FBQUEsTTs7QUFUaEI7O0FBRUE7Ozs7Ozs7QUFPTyxTQUFTQSxNQUFULENBQWtCQyxDQUFsQixFQUFzQkMsQ0FBdEIsRUFBMEJDLENBQTFCLEVBQThCQyxDQUE5QixFQUFrQzs7QUFFeEMsaUJBQVNILENBQVQsRUFBYUMsQ0FBYixFQUFpQkMsQ0FBakI7QUFDQSxpQkFBU0YsQ0FBVCxFQUFhQyxDQUFiLEVBQWlCQSxJQUFJRSxDQUFyQjtBQUNBLGlCQUFTSCxDQUFULEVBQWFDLElBQUlFLENBQWpCLEVBQXFCRCxDQUFyQjtBQUVBIiwiZmlsZSI6InJvdGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJldmVyc2UgfSBmcm9tICcuJyA7XG5cbi8qKlxuICogSW4gcGxhY2UgTyhuKS5cbiAqXG4gKiBSb3RhdGUgcmlnaHQgdmVyc2lvbi5cbiAqIFNlZSBodHRwOi8vcHJha2hhci5tZS9hcnRpY2xlcy90aGUtc3RyaW5nLXJvdGF0aW9uLXByb2JsZW0vLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUgKCBhICwgaSAsIGogLCBuICkge1xuXG5cdHJldmVyc2UoIGEgLCBpICwgaiApIDtcblx0cmV2ZXJzZSggYSAsIGkgLCBpICsgbiApIDtcblx0cmV2ZXJzZSggYSAsIGkgKyBuICwgaiApIDtcblxufVxuXG4iXX0=