'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _content = require('./content');

var _content2 = _interopRequireDefault(_content);

var _semanticUiReact = require('semantic-ui-react');

var _rating = require('./rating');

var _rating2 = _interopRequireDefault(_rating);

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
	/* UNCOMMENT THIS FOR ACTUAL APP -> CURRENTLY TESTING RATING COMPONENT
 render(){
 	const headerStyle = {display: "block", magin: "0 auto"}
 	if(this.state.reading === false){
 		return(
 			<React.Fragment>
 				<Container text>
 					<Header as="h2" style={{display: "block", margin: "0 auto", "text-align": "center", "padding": '3em'}}> 
 						<img src="bbclogo.svg" alt="BBC"/> Article Ranker 
 					</Header>
 					<p> Welcome to the BBC Article Ranker. </p> 
 					<p>Please take your time to read the 5 articles you are presented and rank them at the end. </p>
 					<Button onClick={(e) => this.setState({reading: true}) }> Start </Button>
 				</Container>
 			</React.Fragment>
 			)
 	}
 	else{
 		return(
 			<React.Fragment>
 			<Grid verticalAlign='middle' style={{"padding": '3em'}} centered>
 				<Grid.Row>
 					<Grid.Column width={16}>
 						<Header as="h2" style={{display: "block", margin: "0 auto", "text-align": "center"}}> 
 							<img src="bbclogo.svg" alt="BBC"/> Article Ranker 
 						</Header>
 					</Grid.Column>
 				</Grid.Row>
 					<Grid.Row>
 					<Grid.Column width={4}>
 						<Icon name="chevron left" />
 					</Grid.Column>
 					<Grid.Column width={8}>
 						<ArticleContent articleURL={"http://localhost:3000/article-"+this.state.currentIndex} />
 						<Button onClick={(e) => this.nextArticle(e)}> Next Article </Button>
 						{this.state.showPrev != 0 && <button> Previous Article </button>}
 					</Grid.Column>
 					<Grid.Column width={4}>
 						<Icon name="chevron right" />
 					</Grid.Column>
 				</Grid.Row>
 			</Grid>
 			</React.Fragment>
 		)
 	}
 }
 */

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_rating2.default, null);
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

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById("content"));