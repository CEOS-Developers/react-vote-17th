'use client';
import { useState } from 'react';
import React from 'react';
import styled, { css } from 'styled-components';
import arrow from '@/assets/images/arrow.svg';
import arrows from '@/assets/images/arrows.svg';
import Link from 'next/link';
import SignButton from '@/components/register/Sign_button';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/api/requests';

export default function page() {
  //회원가입 정보
  const router = useRouter();
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedPart, setSelectedPart] = useState('');

  let regex = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$');

  const [errorName, setErrorName] = useState(false);
  const [errorId, setErrorId] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const isAllFieldsFilled = !!(
    name.trim() &&
    id.trim() &&
    password &&
    passwordConfirm &&
    email.trim() &&
    selectedTeam &&
    selectedPart &&
    isEmailValid
  );
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handlePasswordConfirmChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirm(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsEmailValid(regex.test(emailValue));
  };
  //Dropdown 관련
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const [isPartOpen, setIsPartOpen] = useState(false);

  //Team Part Dropdown 메뉴들
  const teams = [
    { key: 1, value: 'Repick' },
    { key: 2, value: 'Dan-support' },
    { key: 3, value: 'BariBari' },
    { key: 4, value: 'Therapease' },
    { key: 5, value: 'Hooking' },
  ];

  const parts = [
    { key: 1, value: 'Frontend' },
    { key: 2, value: 'Backend' },
  ];

  const teamOpenHandler = () => {
    setIsTeamOpen(!isTeamOpen);
  };
  const partOpenHandler = () => {
    setIsPartOpen(!isPartOpen);
  };

  const selectTeamHandler = (value: React.SetStateAction<string>) => {
    setSelectedTeam(value);
  };
  const selectPartHandler = (value: React.SetStateAction<string>) => {
    setSelectedPart(value);
  };

  const registerHandler = async () => {
    if (isAllFieldsFilled) {
      // 다 채웠을 때
      if (password.trim() !== passwordConfirm.trim()) {
        alert('비밀번호를 확인해주세요.');
        return;
      } else{
        const response = await registerUser(
          name,
          id,
          email,
          password,
          selectedTeam,
          selectedPart
        );
        if (response.success) {
          // 회원가입 성공
          alert('회원가입에 성공하였습니다.');
          router.push('/main');
        } else {
          //회원가입 실패
          if (response.data.username) {
            setErrorName(true);
          } else {
            setErrorName(false);
          }
          if (response.data.userid) {
            setErrorId(true);
          } else {
            setErrorId(false);
          }
          if (response.data.email) {
            setErrorEmail(true);
          } else setErrorEmail(false);
        }
      }
    }
  };
  return (
    <Container>
      <Head>
        <Link href={'/main'}>
          <Arrow src={arrow.src} />
        </Link>
        <Register>{'Register'}</Register>
      </Head>
      <Info>
        <Input>
          <TitleWrapper>
            <Title>{'Name'}</Title>
            {errorName && <Errors>중복된 이름입니다.</Errors>}
          </TitleWrapper>
          <Content value={name} onChange={handleNameChange} />
        </Input>
        <Input>
          <TitleWrapper>
            <Title>{'ID'}</Title>
            {errorId && <Errors>중복된 아이디입니다.</Errors>}
          </TitleWrapper>
          <Content value={id} onChange={handleIdChange} />
        </Input>
        <Input>
          <Title>{'Password'}</Title>
          <Content
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Input>
        <Input>
          <Title>{'Password Confirm'}</Title>
          <Content
            type="password"
            value={passwordConfirm}
            onChange={handlePasswordConfirmChange}
          />
        </Input>
        <Input>
          <TitleWrapper>
            <Title>{'Email'}</Title>
            {errorEmail && <Errors>중복된 이메일입니다.</Errors>}
            {!isEmailValid && <Errors>이메일 형식이 아닙니다.</Errors>}
          </TitleWrapper>
          <Content value={email} onChange={handleEmailChange} />
        </Input>
        <Input>
          <Title>{'Team / Part'}</Title>
          <SelectWrapper>
            <div onClick={teamOpenHandler}>
              <Arrows src={arrows.src} />
              <Content className="Team_Part" disabled value={selectedTeam} />
              <TeamPart isdropped={isTeamOpen ? 'true' : 'false'}>
                <Ul>
                  {teams.map((team) => (
                    <Li
                      key={team.key}
                      onClick={() => selectTeamHandler(team.value)}
                    >
                      {team.value}
                    </Li>
                  ))}
                </Ul>
              </TeamPart>
            </div>
            <div onClick={partOpenHandler}>
              <Arrows src={arrows.src} onClick={partOpenHandler} />
              <Content className="Team_Part" disabled value={selectedPart} />
              <TeamPart
                isdropped={isPartOpen ? 'true' : 'false'}
                className="part"
              >
                <Ul>
                  {parts.map((part) => (
                    <Li
                      key={part.key}
                      onClick={() => selectPartHandler(part.value)}
                    >
                      {part.value}
                    </Li>
                  ))}
                </Ul>
              </TeamPart>
            </div>
          </SelectWrapper>
        </Input>
        <ButtonWrapper onClick={registerHandler}>
          <SignButton isFilled={!isAllFieldsFilled} />
        </ButtonWrapper>
      </Info>
    </Container>
  );
}

const Container = styled.div``;
const Head = styled.div`
  display: flex;
  margin: 40px 0 0 40px;
`;
const Register = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-left: 60px;
`;
const Arrow = styled.img`
  width: 20px;
`;
const Arrows = styled.img`
  width: 18px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Input = styled.form`
  margin-top: 15px;
  .Team_Part {
    width: 105px;
  }
`;
const Title = styled.div`
  color: #6b6758;
  margin-bottom: 10px;
  font-weight: bold;
`;
const Content = styled.input`
  width: 260px;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: solid 2px #6b6758;
  font-size: 18px;
  font-weight: bold;
`;

const TeamPart = styled.div<{ isdropped: string }>`
  background: #f3c625;
  position: absolute;
  width: 100px;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  left: 29%;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;
  &:after {
    content: '';
    height: 0;
    width: 0;
    top: 0;
    position: absolute;
    transform: translate(-50%, -50%);
    border: 12px solid transparent;
    border-top-width: 0;
    border-bottom-color: #f3c625;
  }
  &.part {
    left: 79%;
  }
  ${({ isdropped }) =>
    isdropped == 'true' &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0);
    `};
`;

const SelectWrapper = styled.div`
  position: relative;
  display: flex;
`;
const Ul = styled.ul`
  & > li:first-of-type {
    margin-top: 5px;
  }

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li`
  width: 100%;
  padding-bottom: 5px;
  padding-top: 5px;
  &:hover {
    background-color: #ffd954;
  }
  font-size: 13px;
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  margin-top: 45px;
`;
const TitleWrapper = styled.div`
  display: flex;
`;
const Errors = styled.p`
  color: red;
  margin: 0;
  margin-left: 20px;
  font-size: 10px;
  font-weight: bold;
`;
