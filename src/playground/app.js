// React components are just es6 classes that extends react.component
// They have to have a first big letter and render() function
// We use them by injecting them in some jsx - like html element (like h1)
// component props = similar to html arrtibutes (like id="", className="")
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.hanleDeleteOptions = this.hanleDeleteOptions.bind(this);
        this.handlePic = this.handlePic.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.hanleDeleteOption = this.hanleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }
    // lifecicle method - gets called when the component first get called to the DOM
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({options}));
            } 

        } catch (e) {
            // Do nothing at all
        }    
    };
    // lifecicle method - gets called after the props/state changes
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);        }

    };
    // lifecicle method - gets called before component goes away
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    hanleDeleteOptions() {
        this.setState(() => ({options: []}));
    }

    hanleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter(
                (option) => {return option !== optionToRemove;})
        }))
    }

    handlePic() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        } 

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    }

    render() {
        const subtitle = "Put your todo list in the hands of a computer :)"; 
        return (
            <div>
                <Header 
                subtitle={subtitle} 
                />
                <Action 
                handlePic={this.handlePic} 
                hasOptions={this.state.options.length > 0} 
                />
                <Options 
                options={this.state.options} 
                hanleDeleteOptions={this.hanleDeleteOptions}
                hanleDeleteOption = {this.hanleDeleteOption}
                />
                <AddOption 
                handleAddOption={this.handleAddOption}
                />
            </div>
        );
    };
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.handlePic}
            disabled={!props.hasOptions}
            >
            What Should I Do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            Your Options:
            <button onClick={props.hanleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) => (
                    <Option 
                    key={option} 
                    optionText={option}
                    hanleDeleteOption = {props.hanleDeleteOption}/>
                ))
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
           {props.optionText}
           <button 
           onClick={(e) => {
               props.hanleDeleteOption(props.optionText)
           }}>
           Remove
           </button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this); 
        this.state = {
            error: undefined
        };
    };
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = '';
        }
    };
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" autoComplete="off"/>
                <button>Add Option</button>
            </form>
            </div>
        );
    };
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
// ReactDOM.render(<User />, document.getElementById('app'));