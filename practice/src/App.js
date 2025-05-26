import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginSuccess from './LoginSuccess'; 
import LoginFail from './LoginFail';       
import MainPage from './MainPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login-success" element={<LoginSuccess />} />  
        <Route path="/login-fail" element={<LoginFail />} />        
      </Routes>
    </div>
  );
}
export default App;