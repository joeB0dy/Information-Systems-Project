import { useNavigate } from "react-router-dom";

export default function AuthorHome() {
 const nav = useNavigate();
  return (
    <div>
      <h1>Welcome to Author homepage! </h1>
      <button onClick={() => nav("/author/my-papers")}>My Papers</button>
      <button>My Conferences</button> 
      <button onClick={() => nav("/selectconf")}>Select Conferences</button>
    </div>
  );
}
