import { Container, Box, Input, Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { onLogin } from "../api/post";
import { useCookies } from "react-cookie";

import { userInfo, islogin } from "../utils/atom";
import { ILoginFormInput } from "../utils/type";
import { useSetRecoilState } from "recoil";

import styled from "styled-components";

const Login = () => {
  const [_, setCookies] = useCookies(["client_cookie"]);
  const navigate = useNavigate();

  const setUserInfo = useSetRecoilState(userInfo);
  const setIsLogin = useSetRecoilState(islogin);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginFormInput>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<ILoginFormInput> = async (data: any) => {
    const body = {
      user_id: data.id,
      password: data.pw,
    };

    try {
      const result: any = await onLogin(body);
      //console.log("[result]", result);

      // CASE1) 요청 성공할 경우, recoil에 정보 저장하고 메인 페이지로 이동
      if (result.status === 200) {
        //console.log("[result success]", result.data);
        const { token, ...user } = result.data;

        setCookies("client_cookie", token.access_token, {
          path: "/",
          secure: true,
          httpOnly: false, // 자바스크립트로 접근 가능
        });

        setUserInfo(user);
        setIsLogin(true);

        alert("로그인이 완료되었습니다.");
        navigate("/");
        // CASE2) 없는 아이디로 로그인하거나 비밀번호가 잘못된 경우
      } else if (result.response.status === 400) {
        console.log(
          "[result Error message]",
          result.response.data.non_field_errors[0]
        );
        alert(result.response.data.non_field_errors[0]);
      }
    } catch {}
  };

  return (
    <Wrapper>
      <Container
        maxWidth="sm"
        className="container"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Text>로그인</Text>
            <Input
              {...register("id", {
                required: "아이디를 입력해주세요",
              })}
              placeholder="아이디"
            />
            <ErrorMessages>{errors?.id?.message}</ErrorMessages>
            <Input
              {...register("pw", {
                required: "비밀번호를 입력해주세요",
              })}
              type="password"
              placeholder="비밀번호"
            />
            <ErrorMessages>{errors?.pw?.message}</ErrorMessages>
            <Button
              type="submit"
              className="login"
            >
              로그인
            </Button>
          </Box>
        </form>
      </Container>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 15rem;
  padding: 0 3rem;
  color: black;

  .login {
    margin-top: 30px;
    color: black;
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
