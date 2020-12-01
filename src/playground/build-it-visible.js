const app = {
    title: 'Visibility Toggle',
    textOnButton: 'Show details',
    details: undefined
};

const appRoot = document.getElementById('app');

const onFormSubmit = (e) =>{
    e.preventDefault();
    if (!app.details) {
        app.textOnButton = 'Hide details';
        app.details = 'this is the details!!';
    } else {
        app.textOnButton = 'Show details';
        app.details = undefined;
    }
    render();
};

const render = () => {
    // JSX
    const template = (
        <div>
            <h1>{app.title}</h1>
            <form onSubmit={onFormSubmit}>
                <button>{app.textOnButton}</button>
                {app.details && <p>{app.details}</p>}
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();