"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _taskRoutes = _interopRequireDefault(require("./routes/task.routes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var app = new _express.default();

//settigs
app.set("port", process.env.PORT || 3000);

//middlewares
app.use((0, _cors.default)());
app.use((0, _morgan.default)("dev"));
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));

//routes
app.use("/api/tasks", _taskRoutes.default);
var _default = app;
exports.default = _default;