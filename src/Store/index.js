"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = exports.persistor = void 0;
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var _toolkit = require("@reduxjs/toolkit");
var _query = require("@reduxjs/toolkit/query");
var _reduxPersist = require("redux-persist");
var _api = require("@/Services/api");
var _Theme = _interopRequireDefault(require("./Theme"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const reducers = (0, _toolkit.combineReducers)({
  theme: _Theme.default,
  api: _api.api.reducer
});
const persistConfig = {
  key: 'root',
  storage: _asyncStorage.default,
  whitelist: ['theme']
};
const persistedReducer = (0, _reduxPersist.persistReducer)(persistConfig, reducers);
const store = exports.store = (0, _toolkit.configureStore)({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [_reduxPersist.FLUSH, _reduxPersist.REHYDRATE, _reduxPersist.PAUSE, _reduxPersist.PERSIST, _reduxPersist.PURGE, _reduxPersist.REGISTER]
      }
    }).concat(_api.api.middleware);
    if (__DEV__ && !process.env.JEST_WORKER_ID) {
      const createDebugger = require('redux-flipper').default;
      middlewares.push(createDebugger());
    }
    return middlewares;
  }
});
const persistor = exports.persistor = (0, _reduxPersist.persistStore)(store);
(0, _query.setupListeners)(store.dispatch);
//# sourceMappingURL=index.js.map