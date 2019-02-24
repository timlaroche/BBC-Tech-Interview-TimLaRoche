'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _rating = require('./rating');

var _rating2 = _interopRequireDefault(_rating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RatingPage = function (_React$Component) {
	_inherits(RatingPage, _React$Component);

	function RatingPage(props) {
		_classCallCheck(this, RatingPage);

		var _this = _possibleConstructorReturn(this, (RatingPage.__proto__ || Object.getPrototypeOf(RatingPage)).call(this, props));

		_this.state = {
			article1ranking: 1,
			article2ranking: 1,
			article3ranking: 1,
			article4ranking: 1,
			article5ranking: 1,
			hasSubmitted: false
		};
		return _this;
	}

	_createClass(RatingPage, [{
		key: 'updateRating',
		value: function updateRating(articleNo, rating) {
			//TODO: Wrap inside a try-catch and display an error in render if anything goes wrong
			switch (articleNo) {
				case 1:
					this.setState({ article1ranking: rating });
					break;
				case 2:
					this.setState({ article2ranking: rating });
					break;
				case 3:
					this.setState({ article3ranking: rating });
					break;
				case 4:
					this.setState({ article4ranking: rating });
					break;
				case 5:
					this.setState({ article5ranking: rating });
					break;
				default:
					throw new Error("Unknown article/rating.");
			}
		}

		//Here in this function we would prepare and POST the data to some API endpoint.
		//For now simply log it in the console, as it is hosted on Github pages and we have limited write access
		//with Github pages static files.

	}, {
		key: 'logRating',
		value: function logRating() {
			this.setState({ hasSubmitted: true });
			console.log("Rating data prepared to be POSTed to some database/storage");
			console.log(this.state);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			window.scrollTo(0, 0);
		}
	}, {
		key: 'render',
		value: function render() {
			if (this.state.hasSubmitted) {
				return _react2.default.createElement(
					_react2.default.Fragment,
					null,
					_react2.default.createElement(
						_semanticUiReact.Container,
						{ text: true },
						_react2.default.createElement(
							'h1',
							null,
							'Thank you for reading the articles and submitting your ranking.'
						),
						_react2.default.createElement(
							'h2',
							null,
							'Please view the developer console if you would like to see the submitted ranking.'
						)
					)
				);
			} else {
				return _react2.default.createElement(
					_react2.default.Fragment,
					null,
					_react2.default.createElement(
						_semanticUiReact.Container,
						{ text: true },
						_react2.default.createElement(_rating2.default, { updateRating: this.updateRating.bind(this), articleName: 'Article 1', articleNo: 1 }),
						_react2.default.createElement(_rating2.default, { updateRating: this.updateRating.bind(this), articleName: 'Article 2', articleNo: 2 }),
						_react2.default.createElement(_rating2.default, { updateRating: this.updateRating.bind(this), articleName: 'Article 3', articleNo: 3 }),
						_react2.default.createElement(_rating2.default, { updateRating: this.updateRating.bind(this), articleName: 'Article 4', articleNo: 4 }),
						_react2.default.createElement(_rating2.default, { updateRating: this.updateRating.bind(this), articleName: 'Article 5', articleNo: 5 }),
						_react2.default.createElement(
							_semanticUiReact.Button,
							{ onClick: this.logRating.bind(this) },
							'Submit'
						)
					)
				);
			}
		}
	}]);

	return RatingPage;
}(_react2.default.Component);

exports.default = RatingPage;