import './App.css';
import Square from './Square'

function App() {
  const newVar = 'cool'

  return (
    <div className="App">
      <Square adj={newVar}/>
    </div>
  );
}

export default App;
