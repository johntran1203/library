import logo from './logo.svg';
import './App.css';
// import CountButton from './components/CountButton';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar />
      {/* <CountButton  increment={1}/>
      <CountButton increment={5} /> */}
    </div>
  );
}

export default App;
