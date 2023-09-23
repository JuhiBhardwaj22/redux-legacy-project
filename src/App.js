import logo from "./logo.svg";
import "./App.css";
import Counter from "./component/Counter";
import CounterUseReducer from "./component/CounterUseReducer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <CounterUseReducer />
      </header>
    </div>
  );
}

export default App;
