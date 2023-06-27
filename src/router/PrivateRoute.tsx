import React, { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { islogin } from "../utils/atom";
import { useRecoilValue } from "recoil";

interface PrivateRouteProps {
  children?: ReactElement;
  authentication: boolean;
}

const PrivateRoute = ({
  authentication,
}: PrivateRouteProps): React.ReactElement | null => {
  const isAuthenticated = useRecoilValue(islogin);

  // CASE1) 인증이 필요한 라우터인 경우
  if (authentication) {
    if (isAuthenticated === null || isAuthenticated === false) {
      alert("먼저 로그인해주세요.");
      return <Navigate to="/" />;
    } else {
      return <Outlet />;
    }
  } else {
    // CASE2) 인증이 없어야지만 접근 가능한 라우터인 경우
    return isAuthenticated === null || isAuthenticated === false ? (
      <Outlet />
    ) : (
      <Navigate to="/" />
    );
  }
};

export default PrivateRoute;
