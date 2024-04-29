const helloReact = () => {
    return React.createElement('h1',null,'Topics Covered');
};
const followUP = () => {
    return React.createElement('p',null,"The following list is of all the topics covered");
}
const web = () => {
    return React.createElement('a',{ href: 'https://www.google.com' },"Getting started with the web");
}

ReactDOM.render(React.createElement(helloReact),document.getElementById('root'));
ReactDOM.render(React.createElement(followUP),document.getElementById('follow-up'));
ReactDOM.render(React.createElement(web),document.getElementById("web"));
