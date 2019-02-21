'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _content = require('./content');

var _content2 = _interopRequireDefault(_content);

var _semanticUiReact = require('semantic-ui-react');

var _ratingpage = require('./ratingpage');

var _ratingpage2 = _interopRequireDefault(_ratingpage);

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
			showPrev: false,
			reading: false
		};
		return _this;
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var headerStyle = { display: "block", magin: "0 auto" };
			var AppHeader = _react2.default.createElement(
				_semanticUiReact.Header,
				{ as: 'h2', style: { display: "block", margin: "0 auto", "text-align": "center", "padding": '3em' } },
				_react2.default.createElement('img', { src: 'bbclogo.svg', alt: 'BBC', style: { "bottom": ".125em", "position": "relative" } }),
				' Article Ranker'
			);
			// Initial starting page
			if (this.state.reading === false) {
				return _react2.default.createElement(
					_react2.default.Fragment,
					null,
					_react2.default.createElement(
						_semanticUiReact.Container,
						{ text: true },
						AppHeader,
						_react2.default.createElement(
							'p',
							null,
							' Welcome to the BBC Article Ranker. '
						),
						_react2.default.createElement(
							'p',
							null,
							'Please take your time to read the 5 articles you are presented and rank them at the end. '
						),
						_react2.default.createElement(
							_semanticUiReact.Button,
							{ onClick: function onClick(e) {
									return _this2.setState({ reading: true });
								} },
							' Start '
						)
					)
				);
			}
			// Rating page if we have read all the articles
			if (this.state.currentIndex > 5) {
				return _react2.default.createElement(_ratingpage2.default, null);
			}

			// Otherwise display the articles
			else {
					return _react2.default.createElement(
						_react2.default.Fragment,
						null,
						_react2.default.createElement(
							_semanticUiReact.Grid,
							{ verticalAlign: 'middle', style: { "padding": '3em' }, centered: true },
							_react2.default.createElement(
								_semanticUiReact.Grid.Row,
								null,
								_react2.default.createElement(
									_semanticUiReact.Grid.Column,
									{ width: 16 },
									_react2.default.createElement(
										_semanticUiReact.Header,
										{ as: 'h2', style: { display: "block", margin: "0 auto", "text-align": "center" } },
										_react2.default.createElement('img', { src: 'bbclogo.svg', alt: 'BBC' }),
										' Article Ranker'
									)
								)
							),
							_react2.default.createElement(
								_semanticUiReact.Grid.Row,
								null,
								_react2.default.createElement(
									_semanticUiReact.Grid.Column,
									{ width: 4 },
									_react2.default.createElement(_semanticUiReact.Icon, { name: 'chevron left' })
								),
								_react2.default.createElement(
									_semanticUiReact.Grid.Column,
									{ width: 8 },
									_react2.default.createElement(_content2.default, { articleURL: "http://localhost:3000/article-" + this.state.currentIndex }),
									_react2.default.createElement(
										_semanticUiReact.Button,
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
								),
								_react2.default.createElement(
									_semanticUiReact.Grid.Column,
									{ width: 4 },
									_react2.default.createElement(_semanticUiReact.Icon, { name: 'chevron right' })
								)
							)
						)
					);
				}
		}
	}, {
		key: 'nextArticle',
		value: function nextArticle(e) {
			e.preventDefault();
			console.log("button press");
			// The commented line of code below is used if you would like to circularly view the articles i.e. after Article 5, read Article 1.
			//this.setState({currentIndex: (this.state.currentIndex % 5) + 1});
			//Otherwise below...
			this.setState({ currentIndex: this.state.currentIndex + 1 });
		}
	}]);

	return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById("content"));