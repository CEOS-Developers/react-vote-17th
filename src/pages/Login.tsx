import { Container, Box, Input, Button } from "@mui/material";
import { Cookies } from "react-cookie";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { onLogin } from "../api/post";
import { ILoginFormInput } from "../utils/type";

const Login = () => {
  const cookies = new Cookies();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginFormInput>({ mode: "onBlur" });
  const onSubmit: SubmitHandler<ILoginFormInput> = async (data: any) => {
    // console.log("[FE data]: ", data);

    const result = await onLogin(data);
    const { accessToken, refreshToken } = result;

    localStorage.setItem("accessToken", accessToken);
    cookies.set("refreshToken", refreshToken, { path: "/" });
  };

  return (
    <Wrapper>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <div>로그인</div>
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
              placeholder="비밀번호"
            />
            <ErrorMessages>{errors?.pw?.message}</ErrorMessages>
            <Button type="submit">로그인</Button>
          </Box>
        </form>
      </Container>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 5rem;
  padding: 0 3rem;
`;

const ErrorMessages = styled.div`
  color: red;
  font-size: 12px;
`;
