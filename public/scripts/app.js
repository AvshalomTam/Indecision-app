'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// React components are just es6 classes that extends react.component
// They have to have a first big letter and render() function
// We use them by injecting them in some jsx - like html element (like h1)
// component props = similar to html arrtibutes (like id="", className="")
var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.hanleDeleteOptions = _this.hanleDeleteOptions.bind(_this);
        _this.handlePic = _this.handlePic.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'hanleDeleteOptions',
        value: function hanleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'handlePic',
        value: function handlePic() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists';
            }

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = "Put your todo list in the hands of a computer :)";
            return React.createElement(
                'div',
                null,
                React.createElement(Header, {
                    subtitle: subtitle
                }),
                React.createElement(Action, {
                    handlePic: this.handlePic,
                    hasOptions: this.state.options.length > 0
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    hanleDeleteOptions: this.hanleDeleteOptions
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

;

IndecisionApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePic,
                disabled: !props.hasOptions
            },
            'What Should I Do?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        'Your Options:',
        React.createElement(
            'button',
            { onClick: props.hanleDeleteOptions },
            'Remove All'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, { key: option, optionText: option });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        'Option: ',
        props.optionText
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();

            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);

            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option', autoComplete: 'off' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

;

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
// ReactDOM.render(<User />, document.getElementById('app'));
