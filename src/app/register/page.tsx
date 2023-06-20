'use client';
import { useEffect, useState, useRef } from 'react';
import React from 'react';
import styled, { css } from 'styled-components';
import arrow from '@/assets/images/arrow.svg';
import arrows from '@/assets/images/arrows.svg';
import Link from 'next/link';
import Sign_button from '@/components/register/Sign_button';

export default async function page() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const removeHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const onClick = () => {
      if (ref.current !== null) {
        setIsOpen(!isOpen);
      }
      console.log('click');
    };

    if (isOpen) {
      window.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [isOpen]);

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
          <Title>{'Name'}</Title>
          <Content />
        </Input>
        <Input>
          <Title>{'ID'}</Title>
          <Content />
        </Input>
        <Input>
          <Title>{'Password'}</Title>
          <Content type="password" />
        </Input>
        <Input>
          <Title>{'Password Confirm'}</Title>
          <Content type="password" />
        </Input>
        <Input>
          <Title>{'Email'}</Title>
          <Content />
        </Input>
        <Input>
          <Title>{'Team / Part'}</Title>
          <Arrows src={arrows.src} onClick={removeHandler} ref={ref} />
          <TeamPart isdropped={isOpen}>
            <Ul>
              <Li>
                <TeamPartName>Repick</TeamPartName>
              </Li>
              <Li>
                <TeamPartName>Dan-support</TeamPartName>
              </Li>
              <Li>
                <TeamPartName>BariBari</TeamPartName>
              </Li>
              <Li>
                <TeamPartName>Therapease</TeamPartName>
              </Li>
              <Li>
                <TeamPartName>Hooking</TeamPartName>
              </Li>
            </Ul>
          </TeamPart>
          <Content className="Team_Part" />
          <Arrows src={arrows.src} onClick={removeHandler} ref={ref} />
          <TeamPart isdropped={isOpen}>
            <Ul>
              <Li>
                <TeamPartName>FE</TeamPartName>
              </Li>
              <Li>
                <TeamPartName>BE</TeamPartName>
              </Li>
              <Li>
                <TeamPartName>DE</TeamPartName>
              </Li>
              <Li>
                <TeamPartName>PM</TeamPartName>
              </Li>
            </Ul>
          </TeamPart>
          <Content className="Team_Part" />
        </Input>
        <div
          onClick={() =>
            alert('You have successfully registered as a member!!!')
          }
        >
          <Sign_button content={'Register'} />
        </div>
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
const Button = styled.div`
  display: flex;
  background-color: #000000;
  width: 250px;
  height: 50px;
  margin-top: 45px;
  box-shadow: 6.5px 6.5px 6px rgba(0, 0, 0, 20%);
  border-radius: 50px;

  &:hover {
    background-color: #898987;
  }

  .join {
    color: #ffffff;
    margin: 10px 0 0 95px;
    font-size: 18px;
    text-decoration-line: none;
  }
`;

//

const TeamPart = styled.div<{ isdropped: boolean }>`
  background: gray;
  position: absolute;
  top: 52px;
  left: 50%;
  width: 100px;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;

  &:after {
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 12px solid transparent;
    border-top-width: 0;
    border-bottom-color: gray;
  }

  ${({ isdropped }) =>
    isdropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0);
      left: 50%;
    `};
`;

const Ul = styled.ul`
  & > li {
    margin-bottom: 10px;
  }

  & > li:first-of-type {
    margin-top: 10px;
  }

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li``;
const TeamPartName = styled.div`
  font-size: 16px;
  text-decoration: none;
  color: white;
`;
