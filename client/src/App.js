import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>How's Your Lexicon?</h1>
        <Container>
          <h2> this is where search will go </h2>
        </Container>
        <Container>
          <h2> this is where the table will go </h2>
        </Container>
      </header>
    </div>
  );
}

export default App;
