import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import styled from '@emotion/styled';

import { Headline } from '../../styles/Typography';
import { Button, MenuItem, TextField } from '@mui/material';

import { REGEX } from '../../utils/regex';

import { PART_OPTIONS, TEAM_OPTIONS } from '../../constants/selectOptions';
import { SIGNUP_LOGIN_ERROR_MESSAGES } from '../../constants/errorMesssages';

interface signupFormValues {
  userName: string;
  userId: string;
  userPassword: string;
  passwordCheck: string;
  userEmail: string;
  teamName: string;
  partName: string;
}

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<signupFormValues>();

  const onSubmit: SubmitHandler<signupFormValues> = (data) => {
    // TODO - api 연동
    console.log(data);
  };

  console.log(errors);

  return (
    <Wrapper>
      <Headline
        color="#ffff"
        style={{ width: 'calc(30% + 8rem)', textAlign: 'start' }}
      >
        회원가입
      </Headline>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="userName"
          label="이름"
          helperText={errors?.userName?.message}
          variant="outlined"
          size="small"
          fullWidth={true}
          {...register('userName', {
            required: {
              value: true,
              message: SIGNUP_LOGIN_ERROR_MESSAGES.userName,
            },
          })}
        />
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
        <TextField
          id="passwordCheck"
          label="비밀번호 확인"
          type="password"
          helperText={errors?.passwordCheck?.message}
          variant="outlined"
          size="small"
          fullWidth={true}
          {...register('passwordCheck', {
            required: {
              value: true,
              message: SIGNUP_LOGIN_ERROR_MESSAGES.pwCheck[0],
            },
            validate: (changePasswordCheck?: string) => {
              return (
                changePasswordCheck === watch('userPassword') ||
                SIGNUP_LOGIN_ERROR_MESSAGES.pwCheck[1]
              );
            },
          })}
        />
        <TextField
          id="userEmail"
          label="이메일 주소"
          helperText={errors?.userEmail?.message}
          variant="outlined"
          size="small"
          fullWidth={true}
          {...register('userEmail', {
            required: {
              value: true,
              message: SIGNUP_LOGIN_ERROR_MESSAGES.email[0],
            },
            pattern: {
              value: REGEX.email,
              message: SIGNUP_LOGIN_ERROR_MESSAGES.email[1],
            },
          })}
        />
        <SelectBoxWrapper>
          <TextField
            id="teamName"
            select
            label="팀 명"
            defaultValue=""
            helperText={errors?.teamName?.message}
            variant="filled"
            size="small"
            sx={{ width: '10rem' }}
            {...register('teamName', {
              required: {
                value: true,
                message: SIGNUP_LOGIN_ERROR_MESSAGES.teamName,
              },
            })}
          >
            {TEAM_OPTIONS.map(({ label, value }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="partName"
            select
            label="파트"
            defaultValue=""
            helperText={errors?.partName?.message}
            variant="filled"
            size="small"
            sx={{ width: '10rem' }}
            {...register('partName', {
              required: {
                value: true,
                message: SIGNUP_LOGIN_ERROR_MESSAGES.partName,
              },
            })}
          >
            {PART_OPTIONS.map(({ label, value }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </TextField>
        </SelectBoxWrapper>

        <Button type="submit" variant="contained" sx={{ width: '10rem' }}>
          가입하기
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
  padding: 1rem 4rem;
  background-color: #ffff;
  border-radius: 1.25rem;
  border: 3px solid #fff;
  gap: 1rem;
`;
const SelectBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 1rem;
`;

export default SignUpPage;
