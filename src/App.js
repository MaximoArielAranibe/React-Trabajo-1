import logo from './logo.svg';
import './App.css';

function App() {
  const bienvenida = {nombre: "TecnoSoft" , usuario: "usuario", tecnologia:"tecnología"};
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <header className='index_header_in'>
          <h1 className='index_header_in_h1'>
            <b>T</b>ecno<b>S</b>oft {/* Tecno soft */}
          </h1>
        </header>
        <p className='p-saludo'>
          <i>Hola</i> {bienvenida.usuario} te damos la <i>bienvenida</i> a {bienvenida.nombre}. Nos gusta la {bienvenida.tecnologia}...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
