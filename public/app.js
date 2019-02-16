'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _content = require('./content');

var _content2 = _interopRequireDefault(_content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
			currentIndex: 1,
			showPrev: false
		};
		return _this;
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				_react2.default.Fragment,
				null,
				_react2.default.createElement(_content2.default, { articleURL: "http://localhost:3000/article-" + this.state.currentIndex }),
				_react2.default.createElement(
					'button',
					{ onClick: function onClick(e) {
							return _this2.nextArticle(e);
						} },
					' Next Article '
				),
				this.state.showPrev != 0 && _react2.default.createElement(
					'button',
					null,
					' Previous Article '
				)
			);
		}
	}, {
		key: 'nextArticle',
		value: function nextArticle(e) {
			e.preventDefault();
			console.log("button press");
			this.setState({ currentIndex: this.state.currentIndex % 5 + 1 });
		}
	}]);

	return App;
}(_react2.default.Component);

ReactDOM.render(_react2.default.createElement(App, null), document.getElementById("content"));