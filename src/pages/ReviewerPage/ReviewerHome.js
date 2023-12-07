import { useNavigate } from "react-router-dom";
export default function ReviewerHome() {
  const nav = useNavigate();
  return (
    <div>
      <h1>Welcome to Reviewer homepage! </h1>
      <button onClick={() => nav("/review/my-papers")}>My Papers</button>
      <button>My Conferences</button>
      <button onClick={()=> nav("/selectconf")}>Select Conferences</button>
    </div>
  );
}
