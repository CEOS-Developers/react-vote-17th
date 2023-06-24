import { useState } from 'react';
import { useMutation } from '@tanstack/react-query'; //getQueryClient 추가하기
import { useRecoilState } from 'recoil';
import { login } from '@/apis/auth';
import { userState } from '@/store/store';
import styles from '../../styles/LoginPage.module.css';

export default function LoginPage() {
  const [user, setUser] = useRecoilState(userState); //전역 상태 userState

  const [id, setId] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');

  //api 로직 가져와서 사용하기
  const loginMutation = useMutation(login, {
    onSuccess: data => {
      setUser(data); //전역 상태 userState에, 백엔드로부터 받은 'uid,name,team,part,accessToken..' 저장!
      alert('로그인이 완료됐어요!');
    },
    onError: error => {
      alert('로그인에 실패했어요.');
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    loginMutation.mutate({ id: id, password: pwd });
  };

  return (
    <div className={styles.loginPage}>
      <form>
        {/* onSubmit={handleSubmit} */}
        <div className={styles.loginBox}>
          <div>
            <div className={styles.loginText}>아이디</div>
            <input
              className={styles.loginInput}
              type="text"
              value={id}
              onChange={e => setId(e.target.value)}
              required
            />
          </div>

          <div>
            <div className={styles.loginText}>비밀번호</div>
            <input
              className={styles.loginInput}
              type="password"
              value={pwd}
              onChange={e => setPwd(e.target.value)}
              required
            />
          </div>

          <button className={styles.loginBtn} type="submit">
            로그인
          </button>
        </div>
      </form>
    </div>
  );
}
