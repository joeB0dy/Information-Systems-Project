import {useNavigate} from "react-router-dom"
export default function CPHome() {
  const nav = useNavigate();
  return (
    <div>
      <h1>Welcome to Conference Program Chair homepage! </h1>
      <button onClick={() =>nav("/cpcreate")}>Send Admin Conference Request</button>
      <button onClick={() =>nav("/selectconf")}>View Conferences</button>
      <button>Assign Reviewers </button>
      <button>Publish Decision on Papers.</button>
    </div>
  );
}
