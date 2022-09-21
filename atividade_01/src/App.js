import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './containers/Login';
import { Register } from './containers/Register';
import { Users } from './containers/Users';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
