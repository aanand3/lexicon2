import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search'
import { Container } from 'react-bootstrap';
import Table from './Table.js'


function App() {
  return (
    <div className="App">
      <Search />
      <header className="App-header">
        <h1>How's Your Lexicon?</h1>
        <Container>
          <h2> this is where search will go </h2>
        </Container>
        <Container>
          <Table />
        </Container>
      </header>
    </div>
  );
}

export default App;
