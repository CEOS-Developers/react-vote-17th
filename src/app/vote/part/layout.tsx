'use client';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';

export default function PartLayout({ children }: { children: React.ReactNode }) {
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
      <div>
        {children}
      </div>
    </>
  );
}
