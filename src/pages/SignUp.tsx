import { Box, Container, MenuItem, Input, Button, Select } from "@mui/material";
import { useValidate } from "../hooks/useValidate";
import { SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { TEAM, PART, IFormInput } from "../utils/type";
import { onSignUp } from "../api/post";

const SignUp = () => {
  const onSubmit: SubmitHandler<IFormInput> = async (data: any) => {
    //  console.log("[FE] signup data", data);
    const result = await onSignUp(data);
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

  // 비밀번호가 맞는지 확인
  const pwConfirmRegister = register("pwConfirm", {
    required: "비밀번호를 다시 입력해주세요",
    validate: (pwConfirm: String) => {
      if (watch("pw") !== pwConfirm) {
        return "비밀번호가 다릅니다";
      }
    },
  });

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container maxWidth="sm">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>회원가입</div>
            <Input
              {...register("name", {
                required: "이름을 입력해주세요",
                pattern: namePattern(),
              })}
              placeholder="이름"
            />
            <ErrorMessages>{errors?.name?.message}</ErrorMessages>
            <Input
              {
                ...register("id", {
                  required: "아이디를 입력해주세요",
                  pattern: idPattern(),
                })
                //validate: { // TODO: 중복 아이디, 이메일 확인하는 api 연결
                //  checkUrl: async () => (await checkUniqueId()) || "error message",
                //  messages: (v) => !v && ["test", "test2"],
                //},
              }
              placeholder="아이디"
            />
            <ErrorMessages>{errors?.id?.message}</ErrorMessages>
            <Input
              {...register("pw", {
                required: "비밀번호를 입력해주세요",
                pattern: pwPattern(),
              })}
              placeholder="비밀번호"
            />
            <ErrorMessages>{errors?.pw?.message}</ErrorMessages>
            <Input
              {...pwConfirmRegister}
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
            <div>팀 명 / 파트</div>

            <Box>
              <Select
                {...register("team")}
                defaultValue="Frontend"
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
                {...register("part")}
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
          <Button type="submit">가입하기</Button>
        </Container>
      </form>
    </Wrapper>
  );
};

export default SignUp;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 5rem;
  padding: 0 3rem;
`;

const ErrorMessages = styled.div`
  color: red;
  font-size: 12px;
`;
