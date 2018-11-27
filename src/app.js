console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);
var userName = 'Bogdan'
var age = '22'
var location = 'Krakow'
var templateTwo = (
  <div>
    <h1>{userName}</h1>
    <p>Age: {age}</p>
    <p>Location: {location}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
