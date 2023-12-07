//select Conference Page for Authors and Reviewers
//make one button select for authors submit.
import {Link, useNavigate} from "react-router-dom"
export default function SelectConf() {
    const navigate = useNavigate();
    return (
        <div>
        <Link to={'..'} onClick={(e) => {       //true go back to previous page function.
          e.preventDefault();
          navigate(-1);
        }}>Go back</Link>
            <h1>Select a Conference.</h1>
            <table>
                <tr>
                <th>Conference Name</th>
                <th>Conference Location</th>
                <th>Conference Date</th>
                <th>Paper Deadline</th>
                <th>Papers in Conference</th>

                </tr>

                <tr>
                <td>Tedx Dearborn</td>
                <td>Dearborn MI, USA </td>
                <td>12/29/2023</td>
                <td>12/18/2023</td>
                <td>17</td>
                <button>Select Conference</button>
                </tr>

                
                <tr>
                <td>Coffee and Coders: Gen AI discussion</td>
                <td>Alamo, Texas USA </td>
                <td>02/28/2024</td>
                <td>01/23/2024</td>
                <td>6</td>
                <button>Select Conference</button>
                </tr>
                
            </table>

        </div>
    );
}