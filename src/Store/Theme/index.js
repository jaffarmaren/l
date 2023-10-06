"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDefaultTheme = exports.default = exports.changeTheme = void 0;
var _toolkit = require("@reduxjs/toolkit");
const slice = (0, _toolkit.createSlice)({
  name: 'theme',
  initialState: {
    theme: 'default',
    darkMode: null
  },
  reducers: {
    changeTheme: (state, _ref) => {
      let {
        payload: {
          theme,
          darkMode
        }
      } = _ref;
      if (typeof theme !== 'undefined') {
        state.theme = theme;
      }
      if (typeof darkMode !== 'undefined') {
        state.darkMode = darkMode;
      }
    },
    setDefaultTheme: (state, _ref2) => {
      let {
        payload: {
          theme,
          darkMode
        }
      } = _ref2;
      if (!state.theme) {
        if (typeof theme !== 'undefined') {
          state.theme = theme;
        }
        if (typeof darkMode !== 'undefined') {
          state.darkMode = darkMode;
        }
      }
    }
  }
});
const {
  changeTheme,
  setDefaultTheme
} = slice.actions;
exports.setDefaultTheme = setDefaultTheme;
exports.changeTheme = changeTheme;
var _default = exports.default = slice.reducer;
//# sourceMappingURL=index.js.map