import './App.css';
import { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom'; // 정확한 경로 확인

// Another 컴포넌트를 파일 내에서 직접 정의
function Another() {
  return (
    <div>
      <h1>안녕하세요</h1>
    </div>
  );
}

function MainPage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [interId, setInterId] = useState('');
  const [interPassWord, setInterPassWord] = useState('');
  const [loginO, setLoginO] = useState(false);
  const [loginX, setLoginX] = useState(false);
  
  const CorrectLogin = () => {
    if (interId === 'juan' && interPassWord === '1234') {
      setOpen(false);
      setLoginO(true);
      setLoginX(false);
    } else {
      setOpen(false);
      setLoginO(false);
      setLoginX(true);
    }
  }

  const Correct = () => {
    return <h1>로그인 성공</h1>;
  }
  
  const InCorrect = () => {
    return <h1>로그인 실패</h1>;
  }
  
  return (
    <div className="App">
      {!loginO && !loginX && (
        <button onClick={() => setOpen(true)}>로그인</button>
      )}
      <button onClick={() => navigate('/another')}>섹스</button>

      {open && (
        <div style={{
          border: '3px solid black',
          width: '300px',
          height: '200px',
          backgroundColor: 'lightblue',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <h2>Login</h2>
          <div style={{
            display: 'grid',
            gap: '10px',
            alignItems: 'center',
            gridTemplateColumns: '80px 1fr'
          }}>
            <label>아이디</label>
            <input type="text"
              style={{ width: '150px', height: '25px' }}
              value={interId}
              onChange={(e) => setInterId(e.target.value)}
            />
            <label>비밀번호</label>
            <input type="password"
              style={{ width: '150px', height: '25px' }}
              value={interPassWord}
              onChange={(e) => setInterPassWord(e.target.value)}
            />
          </div>
          <button onClick={CorrectLogin}>로그인</button>
          <button onClick={() => setOpen(false)}>취소</button>
        </div>
      )}
      {loginO && <Correct />}
      {loginX && <InCorrect />}
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/another" element={<Another />} />
    </Routes>
  );
}

export default App;
