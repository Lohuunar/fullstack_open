import logo from './logo.svg';
import './App.css';

function Hello(props){
  return(
    <div>      
      <p>
        Hello {props.name} tu mama es puta
      </p>    
    </div>
  )
}
function App() {
  const name = 'Vin'  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Greetings</h1>     
        <Hello name={name}  />
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
