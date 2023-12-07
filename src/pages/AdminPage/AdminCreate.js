//creates a conference based on a CPC request.

//problems. adding multiple variables to concatenate for location. Need to define function for sending to sql.


//import { useNavigate } from "react-router-dom";
import {useState} from "react"

export default function CreateConference() {
    //declare variables and set function to send back to database for entry.
    //conference variables
    const [Cname, setCName] = useState("");
    const [Cdate, setCDate] = useState(new Date()); //declare date value to pass into sql
    const [deadline, setDeadline] = useState(new Date());
    //const [Clocation, setCLocation] = useState({
   //     city: "",
  //      state: "",
   //     country:""
   // }); //add variables below concatenated into here.

    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");

    const [email, setEmail] = useState("");     //Conference Program Chair Email. no checker for if email exists.
   // const [password, setPassword] = useState("");
    //const [username, setUsername] = useState("");

    const displayStuff = (e)=> {
        e.preventDefault(); //dont reload page.
      //  setCLocation(city=city, state=state,country=country);  //concatenate material.
        console.log(Cname, Cdate, deadline, email);
        alert("Conference has been made, email has been sent to the Conference Program Chair email.")
    }

    return (
        
        <div>
        <h1> Conference Submission Form. </h1>
        <form action=""> 
            <div className="Conference Name"> 
                <label htmlFor="Conference Name"/>
                <input
                value ={Cname}
                onChange={(e)=> setCName(e.target.value)}
                placeholder="Enter Conference Name:"
                />

            </div>
            
            <div className="Conference Date"> 
                <label htmlFor="Conference Date"/>
                <input
                type="date"
                value ={Cdate}
                onChange={(e)=> setCDate(e.target.value)}
                placeholder="Enter Conference Date:"
                />
            </div>
            <div className="Conference Deadline"> 
                <label htmlFor="Conference Deadline"/>
                <input
                type="date"
                value ={deadline}
                onChange={(e)=> setDeadline(e.target.value)}
                placeholder="Enter Conference Paper Deadline:"
                />
            </div>

            <div className="Conference Location"> 
                <label htmlFor="Conference Location"/>
                <input
                value ={city}
                onChange={(e)=> setCity(e.target.value)}
                placeholder="Enter City:"
                />
                <input
                value ={state}
                onChange={(e)=> setState(e.target.value)}
                placeholder="Enter State:"
                />
                <input
                value ={country}
                onChange={(e)=> setCountry(e.target.value)}
                placeholder="Enter Country:"
                />
            </div>
            
            <div className="Conference Chair"> 
                <label htmlFor="Conference Chair"/>
                <input
                value ={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Enter Conference Chair's Email:"
                />

            </div>

            <button onClick={displayStuff}>Submit Form </button>
        </form>
        </div>
    );
}