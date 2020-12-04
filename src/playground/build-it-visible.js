class VisiblityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility(e) {
        e.preventDefault();
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <form onSubmit={this.handleToggleVisibility}>
                    <button>{this.state.visibility ? "Hide details" : "Show details"}</button>
                    {this.state.visibility && <p>this is the details!!</p>}
                </form>
            </div>
            );
    }
}
ReactDOM.render(<VisiblityToggle />, document.getElementById('app'));