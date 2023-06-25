import axios from 'axios';

import styled from 'styled-components';
import TextInput from '../components/LogIn/TextInput';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function LogIn() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const onClickLogin = async () => {
        let request = {
            username: id,
            password: pw,
        };

        const response = await fetch(`http://3.37.230.93/accounts/login/`,{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(request),
        });
        
        const data = await response.json();

        if(data.message === "현재 로그인된 유저 정보 조회 성공"){
            const accessToken = data.token.access;
            axios.defaults.headers.common['Authorization'] = accessToken;
        }

    };

    return (
        // Temp와 TempSideBar는 스크롤바가 완성된 후 삭제 예정
            <Wrapper>
                <TextInput placeholder="아이디를 입력해주세요" />
                <TextInput placeholder="비밀번호를 입력해주세요" />
                {/* 각각 value 추가하기 */}
                <Button>로그인</Button>
                <JoinText onClick={onClickJoinText}>회원가입</JoinText>
            </Wrapper>
    );
}



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    height: 100%;
    background-color: #f9f9f9;
`;

const Button = styled.button`
    width: 391px;
    height: 77px;
    background: #224c97;
    border-radius: 0.75rem;
    border: none;
    margin-top: 30px;
`;

const JoinText = styled.div`
    font-size: 16px;
    line-height: 19px;
    margin-top: 30px;
    text-decoration-line: underline;
    color: rgba(33, 33, 33, 0.8);
    cursor: pointer;
`;