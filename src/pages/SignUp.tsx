import { Box, Container, MenuItem, Input, Button, Select } from "@mui/material";
import { useValidate } from "../hooks/useValidate";
import { useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";

import { TEAM, PART, IFormInput } from "../utils/type";
import { onSignUp } from "../api/post";
import styled from "styled-components";

const SignUp = () => {
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IFormInput> = async (data: any) => {
    const { pwConfirm, ...body } = data;

    try {
      const result: any = await onSignUp(body);

      // CASE1) 요청 성공할 경우 재로그인
      if (result.status === 200) {
        //console.log("[result success]", result.data);
        alert("회원가입이 완료되었습니다. 로그인해주세요.");
        navigate("/login");
      }
      // CASE2)  아이디 or 이메일 중복인 경우 메시지 출력
      // CASE3) 토큰 잘못된 경우도 메시지 출력
      else if (
        result.response.status === 400 ||
        result.response.status === 401
      ) {
        //console.log("[result err message]", result.response.data.message);
        alert(result.response.data.message);
        // CASE4) 그외 에러 케이스
      } else {
        //console.log("[result err message]", result.response.data.message);
        alert(result.response.data.message);
      }
    } catch {}
  };

  // 폼 유효성 확인하는 hook
  const {
    register,
    errors,
    namePattern,
    watch,
    handleSubmit,
    idPattern,
    emailPattern,
    pwPattern,
  } = useValidate();

  // 비밀번호 일치 여부 확인
  const pwConfirmRegister = register("pwConfirm", {
    required: "비밀번호를 다시 입력해주세요",
    validate: (pwConfirm: String) => {
      if (watch("password") !== pwConfirm) {
        return "비밀번호가 다릅니다";
      }
    },
  });

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container
          maxWidth="sm"
          className="container"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Text>회원가입</Text>
            <Input
              {...register("name", {
                required: "이름을 입력해주세요",
                pattern: namePattern(),
              })}
              placeholder="이름"
            />
            <ErrorMessages>{errors?.name?.message}</ErrorMessages>
            <Input
              {...register("user_id", {
                required: "아이디를 입력해주세요",
                pattern: idPattern(),
              })}
              placeholder="아이디"
            />
            <ErrorMessages>{errors?.user_id?.message}</ErrorMessages>
            <Input
              {...register("password", {
                required: "비밀번호를 입력해주세요",
                pattern: pwPattern(),
              })}
              type="password"
              placeholder="비밀번호"
            />
            <ErrorMessages>{errors?.password?.message}</ErrorMessages>
            <Input
              {...pwConfirmRegister}
              type="password"
              placeholder="비밀번호 확인"
            />
            <ErrorMessages>{errors?.pwConfirm?.message}</ErrorMessages>
            <Input
              {...register("email", {
                required: "이메일을 입력해주세요",
                pattern: emailPattern(),
              })}
              placeholder="이메일 주소"
            />
            <ErrorMessages>{errors?.email?.message}</ErrorMessages>
            <div>파트 / 팀명</div>

            <Box className="select-container">
              <Select
                className="select-box"
                {...register("part")}
                defaultValue="front"
              >
                {Object.values(PART).map((part, idx) => (
                  <MenuItem
                    key={idx}
                    value={part}
                  >
                    {part}
                  </MenuItem>
                ))}
              </Select>
              <Select
                className="select-box"
                {...register("team")}
                defaultValue="Hooking"
              >
                {Object.values(TEAM).map((team, idx) => (
                  <MenuItem
                    key={idx}
                    value={team}
                  >
                    {team}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Box>
          <Button
            type="submit"
            className="register"
          >
            가입하기
          </Button>
        </Container>
      </form>
    </Wrapper>
  );
};

export default SignUp;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 10rem;
  padding: 0 3rem;

  .container {
    display: flex;
    flex-direction: column;

    .select-container {
      display: flex;
      gap: 20px;

      .select-box {
        display: flex;
        flex: 1;
      }
    }

    .register {
      margin-top: 30px;
      color: black;
    }
  }
`;

const ErrorMessages = styled.div`
  color: red;
  font-size: 10px;
`;

const Text = styled.div`
  font-size: 15px;
  font-weight: 600;
`;
