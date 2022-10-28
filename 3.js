const body = document.querySelector('body');

class Main extends React.Comonent {
    render(){
        return(
            <div id="root">
                <span>Введите логин:</span>
                <input placeholder="E-mail"></input>
                <button className="btn">Войти</button>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(body);
root.render(<Main/>)