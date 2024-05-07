import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <input type="text" id="texto" placeholder="Escribe Aqui" onkeypress="handleKeyPress(event)"></input><button>enter</button>
      </div>
      </header>
    </div>
  );
}

export default App;
