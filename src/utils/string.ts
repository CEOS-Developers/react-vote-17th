export const getRequiredText = (val: string): string => {
  return val === "비밀번호" ? `${val}를 입력해주세요` : `${val}을 입력해주세요`;
};
