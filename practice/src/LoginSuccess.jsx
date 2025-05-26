import { Link } from 'react-router-dom';

function LoginSuccess() {
  return (
    <div>
      <h1>로그인 성공</h1>
      <Link to="/">메인</Link>
    </div>
  );
}

export default LoginSuccess;
