import './App.css';
import Game from './components/Game'
import Cdeb from './components/Cdeb'
import Home from './components/Home'
import Prologue from './components/Prologue'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/prologue' element={< Prologue />}></Route>
          <Route exact path='/cdeb' element={< Cdeb />}></Route>
          <Route exact path='/game' element={< Game />}></Route>
          <Route exact path='/dev' element={< Game />}></Route>
          <Route exact path='/crea' element={< Game />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
