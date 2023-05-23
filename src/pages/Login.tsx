import { useForm, SubmitHandler } from "react-hook-form";
import { ILoginFormInput } from "../utils/type";
import { Container, Box, Input, Button } from "@mui/material";
import styled from "styled-components";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginFormInput>({ mode: "onBlur" });
  const onSubmit: SubmitHandler<ILoginFormInput> = (data: any) =>
    console.log(data);

  return (
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
  );
};

export default Login;

const ErrorMessages = styled.div`
  color: red;
  font-size: 12px;
`;
