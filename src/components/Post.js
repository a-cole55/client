import { useState} from "react";
import Axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
// import "./Post.css";

export default function NewPost({ closeModal }){
    // const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    // const navigate = useNavigate();
  
    // let date = new Date()
    // let day = date.getDate();
    // let month = date.getMonth()+1;
    // let year = date.getFullYear();

    // let fullDate = `${month}.${day}.${year}`;

    const addPost = () => {
      Axios.post("http://localhost:4000/addPost", {
        name: name, 
        // title: title,
        description: description,
        // date: fullDate
      }).then(()=> {
        alert("Whoohoo! Success!")
      })
      .catch(() => {
        console.error()
      });
    };
    
    const clearInput = () => {
        // empty inputs
        // setTitle("");
        setName("");
        setDescription("")
    };

    return(
        <div className="modalBG">
        <div className="modalContainer">
            <div className="header">
                {/* <h2 className="title">Create Post</h2> */}
                <CloseIcon  className="CloseIcon" onClick={() => closeModal(false)}/>
            </div>
        <div className="addPost">
        {/* <input 
            type= "text" 
            placeholder="Title" 
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            /> */}
          <textarea className="description"
            type= "text" 
            placeholder="Write your text here" 
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            />
          <input 
            type= "text" 
            placeholder="Anon Name **Not Required**" 
            onChange={(event) => {
              setName(event.target.value);
            }}
            />
      </div>
      <button type="submit" onClick={async () => {
        addPost;
        await closeModal(false);
    //     addPost();
    //   closeModal(false);
    //   navigate("/");
      }}>Submit</button>
      <button type="button" onClick={clearInput}>Clear</button>
      </div>
      </div>
    )
}