import './App.css';
import LoginForm from './components/Login/LoginForm';
import Events from './pages/Events/Events';
import Home from './pages/Home/Home';
import Explorer from './pages/explorer/Explorer';

function App() {
  return (
    <div className="App">
      <Home/>
      <Events/>
      <Explorer/>
    </div>
  )
}

export default App;
