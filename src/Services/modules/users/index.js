"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userApi = exports.useLazyFetchOneQuery = void 0;
var _api = require("@/Services/api");
var _fetchOne = _interopRequireDefault(require("./fetchOne"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const userApi = exports.userApi = _api.api.injectEndpoints({
  endpoints: build => ({
    fetchOne: (0, _fetchOne.default)(build)
  }),
  overrideExisting: false
});
const {
  useLazyFetchOneQuery
} = userApi;
exports.useLazyFetchOneQuery = useLazyFetchOneQuery;
//# sourceMappingURL=index.js.map