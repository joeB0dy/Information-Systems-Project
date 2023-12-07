import { useState } from "react";
import { Link } from "react-router-dom";
import "./ReviewerPaper.css"
export default function ReviewPaper() {
    const [dec1, setD1] = useState("");     
    const [dec2, setD2] = useState("");
    const [dec3, setD3] = useState("");

    const displayContent = async (e) => {
        e.preventDefault();
        console.log(dec1, dec2, dec3);
        alert("Decisions Made on papers, values sent.")
      };
    return(
        <div> 
            <Link to="/review">Back to Reviewers</Link>
            <h1> My Papers</h1>
            <table>
                <tr>
                <th>Author</th>
                <th>Paper Name</th>
                <th>Conference</th>
                <th>File Type</th>
        
                <th>Decision</th>
                </tr>

                <tr>
                <td>John doe</td>
                <td>To Catch a Wasp</td>
                <td>Tedx Dearborn</td>
                <td>pdf</td>
                <td>Deny</td>

                <select name="decision" id="decision" onChange={(e)=> setD1(e.target.value)}>
            <option value="Conference Program Chair">Pending</option>
            <option value="Author">Approve</option>
            <option value="Reviewer">Deny</option>
          </select>   
                </tr>
                <tr>
                <td>John doe</td>
                <td>To Catch a Deer</td>
                <td>Tedx Dearborn</td>
                <td>csv</td>
                <select name="decision" id="decision" onChange={(e)=> setD2(e.target.value)}>
            <option value="Conference Program Chair">Pending</option>
            <option value="Author">Approve</option>
            <option value="Reviewer">Deny</option>
          </select>  
                </tr>
                <tr>
                <td>John doe</td>
                <td>To Catch a Coyote</td>
                <td>Tedx Dearborn</td>
                <td>docx</td>
                <select name="decision" id="decision" onChange={(e)=> setD3(e.target.value)}>
            <option value="Conference Program Chair">Pending</option>
            <option value="Author">Approve</option>
            <option value="Reviewer">Deny</option>
          </select>  
                </tr>
            
            </table>

            <button onClick={displayContent}>Send Decision </button>
            </div>
    );
}

//i think back links would be helpful in navigation. easy to implement.