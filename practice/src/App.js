import './App.css';
import {useState} from 'react';


function App() {
  const [open, setOpen]=useState(false);
  const [interId,setInterId]=useState('');
  const [interPassWord,setInterPassWord]=useState('');
  const [loginO,setLoginO]=useState(false);
  const [loginX,setLoginX]=useState(false);
  
  const CorrectLogin=()=>{
    if(interId==='juan'&&interPassWord==='1234'){
      setOpen(false);
      setLoginO(true);
      setLoginX(false);
    }else{
      setOpen(false);
      setLoginO(false);
      setLoginX(true);
    }
  }

  const Correct=()=>{
    return(
      <h1>로그인 성공</h1>
    )
  }
  const InCorrect=()=>{
    return(
      <h1>로그인 실패</h1>
    )
  }
  
  return (
    <div className="App">
      {!loginO && !loginX && (
      <button onClick={()=>setOpen(true)}>로그인</button>
      )}

      {open&&(
        <div style={{
          border:'3px solid black',
          width:'300px',
          height: '200px',
          backgroundColor:'lightblue',

          position: 'fixed',//화면고정정
          top:'50%',
          left:'50%',
          transform: 'translate(-50%, -50%)' //정확한 중앙
        }}>
          <h2>Login</h2>
          <div style={{
            display:'grid',
            gap:'10px',
            alignItems:'center',
            gridTemplateColumns:'80px 1fr'
          }}>
            <label>아이디</label>
            <input type="text"
            style={{width:'150px',height:'25px'}}
            value={interId}
            onChange={(e)=>setInterId(e.target.value)}
          />
          <label>비밀번호</label>
          <input type="password"
          style={{width:'150px',height:'25px'}}
          value={interPassWord}
          onChange={(e)=>setInterPassWord(e.target.value)} 
          />

            

          </div>
          <button onClick={CorrectLogin}>로그인</button>
          <button onClick={()=>setOpen(false)}>취소</button>
        </div>
      )}
    {loginO&&(<Correct/>)}
    {loginX&&(<InCorrect/>)}
    </div>

  );
}

export default App;
