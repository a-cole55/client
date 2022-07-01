// import { useState ,useEffect} from "react";
// import Axios from 'axios';

// export default function Card(){
//   const [description, setDescription] = useState("");
//   const [name, setName] = useState("");
//   const [listOfPosts, setListofPosts] = useState([])

//   const addPost = () => {
//     Axios.post("http://localhost:4000/addPost", {
//       name: name, 
//       description: description
//     }).then(()=> {
//       alert("Whoohoo! Success!")
//     })
//     .catch(() => {
//       console.error()
//     });
//   }

//     return (
//         <div className="card">
//         <h6>Date</h6>
//         <textarea className="description"
//           type= "text" 
//           placeholder="Write your text here" 
//           onChange={(event) => {
//             setDescription(event.target.value);
//           }}
//           />
//         <input 
//           type= "text" 
//           placeholder="anon name **Not Required**" 
//           onChange={(event) => {
//             setName(event.target.value);
//           }}
//           />
//         <button type="submit" onClick={addPost}>Submit</button>
//       </div>
//     )
// }