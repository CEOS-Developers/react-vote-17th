'use client';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import Footer from '@/components/common/Footer';

export default function VoteLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();

  useEffect(() => {
    const checkRefreshCookie = async () => {
      if (!cookies.refresh) {
        alert('로그인 해주세요.');
        router.push('/login');
        return;
      }
    };
    checkRefreshCookie();
  }, []);

  return (
    <>
      <div className="WrapperVote">
        {children}
        <div className="foot">
          <Footer />
        </div>
      </div>
    </>
  );
}
