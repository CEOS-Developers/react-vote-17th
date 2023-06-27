import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { islogin } from "../utils/atom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { useCookies } from "react-cookie";

import { Z_INDEX_HEADER, HEADER_HEIGHT } from "../assets/constants";
import { theme } from "../styles/theme";

const Header = () => {
  const navigate = useNavigate();
  const setIsLogin = useSetRecoilState(islogin);
  const [_, __, remove] = useCookies(["client_cookie"]);

  const isLogin = useRecoilValue(islogin);
  console.log("[Header] islogin", isLogin);

  const handleLogout = () => {
    remove("client_cookie", { path: "/" });
    setIsLogin(false);
    alert("로그아웃이 완료되었습니다.");
    navigate("/");
  };
  return (
    <Wrapper>
      <Logo onClick={() => navigate("/")}>Hooking</Logo>
      {isLogin ? (
        <>
          <Button
            className="button button-right-1"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </>
      ) : (
        <>
          <Button
            type="button"
            className="button button-right-2"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button
            type="button"
            className="button button-right-1"
            onClick={() => navigate("/signup")}
          >
            Register
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: ${HEADER_HEIGHT};
  z-index: ${Z_INDEX_HEADER};
  //background-color: ${theme.color.pink};

  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  margin-left: 2rem;
  font-size: 2rem;
  cursor: pointer;
`;
const Button = styled.button``;
