"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = void 0;
var _Config = require("@/Config");
var _react = require("@reduxjs/toolkit/query/react");
const baseQuery = (0, _react.fetchBaseQuery)({
  baseUrl: _Config.Config.API_URL,
  headers: {
    lang: 'eng'
  } // setting global headers
});

const baseQueryWithInterceptor = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {}
  return result;
};
const api = exports.api = (0, _react.createApi)({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({})
});
//# sourceMappingURL=api.js.map