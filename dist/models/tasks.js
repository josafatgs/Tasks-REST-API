"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));
var _mongoose = require("mongoose");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var taskSchema = new _mongoose.Schema({
  tittle: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  done: {
    type: Boolean,
    default: false // Set the property as 'false' by default
  }
}, {
  versionKey: false,
  timestamps: true
});
taskSchema.plugin(_mongoosePaginateV.default);
var _default = (0, _mongoose.model)("Task", taskSchema);
exports.default = _default;