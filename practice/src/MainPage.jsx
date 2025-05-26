import { useState } from 'react';  
import { useNavigate } from 'react-router-dom'; 

function MainPage() {
  const [open, setOpen] = useState(false);
  const [interId, setInterId] = useState('');
  const [interPassWord, setInterPassWord] = useState('');
  const navigate = useNavigate();  

  const CorrectLogin = () => {
    if (interId === 'juan' && interPassWord === '1234') {
      setOpen(false);
      navigate('/login-success');  
    } else {
      setOpen(false);
      navigate('/login-fail');   
    }
  };

  return (
    <div className="App">
      <button onClick={() => setOpen(true)}>로그인</button>

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
            <input 
              type="text"
              style={{ width: '150px', height: '25px' }}
              value={interId}
              onChange={(e) => setInterId(e.target.value)}
            />
            <label>비밀번호</label>
            <input 
              type="password"
              style={{ width: '150px', height: '25px' }}
              value={interPassWord}
              onChange={(e) => setInterPassWord(e.target.value)}
            />
          </div>
          <button onClick={CorrectLogin}>로그인</button>
          <button onClick={() => setOpen(false)}>취소</button>
        </div>
      )}
    </div>
  );
}

export default MainPage;
