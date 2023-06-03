import { Cookies } from "react-cookie";

const MainVote = () => {
  const cookies = new Cookies();
  const refreshToken = cookies.get("refreshToken") ?? "null";
  return <div>MainVote</div>;
};

export default MainVote;
