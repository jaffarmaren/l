"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUser = exports.editUser = exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
const slice = (0, _toolkit.createSlice)({
  name: 'user',
  initialState: {
    name: '',
    email: ''
  },
  reducers: {
    getUser: (state, _ref) => {
      let {
        payload: {
          id
        }
      } = _ref;
    },
    editUser: (state, _ref2) => {
      let {
        payload: {}
      } = _ref2;
    }
  }
});
const {
  getUser,
  editUser
} = slice.actions;
exports.editUser = editUser;
exports.getUser = getUser;
var _default = exports.default = slice.reducer;
//# sourceMappingURL=index.js.map