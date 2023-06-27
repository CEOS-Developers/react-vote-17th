import { onVoteTeam } from "../api/post";
import { useCookies } from "react-cookie";

const PartVote = () => {
  const [cookies] = useCookies(["client_cookie"]);

  const handleVote = async () => {
    try {
      const params = {
        headers: {
          Authorization: `Bearer ${cookies.client_cookie}`,
        },
      };
      const body = {
        user_name: "효효", // TODO: recoil에 저장된 user name으로 변경
        team: 2, //투표팀 번호
      };
      const result = await onVoteTeam(body, params);
      //console.log("[Vote result]", result);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      PartVote vote
      <button onClick={() => handleVote()}>api 호출</button>
    </div>
  );
};

export default PartVote;
