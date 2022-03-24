import { Link, Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.scss';

function App() {
  return (
    <div className="App">
     <Header/>
     <Outlet />
    </div>
  );
}

export default App;
