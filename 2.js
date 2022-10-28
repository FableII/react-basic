const body = document.querySelector('body');

class Main extends React.Component {
    render() {
        return React.createElement('div', null, 
        React.createElement('span', null, 'Введите логин:'),
        React.createElement('input', {className: 'input', placeholder: 'E-mail'}),
        React.createElement('button', {className: 'btn'}, 'Войти'));
    }
}

const root = ReactDOM.createRoot(body);
root.render(React.createElement(Main, null));