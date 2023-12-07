import {Link} from "react-router-dom"
export default function AuthorPapers() {
    return (
        <div> 
            <Link to="/author">Back to Authors</Link>
            <h1> My Author Papers</h1>
            <table>
                <tr>
                <th>Author</th>
                <th>Paper Name</th>
                <th>Conference</th>
                <th>File Type</th>
            
                <th>Reviewer 1 </th>
                <th>Reviewer 2 </th>
                <th>Reviewer 3</th>
                <th>Decision</th>
                </tr>

                <tr>
                <td>John doe</td>
                <td>To Catch a Wasp</td>
                <td>Tedx Dearborn</td>
                <td>pdf</td>
                <td>Deny</td>
                <td>Approve</td>
                <td>Pending</td>
                <td>Pending</td>
                </tr>
                <tr>
                <td>John doe</td>
                <td>To Catch a Deer</td>
                <td>Tedx Dearborn</td>
                <td>csv</td>
                <td>Deny</td>
                <td>Deny</td>
                <td>Deny</td>
                <td>Denied</td>
                </tr>
                <tr>
                <td>John doe</td>
                <td>To Catch a Coyote</td>
                <td>Tedx Dearborn</td>
                <td>docx</td>
                <td>Approve</td>
                <td>Approve</td>
                <td>Pending</td>
                <td>Approve</td>
                </tr>
                


            </table>
        </div>

    );

}