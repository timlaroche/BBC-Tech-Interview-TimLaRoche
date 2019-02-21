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

var Rating = function (_React$Component) {
	_inherits(Rating, _React$Component);

	function Rating(props) {
		_classCallCheck(this, Rating);

		var _this = _possibleConstructorReturn(this, (Rating.__proto__ || Object.getPrototypeOf(Rating)).call(this, props));

		_this.handleChange = function (e, _ref) {
			var value = _ref.value;
			return _this.setState({ value: value });
		};

		_this.state = { value: 1 };
		return _this;
	}

	_createClass(Rating, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_semanticUiReact.Form, null, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1' }, ' ', this.props.articleName, ' '), _react2.default.createElement(_semanticUiReact.Form.Field, null, 'Selected rating: ', _react2.default.createElement('b', null, this.state.value)), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement(_semanticUiReact.Radio, {
				label: '1',
				name: 'radioGroup',
				value: '1',
				checked: this.state.value == 1,
				onChange: this.handleChange,
				defaultChecked: true
			})), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement(_semanticUiReact.Radio, {
				label: '2',
				name: 'radioGroup',
				value: '2',
				checked: this.state.value == 2,
				onChange: this.handleChange
			})), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement(_semanticUiReact.Radio, {
				label: '3',
				name: 'radioGroup',
				value: '3',
				checked: this.state.value == 3,
				onChange: this.handleChange
			})), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement(_semanticUiReact.Radio, {
				label: '4',
				name: 'radioGroup',
				value: '4',
				checked: this.state.value == 4,
				onChange: this.handleChange
			})), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement(_semanticUiReact.Radio, {
				label: '5',
				name: 'radioGroup',
				value: '5',
				checked: this.state.value == 5,
				onChange: this.handleChange
			})));
		}
	}]);

	return Rating;
}(_react2.default.Component);

exports.default = Rating;