"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLazyGetPostsQuery = exports.useLazyGetPostQuery = exports.useEditPostMutation = exports.postApi = void 0;
var _api = require("@/Services/api");
const postApi = exports.postApi = _api.api.injectEndpoints({
  endpoints: build => ({
    getPosts: build.query({
      query: () => `/posts`
    }),
    getPost: build.query({
      query: id => `/posts/${id}`
    }),
    editPost: build.mutation({
      query: _ref => {
        let {
          id,
          ...rest
        } = _ref;
        return {
          url: `/posts/${id}`,
          headers: {
            Authentication: 'sample-auth'
          },
          method: 'PATCH',
          body: rest
        };
      }
    })
  })
});
const {
  useLazyGetPostsQuery,
  useLazyGetPostQuery,
  useEditPostMutation
} = postApi;
exports.useEditPostMutation = useEditPostMutation;
exports.useLazyGetPostQuery = useLazyGetPostQuery;
exports.useLazyGetPostsQuery = useLazyGetPostsQuery;
//# sourceMappingURL=index.js.map