(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Area;
function Area(props) {
  var text = props.text;
  return React.createElement(
    "div",
    { "class": "area" },
    text,
    React.createElement("br", null),
    React.createElement("textarea", { id: "area" + text, onChange: props.handleChange, maxLength: props.maxInp, value: props.val })
  );
}

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = forceScramble;
function forceScramble(props) {
  return React.createElement(
    "button",
    { onClick: props.handleClick },
    "Force Rearrange"
  );
}

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Area = require("./Area");

var _Area2 = _interopRequireDefault(_Area);

var _ForceRearrange = require("./ForceRearrange");

var _ForceRearrange2 = _interopRequireDefault(_ForceRearrange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React = React,
    Component = _React.Component;


function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

var GUI = function (_Component) {
  _inherits(GUI, _Component);

  function GUI() {
    _classCallCheck(this, GUI);

    var _this = _possibleConstructorReturn(this, (GUI.__proto__ || Object.getPrototypeOf(GUI)).call(this));

    _this.state = {
      text: ""
    };
    return _this;
  }

  _createClass(GUI, [{
    key: "handleChange",
    value: function handleChange(value) {
      if (!value) return;
      this.setState({ text: GUI.letterRearranger(value) });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { id: "gui" },
        React.createElement(_Area2.default, { text: "Normal", handleChange: function handleChange(e) {
            return _this2.handleChange(e.target.value);
          } }),
        React.createElement(_Area2.default, { text: "Rearranged", maxInp: "0", val: this.state.text }),
        React.createElement(_ForceRearrange2.default, {
          handleClick: function handleClick() {
            return _this2.handleChange((document.getElementById("areaNormal") || {}).value);
          } })
      );
    }
  }], [{
    key: "letterRearranger",
    value: function letterRearranger(str) {
      if (!str) return "";
      return str.replace(/[a-z]{4,}/ig, function (word) {
        var _word$match = word.match(/^(.)(.+)(.)$/),
            _word$match2 = _slicedToArray(_word$match, 4),
            first = _word$match2[1],
            middle = _word$match2[2],
            last = _word$match2[3];

        var middleRearranged = shuffleArray(middle.split("")).join("");
        return first + middleRearranged + last;
      });
    }
  }]);

  return GUI;
}(Component);

exports.default = GUI;

},{"./Area":1,"./ForceRearrange":2}],4:[function(require,module,exports){
"use strict";

var _GUI = require("./GUI");

var _GUI2 = _interopRequireDefault(_GUI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ReactDOM.render(React.createElement(_GUI2.default, null), document.getElementById("root"));

},{"./GUI":3}]},{},[4]);
