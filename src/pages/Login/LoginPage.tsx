import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import styled from '@emotion/styled';

import { Headline } from '../../styles/Typography';
import { Button, TextField } from '@mui/material';

import { REGEX } from '../../utils/regex';

import { SIGNUP_LOGIN_ERROR_MESSAGES } from '../../constants/errorMesssages';

interface loginFormValues {
  userId: string;
  userPassword: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormValues>();

  const onSubmit: SubmitHandler<loginFormValues> = (data) => {
    // TODO - api 연동
    console.log(data);
  };

  return (
    <Wrapper>
      <Headline
        color="#ffff"
        style={{ width: 'calc(30% + 8rem)', textAlign: 'start' }}
      >
        로그인
      </Headline>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="userId"
          label="아이디"
          helperText={errors?.userId?.message}
          variant="outlined"
          size="small"
          fullWidth={true}
          {...register('userId', {
            required: {
              value: true,
              message: SIGNUP_LOGIN_ERROR_MESSAGES.userId,
            },
          })}
        />
        <TextField
          id="userPassword"
          label="비밀번호"
          type="password"
          helperText={errors?.userPassword?.message}
          variant="outlined"
          size="small"
          fullWidth={true}
          {...register('userPassword', {
            required: {
              value: true,
              message: SIGNUP_LOGIN_ERROR_MESSAGES.pw[0],
            },
            pattern: {
              value: REGEX.password,
              message: SIGNUP_LOGIN_ERROR_MESSAGES.pw[1],
            },
          })}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ width: '10rem', marginTop: '1rem' }}
        >
          로그인
        </Button>
      </FormWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--ceos-blue-color);
`;

const FormWrapper = styled.form`
  width: 30%;
  // height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 4rem 3rem 4rem;
  background-color: #ffff;
  border-radius: 1.25rem;
  border: 3px solid #fff;
  gap: 1rem;
`;

export default LoginPage;
