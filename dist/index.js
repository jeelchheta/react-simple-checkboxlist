"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _utile = require("./utile.js");
require("./style/checkbox-list.css");
var _SearchBox = require("./components/SearchBox.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class CheckboxList extends _react.default.Component {
  constructor(props) {
    super(props);
    const {
      options,
      filterdigit
    } = props;
    this.state = {
      options: options,
      masterOptions: options,
      filter: '',
      filterdigit: filterdigit
    };
  }
  componentDidUpdate(prevProps) {
    const {
      options,
      filterdigit
    } = this.props;
    const {
      filter
    } = this.state;
    if (prevProps.options !== options) {
      this.setState({
        options: options,
        filterdigit: filterdigit,
        masterOptions: options
      }, () => {
        if (filter.length > filterdigit) {
          this.handelSearch(filter);
        }
      });
    }
  }
  handleSet = (object, selectedIndex, expresion) => {
    let {
      selectoption,
      handlechange
    } = this.props;
    var selectedList = [...selectoption] || [];
    if (selectedIndex === -1) {
      selectedList.push(object);
    } else {
      if (expresion) {
        selectedList.splice(selectedIndex, 1);
      } else {
        selectedList[selectedIndex] = object;
      }
    }
    if (typeof handlechange === "function") {
      handlechange(selectedList, object, expresion);
    }
  };
  handelSearch(e) {
    const value = (0, _utile.lowerStr)(e.target.value);
    const {
      masterOptions,
      filterdigit
    } = this.state;
    const {
      filterhidden,
      optionlabel
    } = this.props;
    let filtered = masterOptions;
    if (value.length > filterdigit) {
      filtered = (0, _utile.filter)(value, masterOptions, filterhidden, optionlabel);
    }
    this.setState({
      options: filtered,
      filter: value
    });
  }
  render() {
    const {
      options
    } = this.state;
    let {
      selectoption,
      optionlabel,
      optionvalue,
      placeholder,
      checkboxColor,
      controlboxClass,
      containerClass,
      inputsearchClass,
      filter
    } = this.props;
    let selectedListLength = selectoption.length;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: controlboxClass
    }, !!filter && /*#__PURE__*/_react.default.createElement(_SearchBox.SearchBox, {
      placeholder: placeholder,
      inputsearchClass: inputsearchClass,
      onChange: e => this.handelSearch(e)
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: `container-checkbox ${containerClass ? containerClass : ""}`
    }, options.map((e, i) => {
      let optionvalueStr = (0, _utile.checkFun)(optionvalue, e, "value"),
        index = (0, _utile.checkedList)(e, selectoption, optionvalue, selectedListLength);
      let checked = index != -1;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "checkbox-wrapper",
        key: i
      }, /*#__PURE__*/_react.default.createElement("input", {
        className: "inp-cbx",
        id: `cbx-${optionvalueStr}`,
        type: "checkbox",
        checked: checked,
        onChange: () => this.handleSet(e, index, checked)
      }), /*#__PURE__*/_react.default.createElement("label", {
        className: "cbx",
        htmlFor: `cbx-${optionvalueStr}`
      }, /*#__PURE__*/_react.default.createElement("span", {
        style: checked ? {
          backgroundColor: checkboxColor,
          borderColor: checkboxColor
        } : {}
      }, /*#__PURE__*/_react.default.createElement("svg", {
        width: "12px",
        height: "10px",
        viewBox: "0 0 12 10"
      }, /*#__PURE__*/_react.default.createElement("polyline", {
        points: "1.5 6 4.5 9 10.5 1"
      }))), /*#__PURE__*/_react.default.createElement("span", null, (0, _utile.checkFun)(optionlabel, e, "label"))));
    })));
  }
}
exports.default = CheckboxList;
CheckboxList.defaultProps = {
  options: [],
  selectoption: [],
  filter: true,
  filterhidden: false,
  placeholder: 'Search...',
  filterdigit: 2,
  controlboxClass: "",
  containerClass: "",
  inputsearchClass: "",
  checkboxColor: "#506EEC"
};