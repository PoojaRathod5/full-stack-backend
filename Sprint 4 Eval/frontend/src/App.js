
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login';
import { Posts } from './components/Posts';
import { Signup } from './components/Signup';

function App() {
  return (
    <div className="App">
       <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/singup" element={<Signup/>}/>
            <Route path="/posts" element={<Posts/>}/>
        </Routes>
     </div>
  );
}

export default App;
