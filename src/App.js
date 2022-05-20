import './index.css';
import navbar from './navbar';

function App() {
  const title = 'Well this is a test.';
  const subtitle = 'nothing really interesting... yet';
  const count = '50';
  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <h2>{ subtitle }</h2>
        <h3>The number { count } is the double of 25</h3>
        <p> This is a literal random number: {Math.random() * 15}</p>
      </div>
    </div>
  );
}

export default App;
