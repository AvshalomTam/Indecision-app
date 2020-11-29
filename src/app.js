console.log("App.js is running!!");

var appRoot = document.getElementById('app');

var app = {
    title: 'My app',
    subtitle: 'subb',
    options: ['One', 'Two']
}

// JSX - JavaScript XML
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? `Here are your options:` : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'Avshalom Tam',
    age: 28,
    location: 'Rosh haayin'
}

var getLocation = (location) => {
    return location ? <p>Location: {location}</p> : undefined;
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

ReactDOM.render(template, appRoot);