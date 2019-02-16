'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticleContent = function (_React$Component) {
	_inherits(ArticleContent, _React$Component);

	function ArticleContent(props) {
		_classCallCheck(this, ArticleContent);

		var _this = _possibleConstructorReturn(this, (ArticleContent.__proto__ || Object.getPrototypeOf(ArticleContent)).call(this, props));

		_this.state = {
			isLoaded: false,
			title: "",
			body: []
		};
		return _this;
	}

	_createClass(ArticleContent, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.getArticleContents();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (this.props.articleURL != prevProps.articleURL) {
				this.getArticleContents();
			}
		}
	}, {
		key: 'getArticleContents',
		value: function getArticleContents() {
			var _this2 = this;

			_axios2.default.get(this.props.articleURL).then(function (response) {
				console.log(response.data);
				_this2.setState({ title: response.data["title"], body: response.data["body"] });
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_react2.default.Fragment,
				null,
				this.state.body.map(function (content) {
					switch (content.type) {
						case "heading":
							return _react2.default.createElement(
								'h2',
								null,
								' ',
								content.model.text,
								' '
							);
							break;
						case "paragraph":
							return _react2.default.createElement(
								'p',
								null,
								' ',
								content.model.text,
								' '
							);
							break;
						case "image":
							console.log(content.model.url);
							return _react2.default.createElement('img', { src: content.model.url });
							break;
						case "list":
							if (content.model.type == "unordered") {
								var items = content.model.items.map(function (item) {
									return _react2.default.createElement(
										'li',
										null,
										' ',
										item,
										' '
									);
								});
								return _react2.default.createElement(
									'ul',
									null,
									' ',
									items,
									' '
								);
							}
							break;
						default:
							return _react2.default.createElement(
								'p',
								null,
								' default '
							);
					}
				})
			);
		}
	}]);

	return ArticleContent;
}(_react2.default.Component);

exports.default = ArticleContent;