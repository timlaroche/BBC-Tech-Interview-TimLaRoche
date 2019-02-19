'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rating = function (_React$Component) {
	_inherits(Rating, _React$Component);

	function Rating(props) {
		_classCallCheck(this, Rating);

		return _possibleConstructorReturn(this, (Rating.__proto__ || Object.getPrototypeOf(Rating)).call(this, props));
	}

	_createClass(Rating, [{
		key: 'render',
		value: function render() {
			var items = [{
				childKey: 0,
				image: '/images/wireframe/image.png',
				header: 'Header',
				description: 'Description',
				meta: 'Metadata',
				extra: 'Extra'
			}, {
				childKey: 1,
				image: '/images/wireframe/image.png',
				header: 'Header',
				description: 'Description',
				meta: 'Metadata',
				extra: 'Extra'
			}];

			return _react2.default.createElement(_semanticUiReact.Item.Group, { items: items });
		}
	}]);

	return Rating;
}(_react2.default.Component);

exports.default = Rating;