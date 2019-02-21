'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _rating = require('./rating');

var _rating2 = _interopRequireDefault(_rating);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var RatingPage = function (_React$Component) {
	_inherits(RatingPage, _React$Component);

	function RatingPage(props) {
		_classCallCheck(this, RatingPage);

		return _possibleConstructorReturn(this, (RatingPage.__proto__ || Object.getPrototypeOf(RatingPage)).call(this, props));
	}

	_createClass(RatingPage, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_semanticUiReact.Container, { text: true }, _react2.default.createElement(_rating2.default, { articleName: 'Article 1' }), _react2.default.createElement(_rating2.default, { articleName: 'Article 2' }), _react2.default.createElement(_rating2.default, { articleName: 'Article 3' }), _react2.default.createElement(_rating2.default, { articleName: 'Article 4' }), _react2.default.createElement(_rating2.default, { articleName: 'Article 5' }));
		}
	}]);

	return RatingPage;
}(_react2.default.Component);

exports.default = RatingPage;