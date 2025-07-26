"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBox = SearchBox;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function SearchBox(props) {
  return /*#__PURE__*/_react.default.createElement("input", {
    className: `search ${props?.inputsearchClass}`,
    type: "text",
    id: "search",
    placeholder: props.placeholder,
    onChange: e => props.onChange(e)
  });
}