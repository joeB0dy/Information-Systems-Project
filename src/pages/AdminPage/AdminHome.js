import { useNavigate } from "react-router-dom";

export default function AdminHome() {
   const navigate = useNavigate();   //used to navigate to another route in page

    return (
    <div>
        <h1>Welcome to admin homepage! </h1>

        <button onClick={() => navigate("/admin/create")}>Create Conference </button>

    </div>
    );
}