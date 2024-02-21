import './App.css';
import LoginForm from './components/Login/LoginForm';
import Home from './pages/Home/Home';
import Explorer from './pages/explorer/Explorer';

function App() {
  return (
    <div className="App">
      <Home/>
      <Explorer/>
    </div>
  )
}

export default App;
